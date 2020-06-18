import { CustomFieldID, ContactID } from 'app/schema/types/Scalars';
import { schemaComposer } from 'graphql-compose';
import { KeyValueInput } from './KeyValueInput';
import { CustomFieldValueInput } from './CustomFieldValueInput';
import { ProjectDetailsInput } from './ProjectDetailsInput';

export const FolderInput = schemaComposer.createInputTC({
  name: 'FolderInput',
  fields: {
    title: 'String!',
    description: 'String',
    shareds: {
      type: ContactID.NonNull.List,
      description: 'Users to share folder with. Folder is always shared with creator',
    },
    metadata: {
      type: KeyValueInput.NonNull.List,
      description: 'Metadata to be added to newly created folder',
    },
    customFields: {
      type: CustomFieldValueInput.NonNull.List,
      description: 'List of custom fields to be set upon task creation',
    },
    customColumns: {
      type: CustomFieldID.NonNull.List,
      description: 'List of custom fields associated with folder',
    },
    project: {
      type: ProjectDetailsInput,
      description: 'Project settings in order to create project',
    },
  },
});
