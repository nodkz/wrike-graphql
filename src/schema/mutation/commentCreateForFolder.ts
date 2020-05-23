import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from 'app/schema/types/Scalars';
import { commentCreateForFolder, CreateArgs } from 'app/vendor/comment/commentCreateForFolder';
import { CommentTC } from '../entities/CommentTC';
import { CommentInput } from '../types/inputs/CommentInput';

export default {
  type: CommentTC,
  args: {
    folderId: TaskID.NonNull,
    comment: CommentInput.NonNull,
  },
  resolve: (_, args) => {
    return commentCreateForFolder(args);
  },
} as FieldConfig<CreateArgs>;
