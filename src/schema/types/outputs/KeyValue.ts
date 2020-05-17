import { schemaComposer } from 'graphql-compose';

export const KeyValue = schemaComposer.createObjectTC({
  name: 'KeyValue',
  fields: {
    key: {
      type: 'String!',
      description:
        'Key should be less than 50 symbols and match following regular expression ([A-Za-z0-9_-]+)',
    },
    value: {
      type: 'String',
      description:
        "Value should be less than 1000 symbols, compatible with JSON string. Use JSON 'null' in order to remove metadata entry",
    },
  },
});
