import PropTypes from 'prop-types';
import {
  ContactItemWrap,
  ContactName,
  ContactNumber,
  DeleteButton,
  DeleteIcon,
} from './styled';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { Loader } from './Loader';

export const ContactItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ContactItemWrap>
      <ContactName>{contact.name}: </ContactName>
      <ContactNumber>{contact.phone}</ContactNumber>
      <DeleteButton
        disabled={isLoading}
        type="button"
        id={contact.id}
        onClick={() => deleteContact(contact.id)}
      >
        {!isLoading ? <DeleteIcon /> : <Loader />}
      </DeleteButton>
    </ContactItemWrap>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
