import { Category } from '../models/resources/category';
import { CurrencyDto } from '../models/dtos/currencyDto';

export const parseDataToSelect = (data: Category[] | CurrencyDto[]) => {
  return data?.map((x) => {
    return {
      key: x.id,
      description: x.name,
    };
  });
};
