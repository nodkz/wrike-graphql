/* eslint-disable @typescript-eslint/no-var-requires */
require('module-alias').addAlias('app', __dirname);
require('dotenv').config();

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { schema } from 'app/schema/entrypoints';
import { queryCostPlugin } from './plugins/queryCostPlugin';
import { durationPlugin } from './plugins/durationPlugin';
import { customTracingPlugin } from './plugins/customTracingPlugin';

const PORT = parseInt(process.env.PORT || '3000');
const app = express();

app.use('/voyager', voyagerMiddleware({ endpointUrl: '/' }));

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => {
    const ctx = {} as Record<string, any>;
    if (req?.headers?.authorization) {
      ctx.headers = { ...ctx.headers, authorization: req?.headers?.authorization };
    }
    if (req?.headers?.cookie) {
      ctx.headers = { ...ctx.headers, cookie: req?.headers?.cookie };
    }
    ctx.vendorRequests = [];
    return ctx;
  },
  // tracing: true,
  plugins: [
    process.env.DISABLE_QUERY_COST
      ? null
      : queryCostPlugin({
          schema,
          maxComplexity: process.env.MAX_QUERY_COMPLEXITY || 100000,
        }),
    process.env.DISABLE_TRACING ? null : durationPlugin(),
    process.env.DISABLE_TRACING ? null : customTracingPlugin(),
  ].filter(Boolean) as any,
});

app.use(
  apolloServer.getMiddleware({
    path: '/',
    disableHealthCheck: true,
    cors: {
      credentials: true,
      origin: (origin: string | undefined, callback: any) => callback(null, true),
    },
  })
);

app.listen(PORT, () => {
  console.log(`🚀 Server ready! Pid: ${process.pid}
  Working links:
    http://localhost:${PORT}
    http://localhost:${PORT}/voyager
  `);
});
