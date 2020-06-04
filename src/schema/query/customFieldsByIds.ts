import { FieldConfig } from 'app/schema/definitions';
import { CustomFieldID } from 'app/schema/types/Scalars';
import { CustomFieldTC } from '../entities/CustomFieldTC';
import { customFieldFindByIds } from 'app/vendor/customFields/customFieldFindByIds';

export default {
  type: CustomFieldTC.NonNull.List,
  args: {
    ids: CustomFieldID.NonNull.List.NonNull,
  },
  resolve: (_, args) => {
    return customFieldFindByIds({ ids: args.ids });
  },
  extensions: {
    complexity: ({ args, childComplexity }) => childComplexity * (args.ids.length || 100),
  },
} as FieldConfig<{ ids: string[] }>;
