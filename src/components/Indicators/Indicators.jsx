import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { selectIndicators } from 'redux/partners/selectors';
import { GrCircleInformation } from "react-icons/gr";
import css from './Indicators.module.css';

export default function Indicators() {
  const navigate = useNavigate();
  const indicators = useSelector(selectIndicators);

    return (
      <div>
        <table>
            <tr>
                <td>Бонусний рахунок, гривень</td>
                <td>{indicators.bonusAccount}</td>
            </tr>
            <tr>
                <td>Скільки українців прямо зараз переходять на українську завдяки моїм внескам на підтримку проєкту</td>
                <td>{indicators.current}</td>
            </tr>
            <tr>
                <td>Скільки українців вже опанували українську завдяки моїм внескам на підтримку проєкту</td>
                <td>{indicators.total}</td>
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
                <td>{indicators.level.toFixed(2)}</td>
                <td>
                  <button type="button"
                    onClick={() => navigate("/donation")} 
                    className={css.button}
                  >
                    Підтримати
                  </button>
                </td>
            </tr>
        </table>
      </div>
    );
  };