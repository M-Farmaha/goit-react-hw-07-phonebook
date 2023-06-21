import { Toaster } from 'react-hot-toast';

import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { BlurOverlay } from './BlurOverlay';

import { Section, PhonebookTitle, ContactTitle } from './styled';

export const App = () => {
  return (
    <>
      <Toaster />
      <BlurOverlay />
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
