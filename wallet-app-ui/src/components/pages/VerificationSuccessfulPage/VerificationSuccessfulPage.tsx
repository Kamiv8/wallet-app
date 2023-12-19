import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ReactComponent as VerifyDone } from '../../../assets/images/verifyDone.svg';
import { StyledLink } from '../../../styles/override/Link.styles';
import { RoutesName } from '../../../const/routesName';
import { AuthApi } from '../../../api';
import { useFetch } from '../../../hooks';
import { VerificationAccountTemplate } from '../../templates';
import { Typography } from '../../atoms';

export const VerificationSuccessfulPage = () => {
  const { callToApi } = useFetch();
  const { email, id } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      await callToApi(AuthApi.verifyAccount({ token: id, email }, controller));
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
