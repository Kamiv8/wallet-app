import { UserIconTypeEnum } from '../../../../types/enums/userIconType.enum';

export type GetAccountDataResponse = {
  username: string;
  iconType: UserIconTypeEnum;
  actualMoneyPln: number;
  actualMoneyUsd: number;
  actualMoneyChf: number;
  actualMoneyGbp: number;
  actualMoneyEur: number;
  groupId?: string;
};
