import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import styles from './AppBar.module.css';
import { authSelectors } from '../../redux-js/auth';

const { getIsAuthenticated } = authSelectors;

const AppBar = () => {
    const isAuthenticated = useSelector(getIsAuthenticated);

    return (
        <header className={styles.header}>
            <Navigation />
            {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </header>
    );
};

export default AppBar;