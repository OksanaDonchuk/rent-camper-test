import css from './ContactForm.module.css';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addContact } from 'store/operations';
import { selectFilteredContacts } from 'store/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const [contact, setContact] = useState({ name: '', number: '' });
  const { name, number } = contact;

  const handleChange = event => {
    const { name, value } = event.target;
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { id: nanoid(), name, number };
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(newContact));
    setContact({ name: '', number: '' });
  };

  const refObj = useRef();

  useEffect(() => {
    refObj.current?.focus();
  }, []);

  return (
    <form className={css.form_container} onSubmit={handleSubmit}>
      <input
        className={css.input}
        ref={refObj}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-ЯІіЄєЇї]+(([' \-][a-zA-Zа-яА-ЯІіЄєЇї ])?[a-zA-Zа-яА-ЯІіЄєЇї]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChange}
        placeholder="Enter name"
        required
      />
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChange}
        placeholder="Enter phone number"
        required
      />
      <button className={css.btn_submit} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
