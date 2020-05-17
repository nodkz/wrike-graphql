import { findMany } from 'app/vendor/group/findMany';
import { GroupTC } from 'app/schema/entities/GroupTC';
import { FieldConfig } from 'app/schema/definitions';
import { KeyValueInput } from '../types/inputs/KeyValueInput';

export default {
  type: GroupTC.List,
  args: {
    filter: GroupTC.schemaComposer.createInputTC({
      name: 'GroupFindManyFilter',
      fields: {
        metadata: KeyValueInput,
      },
    }),
  },
  resolve: (_, { filter }, context, info) => {
    return findMany({ filter, info });
  },
} as FieldConfig;
