import { PropTypes } from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import useStore from '../stores/store';

const ProtectedRoute = ({ children }) => {
  const store = useStore();
  const location = useLocation();

  if (store.cart.length === 0) {
    return <Navigate to="/cart" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

