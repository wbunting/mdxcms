"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "ContentRepository",
    embedded: false
  },
  {
    name: "ZeitProject",
    embedded: false
  },
  {
    name: "Dependency",
    embedded: false
  },
  {
    name: "File",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/will-bunting-3ac39d/mdxcms/dev`
});
exports.prisma = new exports.Prisma();
