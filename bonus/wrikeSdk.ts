import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AccountID: any;
  FolderID: any;
  Date: any;
  CustomFieldID: any;
  ContactID: any;
  WorkScheduleID: any;
  JSON: any;
  WorkScheduleExclusionID: any;
  DateYMD: any;
  TaskID: any;
  CustomStatusID: any;
  DependencyID: any;
  CommentID: any;
  TimelogID: any;
  TimelogCategoryID: any;
  AttachmentID: any;
  ReviewID: any;
  ApprovalID: any;
  AsyncJobID: any;
  AuditLogID: any;
  DataExportID: any;
  GroupID: any;
  InvitationID: any;
  SpaceID: any;
  UserScheduleExclusionID: any;
  WorkflowID: any;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  approvalByIds?: Maybe<Array<Approval>>;
  approvalFindMany?: Maybe<Array<Approval>>;
  approvalForFolder?: Maybe<Array<Approval>>;
  approvalForTask?: Maybe<Array<Approval>>;
  asyncJob?: Maybe<AsyncJob>;
  attachmentByIds?: Maybe<Array<Attachment>>;
  attachmentFindMany?: Maybe<Array<Attachment>>;
  auditLogFindMany?: Maybe<Array<Maybe<AuditLog>>>;
  colors?: Maybe<Array<Maybe<Color>>>;
  commentByIds?: Maybe<Array<Comment>>;
  commentFindMany?: Maybe<Array<Comment>>;
  contactByIds?: Maybe<Array<Contact>>;
  contactFindMany?: Maybe<Array<Contact>>;
  customFieldsByIds?: Maybe<Array<CustomField>>;
  customFieldsFindMany?: Maybe<Array<CustomField>>;
  dataExport?: Maybe<DataExport>;
  dataExportSchema?: Maybe<DataExportSchema>;
  dependenciesByIds?: Maybe<Array<Dependency>>;
  folderByIds?: Maybe<Array<Folder>>;
  folderFindMany?: Maybe<Array<Folder>>;
  groupById?: Maybe<Group>;
  groupFindMany?: Maybe<Array<Group>>;
  invitations?: Maybe<Array<Invitation>>;
  me: Contact;
  spaceFindMany?: Maybe<Array<Space>>;
  taskByIds?: Maybe<Array<Task>>;
  taskDependencies?: Maybe<Array<Dependency>>;
  taskFindMany?: Maybe<Array<Task>>;
  timelogByIds?: Maybe<Array<Timelog>>;
  timelogCategories?: Maybe<Array<TimelogCategory>>;
  timelogFindMany?: Maybe<Array<Timelog>>;
  userById?: Maybe<User>;
  userScheduleExclusionFindById?: Maybe<UserScheduleExclusion>;
  userScheduleExclusionFindMany?: Maybe<Array<UserScheduleExclusion>>;
  version?: Maybe<Version>;
  workScheduleExclusionFindById?: Maybe<WorkScheduleExclusion>;
  workScheduleExclusionFindMany?: Maybe<Array<WorkScheduleExclusion>>;
  workScheduleFindById?: Maybe<WorkSchedule>;
  workScheduleFindMany?: Maybe<Array<WorkSchedule>>;
  workflows?: Maybe<Array<Workflow>>;
};


export type QueryAccountArgs = {
  filter?: Maybe<AccountFilter>;
};


export type QueryApprovalByIdsArgs = {
  ids: Array<Scalars['ApprovalID']>;
};


export type QueryApprovalFindManyArgs = {
  limit?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  nextPageToken?: Maybe<Scalars['String']>;
  filter?: Maybe<ApprovalFindManyFilter>;
};


export type QueryApprovalForFolderArgs = {
  folderId: Scalars['FolderID'];
};


export type QueryApprovalForTaskArgs = {
  taskId: Scalars['TaskID'];
};


export type QueryAsyncJobArgs = {
  id: Scalars['AsyncJobID'];
};


export type QueryAttachmentByIdsArgs = {
  ids: Array<Scalars['AttachmentID']>;
  versions?: Maybe<Scalars['Boolean']>;
};


export type QueryAttachmentFindManyArgs = {
  versions?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<AttachmentFindManyFilter>;
};


export type QueryAuditLogFindManyArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  nextPageToken?: Maybe<Scalars['String']>;
  filter?: Maybe<AuditLogFilter>;
};


export type QueryCommentByIdsArgs = {
  ids: Array<Scalars['CommentID']>;
  plainText?: Maybe<Scalars['Boolean']>;
};


export type QueryCommentFindManyArgs = {
  limit?: Maybe<Scalars['Int']>;
  plainText?: Scalars['Boolean'];
  filter?: Maybe<CommentFindManyFilter>;
};


export type QueryContactByIdsArgs = {
  ids: Array<Scalars['ContactID']>;
};


export type QueryContactFindManyArgs = {
  filter?: Maybe<ContactFindManyFilter>;
};


export type QueryCustomFieldsByIdsArgs = {
  ids: Array<Scalars['CustomFieldID']>;
};


export type QueryDataExportArgs = {
  id?: Maybe<Scalars['DataExportID']>;
};


export type QueryDataExportSchemaArgs = {
  version?: Maybe<DataSchemaVersion>;
};


export type QueryDependenciesByIdsArgs = {
  ids: Array<Scalars['DependencyID']>;
};


export type QueryFolderByIdsArgs = {
  ids: Array<Scalars['FolderID']>;
};


export type QueryFolderFindManyArgs = {
  filter?: Maybe<FolderFindManyFilter>;
};


export type QueryGroupByIdArgs = {
  id: Scalars['GroupID'];
};


export type QueryGroupFindManyArgs = {
  filter?: Maybe<GroupFindManyFilter>;
};


export type QuerySpaceFindManyArgs = {
  filter?: Maybe<SpaceFindManyFilter>;
};


export type QueryTaskByIdsArgs = {
  ids: Array<Scalars['TaskID']>;
};


export type QueryTaskDependenciesArgs = {
  taskId: Scalars['TaskID'];
};


export type QueryTaskFindManyArgs = {
  limit?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  nextPageToken?: Maybe<Scalars['String']>;
  filter?: Maybe<TaskFindManyFilter>;
  sort?: Maybe<TaskFindManySortEnum>;
};


export type QueryTimelogByIdsArgs = {
  ids: Array<Scalars['TimelogID']>;
  plainText?: Maybe<Scalars['Boolean']>;
};


export type QueryTimelogFindManyArgs = {
  filter?: Maybe<TimelogFindManyFilter>;
  plainText?: Scalars['Boolean'];
};


export type QueryUserByIdArgs = {
  id: Scalars['ContactID'];
};


export type QueryUserScheduleExclusionFindByIdArgs = {
  id: Scalars['UserScheduleExclusionID'];
};


export type QueryUserScheduleExclusionFindManyArgs = {
  filter?: Maybe<UserScheduleExclusionFilter>;
};


export type QueryWorkScheduleExclusionFindByIdArgs = {
  id: Scalars['WorkScheduleExclusionID'];
};


export type QueryWorkScheduleExclusionFindManyArgs = {
  filter?: Maybe<WorkScheduleExclusionFilter>;
  workScheduleId: Scalars['WorkScheduleID'];
};


export type QueryWorkScheduleFindByIdArgs = {
  id: Scalars['WorkScheduleID'];
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['AccountID'];
  name: Scalars['String'];
  dateFormat: Scalars['String'];
  firstDayOfWeek: FirstDayOfWeekEnum;
  workDays: Array<WeekDayEnum>;
  rootFolderId: Scalars['FolderID'];
  recycleBinId: Scalars['FolderID'];
  createdDate: Scalars['Date'];
  subscription?: Maybe<AccountSubscription>;
  metadata?: Maybe<Array<KeyValue>>;
  customFields?: Maybe<Array<CustomField>>;
  joinedDate: Scalars['Date'];
  rootFolder?: Maybe<Folder>;
  recycleBin?: Maybe<Folder>;
};


export enum FirstDayOfWeekEnum {
  Sat = 'Sat',
  Sun = 'Sun',
  Mon = 'Mon'
}

export enum WeekDayEnum {
  Sun = 'Sun',
  Mon = 'Mon',
  Tue = 'Tue',
  Wed = 'Wed',
  Thu = 'Thu',
  Fri = 'Fri',
  Sat = 'Sat'
}



export type AccountSubscription = {
  __typename?: 'AccountSubscription';
  type: SubscriptionTypeEnum;
  suspended: Scalars['Boolean'];
  paid: Scalars['Boolean'];
  userLimit: Scalars['Int'];
};

export enum SubscriptionTypeEnum {
  Free = 'Free',
  Premium = 'Premium',
  Business = 'Business',
  CreativeBusiness = 'CreativeBusiness',
  Enterprise = 'Enterprise',
  CreativeEnterprise = 'CreativeEnterprise'
}

export type KeyValue = {
  __typename?: 'KeyValue';
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type CustomField = {
  __typename?: 'CustomField';
  id: Scalars['CustomFieldID'];
  accountId: Scalars['AccountID'];
  title: Scalars['String'];
  type: CustomFieldTypeEnum;
  sharedIds?: Maybe<Array<Scalars['ContactID']>>;
  settings?: Maybe<CustomFieldSettings>;
  account?: Maybe<Account>;
  shareds?: Maybe<Array<Contact>>;
};


export enum CustomFieldTypeEnum {
  Text = 'Text',
  DropDown = 'DropDown',
  Numeric = 'Numeric',
  Currency = 'Currency',
  Percentage = 'Percentage',
  Date = 'Date',
  Duration = 'Duration',
  Checkbox = 'Checkbox',
  Contacts = 'Contacts',
  Multiple = 'Multiple'
}


export type CustomFieldSettings = {
  __typename?: 'CustomFieldSettings';
  inheritanceType?: Maybe<CustomFieldInheritanceEnum>;
  decimalPlaces?: Maybe<Scalars['Int']>;
  useThousandsSeparator?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<CurrencyEnum>;
  aggregation?: Maybe<CustomFieldAggregationEnum>;
  values?: Maybe<Array<Scalars['String']>>;
  allowOtherValues?: Maybe<Scalars['Boolean']>;
  contacts?: Maybe<Array<Contact>>;
};

export enum CustomFieldInheritanceEnum {
  All = 'All',
  Folders = 'Folders',
  Projects = 'Projects'
}

export enum CurrencyEnum {
  Usd = 'USD',
  Eur = 'EUR',
  Gbp = 'GBP',
  Rub = 'RUB',
  Brl = 'BRL',
  Aed = 'AED',
  Ars = 'ARS',
  Byr = 'BYR',
  Cad = 'CAD',
  Clp = 'CLP',
  Cop = 'COP',
  Czk = 'CZK',
  Dkk = 'DKK',
  Hkd = 'HKD',
  Huf = 'HUF',
  Inr = 'INR',
  Idr = 'IDR',
  Ils = 'ILS',
  Jpy = 'JPY',
  Krw = 'KRW',
  Myr = 'MYR',
  Mxn = 'MXN',
  Nzd = 'NZD',
  Nok = 'NOK',
  Pen = 'PEN',
  Php = 'PHP',
  Pln = 'PLN',
  Qar = 'QAR',
  Ron = 'RON',
  Sar = 'SAR',
  Sgd = 'SGD',
  Zar = 'ZAR',
  Sek = 'SEK',
  Chf = 'CHF',
  Twd = 'TWD',
  Thb = 'THB',
  Try = 'TRY',
  Uah = 'UAH',
  Vnd = 'VND',
  Cny = 'CNY',
  Aud = 'AUD',
  Amd = 'AMD',
  Bwp = 'BWP'
}

export enum CustomFieldAggregationEnum {
  None = 'None',
  Sum = 'Sum',
  Average = 'Average'
}

export type Contact = {
  __typename?: 'Contact';
  id: Scalars['ContactID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  type?: Maybe<UserTypeEnum>;
  profiles?: Maybe<Array<Maybe<Contact_Profiles>>>;
  avatarUrl?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  me?: Maybe<Scalars['Boolean']>;
  memberIds?: Maybe<Array<Scalars['ContactID']>>;
  metadata?: Maybe<Array<KeyValue>>;
  myTeam?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  workScheduleId?: Maybe<Scalars['WorkScheduleID']>;
  members?: Maybe<Array<Contact>>;
  workSchedule?: Maybe<WorkSchedule>;
  tasksAuthored?: Maybe<Array<Task>>;
  tasksResponsible?: Maybe<Array<Task>>;
  timelogs?: Maybe<Array<Timelog>>;
  scheduleExclusions?: Maybe<Array<WorkScheduleExclusion>>;
  approvals?: Maybe<Array<Approval>>;
  approvalsPending?: Maybe<Array<Approval>>;
};


export type ContactTasksAuthoredArgs = {
  filter?: Maybe<TaskFilterByRelation>;
  sort?: Maybe<TaskFindManySortEnum>;
  limit?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  nextPageToken?: Maybe<Scalars['String']>;
};


export type ContactTasksResponsibleArgs = {
  filter?: Maybe<TaskFilterByRelation>;
  sort?: Maybe<TaskFindManySortEnum>;
  limit?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  nextPageToken?: Maybe<Scalars['String']>;
};


export type ContactTimelogsArgs = {
  filter?: Maybe<TimelogFilterByRelation>;
  plainText?: Maybe<Scalars['Boolean']>;
};


export type ContactScheduleExclusionsArgs = {
  filter?: Maybe<WorkScheduleExclusionFilterByRelation>;
};


export type ContactApprovalsArgs = {
  filter?: Maybe<ApprovalFilterByRelationApproverId>;
  limit?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  nextPageToken?: Maybe<Scalars['String']>;
};


export type ContactApprovalsPendingArgs = {
  filter?: Maybe<ApprovalFilterByRelationPendingApproverId>;
  limit?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  nextPageToken?: Maybe<Scalars['String']>;
};

export enum UserTypeEnum {
  Person = 'Person',
  Group = 'Group'
}

export type Contact_Profiles = {
  __typename?: 'Contact_Profiles';
  accountId?: Maybe<Scalars['AccountID']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  external?: Maybe<Scalars['Boolean']>;
  admin?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<Scalars['Boolean']>;
  account?: Maybe<Account>;
};

export enum UserRoleEnum {
  User = 'User',
  Collaborator = 'Collaborator'
}


export type WorkSchedule = {
  __typename?: 'WorkSchedule';
  id: Scalars['WorkScheduleID'];
  scheduleType: WorkScheduleTypeEnum;
  title?: Maybe<Scalars['String']>;
  workweek?: Maybe<Scalars['JSON']>;
  userIds?: Maybe<Array<Scalars['ContactID']>>;
  users?: Maybe<Array<Contact>>;
  exclusions?: Maybe<Array<WorkScheduleExclusion>>;
};

export enum WorkScheduleTypeEnum {
  Default = 'Default',
  Custom = 'Custom'
}


export type WorkScheduleExclusion = {
  __typename?: 'WorkScheduleExclusion';
  id: Scalars['WorkScheduleExclusionID'];
  fromDate: Scalars['DateYMD'];
  toDate: Scalars['DateYMD'];
  isWorkDays: Scalars['Boolean'];
  exclusionType: WorkScheduleExclusionEnum;
};



export enum WorkScheduleExclusionEnum {
  AdditionalWorkDays = 'AdditionalWorkDays',
  PublicHolidays = 'PublicHolidays',
  OtherEvent = 'OtherEvent'
}

export type Task = {
  __typename?: 'Task';
  id: Scalars['TaskID'];
  accountId: Scalars['AccountID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  briefDescription?: Maybe<Scalars['String']>;
  parentIds?: Maybe<Array<Scalars['FolderID']>>;
  superParentIds?: Maybe<Array<Scalars['FolderID']>>;
  sharedIds?: Maybe<Array<Scalars['ContactID']>>;
  responsibleIds?: Maybe<Array<Scalars['ContactID']>>;
  status?: Maybe<TaskStatusEnum>;
  importance?: Maybe<TaskImportanceEnum>;
  createdDate: Scalars['Date'];
  updatedDate: Scalars['Date'];
  completedDate: Scalars['Date'];
  dates?: Maybe<TaskDates>;
  scope: TreeScopeEnum;
  authorIds?: Maybe<Array<Scalars['ContactID']>>;
  customStatusId?: Maybe<Scalars['CustomStatusID']>;
  hasAttachments?: Maybe<Scalars['Boolean']>;
  attachmentCount?: Maybe<Scalars['Int']>;
  permalink?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  followedByMe?: Maybe<Scalars['Boolean']>;
  followerIds?: Maybe<Array<Scalars['ContactID']>>;
  recurrent?: Maybe<Scalars['Boolean']>;
  superTaskIds?: Maybe<Array<Scalars['TaskID']>>;
  subTaskIds?: Maybe<Array<Scalars['TaskID']>>;
  dependencyIds?: Maybe<Array<Scalars['DependencyID']>>;
  metadata?: Maybe<Array<KeyValue>>;
  customFields?: Maybe<Array<CustomFieldValue>>;
  account?: Maybe<Account>;
  parents?: Maybe<Array<Folder>>;
  superParents?: Maybe<Array<Folder>>;
  shareds?: Maybe<Array<Contact>>;
  responsibles?: Maybe<Array<Contact>>;
  authors?: Maybe<Array<Contact>>;
  followers?: Maybe<Array<Contact>>;
  superTasks?: Maybe<Array<Task>>;
  subTasks?: Maybe<Array<Task>>;
  dependencies?: Maybe<Array<Dependency>>;
  comments?: Maybe<Array<Comment>>;
  timelogs?: Maybe<Array<Timelog>>;
  attachments?: Maybe<Array<Attachment>>;
  approvals?: Maybe<Array<Approval>>;
};


export type TaskTimelogsArgs = {
  filter?: Maybe<TimelogFilterByRelation>;
  plainText?: Maybe<Scalars['Boolean']>;
};


export type TaskAttachmentsArgs = {
  filter?: Maybe<AttachmentFilterByRelation>;
  versions?: Maybe<Scalars['Boolean']>;
};


export enum TaskStatusEnum {
  Active = 'Active',
  Completed = 'Completed',
  Deferred = 'Deferred',
  Cancelled = 'Cancelled'
}

export enum TaskImportanceEnum {
  High = 'High',
  Normal = 'Normal',
  Low = 'Low'
}

export type TaskDates = {
  __typename?: 'TaskDates';
  type?: Maybe<TaskDatesTypeEnum>;
  duration?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Date']>;
  due?: Maybe<Scalars['Date']>;
  workOnWeekends?: Maybe<Scalars['Boolean']>;
};

export enum TaskDatesTypeEnum {
  Backlog = 'Backlog',
  Milestone = 'Milestone',
  Planned = 'Planned'
}

export enum TreeScopeEnum {
  WsRoot = 'WsRoot',
  RbRoot = 'RbRoot',
  WsFolder = 'WsFolder',
  RbFolder = 'RbFolder',
  WsTask = 'WsTask',
  RbTask = 'RbTask'
}



export type CustomFieldValue = {
  __typename?: 'CustomFieldValue';
  id: Scalars['CustomFieldID'];
  value?: Maybe<Scalars['String']>;
  entity?: Maybe<CustomField>;
};

export type Folder = {
  __typename?: 'Folder';
  id: Scalars['FolderID'];
  title: Scalars['String'];
  color?: Maybe<ColorEnum>;
  childIds?: Maybe<Array<Scalars['FolderID']>>;
  scope: TreeScopeEnum;
  project?: Maybe<ProjectDetails>;
  space?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Array<KeyValue>>;
  hasAttachments?: Maybe<Scalars['Boolean']>;
  attachmentCount?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  briefDescription?: Maybe<Scalars['String']>;
  customFields?: Maybe<Array<CustomField>>;
  customColumnIds?: Maybe<Array<Scalars['CustomFieldID']>>;
  superParentIds?: Maybe<Array<Scalars['FolderID']>>;
  contractType?: Maybe<ProjectContractTypeEnum>;
  childs?: Maybe<Array<Folder>>;
  superParents?: Maybe<Array<Folder>>;
  tasks?: Maybe<Array<Task>>;
  comments?: Maybe<Array<Comment>>;
  timelogs?: Maybe<Array<Timelog>>;
  attachments?: Maybe<Array<Attachment>>;
  approvals?: Maybe<Array<Approval>>;
};


export type FolderTasksArgs = {
  filter?: Maybe<TaskFilterByRelation>;
  sort?: Maybe<TaskFindManySortEnum>;
  limit?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  nextPageToken?: Maybe<Scalars['String']>;
};


export type FolderCommentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  plainText?: Maybe<Scalars['Boolean']>;
};


export type FolderTimelogsArgs = {
  filter?: Maybe<TimelogFilterByRelation>;
  plainText?: Maybe<Scalars['Boolean']>;
};


export type FolderAttachmentsArgs = {
  filter?: Maybe<AttachmentFilterByRelation>;
  versions?: Maybe<Scalars['Boolean']>;
};

export enum ColorEnum {
  None = 'None',
  Person = 'Person',
  Purple1 = 'Purple1',
  Purple2 = 'Purple2',
  Purple3 = 'Purple3',
  Purple4 = 'Purple4',
  Indigo1 = 'Indigo1',
  Indigo2 = 'Indigo2',
  Indigo3 = 'Indigo3',
  Indigo4 = 'Indigo4',
  DarkBlue1 = 'DarkBlue1',
  DarkBlue2 = 'DarkBlue2',
  DarkBlue3 = 'DarkBlue3',
  DarkBlue4 = 'DarkBlue4',
  Blue1 = 'Blue1',
  Blue2 = 'Blue2',
  Blue3 = 'Blue3',
  Blue4 = 'Blue4',
  Turquoise1 = 'Turquoise1',
  Turquoise2 = 'Turquoise2',
  Turquoise3 = 'Turquoise3',
  Turquoise4 = 'Turquoise4',
  DarkCyan1 = 'DarkCyan1',
  DarkCyan2 = 'DarkCyan2',
  DarkCyan3 = 'DarkCyan3',
  DarkCyan4 = 'DarkCyan4',
  Green1 = 'Green1',
  Green2 = 'Green2',
  Green3 = 'Green3',
  Green4 = 'Green4',
  YellowGreen1 = 'YellowGreen1',
  YellowGreen2 = 'YellowGreen2',
  YellowGreen3 = 'YellowGreen3',
  YellowGreen4 = 'YellowGreen4',
  Yellow1 = 'Yellow1',
  Yellow2 = 'Yellow2',
  Yellow3 = 'Yellow3',
  Yellow4 = 'Yellow4',
  Orange1 = 'Orange1',
  Orange2 = 'Orange2',
  Orange3 = 'Orange3',
  Orange4 = 'Orange4',
  Red1 = 'Red1',
  Red2 = 'Red2',
  Red3 = 'Red3',
  Red4 = 'Red4',
  Pink1 = 'Pink1',
  Pink2 = 'Pink2',
  Pink3 = 'Pink3',
  Pink4 = 'Pink4',
  Gray1 = 'Gray1',
  Gray2 = 'Gray2',
  Gray3 = 'Gray3'
}

export type ProjectDetails = {
  __typename?: 'ProjectDetails';
  authorId?: Maybe<Scalars['ContactID']>;
  ownerIds?: Maybe<Array<Scalars['ContactID']>>;
  status?: Maybe<ProjectStatusEnum>;
  customStatusId?: Maybe<Scalars['CustomStatusID']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['Date']>;
  completedDate?: Maybe<Scalars['Date']>;
  contractType?: Maybe<ProjectContractTypeEnum>;
  author?: Maybe<Contact>;
  owners?: Maybe<Array<Contact>>;
};

export enum ProjectStatusEnum {
  Green = 'Green',
  Yellow = 'Yellow',
  Red = 'Red',
  Completed = 'Completed',
  OnHold = 'OnHold',
  Cancelled = 'Cancelled',
  Custom = 'Custom'
}

export enum ProjectContractTypeEnum {
  Billable = 'Billable',
  NonBillable = 'NonBillable'
}

export type TaskFilterByRelation = {
  descendants?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  status?: Maybe<TaskStatusEnum>;
  importance?: Maybe<TaskImportanceEnum>;
  startDate?: Maybe<DateTimeRangeEqualInput>;
  dueDate?: Maybe<DateTimeRangeEqualInput>;
  scheduledDate?: Maybe<DateRangeEqualInput>;
  createdDate?: Maybe<DateTimeRangeInput>;
  updatedDate?: Maybe<DateTimeRangeInput>;
  completedDate?: Maybe<DateTimeRangeInput>;
  authors?: Maybe<Array<Scalars['ContactID']>>;
  responsibles?: Maybe<Array<Scalars['ContactID']>>;
  permalink?: Maybe<Scalars['String']>;
  type?: Maybe<TaskDatesTypeEnum>;
  subTasks?: Maybe<Scalars['Boolean']>;
  customStatuses?: Maybe<Scalars['CustomStatusID']>;
  metadata?: Maybe<KeyValueInput>;
  customField?: Maybe<CustomFieldFilterInput>;
};

export type DateTimeRangeEqualInput = {
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  equal?: Maybe<Scalars['Date']>;
};

export type DateRangeEqualInput = {
  start?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
  equal?: Maybe<Scalars['String']>;
};

export type DateTimeRangeInput = {
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
};

export type KeyValueInput = {
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type CustomFieldFilterInput = {
  id: Scalars['CustomFieldID'];
  comparator?: Maybe<CustomFieldComparatorEnum>;
  value?: Maybe<Scalars['String']>;
  minValue?: Maybe<Scalars['String']>;
  maxValue?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Scalars['String']>>;
};

export enum CustomFieldComparatorEnum {
  EqualTo = 'EqualTo',
  IsEmpty = 'IsEmpty',
  IsNotEmpty = 'IsNotEmpty',
  LessThan = 'LessThan',
  LessOrEqualTo = 'LessOrEqualTo',
  GreaterThan = 'GreaterThan',
  GreaterOrEqualTo = 'GreaterOrEqualTo',
  InRange = 'InRange',
  NotInRange = 'NotInRange',
  Contains = 'Contains',
  StartsWith = 'StartsWith',
  EndsWith = 'EndsWith',
  ContainsAll = 'ContainsAll',
  ContainsAny = 'ContainsAny'
}

export enum TaskFindManySortEnum {
  CreatedDateAsc = 'CREATED_DATE_ASC',
  CreatedDateDesc = 'CREATED_DATE_DESC',
  UpdatedDateAsc = 'UPDATED_DATE_ASC',
  UpdatedDateDesc = 'UPDATED_DATE_DESC',
  CompletedDateAsc = 'COMPLETED_DATE_ASC',
  CompletedDateDesc = 'COMPLETED_DATE_DESC',
  DueDateAsc = 'DUE_DATE_ASC',
  DueDateDesc = 'DUE_DATE_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  ImportanceAsc = 'IMPORTANCE_ASC',
  ImportanceDesc = 'IMPORTANCE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  LastAccessDateAsc = 'LAST_ACCESS_DATE_ASC',
  LastAccessDateDesc = 'LAST_ACCESS_DATE_DESC'
}

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['CommentID'];
  authorId: Scalars['ContactID'];
  text: Scalars['String'];
  createdDate: Scalars['Date'];
  taskId?: Maybe<Scalars['TaskID']>;
  folderId?: Maybe<Scalars['FolderID']>;
  author?: Maybe<Contact>;
  task?: Maybe<Task>;
  folder?: Maybe<Folder>;
};


export type Timelog = {
  __typename?: 'Timelog';
  id: Scalars['TimelogID'];
  taskId: Scalars['TaskID'];
  userId: Scalars['ContactID'];
  categoryId?: Maybe<TimelogCategory>;
  billingType?: Maybe<BillingTypeEnum>;
  hours: Scalars['Float'];
  createdDate: Scalars['Date'];
  updatedDate: Scalars['Date'];
  trackedDate: Scalars['DateYMD'];
  comment?: Maybe<Scalars['String']>;
  task?: Maybe<Task>;
  user?: Maybe<Contact>;
};


export type TimelogCategory = {
  __typename?: 'TimelogCategory';
  id: Scalars['TimelogCategoryID'];
  name: Scalars['String'];
  order: Scalars['Int'];
  hidden: Scalars['Boolean'];
  timelogs?: Maybe<Array<Timelog>>;
};


export type TimelogCategoryTimelogsArgs = {
  filter?: Maybe<TimelogFilterByRelation>;
  plainText?: Maybe<Scalars['Boolean']>;
};


export type TimelogFilterByRelation = {
  createdDate?: Maybe<DateTimeRangeEqualInput>;
  updatedDate?: Maybe<DateTimeRangeEqualInput>;
  trackedDate?: Maybe<DateTimeRangeEqualInput>;
  me?: Maybe<Scalars['Boolean']>;
  descendants?: Maybe<Scalars['Boolean']>;
  subTasks?: Maybe<Scalars['Boolean']>;
  timelogCategories?: Maybe<Scalars['TimelogCategoryID']>;
};

export enum BillingTypeEnum {
  Billable = 'Billable',
  NonBillable = 'NonBillable'
}

export type Attachment = {
  __typename?: 'Attachment';
  id: Scalars['AttachmentID'];
  authorId: Scalars['ContactID'];
  name: Scalars['String'];
  createdDate: Scalars['Date'];
  version: Scalars['Int'];
  type: AttachmentTypeEnum;
  contentType: Scalars['String'];
  size: Scalars['Int'];
  taskId?: Maybe<Scalars['TaskID']>;
  folderId?: Maybe<Scalars['FolderID']>;
  commentId?: Maybe<Scalars['CommentID']>;
  currentAttachmentId?: Maybe<Scalars['AttachmentID']>;
  previewUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  reviewIds?: Maybe<Array<Scalars['ReviewID']>>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  author?: Maybe<Contact>;
  task?: Maybe<Task>;
  folder?: Maybe<Folder>;
  comment?: Maybe<Comment>;
};


export enum AttachmentTypeEnum {
  Wrike = 'Wrike',
  Google = 'Google',
  DropBox = 'DropBox',
  Box = 'Box',
  OneDrive = 'OneDrive',
  External = 'External',
  Dam = 'DAM'
}


export type AttachmentFilterByRelation = {
  createdDate?: Maybe<DateTimeRangeInput>;
};

export type Approval = {
  __typename?: 'Approval';
  id: Scalars['ApprovalID'];
  taskId?: Maybe<Scalars['TaskID']>;
  folderId?: Maybe<Scalars['FolderID']>;
  authorId: Scalars['ContactID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  updatedDate: Scalars['Date'];
  dueDate?: Maybe<Scalars['DateYMD']>;
  decisions?: Maybe<Array<ApprovalDecision>>;
  attachmentIds?: Maybe<Array<Scalars['AttachmentID']>>;
  type: ApprovalTypeEnum;
  autoFinishOnApprove: Scalars['Boolean'];
  autoFinishOnReject: Scalars['Boolean'];
  finished: Scalars['Boolean'];
  finisherId?: Maybe<Scalars['ContactID']>;
  task?: Maybe<Task>;
  folder?: Maybe<Folder>;
  author?: Maybe<Contact>;
  attachments?: Maybe<Array<Attachment>>;
  finisher?: Maybe<Contact>;
};


export type ApprovalDecision = {
  __typename?: 'ApprovalDecision';
  approverId: Scalars['ContactID'];
  comment: Scalars['String'];
  status: ApprovalDecisionStatusEnum;
  updatedDate: Scalars['Date'];
  approver?: Maybe<Array<Contact>>;
};

export enum ApprovalDecisionStatusEnum {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected'
}

export enum ApprovalTypeEnum {
  Regular = 'Regular',
  FilesOnly = 'FilesOnly'
}

export type Dependency = {
  __typename?: 'Dependency';
  id: Scalars['DependencyID'];
  predecessorId: Scalars['TaskID'];
  successorId: Scalars['TaskID'];
  relationType: DependencyRelationEnum;
  predecessor?: Maybe<Task>;
  successor?: Maybe<Task>;
};

export enum DependencyRelationEnum {
  StartToStart = 'StartToStart',
  StartToFinish = 'StartToFinish',
  FinishToStart = 'FinishToStart',
  FinishToFinish = 'FinishToFinish'
}

export type WorkScheduleExclusionFilterByRelation = {
  dateRange?: Maybe<DateRangeEqualInput>;
};

export type ApprovalFilterByRelationApproverId = {
  statuses?: Maybe<ApprovalFinalStatusEnum>;
  updatedDate?: Maybe<DateTimeRangeInput>;
  pendingApprovers?: Maybe<Array<Scalars['ContactID']>>;
};

export enum ApprovalFinalStatusEnum {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected',
  Cancelled = 'Cancelled',
  Draft = 'Draft'
}

export type ApprovalFilterByRelationPendingApproverId = {
  statuses?: Maybe<ApprovalFinalStatusEnum>;
  updatedDate?: Maybe<DateTimeRangeInput>;
  approvers?: Maybe<Array<Scalars['ContactID']>>;
};

export type AccountFilter = {
  metadata?: Maybe<KeyValueInput>;
};

export type ApprovalFindManyFilter = {
  statuses?: Maybe<ApprovalFinalStatusEnum>;
  updatedDate?: Maybe<DateTimeRangeInput>;
  approvers?: Maybe<Array<Scalars['ContactID']>>;
  pendingApprovers?: Maybe<Array<Scalars['ContactID']>>;
};

export type AsyncJob = {
  __typename?: 'AsyncJob';
  id: Scalars['AsyncJobID'];
  status: AsyncJobStatusEnum;
  progressPercent?: Maybe<Scalars['Float']>;
  totalCount?: Maybe<Scalars['Int']>;
  processedCount?: Maybe<Scalars['Int']>;
  type: AsyncJobTypeEnum;
  result?: Maybe<Scalars['JSON']>;
  errorMessage?: Maybe<Scalars['String']>;
};


export enum AsyncJobStatusEnum {
  InQueue = 'InQueue',
  InProgress = 'InProgress',
  Completed = 'Completed',
  Failed = 'Failed'
}

export enum AsyncJobTypeEnum {
  CopyFolder = 'CopyFolder'
}

export type AttachmentFindManyFilter = {
  folderId?: Maybe<Scalars['FolderID']>;
  taskId?: Maybe<Scalars['TaskID']>;
  createdDate?: Maybe<DateTimeRangeInput>;
};

export type AuditLog = {
  __typename?: 'AuditLog';
  id: Scalars['AuditLogID'];
  operation: AuditLogOperationEnum;
  userId: Scalars['ContactID'];
  userEmail?: Maybe<Scalars['String']>;
  eventDate?: Maybe<Scalars['Date']>;
  ipAddress?: Maybe<Scalars['String']>;
  objectType?: Maybe<AuditLogObjectTypeEnum>;
  objectName?: Maybe<Scalars['String']>;
  objectId?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['JSON']>;
  user?: Maybe<Contact>;
};


export enum AuditLogOperationEnum {
  UserLoggedIn = 'UserLoggedIn',
  UserFailLogin = 'UserFailLogin',
  UserLogout = 'UserLogout',
  AdminLoggedInAsUser = 'AdminLoggedInAsUser',
  UserRoleChanged = 'UserRoleChanged',
  UserAdminPermissionsChanged = 'UserAdminPermissionsChanged',
  UserGrantAdmin = 'UserGrantAdmin',
  UserRevokeAdmin = 'UserRevokeAdmin',
  UserDeactivated = 'UserDeactivated',
  UserActivated = 'UserActivated',
  UsersAndGroupsExported = 'UsersAndGroupsExported',
  InvitationSend = 'InvitationSend',
  InvitationAccepted = 'InvitationAccepted',
  AttachUploaded = 'AttachUploaded',
  AttachDeleted = 'AttachDeleted',
  GroupCreated = 'GroupCreated',
  GroupMemberAdded = 'GroupMemberAdded',
  GroupMemberRemoved = 'GroupMemberRemoved',
  GroupRenamed = 'GroupRenamed',
  GroupDeleted = 'GroupDeleted',
  GroupParentAdded = 'GroupParentAdded',
  GroupParentRemoved = 'GroupParentRemoved',
  TaskParentAdded = 'TaskParentAdded',
  TaskParentRemoved = 'TaskParentRemoved',
  TaskShared = 'TaskShared',
  TaskUnshared = 'TaskUnshared',
  TaskAssigned = 'TaskAssigned',
  TaskUnassigned = 'TaskUnassigned',
  TaskDeleted = 'TaskDeleted',
  TaskErased = 'TaskErased',
  TaskCommentChanged = 'TaskCommentChanged',
  TaskCommentDeleted = 'TaskCommentDeleted',
  RecycleBinErased = 'RecycleBinErased',
  TaskStatusChanged = 'TaskStatusChanged',
  TaskDuplication = 'TaskDuplication',
  UserDeleted = 'UserDeleted',
  UserRestored = 'UserRestored',
  ApproverAdded = 'ApproverAdded',
  ApproverRemoved = 'ApproverRemoved',
  ApprovalDescriptionChanged = 'ApprovalDescriptionChanged',
  ApprovalDueDateChanged = 'ApprovalDueDateChanged',
  ApprovalCreated = 'ApprovalCreated',
  ApprovalFinished = 'ApprovalFinished',
  ApprovalCanceled = 'ApprovalCanceled',
  ApprovalDecisionMade = 'ApprovalDecisionMade',
  CustomFieldCreated = 'CustomFieldCreated',
  CustomFieldModified = 'CustomFieldModified',
  CustomFieldRemoved = 'CustomFieldRemoved',
  CustomFieldRestored = 'CustomFieldRestored',
  CustomFieldAddedToFolder = 'CustomFieldAddedToFolder',
  CustomFieldRemovedFromFolder = 'CustomFieldRemovedFromFolder',
  SecondFactorEnabled = 'SecondFactorEnabled',
  SecondFactorDisabled = 'SecondFactorDisabled',
  SecondFactorUsageReportCreated = 'SecondFactorUsageReportCreated',
  AuditReportCreated = 'AuditReportCreated',
  AccountBackupCreated = 'AccountBackupCreated',
  AccountModified = 'AccountModified',
  AccountDeleted = 'AccountDeleted',
  Oauth2AccessGranted = 'Oauth2AccessGranted',
  Oauth2AccessRevoked = 'Oauth2AccessRevoked',
  FeedCreated = 'FeedCreated',
  ExcelExportCreated = 'ExcelExportCreated',
  AccessAuditReportCsvExport = 'AccessAuditReportCsvExport',
  UserProfileUpdated = 'UserProfileUpdated',
  PasswordChanged = 'PasswordChanged',
  PasswordPolicyModified = 'PasswordPolicyModified',
  ApprovedIpRangesOrSubnetsChanged = 'ApprovedIpRangesOrSubnetsChanged',
  InvitationPolicyChanged = 'InvitationPolicyChanged',
  RequestFormCreated = 'RequestFormCreated',
  RequestFormModified = 'RequestFormModified',
  RequestFormDeleted = 'RequestFormDeleted',
  AccessRoleCreated = 'AccessRoleCreated',
  AccessRoleModified = 'AccessRoleModified',
  AccessRoleDeleted = 'AccessRoleDeleted',
  WorkflowCreated = 'WorkflowCreated',
  WorkflowDeleted = 'WorkflowDeleted',
  WorkflowModified = 'WorkflowModified',
  CalendarExternalLinksDeactivated = 'CalendarExternalLinksDeactivated',
  CalendarExternalLinksActivated = 'CalendarExternalLinksActivated',
  CalendarExternalLinkCreated = 'CalendarExternalLinkCreated',
  CalendarExternalLinkDeleted = 'CalendarExternalLinkDeleted',
  GuestReviewerInvited = 'GuestReviewerInvited',
  GuestReviewerChanged = 'GuestReviewerChanged',
  GuestReviewerRevoked = 'GuestReviewerRevoked',
  GuestReviewAccepted = 'GuestReviewAccepted',
  GuestReviewRejected = 'GuestReviewRejected',
  GuestReviewAccountSettingsChanged = 'GuestReviewAccountSettingsChanged',
  GanttSnapshotCreated = 'GanttSnapshotCreated',
  GanttSnapshotDeleted = 'GanttSnapshotDeleted',
  UserTaskGroupRolesChanged = 'UserTaskGroupRolesChanged',
  AccountDataExportRequested = 'AccountDataExportRequested',
  AccountDataExportGenerated = 'AccountDataExportGenerated',
  SamlSsoEnabled = 'SamlSSOEnabled',
  SamlSsoDisabled = 'SamlSSODisabled',
  SamlSsoSettingsChanged = 'SamlSSOSettingsChanged',
  SamlSsoMetadataChanged = 'SamlSSOMetadataChanged',
  SamlClearPasswordForSamlUsers = 'SamlClearPasswordForSamlUsers',
  AccessCodeGenerated = 'AccessCodeGenerated',
  AccessCodeAccepted = 'AccessCodeAccepted',
  AccessCodeDeclined = 'AccessCodeDeclined',
  ApprovedDomainsChanged = 'ApprovedDomainsChanged',
  SpaceCreated = 'SpaceCreated',
  SpaceDeleted = 'SpaceDeleted',
  SpaceArchivedUnarchived = 'SpaceArchivedUnarchived',
  UserJoinedSpace = 'UserJoinedSpace',
  UserLeftSpace = 'UserLeftSpace'
}

export enum AuditLogObjectTypeEnum {
  User = 'User',
  Account = 'Account',
  Task = 'Task',
  Folder = 'Folder',
  Project = 'Project',
  Comment = 'Comment',
  Attachment = 'Attachment',
  Invitation = 'Invitation',
  Group = 'Group',
  CustomField = 'CustomField',
  Oauth2Client = 'Oauth2Client',
  RequestForm = 'RequestForm',
  Workflow = 'Workflow',
  CalendarExternalLink = 'CalendarExternalLink',
  WorkspaceSnapshot = 'WorkspaceSnapshot',
  DataExport = 'DataExport',
  AccessRole = 'AccessRole',
  Space = 'Space'
}

export type AuditLogFilter = {
  eventDate?: Maybe<DateTimeRangeInput>;
  operations?: Maybe<AuditLogOperationEnum>;
};

export type Color = {
  __typename?: 'Color';
  name: Scalars['String'];
  hex: Scalars['String'];
};

export type CommentFindManyFilter = {
  folderId?: Maybe<Scalars['FolderID']>;
  taskId?: Maybe<Scalars['TaskID']>;
  updatedDate?: Maybe<DateTimeRangeInput>;
};

export type ContactFindManyFilter = {
  me?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<KeyValueInput>;
  deleted?: Maybe<Scalars['Boolean']>;
};

export type DataExport = {
  __typename?: 'DataExport';
  id: Scalars['DataExportID'];
  completedDate?: Maybe<Scalars['Date']>;
  status: DataExportStatusEnum;
  resources?: Maybe<Array<DataExportResource>>;
};


export enum DataExportStatusEnum {
  Scheduled = 'Scheduled',
  InProgress = 'InProgress',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
  Failed = 'Failed'
}

export type DataExportResource = {
  __typename?: 'DataExportResource';
  name: Scalars['String'];
  url: Scalars['String'];
};

export type DataExportSchema = {
  __typename?: 'DataExportSchema';
  id: Scalars['String'];
  alias: Scalars['String'];
  columns?: Maybe<DataExportSchemaColumn>;
};

export type DataExportSchemaColumn = {
  __typename?: 'DataExportSchemaColumn';
  id?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  dataType?: Maybe<Scalars['String']>;
  foreignKey?: Maybe<Scalars['JSON']>;
};

export enum DataSchemaVersion {
  V0 = 'V0',
  V1 = 'V1'
}

export type FolderFindManyFilter = {
  permalink?: Maybe<Scalars['String']>;
  descendants?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<KeyValueInput>;
  customField?: Maybe<CustomFieldFilterInput>;
  updatedDate?: Maybe<DateTimeRangeInput>;
  project?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  contractTypes?: Maybe<ProjectContractTypeEnum>;
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['GroupID'];
  accountId: Scalars['AccountID'];
  title?: Maybe<Scalars['String']>;
  memberIds?: Maybe<Array<Scalars['ContactID']>>;
  childIds?: Maybe<Array<Scalars['ContactID']>>;
  parentIds?: Maybe<Array<Scalars['ContactID']>>;
  avatarUrl?: Maybe<Scalars['String']>;
  myTeam?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Array<KeyValue>>;
  account?: Maybe<Account>;
  members?: Maybe<Array<Contact>>;
  childs?: Maybe<Array<Contact>>;
  parents?: Maybe<Array<Contact>>;
};


export type GroupFindManyFilter = {
  metadata?: Maybe<KeyValueInput>;
};

export type Invitation = {
  __typename?: 'Invitation';
  id: Scalars['InvitationID'];
  accountId: Scalars['AccountID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  status?: Maybe<InvitationStatusEnum>;
  inviterUserId?: Maybe<Scalars['ContactID']>;
  invitationDate?: Maybe<Scalars['String']>;
  resolvedDate?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  external?: Maybe<Scalars['Boolean']>;
  account?: Maybe<Account>;
  inviterUser?: Maybe<Contact>;
};


export enum InvitationStatusEnum {
  Pending = 'Pending',
  Accepted = 'Accepted',
  Declined = 'Declined',
  Cancelled = 'Cancelled'
}

export type Space = {
  __typename?: 'Space';
  id: Scalars['SpaceID'];
  title?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  accessType?: Maybe<SpaceAccessTypeEnum>;
  archived?: Maybe<Scalars['Boolean']>;
  tasks?: Maybe<Array<Task>>;
  folders?: Maybe<Array<Folder>>;
};


export type SpaceTasksArgs = {
  filter?: Maybe<TaskFilterByRelation>;
  sort?: Maybe<TaskFindManySortEnum>;
  limit?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  nextPageToken?: Maybe<Scalars['String']>;
};


export type SpaceFoldersArgs = {
  filter?: Maybe<FolderFilterByRelationSpaceId>;
};


export enum SpaceAccessTypeEnum {
  Personal = 'Personal',
  Private = 'Private',
  Public = 'Public'
}

export type FolderFilterByRelationSpaceId = {
  descendants?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<KeyValueInput>;
  customField?: Maybe<CustomFieldFilterInput>;
  updatedDate?: Maybe<DateTimeRangeInput>;
  project?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
};

export type SpaceFindManyFilter = {
  withArchived?: Maybe<Scalars['Boolean']>;
  userIsMember?: Maybe<Scalars['Boolean']>;
};

export type TaskFindManyFilter = {
  descendants?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  status?: Maybe<TaskStatusEnum>;
  importance?: Maybe<TaskImportanceEnum>;
  startDate?: Maybe<DateTimeRangeEqualInput>;
  dueDate?: Maybe<DateTimeRangeEqualInput>;
  scheduledDate?: Maybe<DateRangeEqualInput>;
  createdDate?: Maybe<DateTimeRangeInput>;
  updatedDate?: Maybe<DateTimeRangeInput>;
  completedDate?: Maybe<DateTimeRangeInput>;
  authors?: Maybe<Array<Scalars['ContactID']>>;
  responsibles?: Maybe<Array<Scalars['ContactID']>>;
  type?: Maybe<TaskDatesTypeEnum>;
  subTasks?: Maybe<Scalars['Boolean']>;
  customStatuses?: Maybe<Scalars['CustomStatusID']>;
  metadata?: Maybe<KeyValueInput>;
  customField?: Maybe<CustomFieldFilterInput>;
  folderId?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
};

export type TimelogFindManyFilter = {
  folderId?: Maybe<Scalars['FolderID']>;
  taskId?: Maybe<Scalars['TaskID']>;
  contactId?: Maybe<Scalars['ContactID']>;
  timelogCategoryId?: Maybe<Scalars['TimelogCategoryID']>;
  createdDate?: Maybe<DateTimeRangeInput>;
  updatedDate?: Maybe<DateTimeRangeInput>;
  trackedDate?: Maybe<DateTimeRangeInput>;
  me?: Maybe<Scalars['Boolean']>;
  descendants: Scalars['Boolean'];
  subTasks: Scalars['Boolean'];
  timelogCategories?: Maybe<Array<Scalars['TimelogCategoryID']>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ContactID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  profiles?: Maybe<Array<Maybe<User_Profiles>>>;
  avatarUrl?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  me?: Maybe<Scalars['Boolean']>;
  myTeam?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  workScheduleId?: Maybe<Scalars['WorkScheduleID']>;
  workSchedule?: Maybe<WorkSchedule>;
  tasksAuthored?: Maybe<Array<Task>>;
  tasksResponsible?: Maybe<Array<Task>>;
  scheduleExclusions?: Maybe<Array<WorkScheduleExclusion>>;
  approvals?: Maybe<Array<Approval>>;
  approvalsPending?: Maybe<Array<Approval>>;
};


export type UserTasksAuthoredArgs = {
  filter?: Maybe<TaskFilterByRelation>;
  sort?: Maybe<TaskFindManySortEnum>;
  limit?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  nextPageToken?: Maybe<Scalars['String']>;
};


export type UserTasksResponsibleArgs = {
  filter?: Maybe<TaskFilterByRelation>;
  sort?: Maybe<TaskFindManySortEnum>;
  limit?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  nextPageToken?: Maybe<Scalars['String']>;
};


export type UserScheduleExclusionsArgs = {
  filter?: Maybe<WorkScheduleExclusionFilterByRelation>;
};


export type UserApprovalsArgs = {
  filter?: Maybe<ApprovalFilterByRelationApproverId>;
  limit?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  nextPageToken?: Maybe<Scalars['String']>;
};


export type UserApprovalsPendingArgs = {
  filter?: Maybe<ApprovalFilterByRelationPendingApproverId>;
  limit?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  nextPageToken?: Maybe<Scalars['String']>;
};

export type User_Profiles = {
  __typename?: 'User_Profiles';
  accountId?: Maybe<Scalars['AccountID']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  external?: Maybe<Scalars['Boolean']>;
  admin?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<Scalars['Boolean']>;
  account?: Maybe<Account>;
};

export type UserScheduleExclusion = {
  __typename?: 'UserScheduleExclusion';
  id: Scalars['UserScheduleExclusionID'];
  userId: Scalars['ContactID'];
  fromDate: Scalars['DateYMD'];
  toDate: Scalars['DateYMD'];
  isWorkDays: Scalars['Boolean'];
  exclusionType: UserScheduleExclusionEnum;
  user?: Maybe<Contact>;
};


export enum UserScheduleExclusionEnum {
  Overtime = 'Overtime',
  VacationPto = 'VacationPTO',
  OtherNonWorking = 'OtherNonWorking'
}

export type UserScheduleExclusionFilter = {
  dateRange?: Maybe<DateRangeEqualInput>;
  userIds?: Maybe<Array<Scalars['ContactID']>>;
};

export type Version = {
  __typename?: 'Version';
  major: Scalars['Int'];
  minor: Scalars['Int'];
  full?: Maybe<Scalars['String']>;
};

export type WorkScheduleExclusionFilter = {
  dateRange?: Maybe<DateRangeEqualInput>;
};

export type Workflow = {
  __typename?: 'Workflow';
  id: Scalars['WorkflowID'];
  name: Scalars['String'];
  standard: Scalars['Boolean'];
  hidden: Scalars['Boolean'];
  customStatuses?: Maybe<Array<CustomStatus>>;
};


export type CustomStatus = {
  __typename?: 'CustomStatus';
  id: Scalars['CustomStatusID'];
  name: Scalars['String'];
  standardName: Scalars['Boolean'];
  color?: Maybe<StatusColorEnum>;
  standard: Scalars['Boolean'];
  group: TaskStatusEnum;
  hidden: Scalars['Boolean'];
};

export enum StatusColorEnum {
  Brown = 'Brown',
  Red = 'Red',
  Purple = 'Purple',
  Indigo = 'Indigo',
  DarkBlue = 'DarkBlue',
  Blue = 'Blue',
  Turquoise = 'Turquoise',
  DarkCyan = 'DarkCyan',
  Green = 'Green',
  YellowGreen = 'YellowGreen',
  Yellow = 'Yellow',
  Orange = 'Orange',
  Gray = 'Gray'
}

export type Mutation = {
  __typename?: 'Mutation';
  accountSetMetadata?: Maybe<Account>;
  approvalAddApprovers?: Maybe<Approval>;
  approvalAddAttachments?: Maybe<Approval>;
  approvalCancel?: Maybe<Approval>;
  approvalCreateForFolder?: Maybe<Approval>;
  approvalCreateForTask?: Maybe<Approval>;
  approvalRemoveApprovers?: Maybe<Approval>;
  approvalRemoveAttachments?: Maybe<Approval>;
  approvalUpdate?: Maybe<Approval>;
  commentCreateForFolder?: Maybe<Comment>;
  commentCreateForTask?: Maybe<Comment>;
  commentRemove?: Maybe<Comment>;
  commentUpdate?: Maybe<Comment>;
  contactUpdate?: Maybe<Contact>;
  customFieldCreate?: Maybe<CustomField>;
  customFieldUpdate?: Maybe<CustomField>;
  dataExportRefresh?: Maybe<DataExport>;
  dependencyCreate?: Maybe<Dependency>;
  dependencyRemove?: Maybe<Dependency>;
  dependencyUpdate?: Maybe<Dependency>;
  folderCopy?: Maybe<Folder>;
  folderCopyAsync?: Maybe<AsyncJob>;
  folderCreate?: Maybe<Folder>;
  folderParentsAdd?: Maybe<Folder>;
  folderParentsRemove?: Maybe<Folder>;
  folderRemove?: Maybe<Folder>;
  folderSharedsAdd?: Maybe<Folder>;
  folderSharedsRemove?: Maybe<Folder>;
  folderUpdate?: Maybe<Folder>;
  folderUpdateCustomFields?: Maybe<Folder>;
  groupAddMembers?: Maybe<Group>;
  groupCreate?: Maybe<Group>;
  groupRemoveMembers?: Maybe<Group>;
  groupUpdate?: Maybe<Group>;
  invitationCreate?: Maybe<Invitation>;
  invitationRemove?: Maybe<Invitation>;
  invitationResend?: Maybe<Invitation>;
  invitationUpdate?: Maybe<Invitation>;
  taskAddFollowers?: Maybe<Task>;
  taskAddParents?: Maybe<Task>;
  taskAddResponsibles?: Maybe<Task>;
  taskAddShareds?: Maybe<Task>;
  taskCreate?: Maybe<Task>;
  taskRemove?: Maybe<Task>;
  taskRemoveParents?: Maybe<Task>;
  taskRemoveResponsibles?: Maybe<Task>;
  taskRemoveShareds?: Maybe<Task>;
  taskUpdate?: Maybe<Task>;
  timelogCreate?: Maybe<Timelog>;
  timelogRemove?: Maybe<Timelog>;
  timelogUpdate?: Maybe<Timelog>;
  userScheduleExclusionCreate?: Maybe<UserScheduleExclusion>;
  userScheduleExclusionRemove?: Maybe<UserScheduleExclusion>;
  userScheduleExclusionUpdate?: Maybe<UserScheduleExclusion>;
  userUpdate?: Maybe<User>;
  workScheduleAddUsers?: Maybe<WorkSchedule>;
  workScheduleCreate?: Maybe<WorkSchedule>;
  workScheduleExclusionCreate?: Maybe<WorkScheduleExclusion>;
  workScheduleExclusionRemove?: Maybe<WorkScheduleExclusion>;
  workScheduleExclusionUpdate?: Maybe<WorkScheduleExclusion>;
  workScheduleRemove?: Maybe<WorkSchedule>;
  workScheduleRemoveUsers?: Maybe<WorkSchedule>;
  workScheduleUpdate?: Maybe<WorkSchedule>;
  workflowCreate?: Maybe<Workflow>;
  workflowUpdate?: Maybe<Workflow>;
};


export type MutationAccountSetMetadataArgs = {
  metadata: Array<KeyValueInput>;
};


export type MutationApprovalAddApproversArgs = {
  id: Scalars['ApprovalID'];
  approvers: Array<Scalars['ContactID']>;
};


export type MutationApprovalAddAttachmentsArgs = {
  id: Scalars['ApprovalID'];
  attachments: Array<Scalars['AttachmentID']>;
};


export type MutationApprovalCancelArgs = {
  id: Scalars['ApprovalID'];
};


export type MutationApprovalCreateForFolderArgs = {
  folderId: Scalars['FolderID'];
  approval: ApprovalCreateInput;
};


export type MutationApprovalCreateForTaskArgs = {
  taskId: Scalars['TaskID'];
  approval: ApprovalCreateInput;
};


export type MutationApprovalRemoveApproversArgs = {
  id: Scalars['ApprovalID'];
  approvers: Array<Scalars['ContactID']>;
};


export type MutationApprovalRemoveAttachmentsArgs = {
  id: Scalars['ApprovalID'];
  attachments: Array<Scalars['AttachmentID']>;
};


export type MutationApprovalUpdateArgs = {
  id: Scalars['ApprovalID'];
  approval: ApprovalUpdateInput;
};


export type MutationCommentCreateForFolderArgs = {
  folderId: Scalars['TaskID'];
  comment: CommentInput;
};


export type MutationCommentCreateForTaskArgs = {
  taskId: Scalars['TaskID'];
  comment: CommentInput;
};


export type MutationCommentRemoveArgs = {
  id: Scalars['CommentID'];
};


export type MutationCommentUpdateArgs = {
  id: Scalars['CommentID'];
  comment: CommentInput;
};


export type MutationContactUpdateArgs = {
  id: Scalars['ContactID'];
  metadata: Array<KeyValueInput>;
};


export type MutationCustomFieldCreateArgs = {
  customField: CustomFieldCreateInput;
};


export type MutationCustomFieldUpdateArgs = {
  id?: Maybe<Scalars['CustomFieldID']>;
  customField: CustomFieldInput;
};


export type MutationDependencyCreateArgs = {
  taskId: Scalars['TaskID'];
  dependency: DependencyCreateInput;
};


export type MutationDependencyRemoveArgs = {
  id: Scalars['DependencyID'];
};


export type MutationDependencyUpdateArgs = {
  id: Scalars['DependencyID'];
  dependency: DependencyUpdateInput;
};


export type MutationFolderCopyArgs = {
  folderId: Scalars['FolderID'];
  options: FolderCopyOptsInput;
};


export type MutationFolderCopyAsyncArgs = {
  folderId: Scalars['FolderID'];
  options: FolderCopyOptsInput;
};


export type MutationFolderCreateArgs = {
  parentFolderId: Scalars['FolderID'];
  folder: FolderCreateInput;
};


export type MutationFolderParentsAddArgs = {
  folderId: Scalars['FolderID'];
  parentFolderIds: Array<Scalars['FolderID']>;
};


export type MutationFolderParentsRemoveArgs = {
  folderId: Scalars['FolderID'];
  parentFolderIds: Array<Scalars['FolderID']>;
};


export type MutationFolderRemoveArgs = {
  id: Scalars['FolderID'];
};


export type MutationFolderSharedsAddArgs = {
  folderId: Scalars['FolderID'];
  sharedIds: Array<Scalars['ContactID']>;
};


export type MutationFolderSharedsRemoveArgs = {
  folderId: Scalars['FolderID'];
  sharedIds: Array<Scalars['ContactID']>;
};


export type MutationFolderUpdateArgs = {
  folderId: Scalars['FolderID'];
  folder: FolderUpdateInput;
};


export type MutationFolderUpdateCustomFieldsArgs = {
  folderIds: Array<Scalars['FolderID']>;
  customFields: Array<CustomFieldValueInput>;
};


export type MutationGroupAddMembersArgs = {
  id: Scalars['GroupID'];
  members: Array<Scalars['ContactID']>;
};


export type MutationGroupCreateArgs = {
  group: GroupCreateInput;
};


export type MutationGroupRemoveMembersArgs = {
  id: Scalars['GroupID'];
  members: Array<Scalars['ContactID']>;
};


export type MutationGroupUpdateArgs = {
  id: Scalars['GroupID'];
  group: GroupUpdateInput;
};


export type MutationInvitationCreateArgs = {
  group: InvitationCreateInput;
};


export type MutationInvitationRemoveArgs = {
  id: Scalars['InvitationID'];
};


export type MutationInvitationResendArgs = {
  id: Scalars['InvitationID'];
};


export type MutationInvitationUpdateArgs = {
  id: Scalars['InvitationID'];
  invitation: InvitationUpdateInput;
};


export type MutationTaskAddFollowersArgs = {
  id: Scalars['TaskID'];
  followers: Array<Scalars['ContactID']>;
};


export type MutationTaskAddParentsArgs = {
  id: Scalars['TaskID'];
  parents: Array<Scalars['FolderID']>;
};


export type MutationTaskAddResponsiblesArgs = {
  id: Scalars['TaskID'];
  responsibles: Array<Scalars['ContactID']>;
};


export type MutationTaskAddSharedsArgs = {
  id: Scalars['TaskID'];
  shareds: Array<Scalars['ContactID']>;
};


export type MutationTaskCreateArgs = {
  folderId: Scalars['FolderID'];
  task: TaskCreateInput;
};


export type MutationTaskRemoveArgs = {
  id: Scalars['TaskID'];
};


export type MutationTaskRemoveParentsArgs = {
  id: Scalars['TaskID'];
  parents: Array<Scalars['FolderID']>;
};


export type MutationTaskRemoveResponsiblesArgs = {
  id: Scalars['TaskID'];
  responsibles: Array<Scalars['ContactID']>;
};


export type MutationTaskRemoveSharedsArgs = {
  id: Scalars['TaskID'];
  shareds: Array<Scalars['ContactID']>;
};


export type MutationTaskUpdateArgs = {
  id: Scalars['TaskID'];
  task: TaskUpdateInput;
};


export type MutationTimelogCreateArgs = {
  taskId: Scalars['TaskID'];
  timelog: TimelogCreateInput;
};


export type MutationTimelogRemoveArgs = {
  id: Scalars['TimelogID'];
};


export type MutationTimelogUpdateArgs = {
  id: Scalars['TimelogID'];
  timelog: TimelogUpdateInput;
};


export type MutationUserScheduleExclusionCreateArgs = {
  exclusion: UserScheduleExclusionCreateInput;
};


export type MutationUserScheduleExclusionRemoveArgs = {
  id: Scalars['UserScheduleExclusionID'];
};


export type MutationUserScheduleExclusionUpdateArgs = {
  id: Scalars['UserScheduleExclusionID'];
  exclusion: UserScheduleExclusionUpdateInput;
};


export type MutationUserUpdateArgs = {
  id: Scalars['ContactID'];
  profile?: Maybe<UpdateUserProfileInput>;
};


export type MutationWorkScheduleAddUsersArgs = {
  id: Scalars['WorkScheduleID'];
  userIds: Array<Scalars['ContactID']>;
};


export type MutationWorkScheduleCreateArgs = {
  workschedule: WorkSchedulecreateInput;
};


export type MutationWorkScheduleExclusionCreateArgs = {
  workScheduleId: Scalars['WorkScheduleID'];
  exclusion: WorkScheduleExclusionCreateInput;
};


export type MutationWorkScheduleExclusionRemoveArgs = {
  id: Scalars['WorkScheduleExclusionID'];
};


export type MutationWorkScheduleExclusionUpdateArgs = {
  id: Scalars['WorkScheduleExclusionID'];
  exclusion: WorkScheduleExclusionUpdateInput;
};


export type MutationWorkScheduleRemoveArgs = {
  id: Scalars['WorkScheduleID'];
};


export type MutationWorkScheduleRemoveUsersArgs = {
  id: Scalars['WorkScheduleID'];
  userIds: Array<Scalars['ContactID']>;
};


export type MutationWorkScheduleUpdateArgs = {
  id: Scalars['WorkScheduleID'];
  workschedule: WorkScheduleUpdateInput;
};


export type MutationWorkflowCreateArgs = {
  workflow: WorkflowCreateInput;
};


export type MutationWorkflowUpdateArgs = {
  id: Scalars['WorkflowID'];
  workflow: WorkflowUpdateInput;
};

export type ApprovalCreateInput = {
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['DateYMD']>;
  approvers?: Maybe<Array<Scalars['ContactID']>>;
  attachments?: Maybe<Array<Scalars['AttachmentID']>>;
  autoFinishOnApprove?: Maybe<Scalars['Boolean']>;
  autoFinishOnReject?: Maybe<Scalars['Boolean']>;
};

export type ApprovalUpdateInput = {
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['DateYMD']>;
  autoFinishOnApprove: Scalars['Boolean'];
  autoFinishOnReject: Scalars['Boolean'];
};

export type CommentInput = {
  text: Scalars['String'];
  plainText: Scalars['Boolean'];
};

export type CustomFieldCreateInput = {
  title: Scalars['String'];
  type: CustomFieldTypeEnum;
  sharedIds?: Maybe<Array<Scalars['ContactID']>>;
  settings?: Maybe<CustomFieldSettingsInput>;
};

export type CustomFieldSettingsInput = {
  inheritanceType?: Maybe<CustomFieldInheritanceEnum>;
  decimalPlaces?: Maybe<Scalars['Int']>;
  useThousandsSeparator?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<CurrencyEnum>;
  aggregation?: Maybe<CustomFieldAggregationEnum>;
  values?: Maybe<Array<Scalars['String']>>;
  allowOtherValues?: Maybe<Scalars['Boolean']>;
  contacts?: Maybe<Array<Scalars['ContactID']>>;
};

export type CustomFieldInput = {
  title: Scalars['String'];
  type?: Maybe<CustomFieldTypeEnum>;
  sharedIds?: Maybe<Array<Scalars['ContactID']>>;
  settings?: Maybe<CustomFieldSettingsInput>;
};

export type DependencyCreateInput = {
  predecessorId?: Maybe<Scalars['TaskID']>;
  successorId?: Maybe<Scalars['TaskID']>;
  relationType: DependencyRelationEnum;
};

export type DependencyUpdateInput = {
  relationType: DependencyRelationEnum;
};

export type FolderCopyOptsInput = {
  parent: Scalars['FolderID'];
  title: Scalars['String'];
  titlePrefix?: Maybe<Scalars['String']>;
  copyDescriptions: Scalars['Boolean'];
  copyResponsibles: Scalars['Boolean'];
  addResponsibles?: Maybe<Array<Scalars['ContactID']>>;
  removeResponsibles?: Maybe<Array<Scalars['ContactID']>>;
  copyCustomFields: Scalars['Boolean'];
  copyCustomStatuses: Scalars['Boolean'];
  copyStatuses: Scalars['Boolean'];
  copyParents: Scalars['Boolean'];
  rescheduleDate?: Maybe<Scalars['DateYMD']>;
  rescheduleMode?: Maybe<FolderCopyResheduleMod>;
  entryLimit?: Maybe<Scalars['Int']>;
};

export enum FolderCopyResheduleMod {
  Start = 'Start',
  End = 'End'
}

export type FolderCreateInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  shareds?: Maybe<Array<Scalars['ContactID']>>;
  metadata?: Maybe<Array<KeyValueInput>>;
  customFields?: Maybe<Array<CustomFieldValueInput>>;
  customColumns?: Maybe<Array<Scalars['CustomFieldID']>>;
  project?: Maybe<ProjectDetailsInput>;
};

export type CustomFieldValueInput = {
  id?: Maybe<Scalars['CustomFieldID']>;
  value?: Maybe<Scalars['String']>;
};

export type ProjectDetailsInput = {
  ownerIds: Array<Scalars['ContactID']>;
  status?: Maybe<ProjectStatusEnum>;
  customStatusId?: Maybe<Scalars['CustomStatusID']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  contractType?: Maybe<ProjectContractTypeEnum>;
};

export type FolderUpdateInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<KeyValueInput>>;
  customFields?: Maybe<Array<CustomFieldValueInput>>;
  customColumns?: Maybe<Array<Scalars['CustomFieldID']>>;
  project?: Maybe<ProjectDetailsInput>;
};

export type GroupCreateInput = {
  title: Scalars['String'];
  members?: Maybe<Array<Maybe<Scalars['ContactID']>>>;
  parent?: Maybe<Scalars['ContactID']>;
  avatar?: Maybe<GroupAvatarInput>;
  metadata?: Maybe<Array<KeyValueInput>>;
};

export type GroupAvatarInput = {
  letters: Scalars['String'];
  color: Scalars['String'];
};

export type GroupUpdateInput = {
  title?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['ContactID']>;
  avatar?: Maybe<GroupAvatarInput>;
  metadata?: Maybe<Array<KeyValueInput>>;
};

export type InvitationCreateInput = {
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  external?: Maybe<Scalars['Boolean']>;
  subject?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type InvitationUpdateInput = {
  role?: Maybe<UserRoleEnum>;
  external?: Maybe<Scalars['Boolean']>;
};

export type TaskCreateInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  status?: Maybe<TaskStatusEnum>;
  importance?: Maybe<TaskImportanceEnum>;
  dates?: Maybe<TaskDatesInput>;
  shareds?: Maybe<Array<Scalars['ContactID']>>;
  parents?: Maybe<Array<Scalars['FolderID']>>;
  responsibles?: Maybe<Array<Scalars['ContactID']>>;
  followers?: Maybe<Array<Scalars['ContactID']>>;
  follow?: Maybe<Scalars['Boolean']>;
  priorityBefore?: Maybe<Scalars['TaskID']>;
  priorityAfter?: Maybe<Scalars['TaskID']>;
  superTasks?: Maybe<Array<Scalars['TaskID']>>;
  metadata?: Maybe<Array<KeyValueInput>>;
  customFields?: Maybe<Array<CustomFieldValueInput>>;
  customStatus?: Maybe<Scalars['CustomStatusID']>;
};

export type TaskDatesInput = {
  type?: Maybe<TaskDatesTypeEnum>;
  duration?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['String']>;
  due?: Maybe<Scalars['String']>;
  workOnWeekends?: Maybe<Scalars['Boolean']>;
};

export type TaskUpdateInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<TaskStatusEnum>;
  importance?: Maybe<TaskImportanceEnum>;
  dates?: Maybe<TaskDatesInput>;
  follow?: Maybe<Scalars['Boolean']>;
  priorityBefore?: Maybe<Scalars['TaskID']>;
  priorityAfter?: Maybe<Scalars['TaskID']>;
  superTasks?: Maybe<Array<Scalars['TaskID']>>;
  metadata?: Maybe<Array<KeyValueInput>>;
  customFields?: Maybe<Array<CustomFieldValueInput>>;
  customStatus?: Maybe<Scalars['CustomStatusID']>;
};

export type TimelogCreateInput = {
  comment: Scalars['String'];
  hours: Scalars['Int'];
  trackedDate: Scalars['DateYMD'];
  plainText?: Maybe<Scalars['Boolean']>;
  categoryId?: Maybe<Scalars['TimelogCategoryID']>;
};

export type TimelogUpdateInput = {
  comment?: Maybe<Scalars['String']>;
  hours?: Maybe<Scalars['Int']>;
  trackedDate?: Maybe<Scalars['DateYMD']>;
  plainText?: Maybe<Scalars['Boolean']>;
  categoryId?: Maybe<Scalars['TimelogCategoryID']>;
};

export type UserScheduleExclusionCreateInput = {
  userId: Scalars['ContactID'];
  fromDate: Scalars['DateYMD'];
  toDate: Scalars['DateYMD'];
  exclusionType: Array<UserScheduleExclusionEnum>;
};

export type UserScheduleExclusionUpdateInput = {
  fromDate: Scalars['DateYMD'];
  toDate: Scalars['DateYMD'];
  exclusionType: Array<UserScheduleExclusionEnum>;
};

export type UpdateUserProfileInput = {
  accountId?: Maybe<Scalars['AccountID']>;
  role?: Maybe<UserRoleEnum>;
  external?: Maybe<Scalars['Boolean']>;
};

export type WorkSchedulecreateInput = {
  title?: Maybe<Scalars['String']>;
  workweek?: Maybe<Array<WorkWeekInput>>;
  addUsers?: Maybe<Array<Scalars['ContactID']>>;
};

export type WorkWeekInput = {
  dayOfWeek: WeekDayEnum;
  isWorkDay: Scalars['Boolean'];
};

export type WorkScheduleExclusionCreateInput = {
  fromDate: Scalars['DateYMD'];
  toDate: Scalars['DateYMD'];
  exclusionType: Array<WorkScheduleExclusionEnum>;
};

export type WorkScheduleExclusionUpdateInput = {
  fromDate?: Maybe<Scalars['DateYMD']>;
  toDate?: Maybe<Scalars['DateYMD']>;
  exclusionType?: Maybe<Array<WorkScheduleExclusionEnum>>;
};

export type WorkScheduleUpdateInput = {
  title?: Maybe<Scalars['String']>;
  workweek?: Maybe<Array<WorkWeekInput>>;
};

export type WorkflowCreateInput = {
  name: Scalars['String'];
};

export type WorkflowUpdateInput = {
  name?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  customStatus?: Maybe<Scalars['JSON']>;
};

export type TaskListQueryVariables = {};


export type TaskListQuery = (
  { __typename?: 'Query' }
  & { taskFindMany?: Maybe<Array<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'parentIds'>
  )>> }
);

export type TaskRemoveMutationVariables = {};


export type TaskRemoveMutation = (
  { __typename?: 'Mutation' }
  & { taskRemove?: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'description'>
  )> }
);

export type TaskUpdateMutationVariables = {};


export type TaskUpdateMutation = (
  { __typename?: 'Mutation' }
  & { taskUpdate?: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title'>
  )> }
);

export type TaskAddParentsMutationVariables = {};


export type TaskAddParentsMutation = (
  { __typename?: 'Mutation' }
  & { taskAddParents?: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'parentIds'>
  )> }
);

export type TaskRemoveParentsMutationVariables = {};


export type TaskRemoveParentsMutation = (
  { __typename?: 'Mutation' }
  & { taskRemoveParents?: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'parentIds'>
  )> }
);

export type ContactsQueryVariables = {};


export type ContactsQuery = (
  { __typename?: 'Query' }
  & { contactFindMany?: Maybe<Array<(
    { __typename?: 'Contact' }
    & Pick<Contact, 'id' | 'firstName' | 'lastName'>
    & { metadata?: Maybe<Array<(
      { __typename?: 'KeyValue' }
      & Pick<KeyValue, 'key' | 'value'>
    )>>, profiles?: Maybe<Array<Maybe<(
      { __typename?: 'Contact_Profiles' }
      & Pick<Contact_Profiles, 'accountId' | 'email' | 'role' | 'external'>
    )>>> }
  )>> }
);

export type Contacts2QueryVariables = {};


export type Contacts2Query = (
  { __typename?: 'Query' }
  & { contactByIds?: Maybe<Array<(
    { __typename?: 'Contact' }
    & Pick<Contact, 'id' | 'firstName' | 'lastName'>
    & { metadata?: Maybe<Array<(
      { __typename?: 'KeyValue' }
      & Pick<KeyValue, 'key' | 'value'>
    )>> }
  )>> }
);

export type ContactUpdateMutationVariables = {};


export type ContactUpdateMutation = (
  { __typename?: 'Mutation' }
  & { contactUpdate?: Maybe<(
    { __typename?: 'Contact' }
    & Pick<Contact, 'id' | 'firstName' | 'lastName'>
    & { metadata?: Maybe<Array<(
      { __typename?: 'KeyValue' }
      & Pick<KeyValue, 'key' | 'value'>
    )>> }
  )> }
);

export type UserUpdateMutationVariables = {};


export type UserUpdateMutation = (
  { __typename?: 'Mutation' }
  & { userUpdate?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'lastName' | 'firstName'>
    & { profiles?: Maybe<Array<Maybe<(
      { __typename?: 'User_Profiles' }
      & Pick<User_Profiles, 'email' | 'external'>
    )>>> }
  )> }
);

export type GroupFindManyQueryVariables = {};


export type GroupFindManyQuery = (
  { __typename?: 'Query' }
  & { groupFindMany?: Maybe<Array<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'title' | 'myTeam'>
    & { metadata?: Maybe<Array<(
      { __typename?: 'KeyValue' }
      & Pick<KeyValue, 'key' | 'value'>
    )>> }
  )>> }
);

export type GroupByIdQueryVariables = {};


export type GroupByIdQuery = (
  { __typename?: 'Query' }
  & { groupById?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'title' | 'myTeam'>
    & { metadata?: Maybe<Array<(
      { __typename?: 'KeyValue' }
      & Pick<KeyValue, 'key' | 'value'>
    )>> }
  )> }
);

export type GroupCreateMutationVariables = {};


export type GroupCreateMutation = (
  { __typename?: 'Mutation' }
  & { groupCreate?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'title' | 'myTeam'>
    & { metadata?: Maybe<Array<(
      { __typename?: 'KeyValue' }
      & Pick<KeyValue, 'key' | 'value'>
    )>> }
  )> }
);

export type GetAccountDataQueryVariables = {};


export type GetAccountDataQuery = (
  { __typename?: 'Query' }
  & { account?: Maybe<(
    { __typename?: 'Account' }
    & Pick<Account, 'id' | 'name' | 'dateFormat' | 'firstDayOfWeek' | 'workDays' | 'rootFolderId' | 'recycleBinId' | 'createdDate' | 'joinedDate'>
    & { subscription?: Maybe<(
      { __typename?: 'AccountSubscription' }
      & Pick<AccountSubscription, 'type' | 'suspended' | 'paid' | 'userLimit'>
    )>, metadata?: Maybe<Array<(
      { __typename?: 'KeyValue' }
      & Pick<KeyValue, 'key' | 'value'>
    )>>, customFields?: Maybe<Array<(
      { __typename?: 'CustomField' }
      & Pick<CustomField, 'id' | 'accountId' | 'title' | 'type' | 'sharedIds'>
    )>> }
  )> }
);

export type SetAccountMetaMutationVariables = {};


export type SetAccountMetaMutation = (
  { __typename?: 'Mutation' }
  & { accountSetMetadata?: Maybe<(
    { __typename?: 'Account' }
    & Pick<Account, 'id' | 'name'>
    & { metadata?: Maybe<Array<(
      { __typename?: 'KeyValue' }
      & Pick<KeyValue, 'key' | 'value'>
    )>> }
  )> }
);

export type GetFoldersQueryVariables = {};


export type GetFoldersQuery = (
  { __typename?: 'Query' }
  & { folderFindMany?: Maybe<Array<(
    { __typename?: 'Folder' }
    & Pick<Folder, 'id' | 'title' | 'color' | 'childIds' | 'scope' | 'space' | 'hasAttachments' | 'attachmentCount' | 'description' | 'briefDescription' | 'customColumnIds' | 'superParentIds'>
    & { project?: Maybe<(
      { __typename?: 'ProjectDetails' }
      & Pick<ProjectDetails, 'authorId' | 'ownerIds' | 'status' | 'customStatusId' | 'startDate' | 'endDate' | 'createdDate' | 'completedDate' | 'contractType'>
    )>, metadata?: Maybe<Array<(
      { __typename?: 'KeyValue' }
      & Pick<KeyValue, 'key' | 'value'>
    )>>, customFields?: Maybe<Array<(
      { __typename?: 'CustomField' }
      & Pick<CustomField, 'id' | 'title'>
    )>> }
  )>> }
);

export type FolderListQueryVariables = {};


export type FolderListQuery = (
  { __typename?: 'Query' }
  & { folderFindMany?: Maybe<Array<(
    { __typename?: 'Folder' }
    & Pick<Folder, 'id' | 'title' | 'superParentIds'>
  )>> }
);

export type CreateFolderMutationVariables = {};


export type CreateFolderMutation = (
  { __typename?: 'Mutation' }
  & { folderCreate?: Maybe<(
    { __typename?: 'Folder' }
    & Pick<Folder, 'id' | 'title' | 'description'>
  )> }
);

export type UpdateFolderMutationVariables = {};


export type UpdateFolderMutation = (
  { __typename?: 'Mutation' }
  & { folderUpdate?: Maybe<(
    { __typename?: 'Folder' }
    & Pick<Folder, 'id' | 'title'>
  )> }
);

export type DeleteFolderMutationVariables = {};


export type DeleteFolderMutation = (
  { __typename?: 'Mutation' }
  & { folderRemove?: Maybe<(
    { __typename?: 'Folder' }
    & Pick<Folder, 'id' | 'title'>
  )> }
);

export type CommentListQueryVariables = {};


export type CommentListQuery = (
  { __typename?: 'Query' }
  & { commentFindMany?: Maybe<Array<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'authorId' | 'text' | 'createdDate' | 'taskId' | 'folderId'>
  )>> }
);

export type CommentByIdQueryVariables = {};


export type CommentByIdQuery = (
  { __typename?: 'Query' }
  & { commentByIds?: Maybe<Array<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'authorId' | 'text' | 'createdDate'>
  )>> }
);

export type CreateCommentMutationVariables = {};


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { commentCreateForTask?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'text' | 'createdDate' | 'authorId'>
  )> }
);

export type UpdateCommentMutationVariables = {};


export type UpdateCommentMutation = (
  { __typename?: 'Mutation' }
  & { commentUpdate?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'text' | 'createdDate' | 'authorId'>
  )> }
);

export type RemoveCommentMutationVariables = {};


export type RemoveCommentMutation = (
  { __typename?: 'Mutation' }
  & { commentRemove?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id'>
  )> }
);

export type GetDataQueryVariables = {};


export type GetDataQuery = (
  { __typename?: 'Query' }
  & { contactFindMany?: Maybe<Array<(
    { __typename?: 'Contact' }
    & Pick<Contact, 'id' | 'firstName' | 'lastName'>
  )>>, taskFindMany?: Maybe<Array<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title'>
  )>> }
);

export type CreateApprovalMutationVariables = {};


export type CreateApprovalMutation = (
  { __typename?: 'Mutation' }
  & { approvalCreateForTask?: Maybe<(
    { __typename?: 'Approval' }
    & Pick<Approval, 'id' | 'authorId' | 'title' | 'description'>
    & { decisions?: Maybe<Array<(
      { __typename?: 'ApprovalDecision' }
      & Pick<ApprovalDecision, 'approverId' | 'comment' | 'status' | 'updatedDate'>
    )>> }
  )> }
);

export type GetTasksQueryVariables = {};


export type GetTasksQuery = (
  { __typename?: 'Query' }
  & { taskFindMany?: Maybe<Array<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title'>
    & { account?: Maybe<(
      { __typename?: 'Account' }
      & Pick<Account, 'dateFormat'>
      & { customFields?: Maybe<Array<(
        { __typename?: 'CustomField' }
        & Pick<CustomField, 'title'>
      )>> }
    )>, authors?: Maybe<Array<(
      { __typename?: 'Contact' }
      & Pick<Contact, 'firstName' | 'lastName'>
      & { workSchedule?: Maybe<(
        { __typename?: 'WorkSchedule' }
        & Pick<WorkSchedule, 'workweek' | 'scheduleType' | 'title'>
      )> }
    )>> }
  )>> }
);


export const TaskListDocument = gql`
    query taskList {
  taskFindMany(sort: UPDATED_DATE_DESC) {
    id
    title
    parentIds
  }
}
    `;
export const TaskRemoveDocument = gql`
    mutation taskRemove {
  taskRemove(id: "IEADMUW4KQPBJ2AJ") {
    id
    title
    description
  }
}
    `;
export const TaskUpdateDocument = gql`
    mutation taskUpdate {
  taskUpdate(id: "IEADMUW4KQOE33NJ", task: {title: "How-To Guide: Personal Space 123"}) {
    id
    title
  }
}
    `;
export const TaskAddParentsDocument = gql`
    mutation taskAddParents {
  taskAddParents(id: "IEADMUW4KQOE33NJ", parents: "IEADMUW4I4OE37IV") {
    id
    title
    parentIds
  }
}
    `;
export const TaskRemoveParentsDocument = gql`
    mutation taskRemoveParents {
  taskRemoveParents(id: "IEADMUW4KQOE33NJ", parents: "IEADMUW4I4OE37IV") {
    id
    title
    parentIds
  }
}
    `;
export const ContactsDocument = gql`
    query contacts {
  contactFindMany {
    id
    firstName
    lastName
    metadata {
      key
      value
    }
    profiles {
      accountId
      email
      role
      external
    }
  }
}
    `;
export const Contacts2Document = gql`
    query contacts2 {
  contactByIds(ids: ["KX73NL7C", "KUAHNM4I"]) {
    id
    firstName
    lastName
    metadata {
      key
      value
    }
  }
}
    `;
export const ContactUpdateDocument = gql`
    mutation contactUpdate {
  contactUpdate(id: "KX73NL7C", metadata: [{key: "a", value: "123"}]) {
    id
    firstName
    lastName
    metadata {
      key
      value
    }
  }
}
    `;
export const UserUpdateDocument = gql`
    mutation userUpdate {
  userUpdate(id: "KUAHNM4I", profile: {accountId: "IEADMUW4", role: User, external: false}) {
    lastName
    firstName
    profiles {
      email
      external
    }
  }
}
    `;
export const GroupFindManyDocument = gql`
    query groupFindMany {
  groupFindMany(filter: {metadata: {key: "a"}}) {
    id
    title
    myTeam
    metadata {
      key
      value
    }
  }
}
    `;
export const GroupByIdDocument = gql`
    query groupById {
  groupById(id: "KX73NL7C") {
    id
    title
    myTeam
    metadata {
      key
      value
    }
  }
}
    `;
export const GroupCreateDocument = gql`
    mutation groupCreate {
  groupCreate(group: {title: "GraphQL group", metadata: [{key: "a", value: "2345"}, {key: "b", value: "ok"}]}) {
    id
    title
    myTeam
    metadata {
      key
      value
    }
  }
}
    `;
export const GetAccountDataDocument = gql`
    query getAccountData {
  account {
    id
    name
    dateFormat
    firstDayOfWeek
    workDays
    rootFolderId
    recycleBinId
    createdDate
    subscription {
      type
      suspended
      paid
      userLimit
    }
    metadata {
      key
      value
    }
    customFields {
      id
      accountId
      title
      type
      sharedIds
    }
    joinedDate
  }
}
    `;
export const SetAccountMetaDocument = gql`
    mutation setAccountMeta {
  accountSetMetadata(metadata: [{key: "aa", value: "111"}, {key: "bb", value: "222"}]) {
    id
    name
    metadata {
      key
      value
    }
  }
}
    `;
export const GetFoldersDocument = gql`
    query getFolders {
  folderFindMany(filter: {descendants: false}) {
    id
    title
    color
    childIds
    scope
    project {
      authorId
      ownerIds
      status
      customStatusId
      startDate
      endDate
      createdDate
      completedDate
      contractType
    }
    space
    metadata {
      key
      value
    }
    hasAttachments
    attachmentCount
    description
    briefDescription
    customFields {
      id
      title
    }
    customColumnIds
    superParentIds
  }
}
    `;
export const FolderListDocument = gql`
    query FolderList {
  folderFindMany {
    id
    title
    superParentIds
  }
}
    `;
export const CreateFolderDocument = gql`
    mutation createFolder {
  folderCreate(parentFolderId: "IEADMUW4I4OE37IV", folder: {title: "Test subfolder", description: "Descrription"}) {
    id
    title
    description
  }
}
    `;
export const UpdateFolderDocument = gql`
    mutation updateFolder {
  folderUpdate(folderId: "IEADMUW4I4PGZ4WI", folder: {title: "Test subfolder1234"}) {
    id
    title
  }
}
    `;
export const DeleteFolderDocument = gql`
    mutation deleteFolder {
  folderRemove(id: "IEADMUW4I4PGZ4WI") {
    id
    title
  }
}
    `;
export const CommentListDocument = gql`
    query CommentList {
  commentFindMany(filter: {taskId: "IEADMUW4KQOE4AVG"}) {
    id
    authorId
    text
    createdDate
    taskId
    folderId
  }
}
    `;
export const CommentByIdDocument = gql`
    query CommentByID {
  commentByIds(ids: ["IEADMUW4IMBMTNBS"]) {
    id
    authorId
    text
    createdDate
  }
}
    `;
export const CreateCommentDocument = gql`
    mutation createComment {
  commentCreateForTask(taskId: "IEADMUW4KQOE4AVG", comment: {text: "Comment from <b>GraphQL</b>"}) {
    id
    text
    createdDate
    authorId
  }
}
    `;
export const UpdateCommentDocument = gql`
    mutation updateComment {
  commentUpdate(id: "IEADMUW4IMBMTNGJ", comment: {text: "Comment from <b>GraphQL!!!!!</b>"}) {
    id
    text
    createdDate
    authorId
  }
}
    `;
export const RemoveCommentDocument = gql`
    mutation removeComment {
  commentRemove(id: "IEADMUW4IMBMTNKZ") {
    id
  }
}
    `;
export const GetDataDocument = gql`
    query getData {
  contactFindMany {
    id
    firstName
    lastName
  }
  taskFindMany(limit: 100) {
    id
    title
  }
}
    `;
export const CreateApprovalDocument = gql`
    mutation createApproval {
  approvalCreateForTask(taskId: "IEADMUW4KQOE4ATL", approval: {description: "Test approval", approvers: ["KUAHMNRA", "KUAHNM4I"]}) {
    id
    authorId
    title
    description
    decisions {
      approverId
      comment
      status
      updatedDate
    }
  }
}
    `;
export const GetTasksDocument = gql`
    query getTasks {
  taskFindMany(limit: 2) {
    id
    title
    account {
      dateFormat
      customFields {
        title
      }
    }
    authors {
      firstName
      lastName
      workSchedule {
        workweek
        scheduleType
        title
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    taskList(variables?: TaskListQueryVariables): Promise<TaskListQuery> {
      return withWrapper(() => client.request<TaskListQuery>(print(TaskListDocument), variables));
    },
    taskRemove(variables?: TaskRemoveMutationVariables): Promise<TaskRemoveMutation> {
      return withWrapper(() => client.request<TaskRemoveMutation>(print(TaskRemoveDocument), variables));
    },
    taskUpdate(variables?: TaskUpdateMutationVariables): Promise<TaskUpdateMutation> {
      return withWrapper(() => client.request<TaskUpdateMutation>(print(TaskUpdateDocument), variables));
    },
    taskAddParents(variables?: TaskAddParentsMutationVariables): Promise<TaskAddParentsMutation> {
      return withWrapper(() => client.request<TaskAddParentsMutation>(print(TaskAddParentsDocument), variables));
    },
    taskRemoveParents(variables?: TaskRemoveParentsMutationVariables): Promise<TaskRemoveParentsMutation> {
      return withWrapper(() => client.request<TaskRemoveParentsMutation>(print(TaskRemoveParentsDocument), variables));
    },
    contacts(variables?: ContactsQueryVariables): Promise<ContactsQuery> {
      return withWrapper(() => client.request<ContactsQuery>(print(ContactsDocument), variables));
    },
    contacts2(variables?: Contacts2QueryVariables): Promise<Contacts2Query> {
      return withWrapper(() => client.request<Contacts2Query>(print(Contacts2Document), variables));
    },
    contactUpdate(variables?: ContactUpdateMutationVariables): Promise<ContactUpdateMutation> {
      return withWrapper(() => client.request<ContactUpdateMutation>(print(ContactUpdateDocument), variables));
    },
    userUpdate(variables?: UserUpdateMutationVariables): Promise<UserUpdateMutation> {
      return withWrapper(() => client.request<UserUpdateMutation>(print(UserUpdateDocument), variables));
    },
    groupFindMany(variables?: GroupFindManyQueryVariables): Promise<GroupFindManyQuery> {
      return withWrapper(() => client.request<GroupFindManyQuery>(print(GroupFindManyDocument), variables));
    },
    groupById(variables?: GroupByIdQueryVariables): Promise<GroupByIdQuery> {
      return withWrapper(() => client.request<GroupByIdQuery>(print(GroupByIdDocument), variables));
    },
    groupCreate(variables?: GroupCreateMutationVariables): Promise<GroupCreateMutation> {
      return withWrapper(() => client.request<GroupCreateMutation>(print(GroupCreateDocument), variables));
    },
    getAccountData(variables?: GetAccountDataQueryVariables): Promise<GetAccountDataQuery> {
      return withWrapper(() => client.request<GetAccountDataQuery>(print(GetAccountDataDocument), variables));
    },
    setAccountMeta(variables?: SetAccountMetaMutationVariables): Promise<SetAccountMetaMutation> {
      return withWrapper(() => client.request<SetAccountMetaMutation>(print(SetAccountMetaDocument), variables));
    },
    getFolders(variables?: GetFoldersQueryVariables): Promise<GetFoldersQuery> {
      return withWrapper(() => client.request<GetFoldersQuery>(print(GetFoldersDocument), variables));
    },
    FolderList(variables?: FolderListQueryVariables): Promise<FolderListQuery> {
      return withWrapper(() => client.request<FolderListQuery>(print(FolderListDocument), variables));
    },
    createFolder(variables?: CreateFolderMutationVariables): Promise<CreateFolderMutation> {
      return withWrapper(() => client.request<CreateFolderMutation>(print(CreateFolderDocument), variables));
    },
    updateFolder(variables?: UpdateFolderMutationVariables): Promise<UpdateFolderMutation> {
      return withWrapper(() => client.request<UpdateFolderMutation>(print(UpdateFolderDocument), variables));
    },
    deleteFolder(variables?: DeleteFolderMutationVariables): Promise<DeleteFolderMutation> {
      return withWrapper(() => client.request<DeleteFolderMutation>(print(DeleteFolderDocument), variables));
    },
    CommentList(variables?: CommentListQueryVariables): Promise<CommentListQuery> {
      return withWrapper(() => client.request<CommentListQuery>(print(CommentListDocument), variables));
    },
    CommentByID(variables?: CommentByIdQueryVariables): Promise<CommentByIdQuery> {
      return withWrapper(() => client.request<CommentByIdQuery>(print(CommentByIdDocument), variables));
    },
    createComment(variables?: CreateCommentMutationVariables): Promise<CreateCommentMutation> {
      return withWrapper(() => client.request<CreateCommentMutation>(print(CreateCommentDocument), variables));
    },
    updateComment(variables?: UpdateCommentMutationVariables): Promise<UpdateCommentMutation> {
      return withWrapper(() => client.request<UpdateCommentMutation>(print(UpdateCommentDocument), variables));
    },
    removeComment(variables?: RemoveCommentMutationVariables): Promise<RemoveCommentMutation> {
      return withWrapper(() => client.request<RemoveCommentMutation>(print(RemoveCommentDocument), variables));
    },
    getData(variables?: GetDataQueryVariables): Promise<GetDataQuery> {
      return withWrapper(() => client.request<GetDataQuery>(print(GetDataDocument), variables));
    },
    createApproval(variables?: CreateApprovalMutationVariables): Promise<CreateApprovalMutation> {
      return withWrapper(() => client.request<CreateApprovalMutation>(print(CreateApprovalDocument), variables));
    },
    getTasks(variables?: GetTasksQueryVariables): Promise<GetTasksQuery> {
      return withWrapper(() => client.request<GetTasksQuery>(print(GetTasksDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;