import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { setCurrentRange } from "redux/payments/rangeSlice";
import css from './HistoryMenu.module.css';

export const HistoryMenu = () => {
  const dispatch = useDispatch();

  return (  
    <>
        <ul className={css.menu}>
            <li>
                <Link 
                    onClick={() => dispatch(setCurrentRange())} 
                    to="payments"
                    className={css.historyLink}          
                >
                    Внески
                </Link>
            </li>
            <li>
                <Link 
                    onClick={() => dispatch(setCurrentRange())} 
                    to="subscriptions"
                    className={css.historyLink}
                >
                    Підписки
                </Link>
            </li>
            <li>
                <Link 
                    onClick={() => dispatch(setCurrentRange())} 
                    to="account"
                    className={css.historyLink}
                >
                    Бонуси
                </Link>
            </li>
        </ul>
    </>
  );
};