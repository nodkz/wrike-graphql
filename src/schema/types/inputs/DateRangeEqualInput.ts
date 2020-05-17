import { schemaComposer } from 'graphql-compose';

export const DateRangeEqualInput = schemaComposer.createInputTC(`
  input DateRangeEqualInput {
    """Range start. Format: yyyy-MM-dd"""
    start: String
    """Range end. Format: yyyy-MM-dd"""
    end: String
    """Date exact match value. Format: yyyy-MM-dd"""
    equal: String
  }
`);
