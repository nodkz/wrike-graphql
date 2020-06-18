import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { DateTimeRangeInput } from 'app/schema/types/inputs/DateTimeRangeInput';
import { CommentTC } from 'app/schema/entities/CommentTC';
import { commentFindMany, FindManyOpts } from 'app/vendor/comment/commentFindMany';
import { TaskID, FolderID } from 'app/schema/types/Scalars';

export default {
  type: CommentTC.NonNull.List,
  args: {
    limit: {
      type: 'Int',
      description: 'Maximum number of returned comments',
    },
    plainText: {
      type: 'Boolean!',
      defaultValue: false,
      description: 'Get comment text as plain text, HTML otherwise',
    },
    filter: TaskTC.schemaComposer.createInputTC({
      name: 'CommentFindManyFilter',
      fields: {
        folderId: FolderID,
        taskId: TaskID,
        updatedDate: DateTimeRangeInput,
      },
    }),
  },
  resolve: (_, args, context) => {
    return commentFindMany(
      {
        filter: args.filter,
        limit: args.limit,
        plainText: args.plainText,
      },
      context
    );
  },
  extensions: {
    complexity: ({ args, childComplexity }) => childComplexity * (args.limit || 100),
  },
} as FieldConfig<FindManyOpts>;
