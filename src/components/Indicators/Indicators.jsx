import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from 'react-router-dom';
import { getIndicators } from 'redux/partners/operations';
import { selectIndicators, selectIsLoading } from 'redux/partners/selectors';
import { ReactComponent as Info } from 'icons/info.svg';
import css from './Indicators.module.css';

export default function Indicators() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const indicators = useSelector(selectIndicators);
  const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(getIndicators());
    }, [dispatch]);

    return (
      <>
      <div>{isLoading && <b>Завантаження даних...</b>}</div>
      {indicators &&
      <div>
        <div className={css.tableIndicators}>
          <table className={css.table}>
            <tbody>
              <tr className={css.tr}>
                  <td className={css.tdChild1}>Бонусний рахунок, гривень</td>
                  <td className={css.tdChild2}>{indicators.bonusAccount.toFixed(2)}</td>
                  <td className={css.tdChild3}>
                    <button type="button"
                      onClick={() => navigate("withdrawal")} 
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
                        <Info />
                      </div>
                    </div>
                  </td>
                  <td className={css.tdChild2}>{indicators.levelSupport.toFixed(2)}</td>
                  <td className={css.tdChild3}>
                    <button type="button"
                      onClick={() => navigate("/uk/donat")}  
                      className={css.button}
                    >
                      Підтримати
                    </button>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>}
      </>
    );
  };