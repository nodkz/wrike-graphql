import { FolderID, CommentID, ContactID, TaskID } from 'app/schema/types/Scalars';
import { schemaComposer } from 'graphql-compose';
import { getRelationContactId } from '../resolvers/contact';
import { getRelationTaskId } from '../resolvers/task';
import { getRelationFolderId } from '../resolvers/folder';

export const CommentTC = schemaComposer.createObjectTC({
  name: 'Comment',
  fields: {
    id: CommentID.NonNull,
    authorId: {
      type: ContactID.NonNull,
      description: 'Author ID',
    },
    text: {
      type: 'String!',
      description: 'Comment text',
    },
    createdDate: {
      type: 'Date!',
      description: 'Created date',
    },
    taskId: {
      type: TaskID,
      description: 'Task ID',
    },
    folderId: {
      type: FolderID,
      description: 'Folder ID',
    },
  },
});

if (!process.env.DISABLE_RELATIONS) {
  CommentTC.addFields({
    author: getRelationContactId('authorId'),
    task: getRelationTaskId('taskId'),
    folder: getRelationFolderId('folderId'),
  });
}
