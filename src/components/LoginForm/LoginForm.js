import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = ({closeLoginForm}) => {
  const dispatch = useDispatch();

  const closeForm = e => {
    if (e.currentTarget === e.target) {
      closeLoginForm()
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.overlay} onClick={closeForm}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          <input placeholder='Email' type="email" name="email" />
        </label>
        <label className={css.label}>
          <input placeholder='Password' type="password" name="password" />
        </label>
        <button className={css.button} type="submit">Log In</button>
      </form>
    </div>
  );
};