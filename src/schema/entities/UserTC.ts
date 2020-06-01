import { composeWithJson } from 'graphql-compose-json';
import { ContactID, AccountID, WorkScheduleID } from 'app/schema/types/Scalars';
import { UserRoleEnum } from '../types/Enums';
import { getRelationAccountId } from '../relations/account';
import { getRelationWorkScheduleId } from '../relations/workSchedule';
import { getRelationTasksByAuthorId, getRelationTasksByResponsibleId } from '../relations/task';
import { getRelationUserScheduleExclusionByUserId } from '../relations/userScheduleExclusion';
import {
  getRelationApprovalsByApproverUserId,
  getRelationApprovalsByPendingApproverUserId,
} from '../relations/approval';

const restApiResponse = {
  // id: 'KUAHMNRA',
  id: ContactID.NonNull,
  firstName: 'Pavel',
  lastName: 'Chertorogov',
  type: 'Person',
  profiles: [
    {
      // accountId: 'IEADMUW4',
      accountId: AccountID,
      email: 'pavel.chertorogov@gmail.com',
      // role: 'User',
      role: UserRoleEnum,
      external: false,
      admin: false,
      owner: true,
    },
  ],
  avatarUrl: 'https://www.wrike.com/avatars//77/A8/Box_ffe57373_80-67_v1.png',
  timezone: 'US/Pacific',
  locale: 'en',
  deleted: false,
  me: true,
  myTeam: false,
  title: 'IT',
  companyName: 'Test',
  phone: '+77777',
  location: 'ALA',
  workScheduleId: WorkScheduleID,
};

export const UserTC = composeWithJson('User', restApiResponse);

if (!process.env.DISABLE_RELATIONS) {
  UserTC.addNestedFields({
    'profiles.account': () => getRelationAccountId('accountId'),
    workSchedule: () => getRelationWorkScheduleId('workScheduleId'),
  });
}

if (!process.env.DISABLE_BACK_RELATIONS) {
  UserTC.addFields({
    tasksAuthored: () => getRelationTasksByAuthorId('id'),
    tasksResponsible: () => getRelationTasksByResponsibleId('id'),
    scheduleExclusions: () => getRelationUserScheduleExclusionByUserId('id'),
    approvals: () => getRelationApprovalsByApproverUserId('id'),
    approvalsPending: () => getRelationApprovalsByPendingApproverUserId('id'),
  });
}
