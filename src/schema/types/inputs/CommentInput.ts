import { schemaComposer } from 'graphql-compose';

export const CommentInput = schemaComposer.createInputTC({
  name: 'CommentInput',
  fields: {
    text: {
      type: 'String!',
      description: 'Comment text, can not be empty',
    },
    plainText: {
      type: 'Boolean!',
      defaultValue: false,
      description: 'Treat comment text as plain text, HTML otherwise',
    },
  },
});
