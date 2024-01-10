import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import React, { useEffect } from 'react';
import { nanoid } from 'nanoid'; 
import css from './ContactForm.module.css';

 const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]
  );
  

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();
 
    dispatch(addContact({ id, name, number }));
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