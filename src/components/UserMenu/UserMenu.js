import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux-js/auth';
import defaultAvatar from '../../images/default-contact.png';
import styles from './UserMenu.module.css';

const { getUserEmail } = authSelectors;

const UserMenu = () => {
    const email = useSelector(getUserEmail);
    const dispatch = useDispatch();
    const onLogout = useCallback(() => dispatch(authOperations.logout()), [
        dispatch,
    ]);
    return (
        <div className={styles.container}>
            <img src={defaultAvatar} alt="avatar" width="30" />
            <span className={styles.name}>Welcome, {email}</span>
            <button className={styles.button} type="button" onClick={onLogout}>
                Log Out
      </button>
        </div>
    );
};

export default UserMenu;