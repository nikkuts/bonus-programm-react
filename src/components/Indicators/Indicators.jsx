import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { selectIndicators } from 'redux/partners/selectors';
import { GrCircleInformation } from "react-icons/gr";
import css from './Indicators.module.css';

export default function Indicators() {
  const navigate = useNavigate();
  const indicators = useSelector(selectIndicators);

    return (
      <div className={css.tableIndicators}>
        <table className={css.table}>
            <tr className={css.tr}>
                <td className={css.tdChild1}>Бонусний рахунок, гривень</td>
                <td className={css.tdChild2}>{indicators.bonusAccount.toFixed(2)}</td>
                <td className={css.tdChild3}>
                  <button type="button"
                    onClick={() => navigate("/donation")} 
                    className={css.button}
                  >
                    Вивести
                  </button>
                </td>
            </tr>
            <tr className={css.tr}>
                <td className={css.tdChild1}>Скільки українців прямо зараз переходять на українську завдяки моїм внескам на підтримку проєкту</td>
                <td className={css.tdChild2}>{indicators.currentCount}</td>
            </tr>
            <tr className={css.tr}>
                <td className={css.tdChild1}>Скільки українців вже опанували українську завдяки моїм внескам на підтримку проєкту</td>
                <td className={css.tdChild2}>{indicators.pastCount}</td>
            </tr>
            <tr className={css.tr}>
                <td className={css.tdChild1}>
                  <div className={css.level}>
                    <span>
                      Мій особистий рівень підтримки проєкту
                    </span> 
                    <div className={css.tooltip}>
                      <GrCircleInformation />
                    </div>
                  </div>
                </td>
                <td className={css.tdChild2}>{indicators.levelSupport.toFixed(2)}</td>
                <td className={css.tdChild3}>
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