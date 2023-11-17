import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import css from './Office.module.css';

export default function Office () {
  const dispatch = useDispatch();

  return (  
    <div className={css.container}>
        <ul className={css.wrapper}>
            <li>
              <Link  
                  to="/office/profile"
                  className={css.link}
              >
                  Профіль
              </Link>
            </li>
            <li>
            <Link  
                  to="/office/bonus"
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
    </div>
  );
};