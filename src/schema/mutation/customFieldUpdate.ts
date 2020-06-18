import { FieldConfig } from 'app/schema/definitions';
import { CustomFieldInput } from 'app/schema/types/inputs/CustomFieldInput';
import { CustomFieldTC } from 'app/schema/entities/CustomFieldTC';
import { CustomFieldID } from 'app/schema/types/Scalars';
import { customFieldUpdate, UpdateArgs } from 'app/vendor/customFields/customFieldUpdate';

export default {
  type: CustomFieldTC,
  args: {
    id: CustomFieldID,
    customField: CustomFieldInput.NonNull,
  },
  resolve: (_, args, context) => {
    return customFieldUpdate(args, context);
  },
} as FieldConfig<UpdateArgs>;
