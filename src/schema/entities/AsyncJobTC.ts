import { AsyncJobID } from 'app/schema/types/Scalars';
import { schemaComposer } from 'graphql-compose';
import { AsyncJobStatusEnum, AsyncJobTypeEnum } from 'app/schema/types/Enums';

export const AsyncJobTC = schemaComposer.createObjectTC({
  name: 'AsyncJob',
  fields: {
    id: AsyncJobID.NonNull,
    status: {
      type: AsyncJobStatusEnum.NonNull,
      description: 'Job status',
    },
    progressPercent: {
      type: 'Float',
      description: 'Progress percents',
    },
    totalCount: {
      type: 'Int',
      description: 'Total count',
    },
    processedCount: {
      type: 'Int',
      description: 'Processed count',
    },
    type: {
      type: AsyncJobTypeEnum.NonNull,
      description: 'Job type',
    },
    result: {
      type: 'JSON',
      description: 'Result',
    },
    errorMessage: {
      type: 'String',
      description: 'Error message',
    },
  },
});
