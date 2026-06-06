import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Phonebook App</h1>
      <p className={css.subtitle}>
        An easy and secure place to manage your personal contacts. Sign up or log in to clear your desk from paper sticky notes!
      </p>
    </div>
  );
}