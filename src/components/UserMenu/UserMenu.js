import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { user } = useAuth();

  // const handlerClick = async () => {
  //   await dispatch(logOut());
  //   navigate('/');
  // };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>{user.name}</p>
      <Link  
        onClick={() => dispatch(logOut())}
        to="/"
        className={css.link}
      >
        Вийти
      </Link>
      {/* <button type="button" onClick={() => dispatch(logOut())} className={css.button}>
        Вийти
      </button> */}
    </div>
  );
};