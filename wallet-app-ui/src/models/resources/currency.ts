export type CurrencyMark = 'USD' | 'PLN' | 'CHF' | 'GBP' | 'EUR';

export interface Currency {
  id: string;
  name: string;
  mark: CurrencyMark;
}
