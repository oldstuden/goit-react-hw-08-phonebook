import { useDispatch } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { lazy, useEffect } from 'react';
import { useAuthUser } from 'hooks/useAuthUser';
import { refreshUser } from 'redux/auth/operations';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Home = lazy(() => import('./pages/Home'));
const Registration = lazy(() => import('./pages/Registration'));
const Login = lazy(() => import('./pages/Login'));
const Contacts = lazy(() => import('./pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isUserRefresh } = useAuthUser();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isUserRefresh ? (
    <p>Refreshing...</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                element={<Registration />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute element={<Login />} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute element={<Contacts />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
