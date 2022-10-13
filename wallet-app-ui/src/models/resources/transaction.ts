import { Category } from './category';
import { Currency } from './currency';

export interface Transaction {
  id: string;
  title: string;
  date: Date;
  currency: Currency;
  category: Category;
  description: string;
  price: number;
}
