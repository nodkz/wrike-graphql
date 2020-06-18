import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from 'app/schema/types/Scalars';
import { commentCreateForFolder, CreateArgs } from 'app/vendor/comment/commentCreateForFolder';
import { CommentTC } from 'app/schema/entities/CommentTC';
import { CommentInput } from 'app/schema/types/inputs/CommentInput';

export default {
  type: CommentTC,
  args: {
    folderId: TaskID.NonNull,
    comment: CommentInput.NonNull,
  },
  resolve: (_, args, context) => {
    return commentCreateForFolder(args, context);
  },
} as FieldConfig<CreateArgs>;
