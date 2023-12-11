import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { ChangeCurrencyForm } from '../../organisms';

export const ChangeCurrencyPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'}>
        Change Currency
      </Typography>
      <ChangeCurrencyForm />
    </MainTemplate>
  );
};
