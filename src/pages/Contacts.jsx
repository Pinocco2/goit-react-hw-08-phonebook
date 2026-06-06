import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { Filter } from '../components/Filter';
import css from './Pages.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsWrapper}>
      <div className={`${css.form} ${css.sectionBox}`}>
        <h2 className={css.sectionTitle}>Add New Contact</h2>
        <ContactForm />
      </div>

      <div className={css.form}>
        <h2 className={css.sectionTitle}>Your Contacts</h2>
        <Filter />
        {isLoading && <p className={css.loading}>Updating data...</p>}
        <ContactList />
      </div>
    </div>
  );
}