import client from 'app/vendor/client';
import { FieldConfig } from 'app/schema/definitions';
import { schemaComposer } from 'graphql-compose';

export default {
  type: schemaComposer.createObjectTC({
    name: 'Color',
    fields: {
      name: 'String!',
      hex: 'String!',
    },
  }).List,
  resolve: async (_, __, context) => {
    const res = await client.get('/colors', context);
    return res?.data?.data;
  },
} as FieldConfig;
