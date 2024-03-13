  import { useEffect, useMemo } from 'react';
  import { useSelector, useDispatch } from "react-redux";
  import { DateRange } from '../DateRange/DateRange';
  import { Pagination } from '../Pagination/Pagination';
  import { getAccount } from "redux/payments/operations";
  import { 
    selectIsLoading, 
    selectAccount,
    selectPage,
    selectStart,
    selectEnd, 
  } from 'redux/payments/selectors';
  import { formatDate } from "service/handleDate";
  import css from './Account.module.css';
  
  export default function Account () {
    const dispatch = useDispatch();
    const limit = 2;
  
    const isLoading = useSelector(selectIsLoading);
    const account = useSelector(selectAccount);
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
        dispatch(getAccount(queryParams));   
    }, [dispatch, queryParams]);
  
      return (
        <>
          <div>{isLoading && <b>Завантаження даних...</b>}</div> 
          <div>
            <h2 className={css.title}>Історія бонусного рахунку</h2>
            <DateRange />
            <div className={css.tableHistory}>
                <table className={css.table}>
                  <thead>
                    <tr>
                        <th className={css.th}>Дата операції</th>
                        <th className={css.th}>Баланс на початок</th>
                        <th className={css.th}>Сума</th>
                        <th className={css.th}>Коментар</th>
                        <th className={css.th}>Баланс на кінець</th>
                    </tr>
                  </thead>
                  {account.length !== 0 && 
                  <tbody>
                  {account.map(item => (           
                      <tr 
                        key={item._id}
                        className={css.tr}
                      >
                        <td className={css.td}>{formatDate(item.dateTransaction)}</td>
                        <td className={css.td}>{item.initialBalance}</td>
                        <td className={css.td}>{item.amountTransaction}</td>
                        <td className={css.td}>
                          {item.comment === 'бонус' &&
                            `${item.comment}, рівень ${item.levelBonus}, партнер ${item.emailPartner}`
                          }
                        </td>
                        <td className={css.td}>{item.finalBalance}</td>
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