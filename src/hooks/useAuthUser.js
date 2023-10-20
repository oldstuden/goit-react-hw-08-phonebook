import { useSelector } from 'react-redux';

import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/selectors';

export const useAuthUser = () => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  const isUserRefresh = useSelector(selectIsRefreshing);
  const userName = useSelector(selectUser);
  return { isUserLoggedIn, isUserRefresh, userName };
};
