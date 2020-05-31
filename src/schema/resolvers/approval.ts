import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { ApprovalTC } from '../entities/ApprovalTC';
import { approvalFindMany } from 'app/vendor/approval/approvalFindMany';
import { approvalForTask } from 'app/vendor/approval/approvalForTask';
import { approvalForFolder } from 'app/vendor/approval/approvalForFolder';

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

export function getRelationApprovalsByApproverUserId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => ApprovalTC.NonNull.List,
    resolve: (source) => {
      return approvalFindMany({
        filter: {
          approvers: [source[sourceFieldName]],
        },
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}

export function getRelationApprovalsByPendingApproverUserId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => ApprovalTC.NonNull.List,
    resolve: (source) => {
      return approvalFindMany({
        filter: {
          pendingApprovers: [source[sourceFieldName]],
        },
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}
