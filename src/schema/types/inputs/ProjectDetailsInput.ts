import { schemaComposer } from 'graphql-compose';
import { ProjectStatusEnum, ProjectContractTypeEnum } from 'app/schema/types/Enums';
import { ContactID, CustomStatusID } from 'app/schema/types/Scalars';

export const ProjectDetailsInput = schemaComposer.createInputTC({
  name: 'ProjectDetailsInput',
  fields: {
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
    contractType: {
      type: ProjectContractTypeEnum,
      description: 'Contract type (Wrike Resource only)',
    },
  },
});
