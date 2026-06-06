import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import toast from 'react-hot-toast';
import css from './Pages.module.css'; // 👈 Наш новий CSS файл

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }))
      .unwrap()
      .then(() => toast.success('Welcome back!'))
      .catch((err) => toast.error(err || 'Invalid credentials'));
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Sign In</h2>
      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className={css.input} required />
        </label>
        <label className={css.label}>
          Password
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className={css.input} required />
        </label>
        <button type="submit" className={css.button}>Login</button>
      </form>
    </div>
  );
}