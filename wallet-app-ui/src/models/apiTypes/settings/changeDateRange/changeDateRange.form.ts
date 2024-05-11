import { DateRangeOption } from '../../../../types/enums';

export type ChangeDateRangeForm = {
  option: DateRangeOption;
  customDay?: number;
  customDate?: Date;
};
