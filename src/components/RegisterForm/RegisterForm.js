import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    const parseInviterId = JSON.parse(localStorage.getItem("inviterId"));

    if (parseInviterId) {
      formData.inviterId = parseInviterId;
    }
  
    dispatch(
      register(formData)
    );
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          <input placeholder='Username' type="text" name="name" />
        </label>
        <label className={css.label}>
          <input placeholder='Email' type="email" name="email" />
        </label>
        <label className={css.label}>
          <input placeholder='Password' type="password" name="password" />
        </label>
        {/* <input style="none" type="text" name="inviter" /> */}
        <button className={css.button} type="submit">Register</button>
      </form>
    </>
  );
};