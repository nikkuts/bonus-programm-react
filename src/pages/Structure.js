import { useSelector, useDispatch } from "react-redux";
import { useAuth } from 'hooks';
import { selectIsLoading } from 'redux/partners/selectors';

export default function Structure() {
  const dispatch = useDispatch();
  const {user} = useAuth();
  const isLoading = useSelector(selectIsLoading);

    return (
      <div>
        <h1>Команда</h1>
        <ul>
          <li className={css.userName}>{user.name}</li>
          <li className={css.userEmail}>{user.email}</li>
          <li className={css.userLevel}>
            Рівень 
            <span className={css.userLevelNum}> 1</span>
          </li>
        </ul>
      </div>
    );
  };