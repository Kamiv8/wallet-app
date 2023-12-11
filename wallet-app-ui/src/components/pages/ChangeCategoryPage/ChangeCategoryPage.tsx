import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { ChangeCategoryForm } from '../../organisms';

export const ChangeCategoryPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'}>
        Change Category
      </Typography>
      <ChangeCategoryForm />
    </MainTemplate>
  );
};
