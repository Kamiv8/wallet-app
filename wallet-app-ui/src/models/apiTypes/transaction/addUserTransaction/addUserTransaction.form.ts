export type TAddUserTransactionForm = {
  title: string;
  price: number;
  currencyId: string;
  categoryId: string;
  date: Date;
  isDefault: boolean;
  textColor?: string;
  backgroundColor?: string;
  description?: string;
};
