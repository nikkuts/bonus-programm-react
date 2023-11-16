import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Головна
      </NavLink>
      <NavLink className={css.link} to="/about">
        Про нас
      </NavLink>
      <NavLink className={css.link} to="/about">
        Блог
      </NavLink>
      <NavLink className={css.link} to="/about">
        Паляниця
      </NavLink>
      <NavLink className={css.link} to="/about">
        Контакти
      </NavLink>
    </nav>
  );
};