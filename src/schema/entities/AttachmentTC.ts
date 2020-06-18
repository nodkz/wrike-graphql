import {
  FolderID,
  ContactID,
  TaskID,
  AttachmentID,
  CommentID,
  ReviewID,
} from 'app/schema/types/Scalars';
import { schemaComposer } from 'graphql-compose';
import { AttachmentTypeEnum } from 'app/schema/types/Enums';
import { attachmentAccessUrl } from 'app/vendor/attachment/attachmentAccessUrl';
import { getRelationContactId } from 'app/schema/relations/contact';
import { getRelationTaskId } from 'app/schema/relations/task';
import { getRelationFolderId } from 'app/schema/relations/folder';
import { getRelationCommentId } from 'app/schema/relations/comment';

export const AttachmentTC = schemaComposer.createObjectTC({
  name: 'Attachment',
  fields: {
    id: AttachmentID.NonNull,
    authorId: {
      type: ContactID.NonNull,
      description: 'ID of user who uploaded the attachment',
    },
    name: {
      type: 'String!',
      description: 'Attachment filename',
    },
    createdDate: {
      type: 'Date!',
      description: 'Created date',
    },
    version: {
      type: 'Int!',
      description: 'Attachment version',
    },
    type: {
      type: AttachmentTypeEnum.NonNull,
      description: 'Attachment version',
    },
    contentType: {
      type: 'String!',
      description: 'Content type',
    },
    size: {
      type: 'Int!',
      description: 'Size for Wrike Attachments. For external attachments, size is equal to -1',
    },
    taskId: {
      type: TaskID,
      description: 'ID of related task. Only one of taskId/folderId fields is present',
    },
    folderId: {
      type: FolderID,
      description: 'ID of related folder. Only one of taskId/folderId fields is present',
    },
    commentId: {
      type: CommentID,
      description: 'ID of related comment',
    },
    currentAttachmentId: {
      type: AttachmentID,
      description: 'ID of current attachment version',
    },
    previewUrl: {
      type: 'String',
      description: 'Link to download external attachment preview (present if preview is available)',
    },
    url: {
      type: 'String',
      description: 'Link to download attachment',
      resolve: async (source, _, context) => {
        if (source?.url) return source?.url;
        return attachmentAccessUrl(source.id, context);
      },
    },
    reviewIds: {
      type: ReviewID.NonNull.List,
      description: 'Review IDs',
    },
    width: {
      type: 'Int',
      description: 'Attachment width, if image',
    },
    height: {
      type: 'Int',
      description: 'Attachment height, if image',
    },
  },
});

if (!process.env.DISABLE_RELATIONS) {
  AttachmentTC.addFields({
    author: () => getRelationContactId('authorId'),
    task: () => getRelationTaskId('taskId'),
    folder: () => getRelationFolderId('folderId'),
    comment: () => getRelationCommentId('commentId'),
    // it's strange but Wrike does not provide endpoint for:
    //    reviewIds
  });
}
