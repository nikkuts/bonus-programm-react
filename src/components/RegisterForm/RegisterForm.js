import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const isPasswordValid = (password) => {
    if (password.length < 6) {
      alert('Пароль має містити не менше 6 знаків');
      return false;
    }
    return true;
  };
 
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const password = form.elements.password.value;
    
    if (!isPasswordValid(password)) {
      return;
    }
    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password,
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
    <div className={css.overlay}>
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