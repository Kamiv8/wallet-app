import { ToPieChartDto } from '../dtos/toPieChartDto';
import { Currency } from './currency';
import { Category } from './category';

export interface TransactionDetails {
  id: string;
  title: string;
  date: Date;
  currency: Currency;
  category: Category;
  description?: string;
  price: number;
  percentage: {
    byCategory: ToPieChartDto[];
  };
}
