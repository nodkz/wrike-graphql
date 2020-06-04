import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { WorkScheduleExclusionTC } from '../entities/WorkScheduleExclusionTC';
import { userScheduleExclusionFindMany } from 'app/vendor/userScheduleExclusion/userScheduleExclusionFindMany';
import { DateRangeEqualInput } from '../types/inputs/DateRangeEqualInput';

const WorkScheduleExclusionFilterByRelation = WorkScheduleExclusionTC.schemaComposer.createInputTC({
  name: 'WorkScheduleExclusionFilterByRelation',
  fields: {
    dateRange: {
      type: DateRangeEqualInput,
      description: 'Query exceptions for given date range',
    },
  },
});

export function getRelationUserScheduleExclusionByUserId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => WorkScheduleExclusionTC.NonNull.List,
    args: {
      filter: WorkScheduleExclusionFilterByRelation,
    },
    resolve: (source, args) => {
      return userScheduleExclusionFindMany({
        filter: {
          ...args.filter,
          userIds: [source[sourceFieldName]],
        },
      });
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 10,
    },
  };
}
