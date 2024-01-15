import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { selectIndicators } from 'redux/partners/selectors';
import css from './officeMenu.module.css';

export default function OfficeMenu ({closeOfficeMenu}) {
  const {user} = useAuth();
  const {levelSupport} = useSelector(selectIndicators);
  const dispatch = useDispatch();

  return (  
<>
  <ul className={css.menu}>
    <li>

    </li>
    <li>
      <ul className={css.userInfo}>
        <li className={css.userName}>{user.name}</li>
        <li className={css.userEmail}>{user.email}</li>
        <li className={css.userLevel}>
          Рівень підтримки: 
          <span className={css.userLevelNum}> {levelSupport.toFixed(2)}</span>
        </li>
      </ul>
    </li>
    <li>
      <ul className={css.officeLink} onClick={closeOfficeMenu}>
        <li>
          <Link  
              to="/profile"
              className={css.link}
          >
              Профіль
          </Link>
        </li>
        <li>
          <Link  
              to="/learn"
              className={css.link}
          >
              Навчання
          </Link>
        </li>
        <li>
        <Link  
              to="/bonus"
              className={css.link}
          >
              Бонусна програма
          </Link>
        </li>
        <li>
        <Link  
            onClick={() => dispatch(logOut())}
            to="/"
            className={css.link}
        >
            Вийти
        </Link>
        </li>
      </ul>
    </li>
  </ul>
</>
  );
};