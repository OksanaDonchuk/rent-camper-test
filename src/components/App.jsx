import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  return (
    <div>
      <h1 className="title">Phone Book</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
