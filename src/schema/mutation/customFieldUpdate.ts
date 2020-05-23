import { FieldConfig } from 'app/schema/definitions';
import { CustomFieldInput } from '../types/inputs/CustomFieldInput';
import { CustomFieldTC } from '../entities/CustomFieldTC';
import { CustomFieldID } from '../types/Scalars';
import { customFieldUpdate, UpdateArgs } from 'app/vendor/customfields/customFieldUpdate';

export default {
  type: CustomFieldTC,
  args: {
    id: CustomFieldID,
    customField: CustomFieldInput.NonNull,
  },
  resolve: (_, args) => {
    return customFieldUpdate(args);
  },
} as FieldConfig<UpdateArgs>;
