import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {

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