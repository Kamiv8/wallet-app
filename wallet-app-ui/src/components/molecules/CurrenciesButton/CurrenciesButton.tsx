import { TGetCurrenciesResponse } from '../../../models/apiTypes/currency/getCurrencies/getCurrencies.response';
import { Button } from '../../atoms';
import { Wrapper } from './CurrenciesButton.styles';

interface TProps {
  currencies?: Array<TGetCurrenciesResponse>;
  onClick: (currencyId: string) => void;
  isActive?: string;
}
export const CurrenciesButton = ({ currencies, onClick, isActive }: TProps) => {
  return (
    <Wrapper>
      {currencies &&
        currencies.map((c) => (
          <Button
            isActive={isActive === c.id}
            key={c.id}
            color={'orange'}
            onClick={() => onClick(c.id)}
          >
            {c.code}
          </Button>
        ))}
    </Wrapper>
  );
};
