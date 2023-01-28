import { ToPieChartDto } from '../dtos/toPieChartDto';

export interface TransactionDetails {
  id: string;
  title: string;
  date: Date;
  currencyMark: string;
  category: string;
  description?: string;
  price: number;
  percentage: {
    byCategory: ToPieChartDto[];
  };
}
