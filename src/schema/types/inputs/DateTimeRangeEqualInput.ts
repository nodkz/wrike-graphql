import { schemaComposer } from 'graphql-compose';

export const DateTimeRangeEqualInput = schemaComposer.createInputTC(`
  input DateTimeRangeEqualInput {
    """Range start. Format: yyyy-MM-dd'T'HH:mm:ss'Z'"""
    start: Date
    """Range end. Format: yyyy-MM-dd'T'HH:mm:ss'Z'"""
    end: Date
    """Date exact match value. Format: yyyy-MM-dd'T'HH:mm:ss'Z'"""
    equal: Date
  }
`);
