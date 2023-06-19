import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Section, PhonebookTitle, ContactTitle } from './styled';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <>
      <Toaster />
      <Section>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />
        <ContactTitle>Contacts</ContactTitle>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};
