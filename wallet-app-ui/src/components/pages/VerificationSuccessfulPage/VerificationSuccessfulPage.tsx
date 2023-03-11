import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { createPathArray } from '../../../utils/utils';
import { ReactComponent as VerifyDone } from '../../../assets/images/verifyDone.svg';
import VerificationAccountTemplate from '../../templates/VerificationAccountTemplate/VerificationAccountTemplate';
import Typography from '../../atoms/Typography/Typography';
import { StyledLink } from '../../../styles/override/Link.styles';
import { RoutesName } from '../../../const/routesName';
import { AuthApi } from '../../../api/auth.api';

const VerificationSuccessfulPage = () => {
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const { token } = {
        token: createPathArray(location.pathname)[2],
      };
      await AuthApi.verifyAccount({ token });
    })();
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
