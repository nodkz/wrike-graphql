import { findMany } from 'app/vendor/folder/findMany';
import { FolderTC } from 'app/schema/entities/FolderTC';
import { FieldConfig } from 'app/schema/definitions';
import { KeyValueInput } from '../types/inputs/KeyValueInput';
import { DateTimeRangeInput } from '../types/inputs/DateTimeRangeInput';
import { ContractTypeEnum } from '../types/Enums';
import { CustomFieldInput } from '../types/inputs/CustomFieldInput';

const FolderFilterInput = FolderTC.schemaComposer.createInputTC({
  name: 'FolderFindManyFilter',
  description:
    'Note: when any of query filter parameters are present (e.g. descendants=false, metadata) response is switched to Folder model.',
  fields: {
    permalink: {
      type: 'String',
      description: 'Folder permalink, exact match',
    },
    descendants: {
      type: 'Boolean',
      defaultValue: true,
      description: 'Adds all descendant folders to search scope',
    },
    metadata: {
      type: KeyValueInput,
      description: 'Folders metadata filter',
    },
    customField: {
      type: CustomFieldInput,
      description: 'Custom field filter',
    },
    updatedDate: {
      type: DateTimeRangeInput,
      description: 'Updated date filter',
    },
    project: {
      type: 'Boolean',
      description: 'Get only projects (true) / only folders (false)',
    },
    deleted: {
      type: 'Boolean',
      description: 'Get folders from Root (false) / Recycle Bin (true)',
    },
    contractTypes: {
      type: ContractTypeEnum,
      description: 'Contract type filter (Wrike Resource only)',
    },
  },
});

export default {
  type: FolderTC.List,
  args: {
    filter: FolderFilterInput,
  },
  resolve: (_, { filter }, context, info) => {
    return findMany({ filter, info });
  },
} as FieldConfig;
