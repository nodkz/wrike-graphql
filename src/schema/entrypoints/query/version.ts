import client from 'app/vendor/client';
import { FieldConfig } from 'app/schema/definitions';
import { schemaComposer } from 'graphql-compose';

export default {
  type: schemaComposer.createObjectTC({
    name: 'Version',
    fields: {
      major: 'Int!',
      minor: 'Int!',
      full: {
        type: 'String',
        resolve: (s) => `${s.major}.${s.minor}`,
      },
    },
  }),
  resolve: async (_, __, context) => {
    const res = await client.get('/version', context);
    return res?.data?.data?.[0];
  },
} as FieldConfig;
