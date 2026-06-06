import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/auth-operations';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div className="app-loader">Loading app state...</div>;
  }

  return (
    <div>
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute redirectTo="/contacts" component={RegisterPage} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/contacts" component={LoginPage} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/login" component={ContactsPage} />}
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};