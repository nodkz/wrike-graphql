import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { WorkScheduleExclusionTC } from '../entities/WorkScheduleExclusionTC';
import { workScheduleExclusionFindMany } from 'app/vendor/workScheduleExclusion/workScheduleExclusionFindMany';

export function getRelationWorkScheduleExclusionByWorkScheduleId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => WorkScheduleExclusionTC.NonNull.List,
    resolve: (source) => {
      return workScheduleExclusionFindMany({
        workScheduleId: source[sourceFieldName],
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}
