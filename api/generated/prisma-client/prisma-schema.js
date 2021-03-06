module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.28.5). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateContentRepository {
  count: Int!
}

type AggregateDependency {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateZeitProject {
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
  author: User!
  name: String!
  dependencies(where: DependencyWhereInput, orderBy: DependencyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Dependency!]
  zeitProject: ZeitProject
}

type ContentRepositoryConnection {
  pageInfo: PageInfo!
  edges: [ContentRepositoryEdge]!
  aggregate: AggregateContentRepository!
}

input ContentRepositoryCreateInput {
  files: FileCreateManyWithoutRepositoryInput
  author: UserCreateOneWithoutRepositoriesInput!
  name: String
  dependencies: DependencyCreateManyInput
  zeitProject: ZeitProjectCreateOneWithoutRepositoryInput
}

input ContentRepositoryCreateManyWithoutAuthorInput {
  create: [ContentRepositoryCreateWithoutAuthorInput!]
  connect: [ContentRepositoryWhereUniqueInput!]
}

input ContentRepositoryCreateOneWithoutFilesInput {
  create: ContentRepositoryCreateWithoutFilesInput
  connect: ContentRepositoryWhereUniqueInput
}

input ContentRepositoryCreateOneWithoutZeitProjectInput {
  create: ContentRepositoryCreateWithoutZeitProjectInput
  connect: ContentRepositoryWhereUniqueInput
}

input ContentRepositoryCreateWithoutAuthorInput {
  files: FileCreateManyWithoutRepositoryInput
  name: String
  dependencies: DependencyCreateManyInput
  zeitProject: ZeitProjectCreateOneWithoutRepositoryInput
}

input ContentRepositoryCreateWithoutFilesInput {
  author: UserCreateOneWithoutRepositoriesInput!
  name: String
  dependencies: DependencyCreateManyInput
  zeitProject: ZeitProjectCreateOneWithoutRepositoryInput
}

input ContentRepositoryCreateWithoutZeitProjectInput {
  files: FileCreateManyWithoutRepositoryInput
  author: UserCreateOneWithoutRepositoriesInput!
  name: String
  dependencies: DependencyCreateManyInput
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
  name_ASC
  name_DESC
}

type ContentRepositoryPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
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

input ContentRepositoryUpdateInput {
  files: FileUpdateManyWithoutRepositoryInput
  author: UserUpdateOneRequiredWithoutRepositoriesInput
  name: String
  dependencies: DependencyUpdateManyInput
  zeitProject: ZeitProjectUpdateOneWithoutRepositoryInput
}

input ContentRepositoryUpdateManyDataInput {
  name: String
}

input ContentRepositoryUpdateManyMutationInput {
  name: String
}

input ContentRepositoryUpdateManyWithoutAuthorInput {
  create: [ContentRepositoryCreateWithoutAuthorInput!]
  delete: [ContentRepositoryWhereUniqueInput!]
  connect: [ContentRepositoryWhereUniqueInput!]
  set: [ContentRepositoryWhereUniqueInput!]
  disconnect: [ContentRepositoryWhereUniqueInput!]
  update: [ContentRepositoryUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [ContentRepositoryUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [ContentRepositoryScalarWhereInput!]
  updateMany: [ContentRepositoryUpdateManyWithWhereNestedInput!]
}

input ContentRepositoryUpdateManyWithWhereNestedInput {
  where: ContentRepositoryScalarWhereInput!
  data: ContentRepositoryUpdateManyDataInput!
}

input ContentRepositoryUpdateOneRequiredWithoutFilesInput {
  create: ContentRepositoryCreateWithoutFilesInput
  update: ContentRepositoryUpdateWithoutFilesDataInput
  upsert: ContentRepositoryUpsertWithoutFilesInput
  connect: ContentRepositoryWhereUniqueInput
}

input ContentRepositoryUpdateOneRequiredWithoutZeitProjectInput {
  create: ContentRepositoryCreateWithoutZeitProjectInput
  update: ContentRepositoryUpdateWithoutZeitProjectDataInput
  upsert: ContentRepositoryUpsertWithoutZeitProjectInput
  connect: ContentRepositoryWhereUniqueInput
}

input ContentRepositoryUpdateWithoutAuthorDataInput {
  files: FileUpdateManyWithoutRepositoryInput
  name: String
  dependencies: DependencyUpdateManyInput
  zeitProject: ZeitProjectUpdateOneWithoutRepositoryInput
}

input ContentRepositoryUpdateWithoutFilesDataInput {
  author: UserUpdateOneRequiredWithoutRepositoriesInput
  name: String
  dependencies: DependencyUpdateManyInput
  zeitProject: ZeitProjectUpdateOneWithoutRepositoryInput
}

input ContentRepositoryUpdateWithoutZeitProjectDataInput {
  files: FileUpdateManyWithoutRepositoryInput
  author: UserUpdateOneRequiredWithoutRepositoriesInput
  name: String
  dependencies: DependencyUpdateManyInput
}

input ContentRepositoryUpdateWithWhereUniqueWithoutAuthorInput {
  where: ContentRepositoryWhereUniqueInput!
  data: ContentRepositoryUpdateWithoutAuthorDataInput!
}

input ContentRepositoryUpsertWithoutFilesInput {
  update: ContentRepositoryUpdateWithoutFilesDataInput!
  create: ContentRepositoryCreateWithoutFilesInput!
}

input ContentRepositoryUpsertWithoutZeitProjectInput {
  update: ContentRepositoryUpdateWithoutZeitProjectDataInput!
  create: ContentRepositoryCreateWithoutZeitProjectInput!
}

input ContentRepositoryUpsertWithWhereUniqueWithoutAuthorInput {
  where: ContentRepositoryWhereUniqueInput!
  update: ContentRepositoryUpdateWithoutAuthorDataInput!
  create: ContentRepositoryCreateWithoutAuthorInput!
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
  author: UserWhereInput
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
  dependencies_every: DependencyWhereInput
  dependencies_some: DependencyWhereInput
  dependencies_none: DependencyWhereInput
  zeitProject: ZeitProjectWhereInput
  AND: [ContentRepositoryWhereInput!]
  OR: [ContentRepositoryWhereInput!]
  NOT: [ContentRepositoryWhereInput!]
}

input ContentRepositoryWhereUniqueInput {
  id: ID
}

scalar DateTime

type Dependency {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  verison: String!
}

type DependencyConnection {
  pageInfo: PageInfo!
  edges: [DependencyEdge]!
  aggregate: AggregateDependency!
}

input DependencyCreateInput {
  name: String!
  verison: String!
}

input DependencyCreateManyInput {
  create: [DependencyCreateInput!]
  connect: [DependencyWhereUniqueInput!]
}

type DependencyEdge {
  node: Dependency!
  cursor: String!
}

enum DependencyOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  verison_ASC
  verison_DESC
}

type DependencyPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  verison: String!
}

input DependencyScalarWhereInput {
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
  verison: String
  verison_not: String
  verison_in: [String!]
  verison_not_in: [String!]
  verison_lt: String
  verison_lte: String
  verison_gt: String
  verison_gte: String
  verison_contains: String
  verison_not_contains: String
  verison_starts_with: String
  verison_not_starts_with: String
  verison_ends_with: String
  verison_not_ends_with: String
  AND: [DependencyScalarWhereInput!]
  OR: [DependencyScalarWhereInput!]
  NOT: [DependencyScalarWhereInput!]
}

type DependencySubscriptionPayload {
  mutation: MutationType!
  node: Dependency
  updatedFields: [String!]
  previousValues: DependencyPreviousValues
}

input DependencySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DependencyWhereInput
  AND: [DependencySubscriptionWhereInput!]
  OR: [DependencySubscriptionWhereInput!]
  NOT: [DependencySubscriptionWhereInput!]
}

input DependencyUpdateDataInput {
  name: String
  verison: String
}

input DependencyUpdateInput {
  name: String
  verison: String
}

input DependencyUpdateManyDataInput {
  name: String
  verison: String
}

input DependencyUpdateManyInput {
  create: [DependencyCreateInput!]
  update: [DependencyUpdateWithWhereUniqueNestedInput!]
  upsert: [DependencyUpsertWithWhereUniqueNestedInput!]
  delete: [DependencyWhereUniqueInput!]
  connect: [DependencyWhereUniqueInput!]
  set: [DependencyWhereUniqueInput!]
  disconnect: [DependencyWhereUniqueInput!]
  deleteMany: [DependencyScalarWhereInput!]
  updateMany: [DependencyUpdateManyWithWhereNestedInput!]
}

input DependencyUpdateManyMutationInput {
  name: String
  verison: String
}

input DependencyUpdateManyWithWhereNestedInput {
  where: DependencyScalarWhereInput!
  data: DependencyUpdateManyDataInput!
}

input DependencyUpdateWithWhereUniqueNestedInput {
  where: DependencyWhereUniqueInput!
  data: DependencyUpdateDataInput!
}

input DependencyUpsertWithWhereUniqueNestedInput {
  where: DependencyWhereUniqueInput!
  update: DependencyUpdateDataInput!
  create: DependencyCreateInput!
}

input DependencyWhereInput {
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
  verison: String
  verison_not: String
  verison_in: [String!]
  verison_not_in: [String!]
  verison_lt: String
  verison_lte: String
  verison_gt: String
  verison_gte: String
  verison_contains: String
  verison_not_contains: String
  verison_starts_with: String
  verison_not_starts_with: String
  verison_ends_with: String
  verison_not_ends_with: String
  AND: [DependencyWhereInput!]
  OR: [DependencyWhereInput!]
  NOT: [DependencyWhereInput!]
}

input DependencyWhereUniqueInput {
  id: ID
}

type File {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  published: Boolean!
  name: String!
  content: String!
  previousContent: String
  parent: String
  children: [String!]!
  repository: ContentRepository!
  author: User!
  isDirectory: Boolean!
}

type FileConnection {
  pageInfo: PageInfo!
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreatechildrenInput {
  set: [String!]
}

input FileCreateInput {
  published: Boolean
  name: String!
  content: String!
  previousContent: String
  parent: String
  children: FileCreatechildrenInput
  repository: ContentRepositoryCreateOneWithoutFilesInput!
  author: UserCreateOneInput!
  isDirectory: Boolean
}

input FileCreateManyWithoutRepositoryInput {
  create: [FileCreateWithoutRepositoryInput!]
  connect: [FileWhereUniqueInput!]
}

input FileCreateWithoutRepositoryInput {
  published: Boolean
  name: String!
  content: String!
  previousContent: String
  parent: String
  children: FileCreatechildrenInput
  author: UserCreateOneInput!
  isDirectory: Boolean
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
  previousContent_ASC
  previousContent_DESC
  parent_ASC
  parent_DESC
  isDirectory_ASC
  isDirectory_DESC
}

type FilePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  published: Boolean!
  name: String!
  content: String!
  previousContent: String
  parent: String
  children: [String!]!
  isDirectory: Boolean!
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
  previousContent: String
  previousContent_not: String
  previousContent_in: [String!]
  previousContent_not_in: [String!]
  previousContent_lt: String
  previousContent_lte: String
  previousContent_gt: String
  previousContent_gte: String
  previousContent_contains: String
  previousContent_not_contains: String
  previousContent_starts_with: String
  previousContent_not_starts_with: String
  previousContent_ends_with: String
  previousContent_not_ends_with: String
  parent: String
  parent_not: String
  parent_in: [String!]
  parent_not_in: [String!]
  parent_lt: String
  parent_lte: String
  parent_gt: String
  parent_gte: String
  parent_contains: String
  parent_not_contains: String
  parent_starts_with: String
  parent_not_starts_with: String
  parent_ends_with: String
  parent_not_ends_with: String
  isDirectory: Boolean
  isDirectory_not: Boolean
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
  set: [String!]
}

input FileUpdateInput {
  published: Boolean
  name: String
  content: String
  previousContent: String
  parent: String
  children: FileUpdatechildrenInput
  repository: ContentRepositoryUpdateOneRequiredWithoutFilesInput
  author: UserUpdateOneRequiredInput
  isDirectory: Boolean
}

input FileUpdateManyDataInput {
  published: Boolean
  name: String
  content: String
  previousContent: String
  parent: String
  children: FileUpdatechildrenInput
  isDirectory: Boolean
}

input FileUpdateManyMutationInput {
  published: Boolean
  name: String
  content: String
  previousContent: String
  parent: String
  children: FileUpdatechildrenInput
  isDirectory: Boolean
}

input FileUpdateManyWithoutRepositoryInput {
  create: [FileCreateWithoutRepositoryInput!]
  delete: [FileWhereUniqueInput!]
  connect: [FileWhereUniqueInput!]
  set: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  update: [FileUpdateWithWhereUniqueWithoutRepositoryInput!]
  upsert: [FileUpsertWithWhereUniqueWithoutRepositoryInput!]
  deleteMany: [FileScalarWhereInput!]
  updateMany: [FileUpdateManyWithWhereNestedInput!]
}

input FileUpdateManyWithWhereNestedInput {
  where: FileScalarWhereInput!
  data: FileUpdateManyDataInput!
}

input FileUpdateWithoutRepositoryDataInput {
  published: Boolean
  name: String
  content: String
  previousContent: String
  parent: String
  children: FileUpdatechildrenInput
  author: UserUpdateOneRequiredInput
  isDirectory: Boolean
}

input FileUpdateWithWhereUniqueWithoutRepositoryInput {
  where: FileWhereUniqueInput!
  data: FileUpdateWithoutRepositoryDataInput!
}

input FileUpsertWithWhereUniqueWithoutRepositoryInput {
  where: FileWhereUniqueInput!
  update: FileUpdateWithoutRepositoryDataInput!
  create: FileCreateWithoutRepositoryInput!
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
  previousContent: String
  previousContent_not: String
  previousContent_in: [String!]
  previousContent_not_in: [String!]
  previousContent_lt: String
  previousContent_lte: String
  previousContent_gt: String
  previousContent_gte: String
  previousContent_contains: String
  previousContent_not_contains: String
  previousContent_starts_with: String
  previousContent_not_starts_with: String
  previousContent_ends_with: String
  previousContent_not_ends_with: String
  parent: String
  parent_not: String
  parent_in: [String!]
  parent_not_in: [String!]
  parent_lt: String
  parent_lte: String
  parent_gt: String
  parent_gte: String
  parent_contains: String
  parent_not_contains: String
  parent_starts_with: String
  parent_not_starts_with: String
  parent_ends_with: String
  parent_not_ends_with: String
  repository: ContentRepositoryWhereInput
  author: UserWhereInput
  isDirectory: Boolean
  isDirectory_not: Boolean
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
  updateManyContentRepositories(data: ContentRepositoryUpdateManyMutationInput!, where: ContentRepositoryWhereInput): BatchPayload!
  upsertContentRepository(where: ContentRepositoryWhereUniqueInput!, create: ContentRepositoryCreateInput!, update: ContentRepositoryUpdateInput!): ContentRepository!
  deleteContentRepository(where: ContentRepositoryWhereUniqueInput!): ContentRepository
  deleteManyContentRepositories(where: ContentRepositoryWhereInput): BatchPayload!
  createDependency(data: DependencyCreateInput!): Dependency!
  updateDependency(data: DependencyUpdateInput!, where: DependencyWhereUniqueInput!): Dependency
  updateManyDependencies(data: DependencyUpdateManyMutationInput!, where: DependencyWhereInput): BatchPayload!
  upsertDependency(where: DependencyWhereUniqueInput!, create: DependencyCreateInput!, update: DependencyUpdateInput!): Dependency!
  deleteDependency(where: DependencyWhereUniqueInput!): Dependency
  deleteManyDependencies(where: DependencyWhereInput): BatchPayload!
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
  createZeitProject(data: ZeitProjectCreateInput!): ZeitProject!
  updateZeitProject(data: ZeitProjectUpdateInput!, where: ZeitProjectWhereUniqueInput!): ZeitProject
  updateManyZeitProjects(data: ZeitProjectUpdateManyMutationInput!, where: ZeitProjectWhereInput): BatchPayload!
  upsertZeitProject(where: ZeitProjectWhereUniqueInput!, create: ZeitProjectCreateInput!, update: ZeitProjectUpdateInput!): ZeitProject!
  deleteZeitProject(where: ZeitProjectWhereUniqueInput!): ZeitProject
  deleteManyZeitProjects(where: ZeitProjectWhereInput): BatchPayload!
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
  dependency(where: DependencyWhereUniqueInput!): Dependency
  dependencies(where: DependencyWhereInput, orderBy: DependencyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Dependency]!
  dependenciesConnection(where: DependencyWhereInput, orderBy: DependencyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DependencyConnection!
  file(where: FileWhereUniqueInput!): File
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  zeitProject(where: ZeitProjectWhereUniqueInput!): ZeitProject
  zeitProjects(where: ZeitProjectWhereInput, orderBy: ZeitProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ZeitProject]!
  zeitProjectsConnection(where: ZeitProjectWhereInput, orderBy: ZeitProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ZeitProjectConnection!
  node(id: ID!): Node
}

type Subscription {
  contentRepository(where: ContentRepositorySubscriptionWhereInput): ContentRepositorySubscriptionPayload
  dependency(where: DependencySubscriptionWhereInput): DependencySubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  zeitProject(where: ZeitProjectSubscriptionWhereInput): ZeitProjectSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  zeitToken: String
  repositories(where: ContentRepositoryWhereInput, orderBy: ContentRepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ContentRepository!]
  apiToken: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  zeitToken: String
  repositories: ContentRepositoryCreateManyWithoutAuthorInput
  apiToken: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRepositoriesInput {
  create: UserCreateWithoutRepositoriesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutRepositoriesInput {
  email: String!
  zeitToken: String
  apiToken: String!
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
  zeitToken_ASC
  zeitToken_DESC
  apiToken_ASC
  apiToken_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  zeitToken: String
  apiToken: String!
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
  zeitToken: String
  repositories: ContentRepositoryUpdateManyWithoutAuthorInput
  apiToken: String
}

input UserUpdateInput {
  email: String
  zeitToken: String
  repositories: ContentRepositoryUpdateManyWithoutAuthorInput
  apiToken: String
}

input UserUpdateManyMutationInput {
  email: String
  zeitToken: String
  apiToken: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutRepositoriesInput {
  create: UserCreateWithoutRepositoriesInput
  update: UserUpdateWithoutRepositoriesDataInput
  upsert: UserUpsertWithoutRepositoriesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutRepositoriesDataInput {
  email: String
  zeitToken: String
  apiToken: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutRepositoriesInput {
  update: UserUpdateWithoutRepositoriesDataInput!
  create: UserCreateWithoutRepositoriesInput!
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
  zeitToken: String
  zeitToken_not: String
  zeitToken_in: [String!]
  zeitToken_not_in: [String!]
  zeitToken_lt: String
  zeitToken_lte: String
  zeitToken_gt: String
  zeitToken_gte: String
  zeitToken_contains: String
  zeitToken_not_contains: String
  zeitToken_starts_with: String
  zeitToken_not_starts_with: String
  zeitToken_ends_with: String
  zeitToken_not_ends_with: String
  repositories_every: ContentRepositoryWhereInput
  repositories_some: ContentRepositoryWhereInput
  repositories_none: ContentRepositoryWhereInput
  apiToken: String
  apiToken_not: String
  apiToken_in: [String!]
  apiToken_not_in: [String!]
  apiToken_lt: String
  apiToken_lte: String
  apiToken_gt: String
  apiToken_gte: String
  apiToken_contains: String
  apiToken_not_contains: String
  apiToken_starts_with: String
  apiToken_not_starts_with: String
  apiToken_ends_with: String
  apiToken_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  apiToken: String
}

type ZeitProject {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  projectId: String!
  repository: ContentRepository!
}

type ZeitProjectConnection {
  pageInfo: PageInfo!
  edges: [ZeitProjectEdge]!
  aggregate: AggregateZeitProject!
}

input ZeitProjectCreateInput {
  name: String!
  projectId: String!
  repository: ContentRepositoryCreateOneWithoutZeitProjectInput!
}

input ZeitProjectCreateOneWithoutRepositoryInput {
  create: ZeitProjectCreateWithoutRepositoryInput
  connect: ZeitProjectWhereUniqueInput
}

input ZeitProjectCreateWithoutRepositoryInput {
  name: String!
  projectId: String!
}

type ZeitProjectEdge {
  node: ZeitProject!
  cursor: String!
}

enum ZeitProjectOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  projectId_ASC
  projectId_DESC
}

type ZeitProjectPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  projectId: String!
}

type ZeitProjectSubscriptionPayload {
  mutation: MutationType!
  node: ZeitProject
  updatedFields: [String!]
  previousValues: ZeitProjectPreviousValues
}

input ZeitProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ZeitProjectWhereInput
  AND: [ZeitProjectSubscriptionWhereInput!]
  OR: [ZeitProjectSubscriptionWhereInput!]
  NOT: [ZeitProjectSubscriptionWhereInput!]
}

input ZeitProjectUpdateInput {
  name: String
  projectId: String
  repository: ContentRepositoryUpdateOneRequiredWithoutZeitProjectInput
}

input ZeitProjectUpdateManyMutationInput {
  name: String
  projectId: String
}

input ZeitProjectUpdateOneWithoutRepositoryInput {
  create: ZeitProjectCreateWithoutRepositoryInput
  update: ZeitProjectUpdateWithoutRepositoryDataInput
  upsert: ZeitProjectUpsertWithoutRepositoryInput
  delete: Boolean
  disconnect: Boolean
  connect: ZeitProjectWhereUniqueInput
}

input ZeitProjectUpdateWithoutRepositoryDataInput {
  name: String
  projectId: String
}

input ZeitProjectUpsertWithoutRepositoryInput {
  update: ZeitProjectUpdateWithoutRepositoryDataInput!
  create: ZeitProjectCreateWithoutRepositoryInput!
}

input ZeitProjectWhereInput {
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
  projectId: String
  projectId_not: String
  projectId_in: [String!]
  projectId_not_in: [String!]
  projectId_lt: String
  projectId_lte: String
  projectId_gt: String
  projectId_gte: String
  projectId_contains: String
  projectId_not_contains: String
  projectId_starts_with: String
  projectId_not_starts_with: String
  projectId_ends_with: String
  projectId_not_ends_with: String
  repository: ContentRepositoryWhereInput
  AND: [ZeitProjectWhereInput!]
  OR: [ZeitProjectWhereInput!]
  NOT: [ZeitProjectWhereInput!]
}

input ZeitProjectWhereUniqueInput {
  id: ID
  projectId: String
}
`
      }
    