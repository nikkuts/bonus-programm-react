import { useSelector, useDispatch } from "react-redux";
import { useAuth } from 'hooks';
import { selectPartners } from 'redux/partners/selectors';
import css from './Team.module.css';

export default function Team() {
  const dispatch = useDispatch();
  const {user} = useAuth();
  const partners = useSelector(selectPartners);

    return (
      <div className={css.wrapperTeam}>
        <h1 className={css.title}>Команда</h1>
        <ul className={css.userInfo}>
          <li className={css.userName}>{user.name}</li>
          <li className={css.userEmail}>{user.email}</li>
          <li>Рівень команди: 1</li>
          <li>Учасники: {partners.length}</li>
        </ul>
      </div>
    );
  };