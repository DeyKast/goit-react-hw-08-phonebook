import React from 'react';

import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const distpach = useDispatch();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul className={css.contactList}>
        {filterContacts.map(({ id, name, number }) => {
          return (
            <li key={id} id={id} className={css.item}>
              <p className={css.itemName}>
                {name}:<span>{number}</span>
              </p>
              <button
                className={css.btnDelete}
                type="button"
                onClick={() => distpach(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
