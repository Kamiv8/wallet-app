import { Transaction } from '../models/resources/transaction';

export const transactionData: Transaction[] = [
  {
    id: '1233',
    title: 'Proszę dodać tytuł tego wydarzenia',
    date: new Date(),
    currency: {
      id: '32',
      name: 'Polski złoty',
      mark: 'PLN',
    },
    category: {
      id: '324',
      name: 'ticket',
    },
    description: 'lorm ipsum dolor sit',
    price: 123,
  },
  {
    id: '1233',
    title: 'Proszę dodać tytuł tego wydarzenia',
    date: new Date(),
    currency: {
      id: '32',
      name: 'Polski złoty',
      mark: 'PLN',
    },
    category: {
      id: '324',
      name: 'ticket',
    },
    description: 'lorm ipsum dolor sit',
    price: -123,
  },
  {
    id: '1233',
    title: 'Proszę dodać tytuł tego wydarzenia',
    date: new Date(),
    currency: {
      id: '32',
      name: 'Polski złoty',
      mark: 'PLN',
    },
    category: {
      id: '324',
      name: 'ticket',
    },
    description: 'lorm ipsum dolor sit',
    price: 123,
  },
];
