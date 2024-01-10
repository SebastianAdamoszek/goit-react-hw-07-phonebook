// import { useDispatch } from 'react-redux';
// import { getFilterStatus } from '../../redux/selectors';
// import css from './ContactItem.module.css';
// import { deleteContact } from 'redux/constactsSlice';

// export const ContactItem = () => {
//   const dispatch = useDispatch();

//   const contacts = useSelector(getContacts);
//   const filterStatus = useSelector(getFilterStatus);

//   const filteredContacts = contacts
//     ? contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filterStatus)
//       )
//     : [];
//   <li key={contact.id}>
//     <p className={css.list__style}></p>
//     <p className={css.contact}>
//       {contact.name}: {contact.number}
//     </p>
//     <button
//       className={css.button__del}
//       onClick={() => dispatch(deleteContact(contact.id))}
//     >
//       Delete
//     </button>
//   </li>;
// };
