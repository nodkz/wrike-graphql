import { FieldConfig } from 'app/schema/definitions';
import { CommentID } from 'app/schema/types/Scalars';
import { commentFindByIds, FindByIdsArgs } from 'app/vendor/comment/commentFindByIds';
import { CommentTC } from '../entities/CommentTC';

export default {
  type: CommentTC.NonNull.List,
  args: {
    ids: CommentID.NonNull.List.NonNull,
    plainText: 'Boolean',
  },
  resolve: (_, args) => {
    return commentFindByIds(args);
  },
} as FieldConfig<FindByIdsArgs>;
