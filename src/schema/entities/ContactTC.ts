import { composeWithJson } from 'graphql-compose-json';
import { UserTypeEnum, UserRoleEnum } from 'app/schema/types/Enums';
import { ContactID, WorkScheduleID, AccountID } from 'app/schema/types/Scalars';
import { KeyValue } from '../types/outputs/KeyValue';
import { getRelationAccountId } from '../relations/account';
import { getRelationContactIds } from '../relations/contact';
import { getRelationWorkScheduleId } from '../relations/workSchedule';
import { getRelationTasksByAuthorId, getRelationTasksByResponsibleId } from '../relations/task';
import { getRelationTimelogsByContactId } from '../relations/timelog';
import { getRelationUserScheduleExclusionByUserId } from '../relations/userScheduleExclusion';
import {
  getRelationApprovalsByApproverUserId,
  getRelationApprovalsByPendingApproverUserId,
} from '../relations/approval';

const restApiResponse = {
  // id: 'KUAHNM4I',
  id: ContactID.NonNull,
  firstName: 'Ivan',
  lastName: 'Ivanov',
  // type: 'Person',
  type: UserTypeEnum,
  profiles: [
    {
      // accountId: 'IEADMUW4',
      accountId: AccountID,
      email: 'nodkz@mail.ru',
      // role: 'User',
      role: UserRoleEnum,
      external: true,
      admin: false,
      owner: false,
    },
  ],
  avatarUrl: 'https://www.wrike.com/avatars//88/89/Box_ff1e88e5_73-73_v1.png',
  timezone: 'Asia/Almaty',
  locale: 'en',
  deleted: false,
  me: false,
  memberIds: ContactID.NonNull.List,
  metadata: KeyValue.NonNull.List,
  myTeam: false,
  title: 'bot',
  companyName: 'aaa',
  phone: '+77777',
  location: 'ALA',
  workScheduleId: WorkScheduleID,
};

export const ContactTC = composeWithJson('Contact', restApiResponse);

if (!process.env.DISABLE_RELATIONS) {
  ContactTC.addNestedFields({
    'profiles.account': () => getRelationAccountId('accountId'),
    members: () => getRelationContactIds('memberIds'),
    workSchedule: () => getRelationWorkScheduleId('workScheduleId'),
  });
}

if (!process.env.DISABLE_BACK_RELATIONS) {
  ContactTC.addFields({
    tasksAuthored: () => getRelationTasksByAuthorId('id'),
    tasksResponsible: () => getRelationTasksByResponsibleId('id'),
    timelogs: () => getRelationTimelogsByContactId('id'),
    scheduleExclusions: () => getRelationUserScheduleExclusionByUserId('id'),
    approvals: () => getRelationApprovalsByApproverUserId('id'),
    approvalsPending: () => getRelationApprovalsByPendingApproverUserId('id'),
  });
}
