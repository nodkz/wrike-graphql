import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { WorkScheduleExclusionTC } from '../entities/WorkScheduleExclusionTC';
import { userScheduleExclusionFindMany } from 'app/vendor/userScheduleExclusion/userScheduleExclusionFindMany';

export function getRelationUserScheduleExclusionByUserId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => WorkScheduleExclusionTC.NonNull.List,
    resolve: (source) => {
      return userScheduleExclusionFindMany({
        filter: {
          userIds: [source[sourceFieldName]],
        },
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}
