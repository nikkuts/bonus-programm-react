import { Link, useNavigate } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import css from './AppBar.module.css';

export const AppBar = () => {
  const navigate = useNavigate();
  const {isLoggedIn} = useAuth();

  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        ЄДИНІ
      </Link>
      <nav className={css.nav}>
        <Navigation />
        <button type="button"
          onClick={() => navigate("/")} 
          className={css.button}
        >
          Підтримати
        </button>
      </nav>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
