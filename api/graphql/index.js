const { prisma } = require('../generated/prisma-client');
const { ApolloServer, gql } = require('apollo-server');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { permissions } = require('./permissions');
const { getUserId } = require('./utils');

const typeDefs = gql`
  scalar DateTime

  type Query {
    me: User!
    publishedPosts: [Post!]!
    post(postId: ID!): Post
    postsByUser(userId: ID!): [Post!]!
  }

  type Mutation {
    signup(email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    createDraft(title: String!, userId: ID!): Post
    publish(postId: ID!): Post
  }

  type User {
    id: ID!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    published: Boolean!
    mdx: String!
    author: User!
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`;

class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}

const resolvers = {
  Query: {
    publishedPosts(root, args, context) {
      return context.prisma.posts({ where: { published: true } });
    },
    post(root, args, context) {
      return context.prisma.post({ id: args.postId });
    },
    postsByUser(root, args, context) {
      return context.prisma
        .user({
          id: args.userId,
        })
        .posts();
    },
    me: async (root, args, context) => {
      const userId = getUserId(context);
      return context.prisma.user({ id: userId });
    },
  },
  Mutation: {
    createDraft(root, args, context) {
      return context.prisma.createPost({
        title: args.title,
        author: {
          connect: { id: args.userId },
        },
      });
    },
    publish(root, args, context) {
      return context.prisma.updatePost({
        where: { id: args.postId },
        data: { published: true },
      });
    },
    signup: async (parent, { email, password }, ctx, info) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await ctx.prisma.createUser({
        email,
        password: hashedPassword,
      });

      return {
        token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
        user,
      };
    },
    login: async (parent, { email, password }, context) => {
      const user = await context.prisma.user({ email });
      if (!user) {
        throw new Error(`No user found for email: ${email}`);
      }
      const passwordValid = await compare(password, user.password);
      if (!passwordValid) {
        throw new Error('Invalid password');
      }
      return {
        token: sign({ userId: user.id }, process.env.JWT_SECRET),
        user,
      };
    },
  },
  User: {
    posts(root, args, context) {
      return context.prisma
        .user({
          id: root.id,
        })
        .posts();
    },
  },
  Post: {
    author(root, args, context) {
      return context.prisma
        .post({
          id: root.id,
        })
        .author();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  middlewares: [permissions],
  context: ({ req }) => {
    return {
      request: req,
      prisma,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
