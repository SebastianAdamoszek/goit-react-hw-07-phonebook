import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import image from '../image/image.module.css';

export const App = () => {
  return (
    <div
      className={image.background}
      style={{
        width: 900,
        height: 900,
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        gap: 60,
        fontSize: 30,
        color: '#010101',
        margin: 20,
        padding: 20,
        border: '10px solid darkgray',
        borderRadius: 15,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          flexDirection: 'column',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div
        style={{
          marginTop: 13,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          flexDirection: 'column',
          gap: 30,
        }}
      >
        <div>
          <h2 style={{ marginBottom: 4 }}>Contacts</h2>
          <Filter />
        </div>
        <div>
          <h2>Contact list</h2>
          <div
            style={{
              overflow: 'auto',
              maxHeight: '650px',
              paddingLeft: '10px',

            }}
          >
            <ContactList />
          </div>
        </div>
      </div>
    </div>
  );
};
