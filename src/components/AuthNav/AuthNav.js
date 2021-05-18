import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const AuthNav = () => {
    return (
        <div>
            <NavLink
                exact
                to={routes.register}
                className="Navlink"
                activeClassName="Navlink--active"
            >
                Register
      </NavLink>
            <NavLink
                to={routes.login}
                className="Navlink"
                activeClassName="Navlink--active"
            >
                Login
      </NavLink>
        </div>
    );
};

export default AuthNav;