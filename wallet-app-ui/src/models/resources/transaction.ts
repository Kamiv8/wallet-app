import { Category } from './category';
import { Currency } from './currency';

export interface Transaction {
  id: string;
  title: string;
  date: Date;
  currencyMark: string;
  category: string;
  description?: string;
  price: number;
}
