import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import toast from 'react-hot-toast';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    
    dispatch(register({ name, email, password }))
      .unwrap()
      .then(() => {
        toast.success('Account successfully created! Welcome!');
      })
      .catch((error) => {
        toast.error(error || 'Registration failed. This email might already be taken.');
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create Your Account</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Username
          <input type="text" value={name} onChange={e => setName(e.target.value)} style={styles.input} required />
        </label>
        <label style={styles.label}>
          Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={styles.input} required />
        </label>
        <label style={styles.label}>
          Password
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={styles.input} minLength={7} required />
        </label>
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', fontFamily: 'sans-serif' },
  title: { color: '#333', marginBottom: 20 },
  form: { display: 'flex', flexDirection: 'column', width: 320, padding: 20, borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', backgroundColor: '#fff' },
  label: { display: 'flex', flexDirection: 'column', marginBottom: 15, fontSize: 14, color: '#555', fontWeight: '600' },
  input: { padding: '10px', marginTop: 5, borderRadius: 4, border: '1px solid #ccc', fontSize: 16, outline: 'none' },
  button: { padding: '12px', backgroundColor: '#10B981', color: '#fff', border: 'none', borderRadius: 4, fontSize: 16, fontWeight: 'bold', cursor: 'pointer' }
};