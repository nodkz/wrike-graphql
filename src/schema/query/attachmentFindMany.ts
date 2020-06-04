import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { DateTimeRangeInput } from '../types/inputs/DateTimeRangeInput';
import { TaskID, FolderID } from '../types/Scalars';
import { attachmentFindMany, FindManyOpts } from 'app/vendor/attachment/attachmentFindMany';
import { AttachmentTC } from '../entities/AttachmentTC';

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
    return attachmentFindMany({
      filter: args.filter,
      versions: args.versions,
      info,
    });
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 100,
  },
} as FieldConfig<FindManyOpts>;
