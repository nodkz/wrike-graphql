import { DataExportID } from 'app/schema/types/Scalars';
import { DataExportStatusEnum } from '../types/Enums';
import { schemaComposer } from 'graphql-compose';

export const DataExportTC = schemaComposer.createObjectTC({
  name: 'DataExport',
  fields: {
    id: DataExportID.NonNull,
    completedDate: {
      type: 'Date',
      description: 'The date when data export was finished',
    },
    status: {
      type: DataExportStatusEnum.NonNull,
      description: 'Status',
    },
    resources: {
      type: schemaComposer.createObjectTC({
        name: 'DataExportResource',
        fields: {
          name: {
            type: 'String!',
            description: 'Name of exported resource',
          },
          url: {
            type: 'String!',
            description: 'Name of exported resource',
          },
        },
      }).NonNull.List,
      description: 'List of exported resources',
    },
  },
});

if (!process.env.DISABLE_RELATIONS) {
  DataExportTC.addFields({});
}
