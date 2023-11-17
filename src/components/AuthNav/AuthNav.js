import { useNavigate } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <button type="button"
        onClick={() => navigate("/register")} 
        className={css.button}
      >
        Зареєструватися
      </button>
      <button type="button"
        onClick={() => navigate("/login")} 
        className={css.button}
      >
        Увійти
      </button>
    </div>
  );
};
