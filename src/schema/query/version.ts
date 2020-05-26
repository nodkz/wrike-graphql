import client from 'app/vendor/client';
import { FieldConfig } from '../definitions';
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
  resolve: async () => {
    const res = await client.get('/version');
    return res?.data?.data?.[0];
  },
} as FieldConfig;
