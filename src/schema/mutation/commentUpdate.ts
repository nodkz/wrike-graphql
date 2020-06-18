import { FieldConfig } from 'app/schema/definitions';
import { CommentID } from 'app/schema/types/Scalars';
import { commentUpdate, UpdateArgs } from 'app/vendor/comment/commentUpdate';
import { CommentInput } from 'app/schema/types/inputs/CommentInput';
import { CommentTC } from 'app/schema/entities/CommentTC';

export default {
  type: CommentTC,
  args: {
    id: CommentID.NonNull,
    comment: CommentInput.NonNull,
  },
  resolve: (_, args, context) => {
    return commentUpdate(args, context);
  },
} as FieldConfig<UpdateArgs>;
