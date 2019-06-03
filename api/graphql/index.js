const { prisma } = require('../generated/prisma-client');
const { ApolloServer, gql } = require('apollo-server');

const { permissions } = require('./permissions');
const { getUserId } = require('./utils');

const typeDefs = gql`
  scalar DateTime

  type Query {
    me: User!
  }

  type Mutation {
    createFile(content: String!, name: String!, repositoryId: ID!): File
    updateFile(fileId: ID!, content: String!, repositoryName: String!): File
    renameFile(fileId: ID!, newName: String!): File
    createRepo(projectId: ID!, name: String!): ContentRepository
  }

  type User {
    id: ID!
    email: String!
    repositories: [ContentRepository!]!
    zeitLinked: Boolean!
    zeitToken: String
    apiToken: String!
  }

  type ContentRepository {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    files: [File!]!
    author: User!
    name: String!
    zeitProject: ZeitProject
  }

  type ZeitProject {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    projectId: String!
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
    createRepo: async (roots, args, context) => {
      const userId = getUserId(context);
      const repo = await context.prisma.createContentRepository({
        author: {
          connect: {
            id: userId,
          },
        },
        name: args.name,
      });
      await context.prisma.createZeitProject({
        name: args.name,
        projectId: args.projectId,
        repository: {
          connect: { id: repo.id },
        },
      });
      await context.prisma.createFile({
        name: 'hello-world.mdx',
        content: '# Welcome to MDXMCS!',
        author: {
          connect: {
            id: userId,
          },
        },
        repository: {
          connect: {
            id: repo.id,
          },
        },
      });

      return repo;
    },
    updateFile: async (root, args, context) => {
      const userId = getUserId(context);
      const currentFile = await context.prisma.file({ id: args.fileId });
      const file = await context.prisma.updateFile({
        where: { id: args.fileId },
        data: { content: args.content, previousContent: currentFile.content },
      });

      return file;
    },
    renameFile: async (root, args, context) => {
      const userId = getUserId(context);
      const file = await context.prisma.updateFile({
        where: { id: args.fileId },
        data: { name: args.newName },
      });
      return file;
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
    zeitProject: ({ id }, args, context) => {
      return context.prisma.contentRepository({ id }).zeitProject();
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
