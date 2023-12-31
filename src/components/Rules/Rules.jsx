import css from './Rules.module.css';

export default function Rules () {

  return (
    <div className={css.containerBonus}>
    <h1>Поклич друзів разом опановувати українську та отримувати бонуси на 8 рівнів!</h1>
    <h2>Бонусна багаторівнева програма руху “Єдині” “Плюсуй українську”</h2>
    <h3>Основні положення</h3>
    <p>Бонусна програма “Плюсуй українську” спрямована на розширення спільноти свідомих людей, які переходять або вдосконалюють українську мову за підтримки проєкту “Єдині”.</p>
    <p>Бонусна програма “Плюсуй українську” - це програма заохочення учасників мовних курсів проєкту “Єдині” рекомендувати дані курси своєму оточенню.</p>
    <p>Участь у бонусній програмі можуть брати користувачі, які зареєстровані на сайті проєкту “Єдині” та підтвердили свої дані (email та телефон).</p>
    <p>Кожен користувач сайту “Єдині” має свого запрошувача, людину, завдяки кому дізнався про проєкт та зареєструвався за його запрошувальним покликанням.</p>
    <p>Якщо учасник зареєструвався без запрошувального покликання, його консультує адміністратор проєкту.</p>
    <p>Таким чином, будується багаторівневе дерево структури учасників бонусної програми.</p>
    <p>У особистому кабінеті кожен учасник має власний бонусний рахунок та персональне покликання для запрошень разом з інструментами для запрошень.</p>
    <p>За їх допомогою учасник може поділитися зі своїм оточенням інформацією про проєкт будь яким зручним способом.</p>
    <p>Повна статистика, включно зі структурою запрошених учасників, історією внесків підтримки та бонусів, також доступна у особистому кабінеті учасника.</p>
    <h3>Як формуються бонуси?</h3>
    <p>Учасники добровільно підтримують проєкт внесками. Сума допомоги кратна <span className={css.num}>40</span> гривням.</p>
    <p>Кожні <span className={css.num}>40 гривень</span> підтримки дозволяють проєкту допомогти одному українцеві на місяць опанувати українську мову.</p>
    <p>При цьому проєкт винагороджує активних учасників програми “Плюсуй українську” за допомогу у поширенні інформації про діяльність руху “Єдині”.</p>
    <p>Бонуси нараховуються на бонусний рахунок учасника із внесків підтримки, які роблять учасники його структури на <span className={css.num}>8 рівнях</span>, згідно бонусної програми, описаної нижче (див. таб).</p>
    <p>Бонуси нараховуються учаснику за умови, якщо поточне значення його особистого рівня підтримки проєкту більше або дорівнює <span className={css.num}>1</span>.</p>
    <p>Особистий рівень підтримки показує скільки українців на місяць в середньому опанували українську завдяки внескам даного учасника з початку його участі у проєкті.</p>
    <p>Актуальне значення особистого рівня підтримки розраховується автоматично та відображається у кабінеті учасника.</p>
    <p>Бонуси з бонусного рахунку можна використовувати для підтримки проєкту та/або виводити на власну банківську карту.</p>
    <p></p>
    <table>
      <tr>
          <th>Назва стовпця 1</th>
          <th>Назва стовпця 2</th>
          <th>Назва стовпця 3</th>
          <th>Назва стовпця 4</th>
          <th>Назва стовпця 5</th>
      </tr>
      <tr>
          <td>Дані 1, Стовпець 1</td>
          <td>Дані 1, Стовпець 2</td>
          <td>Дані 1, Стовпець 3</td>
          <td>Дані 1, Стовпець 3</td>
      </tr>
      <tr>
          <td>Дані 2, Стовпець 1</td>
          <td>Дані 2, Стовпець 2</td>
          <td>Дані 2, Стовпець 3</td>
          <td>Дані 2, Стовпець 3</td>
      </tr>
      <tr>
          <td>Дані 3, Стовпець 1</td>
          <td>Дані 3, Стовпець 2</td>
          <td>Дані 3, Стовпець 3</td>
          <td>Дані 2, Стовпець 3</td>
      </tr>
    </table>
  </div>
  );
};