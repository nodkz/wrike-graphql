import { schemaComposer } from 'graphql-compose';
import { ContactID } from 'app/schema/types/Scalars';
import { CustomFieldTypeEnum } from 'app/schema/types/Enums';
import { CustomFieldSettingsInput } from './CustomFieldSettingsInput';

export const CustomFieldInput = schemaComposer.createInputTC({
  name: 'CustomFieldInput',
  fields: {
    title: {
      type: 'String!',
      description: 'Custom field title',
    },
    type: {
      type: CustomFieldTypeEnum,
      description: 'Custom field type',
    },
    sharedIds: {
      type: ContactID.NonNull.List,
      description: 'List of user IDs, who share the custom field',
    },
    settings: {
      type: CustomFieldSettingsInput,
      description: 'Custom field settings',
    },
  },
});
