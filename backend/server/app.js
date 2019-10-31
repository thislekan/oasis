import '@babel/polyfill';
import express from 'express';
import path from 'path';
import { GraphQLServer } from 'graphql-yoga';
import { formatError } from 'apollo-errors';

import dotEnv from '../config/config';
import { prisma } from '../generated/prisma-client/index';
import resolvers from './resolver';

const server = new GraphQLServer({
  typeDefs: './server/schema.graphql',
  resolvers,
  context: (request) => ({ ...request, prisma }),
});

const options = {
  port: dotEnv.PORT,
  formatError,
  playground: dotEnv.PLAYGROUND,
  endpoint: '/graphql',
  cors: { origin: true },
};
server.express.use('/', express.static(path.join(__dirname, '../public')));
server.express.use(
  '/static',
  express.static(path.join(__dirname, '../public/static'))
);

server.start(options, ({ port }) =>
  console.log(`Server is running on ${port}`)
);
