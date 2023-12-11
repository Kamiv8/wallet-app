import { CardWrapper, Button } from '../../atoms';
import messages from '../../../i18n/messages';
import { SelectField } from '../../molecules';
import { FormattedMessage } from 'react-intl';
import { ButtonWrapper } from './ChangeCurrencyForm.styles';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { useEffect, useState } from 'react';
import { CurrencyDto } from '../../../models/dtos/currencyDto';
import { parseDataToSelect } from '../../../helpers/parseDataToSelect.helper';
import useForm from '../../../hooks/useForm';
import { UserApi, CurrencyApi } from '../../../api';

export const ChangeCurrencyForm = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<CurrencyDto[]>([]);
  const initialValues = {
    currencyId: '',
  };

  const { values, handleChange } = useForm<typeof initialValues>(initialValues);

  async function getCurrencyData() {
    const currencyData = await CurrencyApi.getCurrency();

    setState(currencyData.data?.response);
  }

  useEffect(() => {
    (async () => {
      await getCurrencyData();
    })();
  }, []);

  const onSubmit = async () => {
    await UserApi.changeCurrencies(values);
    navigate(RoutesName.SETTINGS);
  };

  return (
    <>
      <CardWrapper gradientColor close={() => navigate(RoutesName.SETTINGS)}>
        <div>
          <SelectField
            label={{ ...messages.changeCurrencyFormCurrency }}
            name={'currencyId'}
            onChange={handleChange}
            selectItems={parseDataToSelect(state)}
          />
          <ButtonWrapper>
            <Button color={'darkBlue'} onClick={onSubmit}>
              <FormattedMessage {...messages.buttonSave} />
            </Button>
          </ButtonWrapper>
        </div>
      </CardWrapper>
    </>
  );
};
