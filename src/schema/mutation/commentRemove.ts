import { FieldConfig } from 'app/schema/definitions';
import { CommentID } from 'app/schema/types/Scalars';
import { commentRemove, RemoveArgs } from 'app/vendor/comment/commentRemove';
import { CommentTC } from '../entities/CommentTC';

export default {
  type: CommentTC,
  args: {
    id: CommentID.NonNull,
  },
  resolve: (_, args) => {
    return commentRemove(args);
  },
} as FieldConfig<RemoveArgs>;
