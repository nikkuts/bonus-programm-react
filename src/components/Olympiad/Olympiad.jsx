import { useNavigate } from 'react-router-dom';
import css from './Olympiad.module.css';

export default function Olympiad () {
  const navigate = useNavigate();

    return (
      <div className={css.container}>
      <h1 className={css.title}>Мовні олімпіади, де ви отримуєте винагороду завдяки своїм знанням з української мови</h1>
      <h2>Наступна олімпіада відбудеться вже скоро. <br/>Слідкуйте за оновленнями.</h2>
      <ul>
        {/* <li>
          Призовий фонд 5045 гривень
        </li>
        <li>
          До старту турніру залишилося 64 годин 15 хвилин 44 секунд
        </li>
        <li>
          <button 
            type="button"
            onClick={handleClickStartTournament} 
            className={css.button}
          >
            Стартувати
          </button>
            { isModalOpen && 
            <Exercise
              exercise={exercise}
            />
            }  
        </li>
        <li>
          Час проведення турніру обмежений. Заплануйте у своєму календарі.
        </li> */}
        <li>
          <button 
            type="button"
            onClick={() => navigate("/uk/game")} 
            className={css.button}
          >
            Тренуватись
          </button>
        </li>
      </ul>

      <h3 className={css.result}>Топ-10 учасників попередньої олімпіади</h3>
      <ul className={css.wrapperRating}>
        <li>
          <h3 className={css.rating}>Особистий залік</h3>
          <div className={css.tableTournament}>
            <table className={css.table}>
              <thead>
                  <tr>
                      <th className={css.th}>#</th>
                      <th className={css.th}>Ім'я учасника</th>
                      <th className={css.th}>Кількість балів</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className={css.td}>1</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>2</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>3</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>4</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>5</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>6</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>7</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>8</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>9</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>10</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
              </tbody>
            </table>
          </div>
        </li>
        <li>
          <h3 className={css.rating}>Командний залік</h3>
          <div className={css.tableTournament}>
            <table className={css.table}>
              <thead>
                  <tr>
                      <th className={css.th}>#</th>
                      <th className={css.th}>Команда учасника</th>
                      <th className={css.th}>Кількість балів</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className={css.td}>1</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>2</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>3</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>4</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>5</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>6</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>7</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>8</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>9</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
                  <tr>
                      <td className={css.td}>10</td>
                      <td className={css.td}></td>
                      <td className={css.td}></td>
                  </tr>
              </tbody>
            </table>
          </div>
        </li>
      </ul>
      <h2 className={css.rules}>Правила проведення олімпіади</h2>
      <h3>Гра-тренажер“Паляниця”</h3>
      <p>Учасники можуть у будь-який час виконувати різноманітні цікаві вправи у ігровій формі на сторінці “Паляниця”. Таким чином можна тренуватися та готуватися до олімпіади.</p>
      <h3>Формування команд</h3>
      <p>Можна самостійно брати участь у грі, і можна сформувати власну команду. Коли новий учасник реєструється на платформі, він автоматично потрапляє до команди свого запрошувача.</p>
      <p>Разом з тим, учасник може постійно розвивати свою команду, запрошуючи до гри нових учасників.</p>
      <h3>Олімпіади</h3>
      <p>Періодично для всіх користувачів, зареєстрованих на платформі, проводяться олімпіади з української мови. Оголошення про олімпіаду публікується у особистому кабінеті завчасно. Слідкуйте за оновленнями.</p>
      <p>У визначений час на сторінці “Олімпіада” особистого кабінету  активується кнопка “Стартувати”. При кліку на кнопку відкривається модальне вікно із завданням у вигляді вікторини.</p>
      <p>На старті у формі завдання в полі “Ім’я” необхідно вказати адресу електронної пошти, з якою Ви зареєстровані на платформі.</p>
      <p>Час на виконання завдань обмежений. Після збігу таймеру учасники можуть ознайомитися із результатами та правильними відповідями.</p>
      <p>Учасники, які надали більше <span className={css.num}>75%</span> правильних відповідей отримують призові бали.</p>
      <p>Кількість балів, яку отримує учасник, залежить від поточного значення його особистого рівня підтримки проєкту (див. табл)</p>
      <p>Таку саму кількість балів отримує запрошувач, до команди якого входить даний учасник.</p>
      <div className={css.tableTournament}>
        <table className={css.table}>
          <thead>
              <tr>
                  <th className={css.th}>Особистий рівень підтримки проєкту учасника</th>
                  <th className={css.th}>Кількість балів для учасника</th>
                  <th className={css.th}>Кількість балів для запрошувача даного учасника</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className={css.td}>1 - 1.99</td>
                  <td className={css.td}>1</td>
                  <td className={css.td}>1</td>
              </tr>
              <tr>
                  <td className={css.td}>2 - 2.99</td>
                  <td className={css.td}>2</td>
                  <td className={css.td}>2</td>
              </tr>
              <tr>
                  <td className={css.td}>3 - 3.99</td>
                  <td className={css.td}>3</td>
                  <td className={css.td}>3</td>
              </tr>
              <tr>
                  <td className={css.td}>4 - 4.99</td>
                  <td className={css.td}>4</td>
                  <td className={css.td}>4</td>
              </tr>
              <tr>
                  <td className={css.td}>5 - 5.99</td>
                  <td className={css.td}>5</td>
                  <td className={css.td}>5</td>
              </tr>
              <tr>
                  <td className={css.td}>6 - 6.99</td>
                  <td className={css.td}>6</td>
                  <td className={css.td}>6</td>
              </tr>
              <tr>
                  <td className={css.td}>7 - 7.99</td>
                  <td className={css.td}>7</td>
                  <td className={css.td}>7</td>
              </tr>
              <tr>
                  <td className={css.td}>8 і більше</td>
                  <td className={css.td}>8</td>
                  <td className={css.td}>8</td>
              </tr>
          </tbody>
        </table>
      </div>
      <h3>Призовий фонд</h3>
      <p>Призовий фонд кожної олімпіади формується у проміжок часу між попередньою та прийдешньою олімпіадами.</p>
      <p>Призовий фонд складає <span className={css.num}>5%</span> від загальної суми підтримки проєкту, зробленої усіма користувачами платформи за період з моменту завершення попереднього турніру. </p>
      <p>За результатами олімпіади підсумовується загальна кількість призових балів, отриманих усіма учасниками.</p>
      <p>Визначається ціна балу шляхом ділення призового фонду на загальну кількість призових балів цього турніру.</p>
      <p>Для кожного учасника розраховується призова сума шляхом множення отриманих ним у олімпіаді балів на ціну балу. </p>
      <p>Призові суми зараховуються на рахунки учасників протягом доби після завершення олімпіади.</p>
      <p>Винагороди з призового рахунку можна використовувати для підтримки проєкту та/або замовляти українські книги на вибір у книжкових інтернет магазинах - партнерах проєкту.</p>
    </div>
    );
  };