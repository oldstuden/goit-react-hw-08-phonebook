import { useDispatch, useSelector } from 'react-redux';
import { Filter } from './ContactFilter/ContactFilter';
import { GlobalStyle } from './GlobalStyle';
import { ListContact } from './ListContact/ListContact';
import { UserForm } from './UserForm/UserForm';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phone book</h1>
      <UserForm />
      <h2>Contact</h2>
      {isLoading && !error && <p>Please wait, loading...</p>}
      <Filter />
      <ListContact />
      <GlobalStyle />
    </div>
  );
};
