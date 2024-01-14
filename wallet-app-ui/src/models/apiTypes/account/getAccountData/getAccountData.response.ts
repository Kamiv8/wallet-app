import { Languages, UserIconTypeEnum } from '../../../../types/enums';

export type GetAccountDataResponse = {
  username: string;
  iconType: UserIconTypeEnum;
  actualMoneyPln: number;
  actualMoneyUsd: number;
  actualMoneyChf: number;
  actualMoneyGbp: number;
  actualMoneyEur: number;
  groupId?: string;
  language: Languages;
};
