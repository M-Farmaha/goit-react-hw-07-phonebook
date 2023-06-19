import { useGetContactsQuery } from 'redux/contactsApi';
import { ContactItem } from './ContactItem';
import { ContactListWrap } from './styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data, isLoading, error } = useGetContactsQuery();

  const visibleContacts = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ContactListWrap>
      {data &&
        visibleContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </ContactListWrap>
  );
};
