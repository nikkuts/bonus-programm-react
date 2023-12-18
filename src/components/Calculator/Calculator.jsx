import axios from 'axios';
// import { useAuth } from 'hooks';
import css from './Calculator.module.css';

axios.defaults.baseURL = 'https://bonus-programm-backend.onrender.com';

export default function Calculator () {
  // const {user} = useAuth();
  const apiEndpoint = 'https://www.liqpay.ua/api/3/checkout';

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
    // const userId = user.id;

    if (!isAmountValid(amount)) {
      return;
    }

    try {
      const response = await axios.post("/api/payments/donat", {amount});
      const postData = response.data;

      // Створення форми та автоматичне надсилання
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = apiEndpoint;
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
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Введіть сумму
        <input
          type="number"
          name="amount"
        />
      </label>
      <button type="submit" className={css.button}>
        Підтримати
      </button>
    </form>
  );
};