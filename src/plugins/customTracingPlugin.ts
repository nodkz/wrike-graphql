// Read apollo-server docs
//   https://www.apollographql.com/docs/apollo-server/integrations/plugins/
// Read graphql-query-complexity docs
//   https://github.com/slicknode/graphql-query-complexity

import type { ApolloServerPlugin } from 'apollo-server-plugin-base';

export function customTracingPlugin(): ApolloServerPlugin {
  return {
    requestDidStart: ({ context }) => {
      const hrstart = process.hrtime();
      const tracing = {
        version: 1,
        startTime: new Date().toISOString(),
      } as any;
      return {
        willSendResponse({ response }) {
          response.extensions = response.extensions || {};

          // VERSION 2
          // apollo-tracing
          // see https://github.com/apollographql/apollo-tracing
          tracing.endTime = new Date().toISOString();
          tracing.duration = durationHrTimeToNanos(process.hrtime(hrstart));
          const resolvers = context?.vendorRequests?.map((d) => ({
            path: [d.url],
            parentType: 'Query',
            fieldName: d.url,
            returnType: 'String',
            startOffset: durationDiff(d.hrstart, hrstart),
            duration: durationHrTimeToNanos(d.hrduration),
          }));
          tracing.execution = { resolvers };
          response.extensions.tracing = tracing;
        },
      };
    },
  } as ApolloServerPlugin;
}

type HighResolutionTime = [number, number];

function durationDiff(hrend: HighResolutionTime, hrstart: HighResolutionTime) {
  const hrtime = [hrend[0] - hrstart[0], hrend[1] - hrstart[1]] as HighResolutionTime;
  return durationHrTimeToNanos(hrtime);
}

function durationHrTimeToNanos(hrtime: HighResolutionTime) {
  return hrtime[0] * 1e9 + hrtime[1];
}
