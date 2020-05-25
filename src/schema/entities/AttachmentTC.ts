import {
  FolderID,
  ContactID,
  TaskID,
  AttachmentID,
  CommentID,
  ReviewID,
} from 'app/schema/types/Scalars';
import { schemaComposer } from 'graphql-compose';
import { AttachmentTypeEnum } from '../types/Enums';
import { attachmentAccessUrl } from 'app/vendor/attachment/attachmentAccessUrl';

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
      resolve: async (source) => {
        if (source?.url) return source?.url;
        return attachmentAccessUrl(source.id);
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
