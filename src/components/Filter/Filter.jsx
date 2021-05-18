import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsActions } from '../../redux-js/contacts';
import styles from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(contactsSelectors.getFilter);
    const onChange = useCallback(
        e => dispatch(contactsActions.changeFilter(e.target.value)),
        [dispatch],
    );

    return (
        <>
            <label>
                Find contacts by name
        <input
                    className={styles.input}
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Find..."
                />
            </label>
        </>
    );
};

export default Filter;