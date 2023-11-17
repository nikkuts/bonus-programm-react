import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
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
      <Link 
        to="/office" 
        className={css.username}
      >
        {user.name}
      </Link>
    </div>
  );
};