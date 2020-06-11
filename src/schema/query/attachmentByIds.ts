import { FieldConfig } from 'app/schema/definitions';
import { AttachmentID } from 'app/schema/types/Scalars';
import { AttachmentTC } from '../entities/AttachmentTC';
import { attachmentFindByIds, FindByIdsArgs } from 'app/vendor/attachment/attachmentFindByIds';

export default {
  type: AttachmentTC.NonNull.List,
  args: {
    ids: AttachmentID.NonNull.List.NonNull,
    versions: {
      type: 'Boolean',
      description: 'Get attachments with previous versions',
    },
  },
  resolve: (_, args, context) => {
    return attachmentFindByIds(args, context);
  },
  extensions: {
    complexity: ({ args, childComplexity }) => childComplexity * (args.ids.length || 100),
  },
} as FieldConfig<FindByIdsArgs>;
