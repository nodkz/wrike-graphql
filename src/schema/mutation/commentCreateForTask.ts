import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from 'app/schema/types/Scalars';
import { commentCreateForTask, CreateArgs } from 'app/vendor/comment/commentCreateForTask';
import { CommentTC } from 'app/schema/entities/CommentTC';
import { CommentInput } from 'app/schema/types/inputs/CommentInput';

export default {
  type: CommentTC,
  args: {
    taskId: TaskID.NonNull,
    comment: CommentInput.NonNull,
  },
  resolve: (_, args, context) => {
    return commentCreateForTask(args, context);
  },
} as FieldConfig<CreateArgs>;
