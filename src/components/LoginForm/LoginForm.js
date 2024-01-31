import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { ReactComponent as Favicon } from 'icons/favicon.svg';
import { ReactComponent as EyeOff } from 'icons/eye-off.svg';
import { ReactComponent as Eye } from 'icons/eye.svg';
import bgImage from '../../service/bgimg.jpg';
import css from './LoginForm.module.css';

export default function LoginForm () {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <div className={css.wrapper}>
      <div className={css.wrapperForm}>
        <div className={css.logo}>
          <Favicon />
          <span className={css.textLogo}>ЄДИНІ</span>
        </div>
        <h1 className={css.title}>Вхід</h1>
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <div className={css.wrapperInput}>
            <label className={css.label}>
              Email
            </label>
            <input 
              type="email" 
              name="email" 
              className={css.input}
            />
          </div>
          <div className={css.wrapperInput}>   
            <label className={css.label}>
              Пароль
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
          <button className={css.button} type="submit">Увійти</button>
        </form>
        <Link
          to={"/register"}
          className={css.link}
        >
          Не пам'ятаю пароль
        </Link>
        <p>
        <span className={css.text}>Немає акаунту?</span> <Link
          to={"/register"}
          className={css.link}
        >
          Зареєструватися
        </Link>
        </p>
      </div>
      <img src={bgImage} alt='Обкладинка' className={css.image} />
    </div>
  );
};