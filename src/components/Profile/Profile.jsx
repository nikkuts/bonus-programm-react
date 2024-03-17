import { useSelector } from "react-redux";
import { useAuth } from 'hooks';
import { formatDate } from "service/handleDate";
import { selectIndicators } from 'redux/partners/selectors';
import css from './Profile.module.css';

export default function Profile () {
  const {user} = useAuth();
  const {levelSupport} = useSelector(selectIndicators);

  return (  
    <div className={css.containerProfile}>
        <h1 className={css.title}>Профіль</h1>
        <ul className={css.userInfo}>
            <li className={css.userName}>{user.name}</li>
            <li className={css.userEmail}>{user.email}</li>
            <li>
            Дата реєстрації: 
            <span className={css.registerDate}> {formatDate(user.registerDate)}</span>
            </li>
            <li className={css.userLevel}>
                Рівень підтримки: 
            <span className={css.userLevelNum}> {levelSupport.toFixed(2)}</span>
            </li>
        </ul>
    </div>
  );
};