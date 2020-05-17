import { schemaComposer } from 'graphql-compose';
import { ProjectStatusEnum, ContractTypeEnum } from '../Enums';
import { ContactID, CustomStatusID } from '../Scalars';

export const ProjectDetails = schemaComposer.createObjectTC({
  name: 'ProjectDetails',
  fields: {
    authorId: {
      type: ContactID,
      description: 'ID of user who created project',
    },
    ownerIds: {
      type: ContactID.NonNull.List.NonNull,
      description: 'List of project owner IDs',
    },
    status: {
      type: ProjectStatusEnum,
      description: 'Project status',
    },
    customStatusId: {
      type: CustomStatusID,
      description: 'Custom status ID. Empty if status is not Custom',
    },
    startDate: {
      type: 'String',
      description: 'Project start date. Format: yyyy-MM-dd',
    },
    endDate: {
      type: 'String',
      description: 'Project end date. Format: yyyy-MM-dd',
    },
    createdDate: {
      type: 'Date',
      description: "Project created date. Format: yyyy-MM-dd'T'HH:mm:ss'Z'",
    },
    completedDate: {
      type: 'Date',
      description: "Project completed date. Format: yyyy-MM-dd'T'HH:mm:ss'Z'",
    },
    contractType: {
      type: ContractTypeEnum,
      description: 'Contract type (Wrike Resource only)',
    },
  },
});
