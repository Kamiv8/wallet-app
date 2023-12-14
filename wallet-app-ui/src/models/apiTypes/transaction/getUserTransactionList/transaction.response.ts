export type TransactionResponse = {
  id: string;
  title: string;
  date: Date;
  categoryName: string;
  price: number;
  currencyCode: string;
  description?: string;
};
