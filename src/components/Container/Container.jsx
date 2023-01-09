import PropTypes from 'prop-types';
import {Wrapper} from './Container.styled';

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
