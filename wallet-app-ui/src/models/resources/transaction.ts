import { Currency } from './currency';
import { Category } from './category';

export interface Transaction {
  id: string;
  title: string;
  date: Date;
  currency: Currency;
  category: Category;
  description?: string;
  backgroundColor?: string;
  textColor?: string;
  price: number;
}
