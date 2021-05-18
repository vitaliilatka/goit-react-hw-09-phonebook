import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux-js/contacts';

const initialState = {
    name: '',
    number: '',
};

const ContactForm = () => {
    const [inputValue, setInputValue] = useState(initialState);
    const { name, number } = inputValue;
    const dispatch = useDispatch();

    const changeInput = useCallback(
        e => {
            const { name, value } = e.currentTarget;
            setInputValue({ ...inputValue, [name]: value });
        },
        [inputValue],
    );

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();
            dispatch(contactsOperations.addContact(name, number));
            setInputValue(initialState);
        },
        [dispatch, name, number],
    );

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>
                Name
        <input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    placeholder="Enter your name"
                    onChange={changeInput}
                />
            </label>
            <label>
                Number
        <input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                    title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                    required
                    placeholder="Enter your number"
                    onChange={changeInput}
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
    );
};

export default ContactForm;