import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Typography from '../../atoms/Typography/Typography';
import ChangeCategoryForm from '../../organisms/ChangeCategoryForm/ChangeCategoryForm';

const ChangeCategoryPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'}>
        Change Category
      </Typography>
      <ChangeCategoryForm />
    </MainTemplate>
  );
};

export default ChangeCategoryPage;
