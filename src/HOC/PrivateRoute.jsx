import { Navigate } from "react-router-dom";
import useAuth from "../hooks/use-auth"
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const isAuth = useAuth();
  return !isAuth ? <Navigate to="/"/> : children;
}

export default PrivateRoute;


PrivateRoute.propTypes = {
 children: PropTypes.element.isRequired,
}