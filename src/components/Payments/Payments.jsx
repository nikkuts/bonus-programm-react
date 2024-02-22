import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { DateRange } from '../DateRange/DateRange';
import { Pagination } from '../Pagination/Pagination';
import { getDonats } from "redux/payments/operations";
import { 
  selectIsLoading, 
  selectDonats,
  selectPage,
  selectStart,
  selectEnd, 
} from 'redux/payments/selectors';
import { formatDate } from "service/handleDate";
import css from './Payments.module.css';

export default function Payments () {
  const dispatch = useDispatch();
  const limit = 2;

  const isLoading = useSelector(selectIsLoading);
  const donats = useSelector(selectDonats);
  const start = useSelector(selectStart);
  const end = useSelector(selectEnd);
  const page = useSelector(selectPage);
  
  const queryParams = useMemo(() => ({
    start,
    end,
    page,
    limit,
  }), [start, end, page]);

  useEffect(() => {
      dispatch(getDonats(queryParams));   
  }, [dispatch, queryParams]);

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
                      <td className={css.td}>{formatDate(data.end_date)}</td>
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
            <Pagination/>
        </div>
      </>
    );
  };