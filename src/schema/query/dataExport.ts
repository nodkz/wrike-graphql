import { FieldConfig } from 'app/schema/definitions';
import { DataExportID } from '../types/Scalars';
import { DataExportTC } from '../entities/DataExportTC';
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
