import { FieldConfig } from 'app/schema/definitions';
import { CommentID } from 'app/schema/types/Scalars';
import { commentUpdate, UpdateArgs } from 'app/vendor/comment/commentUpdate';
import { CommentInput } from '../types/inputs/CommentInput';
import { CommentTC } from '../entities/CommentTC';

export default {
  type: CommentTC,
  args: {
    id: CommentID.NonNull,
    comment: CommentInput.NonNull,
  },
  resolve: (_, args) => {
    return commentUpdate(args);
  },
} as FieldConfig<UpdateArgs>;
