import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { ApprovalTC } from 'app/schema/entities/ApprovalTC';
import { approvalFindMany } from 'app/vendor/approval/approvalFindMany';
import { approvalForTask } from 'app/vendor/approval/approvalForTask';
import { approvalForFolder } from 'app/vendor/approval/approvalForFolder';
import { DateTimeRangeInput } from 'app/schema/types/inputs/DateTimeRangeInput';
import { ContactID } from 'app/schema/types/Scalars';
import { ApprovalFinalStatusEnum } from 'app/schema/types/Enums';

export function getRelationApprovalsByFolderId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => ApprovalTC.NonNull.List,
    resolve: (source, _, context) => {
      return approvalForFolder(
        {
          folderId: source[sourceFieldName],
        },
        context
      );
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 10,
    },
  };
}

export function getRelationApprovalsByTaskId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => ApprovalTC.NonNull.List,
    resolve: (source, _, context) => {
      return approvalForTask(
        {
          taskId: source[sourceFieldName],
        },
        context
      );
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 10,
    },
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
    resolve: (source, args, context) => {
      return approvalFindMany(
        {
          filter: {
            ...args.filter,
            approvers: [source[sourceFieldName]],
          },
          limit: args.limit,
          pageSize: args.pageSize,
          nextPageToken: args.nextPageToken,
        },
        context
      );
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ args, childComplexity }) =>
        childComplexity * (args.limit || args.pageSize || 100),
    },
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
    resolve: (source, args, context) => {
      return approvalFindMany(
        {
          filter: {
            ...args.filter,
            pendingApprovers: [source[sourceFieldName]],
          },
          limit: args.limit,
          pageSize: args.pageSize,
          nextPageToken: args.nextPageToken,
        },
        context
      );
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ args, childComplexity }) =>
        childComplexity * (args.limit || args.pageSize || 100),
    },
  };
}
