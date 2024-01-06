import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import { selectIndicators } from 'redux/partners/selectors';
import { GrCircleInformation } from "react-icons/gr";
import indicators from '../../service/Indicators';
import css from './IndicatorsList.module.css';

export default function IndicatorsList() {
  const navigate = useNavigate();
  const {user} = useAuth();
  const indexes = useSelector(selectIndicators);
  const current = indicators.currentCount(user);
  const total = indicators.totalCount(user);

    return (
      <div>
        <table>
            <tr>
                <td>Бонусний рахунок, гривень</td>
                <td>{indexes.bonusAccount}</td>
            </tr>
            <tr>
                <td>Скільки українців прямо зараз переходять на українську завдяки моїм внескам на підтримку проєкту</td>
                <td>{current}</td>
            </tr>
            <tr>
                <td>Скільки українців вже опанували українську завдяки моїм внескам на підтримку проєкту</td>
                <td>{total}</td>
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
                <td>{indexes.level}</td>
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

  // <ul>
  //           <li>
  //               <span>Бонусний рахунок, гривень</span>
  //               <span>88</span>
  //           </li>
  //           <li>
  //               <span>Скільки українців прямо зараз переходять на українську завдяки моїм внескам на підтримку проєкту</span>
  //               <span> {current}</span>
  //           </li>
  //           <li>
  //               <span>Скільки українців вже опанували українську завдяки моїм внескам на підтримку проєкту</span>
  //               <span> {total}</span>
  //           </li>
  //           <li>
  //               <td>
  //                 <div className={css.level}>
  //                   <span>
  //                     Мій особистий рівень підтримки проєкту
  //                   </span> 
  //                   <div className={css.tooltip}>
  //                     <GrCircleInformation />
  //                   </div>
  //                 </div>
  //               </td>
  //               <td> {level}</td>
  //               <td>
  //                 <button type="button"
  //                   onClick={() => navigate("/donation")} 
  //                   className={css.button}
  //                 >
  //                   Підтримати
  //                 </button>
  //               </td>
  //           </li>
  //         </ul>