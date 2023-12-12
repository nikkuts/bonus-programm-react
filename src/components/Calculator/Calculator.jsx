import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from 'hooks';
import css from './Calculator.module.css';

axios.defaults.baseURL = "https://api.monobank.ua";

export default function Calculator () {
  const navigate = useNavigate();
  const {user} = useAuth();

  const createInvoice = async (credentials) => {
    try {
      const response = await axios.post('/api/merchant/invoice/create', credentials, {
        headers: {
          'X-Token' : 'uyj5rPqx_QcltpWAZPONVZekEnxJOrdeKDH6FWysAtII',
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } 
    catch (error) {
      console.error('Помилка під час відправлення форми:', error);
      alert('Помилка відправки форми. Будь ласка, спробуйте повторити.');
    }
  }

  const isAmountValid = (value) => {
    const amount = parseFloat(value);
    return !isNaN(amount) && amount % 40 === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!isAmountValid(form.elements.amount.value)) {
      alert('Сума повинна бути кратною 40');
      return;
    }

    const formData = {
      amount: form.elements.amount.value * 100,
      ccy: 980,
      merchantPaymInfo: {
        reference: user.id,
        },
      redirectUrl: "https://nikkuts.github.io/bonus-programm-react/",
      webHookUrl: "https://bonus-programm-backend.onrender.com",
    };
  
    const response = createInvoice(formData);

    if (response) {
      navigate(response.pageUrl);
    }

    form.reset();
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          <input placeholder='Введіть суму' type="text" name="amount" />
        </label>
        <button className={css.button} type="submit">Підтримати</button>
      </form>
    </div>   
  );
};