import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { cancelSubscribe } from "redux/payments/operations";
import { formatDate, getNextPaymentDate } from "service/handleDate";
import css from './SubscriptionItem.module.css';

export const SubscriptionItem = ({_id, data, objSub}) => {
  const dispatch = useDispatch();

    return (
      <>          
                    <tr 
                      key={_id}
                      className={css.tr}
                    >
                      <td className={css.td}>{formatDate(data.end_date)}</td>
                      <td className={css.td}>{data.amount}</td>
                      <td className={css.td}>{data.description}</td>
                      <td className={css.td}>{data.info}</td>
                      <td className={css.td}>
                        {!objSub.isUnsubscribe &&
                        (
                        objSub.lastPaymentDate ?
                        getNextPaymentDate(objSub.lastPaymentDate) :
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
            
      </>
    );
  };