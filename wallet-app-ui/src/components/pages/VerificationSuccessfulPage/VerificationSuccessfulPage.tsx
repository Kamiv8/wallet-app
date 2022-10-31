import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { verifyAccount } from '../../../redux/slices/auth.slice';
import { createPathArray } from '../../../utils/utils';
import { ReactComponent as VerifyDone } from '../../../assets/images/verifyDone.svg';
import VerificationAccountTemplate from '../../templates/VerificationAccountTemplate/VerificationAccountTemplate';
import Typography from '../../atoms/Typography/Typography';
import { StyledLink } from '../../../styles/override/Link.styles';
import { RoutesName } from '../../../const/routesName';

const VerificationSuccessfulPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(verifyAccount({ token: createPathArray(location.pathname)[2] }));
  }, []);

  return (
    <VerificationAccountTemplate
      Image={VerifyDone}
      heading={
        <Typography size={'xl'} weight={700} color={'lightBlue'}>
          Verification successful
        </Typography>
      }
    >
      <Typography size={'l'} color={'orange'} weight={700}>
        You can now login.
      </Typography>
      <StyledLink to={RoutesName.LOGIN}>
        <Typography size={'l'} color={'orange'} underline weight={700}>
          Click here
        </Typography>
      </StyledLink>
    </VerificationAccountTemplate>
  );
};

export default VerificationSuccessfulPage;
