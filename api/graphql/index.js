const { prisma } = require('../generated/prisma-client');
const { ApolloServer, gql } = require('apollo-server');
const { hash, compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { permissions } = require('./permissions');
const { getUserId } = require('./utils');

const typeDefs = gql`
  scalar DateTime

  type Query {
    me: User!
  }

  type Mutation {
    signup(email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    createFile(content: String!, name: String!, repositoryId: ID!): File
    updateFile(fileId: ID!, content: String!): File
  }

  type User {
    id: ID!
    email: String!
    repositories: [ContentRepository!]!
    zeitLinked: Boolean!
    zeitToken: String
  }

  type ContentRepository {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    files: [File!]!
    author: User!
    name: String!
  }

  type File {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    published: Boolean!
    name: String!
    content: String!
    parent: String!
    children: [String!]!
    author: User!
    repository: ContentRepository!
    isDirectory: Boolean!
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
    me: async (root, args, context) => {
      const userId = getUserId(context);
      return context.prisma.user({ id: userId });
    },
  },
  Mutation: {
    createFile(root, args, context) {
      const userId = getUserId(context);
      return context.prisma.createFile({
        content: args.content,
        name: args.name,
        repository: {
          connect: { id: args.repositoryId },
        },
        author: {
          connect: { id: userId },
        },
      });
    },
    updateFile(root, args, context) {
      return context.prisma.updateFile({
        where: { id: args.fileId },
        data: { content: args.content },
      });
    },
    signup: async (parent, { email, password }, ctx, info) => {
      const hashedPassword = await hash(password, 10);
      const user = await ctx.prisma.createUser({
        email,
        password: hashedPassword,
      });
      const defaultRepo = await ctx.prisma.createContentRepository({
        author: {
          connect: {
            id: user.id,
          },
        },
      });
      const defaultFile = await ctx.prisma.createFile({
        name: 'hello-world.mdx',
        content: '# Welcome to MDXMCS!',
        author: {
          connect: {
            id: user.id,
          },
        },
        repository: {
          connect: {
            id: defaultRepo.id,
          },
        },
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
        token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
        user,
      };
    },
  },
  User: {
    repositories(root, args, context) {
      return context.prisma
        .user({
          id: root.id,
        })
        .repositories();
    },
  },
  ContentRepository: {
    author: ({ id }, args, context) => {
      return context.prisma.contentRepository({ id }).author();
    },
    files: ({ id }, args, context) => {
      return context.prisma.contentRepository({ id }).files();
    },
  },
  File: {
    author(root, args, context) {
      return context.prisma
        .file({
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
