import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import { ReactComponent as Favicon } from 'icons/favicon.svg';
import { ReactComponent as EyeOff } from 'icons/eye-off.svg';
import { ReactComponent as Eye } from 'icons/eye.svg';
import bgImage from '../../service/bgimg.jpg';
import css from './RegisterForm.module.css';

export default function RegisterForm () {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const isNameValid = (name) => {
    const nameRegex = /^[a-zA-Zа-яА-Я\s]{2,30}$/;

    if (!nameRegex.test(name)) {
      alert(`Некоректно введено ім${`'`}я`);
      return false;
    }
    return true;
  };

  const isEmailValid = (email) => {
    const emailRegexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    
    if (!emailRegexp.test(email)) {
      alert('Email невалідний');
      return false;
    }
    return true;
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^[a-zA-Z0-9]{6,30}$/;
    // const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
    
    if (!passwordRegex.test(password)) {
      alert('Пароль має містити від 6 до 30 знаків');
      return false;
    }
    return true;
  };
 
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (
      !isNameValid(form.elements.name.value) ||
      !isEmailValid(form.elements.email.value) ||
      !isPasswordValid(form.elements.password.value)
      ) {
        return;
    }
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
  };

  return (
    <div className={css.wrapper}>
      <div className={css.wrapperForm}>
        <div className={css.logo}>
          <Favicon />
          <span className={css.textLogo}>ЄДИНІ</span>
        </div>
        <h1 className={css.title}>Реєстрація</h1>
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <div className={css.wrapperInput}>
            <label className={css.label}>
              Вкажи пошту
            </label>
            <input 
              type="email" 
              name="email" 
              className={css.input}
            />
          </div>
          <div className={css.wrapperInput}>
            <label className={css.label}>
              Ім'я та прізвище
            </label>
            <input 
              type="text" 
              name="name" 
              className={css.input}
            />
          </div>
          <div className={css.wrapperInput}>   
            <label className={css.label}>
              Придумай пароль
            </label>
            <div className={css.passwordInput}>
              <input 
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                name="password"
                className={css.input} 
              />
              <div 
                onClick={togglePasswordVisibility}
                className={css.eye} 
              >
                {showPassword ? <Eye/> : <EyeOff/>} 
              </div>
            </div>
          </div>
          <button className={css.button} type="submit">Зареєструватися</button>
        </form>
        <p>
        <span className={css.text}>Вже маєш акаунт?</span> <Link
          to={"/login"}
          className={css.link}
        >
          Увійти
        </Link>
        </p>
      </div>
      <img src={bgImage} alt='Обкладинка' className={css.image} />
    </div>
  );
};