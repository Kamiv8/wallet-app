import { Currency } from '../resources/currency';
import { Category } from '../resources/category';

export type TransactionDto = {
  id: string;
  title: string;
  price: number;
  currency: Currency;
  date: Date;
  category: Category;
  description: string;
};
