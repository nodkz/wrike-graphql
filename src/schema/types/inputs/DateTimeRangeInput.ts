import { schemaComposer } from 'graphql-compose';

export const DateTimeRangeInput = schemaComposer.createInputTC(`
  input DateTimeRangeInput {
    """Range start. Format: yyyy-MM-dd'T'HH:mm:ss'Z'"""
    start: Date
    """Range end. Format: yyyy-MM-dd'T'HH:mm:ss'Z'"""
    end: Date
  }
`);
