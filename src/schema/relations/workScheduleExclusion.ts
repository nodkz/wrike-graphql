import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { WorkScheduleExclusionTC } from 'app/schema/entities/WorkScheduleExclusionTC';
import { workScheduleExclusionFindMany } from 'app/vendor/workScheduleExclusion/workScheduleExclusionFindMany';

export function getRelationWorkScheduleExclusionByWorkScheduleId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => WorkScheduleExclusionTC.NonNull.List,
    resolve: (source, _, context) => {
      return workScheduleExclusionFindMany(
        {
          workScheduleId: source[sourceFieldName],
        },
        context
      );
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 10,
    },
  };
}
