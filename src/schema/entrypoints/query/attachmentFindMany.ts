import { FieldConfig } from 'app/schema/definitions';
import { DateTimeRangeInput } from 'app/schema/types/inputs/DateTimeRangeInput';
import { TaskID, FolderID } from 'app/schema/types/Scalars';
import { attachmentFindMany, FindManyOpts } from 'app/vendor/attachment/attachmentFindMany';
import { AttachmentTC } from 'app/schema/entities/AttachmentTC';

export default {
  type: AttachmentTC.NonNull.List,
  args: {
    versions: {
      type: 'Boolean',
      description: 'Get attachments with previous versions',
    },
    filter: AttachmentTC.schemaComposer.createInputTC({
      name: 'AttachmentFindManyFilter',
      fields: {
        folderId: FolderID,
        taskId: TaskID,
        createdDate: DateTimeRangeInput,
      },
    }),
  },
  resolve: (_, args, context, info) => {
    return attachmentFindMany(
      {
        filter: args.filter,
        versions: args.versions,
        info,
      },
      context
    );
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 100,
  },
} as FieldConfig<FindManyOpts>;
