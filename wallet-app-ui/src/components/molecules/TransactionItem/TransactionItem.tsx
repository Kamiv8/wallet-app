import { Transaction } from '../../../models/resources/transaction';
import { ContentWrapper, Wrapper } from './TransactionItem.styles';
import Typography from '../../atoms/Typography/Typography';
import { cutString } from '../../../utils/utils';
import { useHref } from 'react-router-dom';
import { StyledLink } from '../../../styles/override/Link.styles';

export type TProps = {
  data: Transaction;
};

const TransactionItem = (props: TProps) => {
  const href = useHref('/');
  return (
    <StyledLink to={href}>
      <Wrapper price={props.data.price}>
        <ContentWrapper>
          <Typography uppercase weight={700} size={'l'}>
            {cutString(props.data.title, 15)}
          </Typography>
          <Typography size={'s'}>
            {props.data.date.toLocaleTimeString()}{' '}
            {props.data.date.toLocaleDateString()}
          </Typography>
        </ContentWrapper>
        <ContentWrapper>
          <Typography size={'m'} weight={700}>
            {props.data.category.name}
          </Typography>
          {props.data.price <= 0 ? (
            <Typography size={'m'} weight={700} color={'red'}>
              {props.data.price}
              {props.data.currency.mark}
            </Typography>
          ) : (
            <Typography size={'m'} weight={700} color={'green'}>
              {props.data.price}
              {props.data.currency.mark}
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

export default TransactionItem;
