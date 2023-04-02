import { ApplicationType } from '../contexts/application.reducer';
import { AppTypeEnum } from '../types/enums/appType.enum';

export const checkIsGroupHelper = (type: ApplicationType): boolean => {
  return type === 'GROUP';
};

export const getApplicationType = (type: ApplicationType): AppTypeEnum => {
  return type === 'GROUP' ? AppTypeEnum.GROUP : AppTypeEnum.PERSON;
};
