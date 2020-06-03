import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { ApprovalTC } from '../entities/ApprovalTC';
import { approvalFindMany } from 'app/vendor/approval/approvalFindMany';
import { approvalForTask } from 'app/vendor/approval/approvalForTask';
import { approvalForFolder } from 'app/vendor/approval/approvalForFolder';
import { DateTimeRangeInput } from '../types/inputs/DateTimeRangeInput';
import { ContactID } from '../types/Scalars';
import { ApprovalFinalStatusEnum } from '../types/Enums';

export function getRelationApprovalsByFolderId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => ApprovalTC.NonNull.List,
    resolve: (source) => {
      return approvalForFolder({
        folderId: source[sourceFieldName],
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}

export function getRelationApprovalsByTaskId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => ApprovalTC.NonNull.List,
    resolve: (source) => {
      return approvalForTask({
        taskId: source[sourceFieldName],
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}

const ApprovalFilterByRelationApproverId = ApprovalTC.schemaComposer.createInputTC({
  name: 'ApprovalFilterByRelationApproverId',
  fields: {
    statuses: {
      type: ApprovalFinalStatusEnum,
      description: 'Get approvals for specified statuses',
    },
    updatedDate: {
      type: DateTimeRangeInput,
      description: 'Last updated date filter, exact match or range',
    },
    pendingApprovers: {
      type: ContactID.NonNull.List,
      description: 'Pending approvers filter, match of any',
    },
  },
});

export function getRelationApprovalsByApproverUserId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => ApprovalTC.NonNull.List,
    args: {
      filter: ApprovalFilterByRelationApproverId,
      limit: {
        type: 'Int',
        description: 'Limit on number of returned approvals',
      },
      pageSize: {
        type: 'Int',
        description: 'Page size',
      },
      nextPageToken: {
        type: 'String',
        description: 'Next page token, overrides any other parameters in request',
      },
    },
    resolve: (source, args) => {
      return approvalFindMany({
        filter: {
          ...args.filter,
          approvers: [source[sourceFieldName]],
        },
        limit: args.limit,
        pageSize: args.pageSize,
        nextPageToken: args.nextPageToken,
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}

const ApprovalFilterByRelationPendingApproverId = ApprovalTC.schemaComposer.createInputTC({
  name: 'ApprovalFilterByRelationPendingApproverId',
  fields: {
    statuses: {
      type: ApprovalFinalStatusEnum,
      description: 'Get approvals for specified statuses',
    },
    updatedDate: {
      type: DateTimeRangeInput,
      description: 'Last updated date filter, exact match or range',
    },
    approvers: {
      type: ContactID.NonNull.List,
      description: 'Approvers filter, match of any',
    },
  },
});

export function getRelationApprovalsByPendingApproverUserId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => ApprovalTC.NonNull.List,
    args: {
      filter: ApprovalFilterByRelationPendingApproverId,
      limit: {
        type: 'Int',
        description: 'Limit on number of returned approvals',
      },
      pageSize: {
        type: 'Int',
        description: 'Page size',
      },
      nextPageToken: {
        type: 'String',
        description: 'Next page token, overrides any other parameters in request',
      },
    },
    resolve: (source, args) => {
      return approvalFindMany({
        filter: {
          ...args.filter,
          pendingApprovers: [source[sourceFieldName]],
        },
        limit: args.limit,
        pageSize: args.pageSize,
        nextPageToken: args.nextPageToken,
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}
