import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <button type="button"
        onClick={() => navigate("/courses")} 
        className={css.button}
      >
        Навчатися
      </button>
      <Link className={css.username}>{user.name}</Link>
      <Link  
        onClick={() => dispatch(logOut())}
        to="/"
        className={css.link}
      >
        Вийти
      </Link>
    </div>
  );
};