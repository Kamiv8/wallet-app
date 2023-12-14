import { ContentWrapper, Wrapper } from './TransactionItem.styles';
import { Typography } from '../../atoms';
import { cutString } from '../../../utils/utils';
import { useHref } from 'react-router-dom';
import { StyledLink } from '../../../styles/override/Link.styles';
import { RoutesName } from '../../../const/routesName';
import { TransactionResponse } from '../../../models/apiTypes/transaction/getUserTransactionList/transaction.response';

export type TProps = {
  data: TransactionResponse;
};

export const TransactionItem = (props: TProps) => {
  const href = useHref(`${RoutesName.HISTORY}/${props.data.id}`);
  return (
    <StyledLink to={href}>
      <Wrapper price={props.data.price}>
        <ContentWrapper>
          <Typography uppercase weight={700} size={'l'}>
            {cutString(props.data.title, 15)}
          </Typography>
          <Typography size={'s'}>
            {new Date(props.data.date).toLocaleDateString()}
          </Typography>
        </ContentWrapper>
        <ContentWrapper>
          <Typography size={'m'} weight={700}>
            {props.data.categoryName}
          </Typography>
          {props.data.price <= 0 ? (
            <Typography size={'m'} weight={700} color={'red'}>
              {props.data.price}
              {props.data.currencyCode}
            </Typography>
          ) : (
            <Typography size={'m'} weight={700} color={'green'}>
              {props.data.price}
              {props.data.currencyCode}
            </Typography>
          )}
        </ContentWrapper>

        {props.data.description && (
          <div>
            <Typography weight={700} size={'m'}>
              {cutString(props.data.description, 130)}
            </Typography>
          </div>
        )}
      </Wrapper>
    </StyledLink>
  );
};
