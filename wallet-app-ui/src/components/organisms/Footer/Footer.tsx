import { Circle, Wrapper } from './Footer.styles';
import { Link, useHref } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';

const Footer = () => {
  const rootURL = useHref(RoutesName.ROOT);

  return (
    <Wrapper>
      <Link to={rootURL}>
        <Circle />
      </Link>
    </Wrapper>
  );
};

export default Footer;
