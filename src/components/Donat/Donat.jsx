import axios from 'axios';
import {AXIOS_BASE_URL, API_PAY_ENDPOINT} from '../../constants';
import { Link } from 'react-router-dom';
import css from './Donat.module.css';

axios.defaults.baseURL = AXIOS_BASE_URL;

export default function Donat () {
  const apiPayEndpoint = API_PAY_ENDPOINT;

  const isAmountValid = (value) => {
    const amount = parseFloat(value);
    if (isNaN(amount) || amount % 40 !== 0) {
      alert('Сума повинна бути кратною 40');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const calc = e.currentTarget;
    const amount = calc.elements.amount.value;

    if (!isAmountValid(amount)) {
      return;
    }

    try {
      const response = await axios.post("/api/payments/donat", {amount});
      const postData = response.data;

      // Створення форми та автоматичне надсилання
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = apiPayEndpoint;
      form.acceptCharset = 'utf-8';
  
      // Додавання прихованих полів
      Object.entries(postData).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });
  
      // Додавання форми до body та автоматичне відправлення
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form); 
    } 
    catch (error) {
      console.error('Помилка під час відправлення форми:', error);
      alert('Помилка відправки форми. Будь ласка, спробуйте повторити.');
    }
    finally {
      calc.reset();
    }
  };

  return (
    <div className={css.containerDonat}>
      <h1 className={css.titleDonat}>
        Допоможи
        1 000 000 людей
        перейти на українську
        та звільнитися
        від впливу росії
      </h1>
      <h2 className={css.decriptionDonat}>
        Кожні 40 гривень Вашої підтримки 
        надають можливість проєкту допомогти 
        1 українцеві на місяць перейти на українську! 
      </h2>
      <form onSubmit={handleSubmit} className={css.formDonat}>
        <ul className={css.listForm}>
          <li>
            <label className={css.label}>
              Введіть бажану суму у гривнях кратну 40
            </label>
          </li>
          <li>
            <input className={css.input}
              type="number"
              name="amount"
            />
          </li>
          <li>
            <button type="submit" className={css.button}>
              Підтримати
            </button>
          </li>
          <li>
            Я погоджуюсь з <Link 
              to="https://yedyni.org/wp-content/uploads/2023/08/dogovir-oferty.pdf"
              target="_blank"
              className={css.oferta} 
            >
              Публічною офертою
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};