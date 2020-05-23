import { FieldConfig } from 'app/schema/definitions';
import { CustomFieldTC } from '../entities/CustomFieldTC';
import { customFieldFindMany } from 'app/vendor/customfields/customFieldFindMany';

export default {
  type: [CustomFieldTC],
  resolve: () => {
    return customFieldFindMany();
  },
} as FieldConfig<{ ids: string[] }>;
