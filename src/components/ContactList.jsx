import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} style={{ marginBottom: 8 }}>
          {name}: {number}
          <button type="button" onClick={() => dispatch(deleteContact(id))} style={{ marginLeft: 10 }}>Delete</button>
        </li>
      ))}
    </ul>
  );
};