import Base64 from 'crypto-js/enc-base64';
import SHA1 from 'crypto-js/sha1';
import enc from 'crypto-js/enc-utf8';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from 'hooks';
import css from './Calculator.module.css';

export default function Calculator () {
  const {user} = useAuth();
  const privateKey = 'sandbox_y7XJxkWfQbDHk9E5AxjwG2Bs05cnLaZSszE6fXSH'; 
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

    if (!isAmountValid(calc.elements.amount.value)) {
      return;
    }

    const orderId = uuidv4();

    // Кодуємо дані JSON у рядок та потім у Base64
    const dataString = JSON.stringify({ 
      public_key: 'sandbox_i34988561100', 
      version: '3',
      action: 'paydonate',
      amount: calc.elements.amount.value,
      currency: 'UAH',
      description: 'Підтримка проєкту',
      order_id: orderId,
      result_url: 'https://nikkuts.github.io/bonus-programm-react/',
      server_url: 'https://bonus-programm-backend.onrender.com',
      customer: user.id,
    });
    const data = Base64.stringify(enc.parse(dataString));

    // Створюємо підпис
    const hash = SHA1(privateKey + data + privateKey);
    const signature = Base64.stringify(hash);
    
    const postData = {
      data: data,
      signature: signature,
    };

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




// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useAuth } from 'hooks';
// import css from './Calculator.module.css';

// axios.defaults.baseURL = "https://api.monobank.ua";

// export default function Calculator () {
//   const navigate = useNavigate();
//   const {user} = useAuth();

//   const createInvoice = async (credentials) => {
//     try {
//       const response = await axios.post('/api/merchant/invoice/create', credentials, {
//         headers: {
//           'X-Token' : 'uyj5rPqx_QcltpWAZPONVZekEnxJOrdeKDH6FWysAtII',
//           'Content-Type': 'application/json',
//         },
//       });
//       return response.data;
//     } 
//     catch (error) {
//       console.error('Помилка під час відправлення форми:', error);
//       alert('Помилка відправки форми. Будь ласка, спробуйте повторити.');
//     }
//   }

//   const isAmountValid = (value) => {
//     const amount = parseFloat(value);
//     return !isNaN(amount) && amount % 40 === 0;
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;

//     if (!isAmountValid(form.elements.amount.value)) {
//       alert('Сума повинна бути кратною 40');
//       return;
//     }

//     const formData = {
//       amount: form.elements.amount.value * 100,
//       ccy: 980,
//       merchantPaymInfo: {
//         reference: user.id,
//         },
//       redirectUrl: "https://nikkuts.github.io/bonus-programm-react/",
//       webHookUrl: "https://bonus-programm-backend.onrender.com",
//     };
  
//     const response = createInvoice(formData);

//     if (response) {
//       navigate(response.pageUrl);
//     }

//     form.reset();
//   };

//   return (
//     <div>
//       <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//         <label className={css.label}>
//           <input placeholder='Введіть суму' type="text" name="amount" />
//         </label>
//         <button className={css.button} type="submit">Підтримати</button>
//       </form>
//     </div>   
//   );
// };