import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux-js/auth';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({ redirectTo, children, ...routeProps }) => {
    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

    return (
        <Route {...routeProps}>
            {isAuthenticated ? children : <Redirect to={redirectTo} />}
        </Route>
    );
};

// render={props =>
//     isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
//   }

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

export default PrivateRoute;