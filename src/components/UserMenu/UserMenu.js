import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handlerClick = async () => {
    await dispatch(logOut());
    navigate('/');
    // setIsOpen(false);
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Вітаємо, {user.name}!</p>
      <Link className={css.link} 
        onClick={handlerClick}>
        Вийти
      </Link>
      {/* <button type="button" onClick={() => dispatch(logOut())} className={css.button}>
        Вийти
      </button> */}
    </div>
  );
};