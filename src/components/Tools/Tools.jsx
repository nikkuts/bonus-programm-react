import { BASE_CLIENT_URL } from '../../constants';
import CopyUrl from 'components/CopyUrl/CopyUrl';
import { useAuth } from 'hooks';
import css from './Tools.module.css';

export default function Tools() {
  const {user} = useAuth();

    return (
      <div className={css.containerBonus}>
    <h1>Поклич друзів разом опановувати українську та отримувати бонуси на 8 рівнів!</h1>
    <div className={css.wrapperRef}>
    <h2 className={css.refLink}>Запрошувальне посилання</h2>
    <CopyUrl url={`${BASE_CLIENT_URL}?x=${user.id}`} />
    </div>
    <h3>Приклад отримання бонусів у програмі  “Плюсуй українську”</h3>
    <p>Розглянемо, коли у Вашій команді на першому рівні є <span className={css.num}>3</span> учасники, які приєдналися за Вашим запрошенням. У кожного з них є також по 3 учасники в команді.</p>
    <p>На 2-му рівні у Вас’ вже <span className={css.num}>3 * 3 = 9</span> учасників. У кожного з них є також по 3 учасники.</p>
    <p>На 3-му рівні у Вас вже <span className={css.num}>9 * 3 = 27</span> учасників. У кожного з них є також по 3 учасники. І так далі…</p>
    <p>Коли кожен учасник, наприклад, щомісяця робить базовий внесок підтримки у розмірі 40 гривень, Ви отримуєте відповідну подяку від проєкту <span className={css.num}>:)</span></p>
    <p>В таблиці наведено розрахунки Ваших бонусів.</p>
    <div className={css.tableTools}>
      <table className={css.table}>
        <thead>
          <tr>
              <th className={css.th}>Рівень структури</th>
              <th className={css.th}>Бонус від суми внеску, %</th>
              <th className={css.th}>Сума бонусу з одного внеску, грн</th>
              <th className={css.th}>Кількість учасників у структурі, чол</th>
              <th className={css.th}>Загальна сума бонусів на кожному рівні структури, грн</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td className={css.td}>1</td>
              <td className={css.td}>10%</td>
              <td className={css.td}>40 * 10% = 4</td>
              <td className={css.td}>1 * 3 = 3</td>
              <td className={css.td}>3 * 4 = 12</td>
          </tr>
          <tr>
              <td className={css.td}>2</td>
              <td className={css.td}>5%</td>
              <td className={css.td}>40 * 5% = 2</td>
              <td className={css.td}>3 * 3 = 9</td>
              <td className={css.td}>9 * 2 = 18</td>
          </tr>
          <tr>
              <td className={css.td}>3</td>
              <td className={css.td}>5%</td>
              <td className={css.td}>40 * 5% = 2</td>
              <td className={css.td}>9 * 3 = 27</td>
              <td className={css.td}>27 * 2 = 54</td>
          </tr>
          <tr>
              <td className={css.td}>4</td>
              <td className={css.td}>5%</td>
              <td className={css.td}>40 * 5% = 2</td>
              <td className={css.td}>27 * 3 = 81</td>
              <td className={css.td}>81 * 2 = 162</td>
          </tr>
          <tr>
              <td className={css.td}>5</td>
              <td className={css.td}>5%</td>
              <td className={css.td}>40 * 5% = 2</td>
              <td className={css.td}>81 * 3 = 243</td>
              <td className={css.td}>243 * 2 = 486</td>
          </tr>
          <tr>
              <td className={css.td}>6</td>
              <td className={css.td}>5%</td>
              <td className={css.td}>40 * 5% = 2</td>
              <td className={css.td}>243 * 3 = 729</td>
              <td className={css.td}>729 * 2 = 1 458</td>
          </tr>
          <tr>
              <td className={css.td}>7</td>
              <td className={css.td}>5%</td>
              <td className={css.td}>40 * 5% = 2</td>
              <td className={css.td}>729 * 3 = 2 187</td>
              <td className={css.td}>2 187 * 2 = 4 374</td>
          </tr>
          <tr>
              <td className={css.td}>8</td>
              <td className={css.td}>5%</td>
              <td className={css.td}>40 * 5% = 2</td>
              <td className={css.td}>2 187 * 3 = 6 561</td>
              <td className={css.td}>6 561 * 2 = 13 122</td>
          </tr>
          <tr>
              <td className={css.td}>Всього</td>
              <td className={css.td}></td>
              <td className={css.td}></td>
              <td className={css.td}>9 840</td>
              <td className={css.td}>19 686</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>Як бачимо, у Вашій структурі на 8-ми рівнях майже <span className={css.num}>10 000</span> партнерів.</p>
    <p>Проєкт при цьому має змогу допомогти опанувати українську мову майже <span className={css.num}>10 000</span> українцям, а загальна сума Вашого бонусу складає біля <span className={css.num}>20 000</span> гривень на місяць.</p>
    <p>Вам достатньо порекомендувати наш безоплатний курс лише кільком людям зі свого оточення. А далі працює закон геометричної прогресії.</p>
    <p>Причому у даній програмі Ви не маєте ніяких обмежень. Уявіть, а краще розрахуйте, як зросте Ваш результат, коли у кожного партнера Вашої структури буде, наприклад, не по 3, а по 5 учасників. Ви будете приємно здивовані <span className={css.num}>:)</span></p>
    <p>Отже, допомагати поширювати українську мову з проєктом “Єдині” надзвичайно цікаво та вигідно!</p>
    <p>Запрошуйте друзів, разом плюсуйте українську, зміцнюйте наш культурний фронт та отримуйте чудові бонуси!</p>
  </div>
    );
  };