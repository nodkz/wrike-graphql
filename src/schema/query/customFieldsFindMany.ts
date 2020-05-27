import { FieldConfig } from 'app/schema/definitions';
import { CustomFieldTC } from '../entities/CustomFieldTC';
import { customFieldFindMany } from 'app/vendor/customFields/customFieldFindMany';

export default {
  type: CustomFieldTC.NonNull.List,
  resolve: () => {
    return customFieldFindMany();
  },
} as FieldConfig<{ ids: string[] }>;