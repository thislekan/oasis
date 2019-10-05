"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Admin",
    embedded: false
  },
  {
    name: "Lecturer",
    embedded: false
  },
  {
    name: "Student",
    embedded: false
  },
  {
    name: "Course",
    embedded: false
  },
  {
    name: "Faculty",
    embedded: false
  },
  {
    name: "Department",
    embedded: false
  },
  {
    name: "Session",
    embedded: false
  },
  {
    name: "CourseHistory",
    embedded: false
  },
  {
    name: "Result",
    embedded: false
  },
  {
    name: "UserRole",
    embedded: false
  },
  {
    name: "Semester",
    embedded: false
  },
  {
    name: "Grade",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:5000`
});
exports.prisma = new exports.Prisma();
