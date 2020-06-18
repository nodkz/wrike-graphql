import { FieldConfig } from 'app/schema/definitions';
import { DataExportID } from 'app/schema/types/Scalars';
import { DataExportTC } from 'app/schema/entities/DataExportTC';
import { dataExportById, FindArgs } from 'app/vendor/dataExport/dataExportById';

export default {
  type: DataExportTC,
  description: 'Get Data Export last one or specified by id.',
  args: {
    id: DataExportID,
  },
  resolve: (_, args, context) => {
    return dataExportById(args, context);
  },
} as FieldConfig<FindArgs>;
