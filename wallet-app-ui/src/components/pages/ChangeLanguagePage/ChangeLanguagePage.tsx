import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { ChangeLanguageForm } from '../../organisms';

export const ChangeLanguagePage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700}>
        Change language
      </Typography>
      <ChangeLanguageForm />
    </MainTemplate>
  );
};
