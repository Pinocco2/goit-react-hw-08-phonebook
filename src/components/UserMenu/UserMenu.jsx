import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Hi, {user.name || user.email}</p>
      <button type="button" className={css.btn} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};