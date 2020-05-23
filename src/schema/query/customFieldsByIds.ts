import { FieldConfig } from 'app/schema/definitions';
import { CustomFieldID } from 'app/schema/types/Scalars';
import { CustomFieldTC } from '../entities/CustomFieldTC';
import { customFieldFindByIds } from 'app/vendor/customfields/customFieldFindByIds';

export default {
  type: [CustomFieldTC],
  args: { ids: CustomFieldID.NonNull.List.NonNull },
  resolve: (_, args) => {
    return customFieldFindByIds({ ids: args.ids });
  },
} as FieldConfig<{ ids: string[] }>;
