import css from './Rules.module.css';

export default function Rules () {

  return (
    <div className={css.containerBonus}>
    <h1>Поклич друзів разом опановувати українську та отримувати бонуси на 8 рівнів!</h1>
    <h2>Бонусна багаторівнева програма руху “Єдині” “Плюсуй українську”</h2>
    <h3>Основні положення</h3>
    <p>Бонусна програма “Плюсуй українську” спрямована на розширення спільноти свідомих людей, які переходять або вдосконалюють українську мову за підтримки проєкту “Єдині”.</p>
    <p>Бонусна програма “Плюсуй українську” - це програма заохочення учасників мовних курсів проєкту “Єдині” рекомендувати дані курси своєму оточенню.</p>
    <p>Участь у бонусній програмі можуть брати користувачі, які зареєстровані на платформі проєкту “Єдині” та підтвердили свої дані (email та телефон).</p>
    <p>Кожен користувач сайту “Єдині” має свого запрошувача, людину, завдяки кому дізнався про проєкт та зареєструвався за його запрошувальним посиланням.</p>
    <p>Якщо учасник зареєструвався без запрошувального посилання, його консультує адміністратор проєкту.</p>
    <p>Таким чином, будується багаторівневе дерево структури учасників бонусної програми.</p>
    <p>У особистому кабінеті кожен учасник має власний бонусний рахунок та персональне посилання для запрошень разом з інструментами для запрошень.</p>
    <p>За їх допомогою учасник може поділитися зі своїм оточенням інформацією про проєкт будь яким зручним способом.</p>
    <p>Повна статистика, включно зі структурою запрошених учасників, історією внесків підтримки та бонусів, також доступна у особистому кабінеті учасника.</p>
    <h3>Базова сума підтримки</h3>
    <p>Учасники добровільно підтримують проєкт внесками. Сума допомоги кратна значенню базової суми підтримки.</p>
    <p>Базова сума підтримки дозволяє проєкту допомогти одному українцеві на місяць опанувати українську мову.</p>
    <p>Базова сума підтримки може коригуватись в залежності від поточних витрат на підтримку учасників проєкту.</p>
    <p>На даний момент значення базової суми підтримки складає <span className={css.num}>40</span> гривень.</p>
    <h3>Особистий рівень підтримки</h3>
    <p>Особистий рівень підтримки показує скільки українців на місяць в середньому опанували українську завдяки внескам даного учасника з початку його участі у проєкті.</p>
    <p>Актуальне значення особистого рівня підтримки розраховується за формулою та відображається у кабінеті учасника:</p>
    <p className={css.formula}>РП = (П / БП) * (ТК / Т)</p>
    <p>де:</p>
    <p>РП - особистий рівень підтримки (середнє значення кількості підтриманих учасників на місяць)</p>
    <p>П - загальна сума внесків підтримки учасника за весь час (грн)</p>
    <p>БП - базова сума підтримки (40 грн)</p>
    <p>ТК - тривалість курсу (28 днів)</p>
    <p>Т - загальна тривалість участі учасника у проєкті (днів)</p>
    <p></p>
    <p>У перші 28 днів участі особистий рівень підтримки учасника розраховується за спрощеною формулою:</p>
    <p className={css.formula}>РП = (П / БП)</p>
    <h3>Як формуються бонуси?</h3>
    <p>Проєкт винагороджує активних учасників програми “Плюсуй українську” за допомогу у поширенні інформації про діяльність руху “Єдині”.</p>
    <p>Бонуси учасника формуються, як відсотки з внесків підтримки, які роблять учасники його структури на 8 рівнях.</p>
    <p>Учасник отримує бонуси з кожного із 8 рівнів своєї структури за умови, якщо поточне значення його особистого рівня підтримки проєкту відповідає даному рівню структури (див. таб).</p>
    <p>Бонуси нараховуються на бонусний рахунок особистого кабінету учасника.</p>
    <p>Бонуси з бонусного рахунку можна використовувати для підтримки проєкту та/або виводити на власну банківську карту, починаючи від суми <span className={css.num}>40</span> гривень.</p>
    <div className={css.tableRules}>
      <table className={css.table}>
        <tr>
            <th className={css.th}>Рівень структури учасника</th>
            <th className={css.th}>Особистий рівень підтримки проєкту учасника</th>
            <th className={css.th}>Бонус від суми внеску, %</th>
        </tr>
        <tr>
            <td className={css.td}>1</td>
            <td className={css.td}>1 і більше</td>
            <td className={css.td}>10%</td>
        </tr>
        <tr>
            <td className={css.td}>2</td>
            <td className={css.td}>2 і більше</td>
            <td className={css.td}>5%</td>
        </tr>
        <tr>
            <td className={css.td}>3</td>
            <td className={css.td}>3 і більше</td>
            <td className={css.td}>5%</td>
        </tr>
        <tr>
            <td className={css.td}>4</td>
            <td className={css.td}>4 і більше</td>
            <td className={css.td}>5%</td>
        </tr>
        <tr>
            <td className={css.td}>5</td>
            <td className={css.td}>5 і більше</td>
            <td className={css.td}>5%</td>
        </tr>
        <tr>
            <td className={css.td}>6</td>
            <td className={css.td}>6 і більше</td>
            <td className={css.td}>5%</td>
        </tr>
        <tr>
            <td className={css.td}>7</td>
            <td className={css.td}>7 і більше</td>
            <td className={css.td}>5%</td>
        </tr>
        <tr>
            <td className={css.td}>8</td>
            <td className={css.td}>8 і більше</td>
            <td className={css.td}>5%</td>
        </tr>
      </table>
    </div>
  </div>
  );
};