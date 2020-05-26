import client from 'app/vendor/client';
import { FieldConfig } from '../definitions';
import { schemaComposer } from 'graphql-compose';

export default {
  type: schemaComposer.createObjectTC({
    name: 'Color',
    fields: {
      name: 'String!',
      hex: 'String!',
    },
  }).List,
  resolve: async () => {
    const res = await client.get('/colors');
    return res?.data?.data;
  },
} as FieldConfig;
