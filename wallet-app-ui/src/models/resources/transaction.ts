export interface Transaction {
  id: string;
  title: string;
  date: Date;
  currencyMark: string;
  category: string;
  description?: string;
  backgroundColor?: string;
  textColor?: string;
  price: number;
}
