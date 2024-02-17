import { useSelector, useDispatch } from "react-redux";
import { getByIdPartnerTeam, saveTeam, restorePreviosTeam } from 'redux/partners/operations';
import { selectPartner, selectHistory } from 'redux/partners/selectors';
import { handleObjDate } from "service/handleDate";
import { ReactComponent as SkipBack } from 'icons/skip-back.svg';
import css from './Team.module.css';

export default function Team() {
  const dispatch = useDispatch();
  const partner = useSelector(selectPartner);
  const history = useSelector(selectHistory);

  const showPreviousTeam = () => {
    const previousTeam = history[history.length - 1];
    dispatch(restorePreviosTeam(previousTeam));
  };

    return (
      <>
        <div className={css.wrapperTeam}>
          {history.length > 0 &&
            <div className={css.btnBack}
              onClick={showPreviousTeam}
            >
              <SkipBack />
            </div>
          }
          <h1 className={css.title}>Команда</h1>
          <ul className={css.userInfo}>
            <li className={css.userName}>{partner.name}</li>
            <li className={css.userEmail}>{partner.email}</li>
            <li>Рівень команди: {history.length + 1}</li>
            <li>Учасників: {partner.team.length}</li>
          </ul>
        </div>
        {partner.team.length !== 0 &&
          <div className={css.tableTeam}>
            <table className={css.table}>
              <thead>
                <tr>
                    <th className={css.th}>Дата реєстрації</th>
                    <th className={css.th}>Ім'я</th>
                    <th className={css.th}>Email</th>
                    <th className={css.th}>Учасників</th>
                </tr>
              </thead>
              <tbody>
              {partner.team.map(member => (           
                  <tr 
                    key={member._id}
                    onClick={() => {
                      dispatch(saveTeam(partner))
                      dispatch(getByIdPartnerTeam(member._id))
                    }}
                    className={css.tr}
                  >
                    <td className={css.td}>{handleObjDate(member.createdAt)}</td>
                    <td className={css.td}>{member.name}</td>
                    <td className={css.td}>{member.email}</td>
                    <td className={css.td}>{member.team.length}</td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        }
      </>
    );
  };