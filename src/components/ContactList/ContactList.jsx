import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'store/selectors';
import { Loader } from 'components/Loader/Loader';
import { deleteContact, getContacts } from 'store/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul className={css.contact_list}>
      {isLoading && <Loader />}
      {error && <b>{error}</b>}
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact_item} key={id}>
          {name}: {number}
          <button
            type="button"
            className={css.btn_delete}
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
