import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { createPathArray } from '../../../utils/utils';
import { ReactComponent as VerifyDone } from '../../../assets/images/verifyDone.svg';
import { StyledLink } from '../../../styles/override/Link.styles';
import { RoutesName } from '../../../const/routesName';
import { AuthApi } from '../../../api';
import { useFetch } from '../../../hooks/useFetch';
import { VerificationAccountTemplate } from '../../templates';
import { Typography } from '../../atoms';

export const VerificationSuccessfulPage = () => {
  const location = useLocation();
  const { callToApi } = useFetch();
  const tokenIndex = 3;
  const emailIndex = 2;

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const { token, email } = {
        token: createPathArray(location.pathname)[tokenIndex],
        email: createPathArray(location.pathname)[emailIndex],
      };
      await callToApi(AuthApi.verifyAccount({ token, email }, controller));
    })();

    return () => {
      controller.abort();
    };
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
