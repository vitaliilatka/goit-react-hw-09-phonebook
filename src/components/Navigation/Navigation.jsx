import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { authSelectors } from '../../redux-js/auth';

const Navigation = () => {
    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

    return (
        <nav>
            <NavLink
                exact
                to={routes.home}
                className="Navlink"
                activeClassName="Navlink--active"
            >
                Home
      </NavLink>
            {isAuthenticated && (
                <NavLink
                    to={routes.contacts}
                    className="Navlink"
                    activeClassName="Navlink--active"
                >
                    Contacts
                </NavLink>
            )}
        </nav>
    );
};

export default Navigation;