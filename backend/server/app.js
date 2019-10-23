import '@babel/polyfill';
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

const options = { port: dotEnv.PORT, formatError };

server.start(options, ({ port }) => console.log(`Server is running on ${port}`));
