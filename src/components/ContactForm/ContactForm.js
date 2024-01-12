import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';


const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    let isContact;
    contacts.forEach(person => {
      if (form.name.value.toLowerCase() === person.name.toLowerCase()) {
        isContact = true;
      }
    });
    isContact
      ? Notify.warning(`${form.name.value} is already in your Contacts.`, {
          timeout: 3000,
          position: 'left-top',
          closeButton: true,
        })
      : dispatch(
          addContact({
            id: nanoid(),
            name: form.name.value,
            phone: form.number.value,
          })
        );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Name:</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          autoComplete="name"
          required

        />
      </label>
      <label>
        <p>Number:</p>
        <input
          type="tel"
          name="number"
          pattern="[0-9\s\-]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter name"
          autoComplete="name"
          required

        />
      </label>
      <button className={css.button__add} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm