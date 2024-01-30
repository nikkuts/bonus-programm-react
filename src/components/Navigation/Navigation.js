import { Link } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {

  return (
    <>
      <nav className={css.nav}>
        <Link className={css.link} to="">
          Домашня
        </Link>
        <Link className={css.link} to="learn">
          Курси
        </Link>
        <Link className={css.link} to="game">
          Гра
        </Link>
        <Link className={css.link} to="tournament">
          Турнір
        </Link>
      </nav>
    </>
  );
};