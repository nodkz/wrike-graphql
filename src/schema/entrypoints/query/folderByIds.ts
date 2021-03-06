import { FieldConfig } from 'app/schema/definitions';
import { FolderID } from 'app/schema/types/Scalars';
import { folderFindByIds } from 'app/vendor/folder/folderFindByIds';
import { FolderTC } from 'app/schema/entities/FolderTC';

export default {
  type: FolderTC.NonNull.List,
  args: {
    ids: FolderID.NonNull.List.NonNull,
  },
  resolve: (_, args, context, info) => {
    return folderFindByIds({ ids: args.ids, info }, context);
  },
  extensions: {
    complexity: ({ args, childComplexity }) => childComplexity * (args.ids.length || 100),
  },
} as FieldConfig<{ ids: string[] }>;
