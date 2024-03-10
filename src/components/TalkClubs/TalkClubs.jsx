import { useState } from "react";
import { Link } from 'react-router-dom';
import clubs from "components/clubs.json";
import css from './TalkClubs.module.css';

export default function TalkClubs () {
    const [filter, setFilter] = useState('');

    const handlerChangeFilter = (e) => setFilter(e.target.value);

    const getVisibleClubs = () => {
    
        if (filter === '') {
          return clubs;
        }
        const normalizedFilter = filter.toLowerCase();
        return clubs.filter(({city}) => 
        city.toLowerCase().includes(normalizedFilter));
      };

    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>
            Мережа розмовних клубів проєкту “Єдині”
        </h1>
        <h2 className={css.decription}>
            Отримай потужну підтримку та практикуй українську у колі однодумців
        </h2>
        <ul className={css.listBenefits}>
          <li className={css.itemBenefit}>
            Регулярні зустрічі
          </li>
          <li className={css.itemBenefit}>
            Україномовне середовище
          </li>
          <li className={css.itemBenefit}>
            Спілкування з однодумцями
          </li>
          <li className={css.itemBenefit}>
            Ефективне вивчення та укорінення української мови через практику
          </li>
          <li className={css.itemBenefit}>
            Підтримка одне одного та найкраща психологічна підтримка у складний час
          </li>
          <li className={css.itemBenefit}>
            Причетність до великої справи
          </li>
        </ul>
        <p>
            Мережа розмовних клубів проєкту “Єдині” постійно зростає. Приєднуйтесь до розмовного клубу у вашому місті! 
        </p>
        <p>Якщо поблизу вас ще не має розмовного клубу, станьте його організатором. Це найкращий спосіб популяризації проєкту та розширення своєї команди!</p>
        <p>Маєте намір організувати розмовний клуб? Зв’яжіться з нами, і ми допоможемо вам це зробити. Напишіть нашому модератору у чаті підтримки.</p>
        <p>Нагадуємо, що Ви також можете брати участь у розмовних клубах онлайн. Їх розклад та анонси регулярно публікуються у чатах підтримки.</p>
        <div className={css.filterFields}>
          <label>
            Введіть назву вашого населеного пункту, району чи області
          <input
              type="text"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              onChange={handlerChangeFilter}
          />
          </label>
        </div>
        <ul className={css.listClubs}>
            {getVisibleClubs().map(({city, form}, index) => (
                <li
                  key={index}
                  className={css.item}
                >
                  {city}
                  <Link
                    to={form}
                    target="blank"
                    className={css.link}
                  >
                    Відкрити
                  </Link>
                </li> 
            ))}
        </ul>
       
      </div>
    );
  };