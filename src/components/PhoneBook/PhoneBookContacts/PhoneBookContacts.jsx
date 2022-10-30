import PropTypes, { string } from 'prop-types';
import { nanoid } from 'nanoid';
import {
  ContactList,
  ContactItem,
  ContactItemInfo,
  RemoveButton,
} from './PhoneBookContacts.styled';

export const ContactsList = ({ contacts, onClick }) => {
  return (
    <ContactList className="contact-list">
      {contacts.map(({ name, number }) => (
        <ContactItem className="contact" key={nanoid()}>
          <ContactItemInfo>
            {name}: {number}
          </ContactItemInfo>
          <RemoveButton type="button" onClick={() => onClick(name)} name={name}>
            Delete
          </RemoveButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: string.isRequired,
      number: string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
