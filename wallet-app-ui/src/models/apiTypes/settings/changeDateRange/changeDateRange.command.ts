import { DateRangeOption } from '../../../../types/enums';

export class ChangeDateRangeCommand {
  constructor(
    public option: DateRangeOption,
    public customDay?: number,
    public customDate?: Date,
  ) {}
}
