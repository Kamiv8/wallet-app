export type GetUserTransactionDetailsResponse = {
  id: string;
  title: string;
  categoryName: string;
  price: number;
  currencyCode: string;
  date: Date;
  description?: string;
  chartData: {
    all: number;
    currentCategory: number;
  };
};
