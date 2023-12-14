import { Category } from '../models/resources/category';
import { CurrencyDto } from '../models/dtos/currencyDto';
import { TGetCurrenciesResponse } from '../models/apiTypes/currency/getCurrencies/getCurrencies.response';
import { TSelectItem } from '../components/atoms/Select/Select';

export const parseDataToSelect = (data: Category[] | CurrencyDto[]) => {
  return data?.map((x) => {
    return {
      key: x.id,
      description: x.name,
    };
  });
};

export const parseToCurrencySelect = (
  currencies: Array<TGetCurrenciesResponse>,
): Array<TSelectItem> => {
  return currencies.map((x) => ({ key: x.id, description: x.name }));
};
