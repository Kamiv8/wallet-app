import { Transaction } from '../models/resources/transaction';

export const transactionData: Transaction[] = [
  {
    id: '1233',
    title: 'Proszę dodać tytuł tego wydarzenia',
    date: new Date(),
    currencyMark: 'PLN',
    category: 'ticket',

    description: 'lorm ipsum dolor sit',
    price: 123,
  },
  {
    id: '1233',
    title: 'Proszę dodać tytuł tego wydarzenia',
    date: new Date(),
    currencyMark: 'PLN',
    category: 'ticket',
    description: 'lorm ipsum dolor sit',
    price: -123,
  },
  {
    id: '1233',
    title: 'Proszę dodać tytuł tego wydarzenia',
    date: new Date(),
    currencyMark: 'PLN',
    category: 'ticket',
    description: 'lorm ipsum dolor sit',
    price: 123,
  },
  {
    id: '123343',
    title: 'Proszę dodać tytuł tego wydarzenia',
    date: new Date(),
    currencyMark: 'PLN',
    category: 'ticket',
    description: 'lorm ipsum dolor sit',
    price: 123,
  },
];
