import { FieldConfig } from 'app/schema/definitions';
import { CustomFieldInput } from '../types/inputs/CustomFieldInput';
import { customFieldCreate, CreateArgs } from 'app/vendor/customFields/customFieldCreate';
import { CustomFieldTC } from '../entities/CustomFieldTC';

export const CustomFieldCreateInput = CustomFieldInput.clone(
  'CustomFieldCreateInput'
).makeRequired(['title', 'type']);

export default {
  type: CustomFieldTC,
  args: {
    customField: CustomFieldCreateInput.NonNull,
  },
  resolve: (_, args, context) => {
    return customFieldCreate(args, context);
  },
} as FieldConfig<CreateArgs>;
