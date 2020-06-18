import { FieldConfig } from 'app/schema/definitions';
import { DataExportTC } from 'app/schema/entities/DataExportTC';
import { dataExportRefresh } from 'app/vendor/dataExport/dataExportRefresh';

export default {
  type: DataExportTC,
  description:
    'Forces new data export generation (if it is not in progress already). 202 code is returned in case new export generation is started. Data export can be requested no sooner than 1 hour after last successful data export. If there is fresh data export already, 200 code and latest export in format similar to [GET] /data_export is returned.',
  resolve: (_, __, context) => {
    return dataExportRefresh({}, context);
  },
} as FieldConfig;
