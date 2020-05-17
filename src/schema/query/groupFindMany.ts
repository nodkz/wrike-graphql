import { findMany } from 'app/vendor/group/findMany';
import { GroupTC } from 'app/schema/entities/GroupTC';
import { FieldConfig } from 'app/schema/definitions';
import { KeyValueITC } from '../types/KeyValueITC';

export default {
  type: GroupTC.List,
  args: {
    filter: GroupTC.schemaComposer.createInputTC({
      name: 'GroupFindManyFilter',
      fields: {
        metadata: KeyValueITC,
      },
    }),
  },
  resolve: (_, { filter }, context, info) => {
    return findMany({ filter, info });
  },
} as FieldConfig;
