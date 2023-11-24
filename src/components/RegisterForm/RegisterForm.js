import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = ({closeRegisterForm}) => {
  const dispatch = useDispatch();

  const closeForm = e => {
    if (e.currentTarget === e.target) {
      closeRegisterForm()
    }
  };
 
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
    <div className={css.overlay} onClick={closeForm}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          <input placeholder='Тарас Петелько' type="text" name="name" />
        </label>
        <label className={css.label}>
          <input placeholder='taras@gmail.com' type="email" name="email" />
        </label>
        <label className={css.label}>
          <input placeholder='Пароль' type="password" name="password" />
        </label>
        <button className={css.button} type="submit">Зареєструватися</button>
      </form>
    </div>   
  );
};