import styled from 'styled-components';
import { Typography } from '../../atoms';
import { media } from '../../../styles/mediaQueries.helper';

export const NoDataTypography = styled(Typography)`
  text-align: center;
  padding: 20px 0;
`;

export const FirstSection = styled.div`
  ${media.desktop`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-right: 15px;
      height: 100%;
  `}
`;

export const SecondSection = styled.div`
  ${media.tablet`
      display: flex;
      justify-content: space-between;
    `}
  ${media.desktop`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 15px;
      height: 100%;
  `}
`;

export const LastTransactionSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
  ${media.tablet`
      width: 70%;
    `}
  ${media.largeScreen`
      width: 70%;
    `}
`;

export const AllPricesSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  ${media.tablet`
flex-direction: row;
      justify-content: space-between;
      gap: 7px;
    `}
`;
export const PieChartSection = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  ${media.tablet`
      width: 45%;
    `}
  ${media.desktop`
      width: auto;
    `}
`;

export const MoneyChartSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;
