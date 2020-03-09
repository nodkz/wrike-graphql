require('module-alias').addAlias('app', __dirname);

import { ApolloServer } from 'apollo-server';
import schema from 'app/schema';

const server = new ApolloServer({
  schema,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
