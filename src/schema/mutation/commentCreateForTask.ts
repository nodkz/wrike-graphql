import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from 'app/schema/types/Scalars';
import { commentCreateForTask, CreateArgs } from 'app/vendor/comment/commentCreateForTask';
import { CommentTC } from '../entities/CommentTC';
import { CommentInput } from '../types/inputs/CommentInput';

export default {
  type: CommentTC,
  args: {
    taskId: TaskID.NonNull,
    comment: CommentInput.NonNull,
  },
  resolve: (_, args) => {
    return commentCreateForTask(args);
  },
} as FieldConfig<CreateArgs>;
