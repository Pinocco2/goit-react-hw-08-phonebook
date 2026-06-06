import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink className={`${css.link} ${css.loginBtn}`} to="/login">
        Log In
      </NavLink>
      <NavLink className={`${css.link} ${css.registerBtn}`} to="/register">
        Register
      </NavLink>
    </div>
  );
};