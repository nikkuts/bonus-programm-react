import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { selectIndicators } from 'redux/partners/selectors';
import css from './HistoryMenu.module.css';

export const HistoryMenu = () => {
  const {user} = useAuth();
  const {levelSupport} = useSelector(selectIndicators);
  const dispatch = useDispatch();

  return (  
    <>
        <ul className={css.menu}>
            <li>
                <Link 
                    onClick={() => dispatch(logOut())} 
                    to="profile"
                    className={css.historyLink}          
                >
                    Внески
                </Link>
            </li>
            <li>
                <Link 
                    onClick={() => dispatch(logOut())} 
                    to="profile"
                    className={css.historyLink}
                >
                    Підписки
                </Link>
            </li>
            <li>
                <Link 
                    onClick={() => dispatch(logOut())} 
                    to="profile"
                    className={css.historyLink}
                >
                    Бонуси
                </Link>
            </li>
        </ul>
    </>
  );
};