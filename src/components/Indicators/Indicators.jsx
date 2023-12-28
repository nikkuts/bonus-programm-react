import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import { GrCircleInformation } from "react-icons/gr";
import indicators from '../../service/Indicators';
import css from './Indicators.module.css';

export default function Indicators() {
  const {user} = useAuth();
  const current = indicators.currentCount(user);
  const total = indicators.totalCount(user);
  const level = indicators.levelSupport(user);
  const navigate = useNavigate();

    return (
      <div>
        <table>
            <tr>
                <td>Бонусний рахунок, гривень</td>
                <td>88</td>
            </tr>
            <tr>
                <td>Скільки українців прямо зараз переходять на українську завдяки моїм внескам на підтримку проєкту</td>
                <td> {current}</td>
            </tr>
            <tr>
                <td>Скільки українців вже опанували українську завдяки моїм внескам на підтримку проєкту</td>
                <td> {total}</td>
            </tr>
            <tr>
                <td>
                  <div className={css.level}>
                    <span>
                      Мій особистий рівень підтримки проєкту
                    </span> 
                    <div className={css.tooltip}>
                      <GrCircleInformation />
                    </div>
                  </div>
                </td>
                <td> {level}</td>
            </tr>
        </table>
        <button type="button"
          onClick={() => navigate("/donation")} 
          className={css.button}
        >
          Підтримати
        </button>
      </div>
    );
  };