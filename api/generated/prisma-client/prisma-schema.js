module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.28.5). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateContentRepository {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type ContentRepository {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
}

type ContentRepositoryConnection {
  pageInfo: PageInfo!
  edges: [ContentRepositoryEdge]!
  aggregate: AggregateContentRepository!
}

input ContentRepositoryCreateInput {
  files: FileCreateManyInput
}

input ContentRepositoryCreateManyInput {
  create: [ContentRepositoryCreateInput!]
  connect: [ContentRepositoryWhereUniqueInput!]
}

type ContentRepositoryEdge {
  node: ContentRepository!
  cursor: String!
}

enum ContentRepositoryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ContentRepositoryPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ContentRepositoryScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ContentRepositoryScalarWhereInput!]
  OR: [ContentRepositoryScalarWhereInput!]
  NOT: [ContentRepositoryScalarWhereInput!]
}

type ContentRepositorySubscriptionPayload {
  mutation: MutationType!
  node: ContentRepository
  updatedFields: [String!]
  previousValues: ContentRepositoryPreviousValues
}

input ContentRepositorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ContentRepositoryWhereInput
  AND: [ContentRepositorySubscriptionWhereInput!]
  OR: [ContentRepositorySubscriptionWhereInput!]
  NOT: [ContentRepositorySubscriptionWhereInput!]
}

input ContentRepositoryUpdateDataInput {
  files: FileUpdateManyInput
}

input ContentRepositoryUpdateInput {
  files: FileUpdateManyInput
}

input ContentRepositoryUpdateManyInput {
  create: [ContentRepositoryCreateInput!]
  update: [ContentRepositoryUpdateWithWhereUniqueNestedInput!]
  upsert: [ContentRepositoryUpsertWithWhereUniqueNestedInput!]
  delete: [ContentRepositoryWhereUniqueInput!]
  connect: [ContentRepositoryWhereUniqueInput!]
  set: [ContentRepositoryWhereUniqueInput!]
  disconnect: [ContentRepositoryWhereUniqueInput!]
  deleteMany: [ContentRepositoryScalarWhereInput!]
}

input ContentRepositoryUpdateWithWhereUniqueNestedInput {
  where: ContentRepositoryWhereUniqueInput!
  data: ContentRepositoryUpdateDataInput!
}

input ContentRepositoryUpsertWithWhereUniqueNestedInput {
  where: ContentRepositoryWhereUniqueInput!
  update: ContentRepositoryUpdateDataInput!
  create: ContentRepositoryCreateInput!
}

input ContentRepositoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  files_every: FileWhereInput
  files_some: FileWhereInput
  files_none: FileWhereInput
  AND: [ContentRepositoryWhereInput!]
  OR: [ContentRepositoryWhereInput!]
  NOT: [ContentRepositoryWhereInput!]
}

input ContentRepositoryWhereUniqueInput {
  id: ID
}

scalar DateTime

type File {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  published: Boolean!
  name: String!
  content: String!
  parent: ID!
  children: [ID!]!
  author: User!
}

type FileConnection {
  pageInfo: PageInfo!
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreatechildrenInput {
  set: [ID!]
}

input FileCreateInput {
  published: Boolean
  name: String!
  content: String!
  parent: ID!
  children: FileCreatechildrenInput
  author: UserCreateOneInput!
}

input FileCreateManyInput {
  create: [FileCreateInput!]
  connect: [FileWhereUniqueInput!]
}

type FileEdge {
  node: File!
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  published_ASC
  published_DESC
  name_ASC
  name_DESC
  content_ASC
  content_DESC
  parent_ASC
  parent_DESC
}

type FilePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  published: Boolean!
  name: String!
  content: String!
  parent: ID!
  children: [ID!]!
}

input FileScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  published: Boolean
  published_not: Boolean
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  parent: ID
  parent_not: ID
  parent_in: [ID!]
  parent_not_in: [ID!]
  parent_lt: ID
  parent_lte: ID
  parent_gt: ID
  parent_gte: ID
  parent_contains: ID
  parent_not_contains: ID
  parent_starts_with: ID
  parent_not_starts_with: ID
  parent_ends_with: ID
  parent_not_ends_with: ID
  AND: [FileScalarWhereInput!]
  OR: [FileScalarWhereInput!]
  NOT: [FileScalarWhereInput!]
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FileWhereInput
  AND: [FileSubscriptionWhereInput!]
  OR: [FileSubscriptionWhereInput!]
  NOT: [FileSubscriptionWhereInput!]
}

input FileUpdatechildrenInput {
  set: [ID!]
}

input FileUpdateDataInput {
  published: Boolean
  name: String
  content: String
  parent: ID
  children: FileUpdatechildrenInput
  author: UserUpdateOneRequiredInput
}

input FileUpdateInput {
  published: Boolean
  name: String
  content: String
  parent: ID
  children: FileUpdatechildrenInput
  author: UserUpdateOneRequiredInput
}

input FileUpdateManyDataInput {
  published: Boolean
  name: String
  content: String
  parent: ID
  children: FileUpdatechildrenInput
}

input FileUpdateManyInput {
  create: [FileCreateInput!]
  update: [FileUpdateWithWhereUniqueNestedInput!]
  upsert: [FileUpsertWithWhereUniqueNestedInput!]
  delete: [FileWhereUniqueInput!]
  connect: [FileWhereUniqueInput!]
  set: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  deleteMany: [FileScalarWhereInput!]
  updateMany: [FileUpdateManyWithWhereNestedInput!]
}

input FileUpdateManyMutationInput {
  published: Boolean
  name: String
  content: String
  parent: ID
  children: FileUpdatechildrenInput
}

input FileUpdateManyWithWhereNestedInput {
  where: FileScalarWhereInput!
  data: FileUpdateManyDataInput!
}

input FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput!
  data: FileUpdateDataInput!
}

input FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput!
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  published: Boolean
  published_not: Boolean
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  parent: ID
  parent_not: ID
  parent_in: [ID!]
  parent_not_in: [ID!]
  parent_lt: ID
  parent_lte: ID
  parent_gt: ID
  parent_gte: ID
  parent_contains: ID
  parent_not_contains: ID
  parent_starts_with: ID
  parent_not_starts_with: ID
  parent_ends_with: ID
  parent_not_ends_with: ID
  author: UserWhereInput
  AND: [FileWhereInput!]
  OR: [FileWhereInput!]
  NOT: [FileWhereInput!]
}

input FileWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createContentRepository(data: ContentRepositoryCreateInput!): ContentRepository!
  updateContentRepository(data: ContentRepositoryUpdateInput!, where: ContentRepositoryWhereUniqueInput!): ContentRepository
  upsertContentRepository(where: ContentRepositoryWhereUniqueInput!, create: ContentRepositoryCreateInput!, update: ContentRepositoryUpdateInput!): ContentRepository!
  deleteContentRepository(where: ContentRepositoryWhereUniqueInput!): ContentRepository
  deleteManyContentRepositories(where: ContentRepositoryWhereInput): BatchPayload!
  createFile(data: FileCreateInput!): File!
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  deleteFile(where: FileWhereUniqueInput!): File
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  contentRepository(where: ContentRepositoryWhereUniqueInput!): ContentRepository
  contentRepositories(where: ContentRepositoryWhereInput, orderBy: ContentRepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ContentRepository]!
  contentRepositoriesConnection(where: ContentRepositoryWhereInput, orderBy: ContentRepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContentRepositoryConnection!
  file(where: FileWhereUniqueInput!): File
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  contentRepository(where: ContentRepositorySubscriptionWhereInput): ContentRepositorySubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  repositories(where: ContentRepositoryWhereInput, orderBy: ContentRepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ContentRepository!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  repositories: ContentRepositoryCreateManyInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  password: String
  repositories: ContentRepositoryUpdateManyInput
}

input UserUpdateInput {
  email: String
  password: String
  repositories: ContentRepositoryUpdateManyInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  repositories_every: ContentRepositoryWhereInput
  repositories_some: ContentRepositoryWhereInput
  repositories_none: ContentRepositoryWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    