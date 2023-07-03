import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from './ContactsPage.module.css';

import { ContactForm } from '../../ContactForm/ContactForm';
import { ContactsFilter } from '../../ContactsFilter/ContactsFilter';
import { ContactsList } from '../../ContactsList/ContactsList';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Loader } from '../../Loader/Loader';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <ContactForm />
      <div className={css.contactsListContainer}>
        <ContactsFilter />
        {isLoading && <Loader />}
        {error && <p>Sorry. {error}</p>}
        {contacts.length === 0 && <p>Sorry, there is no contacts yet</p>}
        <ContactsList />
      </div>
    </div>
  );
}
