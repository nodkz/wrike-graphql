import { groupFindMany } from 'app/vendor/group/groupFindMany';
import { GroupTC } from 'app/schema/entities/GroupTC';
import { FieldConfig } from 'app/schema/definitions';
import { KeyValueInput } from '../types/inputs/KeyValueInput';

export default {
  type: GroupTC.NonNull.List,
  args: {
    filter: GroupTC.schemaComposer.createInputTC({
      name: 'GroupFindManyFilter',
      fields: {
        metadata: KeyValueInput,
      },
    }),
  },
  resolve: (_, { filter }, context, info) => {
    return groupFindMany({ filter, info });
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 100,
  },
} as FieldConfig;
