import { useDispatch, useSelector } from 'react-redux';
import {
  ContactsWrapper,
  LabelContacts,
  ResetButtons,
  Search,
} from './ContactFilter.styled';
import { changeValueFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(changeValueFilter(evt.currentTarget.value));
  };
  const resetFilter = () => {
    dispatch(changeValueFilter(''));
  };
  return (
    <ContactsWrapper>
      <LabelContacts>
        Find contacts by name
        <Search
          type="text"
          name="filter"
          value={filter}
          onChange={changeFilter}
        />
        <ResetButtons type="button" onClick={resetFilter}>
          Reset filters
        </ResetButtons>
      </LabelContacts>
    </ContactsWrapper>
  );
};
