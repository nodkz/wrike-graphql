import { FieldConfig } from 'app/schema/definitions';
import { dataExportSchema, Args } from 'app/vendor/dataExport/dataExportSchema';
import { schemaComposer } from 'graphql-compose';

const DataExportSchema = schemaComposer.createObjectTC({
  name: 'DataExportSchema',
  fields: {
    id: {
      type: 'String!',
      description: 'Table id',
    },
    alias: {
      type: 'String!',
      description: 'Table alias',
    },
    columns: {
      type: schemaComposer.createObjectTC({
        name: 'DataExportSchemaColumn',
        fields: {
          id: 'String',
          alias: 'String',
          dataType: 'String',
          foreignKey: 'JSON',
        },
      }),
      description: 'List of exported columns',
    },
  },
});

export default {
  type: DataExportSchema,
  description:
    'Documentation for Data Export schema and tables can be found [here](https://developers.wrike.com/export-data).',
  args: {
    version: `enum DataSchemaVersion { V0 V1 }`,
  },
  resolve: (_, args) => {
    return dataExportSchema(args);
  },
} as FieldConfig<Args>;
