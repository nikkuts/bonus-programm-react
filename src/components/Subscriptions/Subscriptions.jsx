import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import {DateRange} from '../DateRange/DateRange';
import { getSubscriptions, cancelSubscribe } from "redux/payments/operations";
import { 
  selectIsLoading, 
  selectSubscriptions,
  selectStart,
  selectEnd,
  // selectIsUnsubscribe, 
} from 'redux/payments/selectors';
import { formatMsDate, getNextPymentDate, 
  // convertStartDate, convertEndDate 
} from "service/handleDate";
import css from './Subscriptions.module.css';

export default function Subscriptions () {
  const dispatch = useDispatch();
  // const [page, setPage] = useState(1);
  // const limit = 10;

  const isLoading = useSelector(selectIsLoading);
  const subscriptions = useSelector(selectSubscriptions);
  const start = useSelector(selectStart);
  const end = useSelector(selectEnd);

  const [prevStart, setPrevStart] = useState(start);
  const [prevEnd, setPrevEnd] = useState(end);
  
  // const queryParams = {
  //   start: start,
  //   end: end,
  //   page: 1,
  //   limit,
  // };

  // useEffect(() => {
  //   setPage(1);
  // }, [start, end]);

  useEffect(() => {
    if (start && end) {
      if (prevStart !== start || prevEnd !== end) {
        dispatch(getSubscriptions({start, end}));
        setPrevStart(start);
        setPrevEnd(end);
      }
    }    
  }, [dispatch, prevStart, prevEnd, start, end]);

  // useEffect(() => {
  //   const initialStart = convertStartDate(new Date().toISOString());
  //   const initialEnd = convertEndDate(new Date().toISOString());

  //   if (initialStart === start && initialEnd === end) {
  //     dispatch(getSubscriptions(queryParams));
  //     return;
  //   }
  //   // Перевірка, чи параметри змінилися
  //   if (prevStart !== start || prevEnd !== end) {
  //     dispatch(getSubscriptions(queryParams));
  //     setPrevStart(start);
  //     setPrevEnd(end);
  //   }
  // }, [dispatch, queryParams, prevStart, prevEnd, start, end]);

    return (
      <>
        <div>{isLoading && <b>Завантаження даних...</b>}</div> 
        <div className={css.containerBonus}>
          <h2 className={css.title}>Історія моїх підписок</h2>
          <DateRange />
          <div className={css.tableHistory}>
              <table className={css.table}>
                <thead>
                  <tr>
                      <th className={css.th}>Дата підписки</th>
                      <th className={css.th}>Сума</th>
                      <th className={css.th}>Призначення</th>
                      <th className={css.th}>Коментар</th>
                      <th className={css.th}>Наступний внесок</th>
                      <th className={css.th}>Статус підписки</th>
                  </tr>
                </thead>
                {subscriptions.length !== 0 && 
                <tbody>
                {subscriptions.map(({_id, data, objSub}) => (           
                    <tr 
                      key={_id}
                      className={css.tr}
                    >
                      <td className={css.td}>{formatMsDate(data.end_date)}</td>
                      <td className={css.td}>{data.amount}</td>
                      <td className={css.td}>{data.description}</td>
                      <td className={css.td}>{data.info}</td>
                      <td className={css.td}>
                        {!objSub.isUnsubscribe &&
                        (
                        objSub.lastPaymentDate ?
                        getNextPymentDate(objSub.lastPaymentDate) :
                        'очікування проведення платежу'
                        )
                        }
                      </td>
                      <td className={css.td}>
                        {
                        !objSub.isUnsubscribe ? 
                        <span className={css.wrapper}>
                          діє 
                          <Link
                            onClick={() => {
                              dispatch(cancelSubscribe({orderId: data.order_id}))
                            }}
                            className={css.link}
                          >
                            скасувати
                          </Link>
                        </span> : 
                        'скасовано'
                        }
                      </td>
                    </tr>
                ))}
                </tbody>
                }
              </table>
            </div>
        </div>
      </>
    );
  };