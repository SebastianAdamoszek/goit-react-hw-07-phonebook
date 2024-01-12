import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilterStatus } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filterStatus = useSelector(selectFilterStatus);

  const filteredContacts = contacts
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterStatus)
      )
    : [];

  filteredContacts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <p className={css.list__style}></p>
          <p className={css.contact}>
            {contact.name}: {contact.number}
          </p>
          <button
            type="button"
            className={css.button__del}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
