import { useDispatch, useSelector } from 'react-redux';
import { DelBtn, List, ListItem } from './ListContact.styled';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

export const ListContact = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <p>
            {contact.name} : {contact.number}
          </p>
          <DelBtn type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </DelBtn>
        </ListItem>
      ))}
    </List>
  );
};
