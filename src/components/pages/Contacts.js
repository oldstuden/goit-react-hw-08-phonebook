import { Heading } from '@chakra-ui/react';
import { Filter } from 'components/phoneBook/ContactFilter/ContactFilter';
import { ListContact } from 'components/phoneBook/ListContact/ListContact';
import { UserForm } from 'components/phoneBook/UserForm/UserForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Heading as="h2" size="x1"></Heading>
      <UserForm />
      <Filter />
      <ListContact />
    </>
  );
};

export default Contacts;
