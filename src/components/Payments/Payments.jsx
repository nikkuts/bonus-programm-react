import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {DateRange} from '../DateRange/DateRange';
import { getDonats } from "redux/payments/operations";
import { 
  selectIsLoading, 
  selectDonats,
  selectStart,
  selectEnd, 
} from 'redux/payments/selectors';
import { formatMsDate, 
  // convertStartDate, convertEndDate 
} from "service/handleDate";
import css from './Payments.module.css';

export default function Payments () {
  const dispatch = useDispatch();
  // const [page, setPage] = useState(1);
  // const limit = 10;

  const isLoading = useSelector(selectIsLoading);
  const donats = useSelector(selectDonats);
  const start = useSelector(selectStart);
  const end = useSelector(selectEnd);

  // const getVisibleDonats = () => {
  //   return donats.filter((donat) => 
  //     donat.data.end_date > convertStartDate(start) && 
  //     donat.data.end_date < convertEndDate(end)
  //   )
  // };

  // useEffect(() => {
  //   dispatch(getDonats()); 
  // }, [dispatch]);

  const [prevStart, setPrevStart] = useState(start);
  const [prevEnd, setPrevEnd] = useState(end);
  
  // const queryParams = useMemo(() => ({
  //   start,
  //   end,
  //   page: page || 1,
  //   limit,
  // }), [start, end, page]);

  // useEffect(() => {
  //   setPage(1);
  // }, [start, end]);

  useEffect(() => {
    if (start && end) {
      if (prevStart !== start || prevEnd !== end) {
        dispatch(getDonats({start, end}));
        setPrevStart(start);
        setPrevEnd(end);
      }
    }    
  }, [dispatch, prevStart, prevEnd, start, end]);

  // useEffect(() => {
  //   const initialStart = convertStartDate(new Date().toISOString());
  //   const initialEnd = convertEndDate(new Date().toISOString());

  //   if (initialStart === start && initialEnd === end) {
  //     dispatch(getDonats(queryParams));
  //     return;
  //   }
  //   // Перевірка, чи параметри змінилися
  //   if (prevStart !== start || prevEnd !== end) {
  //     dispatch(getDonats(queryParams));
  //     setPrevStart(start);
  //     setPrevEnd(end);
  //   }
  // }, [dispatch, queryParams, prevStart, prevEnd, start, end]);

    return (
      <>
        <div>{isLoading && <b>Завантаження даних...</b>}</div> 
        <div className={css.containerBonus}>
          <h2 className={css.title}>Історія моїх внесків</h2>
          <DateRange />
          <div className={css.tableHistory}>
              <table className={css.table}>
                <thead>
                  <tr>
                      <th className={css.th}>Дата</th>
                      <th className={css.th}>Сума</th>
                      <th className={css.th}>Призначення</th>
                      <th className={css.th}>Коментар</th>
                      <th className={css.th}>Тип внеску</th>
                  </tr>
                </thead>
                {donats.length !== 0 && 
                <tbody>
                {donats.map(({_id, data}) => (           
                    <tr 
                      key={_id}
                      className={css.tr}
                    >
                      <td className={css.td}>{formatMsDate(data.end_date)}</td>
                      <td className={css.td}>{data.amount}</td>
                      <td className={css.td}>{data.description}</td>
                      <td className={css.td}>{data.info}</td>
                      <td className={css.td}>{data.action === 'pay' ? 'разовий' : 'регулярний'}</td>
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