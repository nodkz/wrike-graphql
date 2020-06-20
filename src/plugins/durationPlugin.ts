// Read apollo-server docs
//   https://www.apollographql.com/docs/apollo-server/integrations/plugins/
// Read graphql-query-complexity docs
//   https://github.com/slicknode/graphql-query-complexity

import type { ApolloServerPlugin } from 'apollo-server-plugin-base';

export function durationPlugin(): ApolloServerPlugin {
  return {
    requestDidStart: ({ context }) => {
      const hrstart = process.hrtime();
      return {
        willSendResponse({ response }) {
          response.extensions = response.extensions || {};

          const hrend = process.hrtime(hrstart);
          response.extensions.duration = hrend[0] + Math.round(hrend[1] / 1000000) / 1000;

          response.extensions.vendorRequestsNum = context?.vendorRequests?.length;
          response.extensions.vendorRequests = context?.vendorRequests?.map(
            (d) => `${d.duration} ${d.status} ${d.size} ${d.url}`
          );
        },
      };
    },
  } as ApolloServerPlugin;
}
