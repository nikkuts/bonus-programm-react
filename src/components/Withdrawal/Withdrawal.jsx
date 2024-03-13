  import { useState, useCallback, useEffect } from "react";
  import { useDispatch } from 'react-redux';
  import { Link } from 'react-router-dom';
  import { toogleModal } from 'redux/modal/modalSlice';
  import axios from 'axios';
  import { AXIOS_BASE_URL } from '../../constants';
  import { ReactComponent as CheckSquare } from 'icons/check-square.svg';
  import { ReactComponent as Square } from 'icons/square.svg';
  import css from './Withdrawal.module.css';

  axios.defaults.baseURL = AXIOS_BASE_URL;
  
  export const Withdrawal = () => {
      const dispatch = useDispatch();

      const [checkboxSupport, setCheckboxSupport] = useState(true);
      const [checkboxCard, setCheckboxCard] = useState(false);
      const [checkboxOfertaAgreed, setCheckboxOfertaAgreed] = useState(false);
      const [currentAmount, setCurrentAmount] = useState('');

      const handleCurrentAmount = (e) => {
        setCurrentAmount(e.target.value);
      }
    
      const toggleCheckboxSupport = () => {
        setCheckboxCard(false);
        setCheckboxSupport(!checkboxSupport);
      };

      const toggleCheckboxCard = () => {
        setCheckboxSupport(false);
        setCheckboxCard(!checkboxCard);
      };
    
      const toggleCheckboxOferta = () => {
        setCheckboxOfertaAgreed(!checkboxOfertaAgreed);
      };

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
        
        if (!checkboxOfertaAgreed) {
          alert('Будь ласка, погодьтесь з умовами договору оферти');
          return;
        } 
        else {
          const form = e.currentTarget;
          const amount = form.elements.amount.value;
    
          if (!isAmountValid(amount)) {
            return;
          }
    
          const formData = {amount};
    
          if (checkboxSupport) {
            formData.method = 'support';
          } else if (checkboxCard) {
            formData.method = 'card';
          } else {
            alert('Оберіть, будь ласка, спосіб виводу');
            return;
          }
    
          try {
            await axios.post("/api/payments/withdrawal", formData);
            alert('Заявка прийнята.'); 
          } 
          catch (error) {
            console.error('Помилка під час відправлення форми:', error);
            alert('Помилка відправки форми. Будь ласка, спробуйте повторити.');
          }
          finally {
            form.reset();
          }
        }
      };
  
      const closeModal = useCallback(
          () => dispatch(toogleModal()),
          [dispatch]
      );
  
      const onBackdropClose = e => {
          if (e.currentTarget === e.target) {
              closeModal();
          }
        };
  
      useEffect(() => {
          const keyDown = e => {
            if (e.code === 'Escape') {
              closeModal();
            }
          };
          window.addEventListener('keydown', keyDown);
          return () => {window.removeEventListener('keydown', keyDown);}
        }, [closeModal])
  
      return (
          <div  
              onClick={onBackdropClose}
              className={css.overlay}
          >
            <form onSubmit={handleSubmit} className={css.form}>
              <ul className={css.listForm}>
                <li>
                  <label className={css.label}>
                    Оберіть, будь ласка, спосіб виводу
                  </label>
                  <div className={css.itemCheckBox}>
                    <div 
                      onClick={toggleCheckboxSupport}
                      className={css.checkBox} 
                    >
                      {checkboxSupport ? <CheckSquare/> : <Square/>} 
                    </div>
                    <label className={css.text}>
                      Підтримати проєкт "Єдині" 
                    </label>
                  </div>
                  <div className={css.itemCheckBox}>
                    <div 
                      onClick={toggleCheckboxCard}
                      className={css.checkBox} 
                    >
                      {checkboxCard ? <CheckSquare/> : <Square/>} 
                    </div>
                    <label className={css.text}>
                      Вивести на карту 
                    </label>
                  </div>
                </li>
                <li>
                  <label className={css.label}>
                    Введіть потрібну суму кратну 40
                  </label>
                  <input className={css.input}
                    type="number"
                    name="amount"
                    value={currentAmount}
                    placeholder='40'
                    onChange={handleCurrentAmount}
                  />
                </li>
                <li>
                  <button 
                    type="submit" 
                    className={css.button}>
                    Підтвердити
                  </button>
                </li>
                <li className={css.itemCheckBox}>
                  <div 
                    onClick={toggleCheckboxOferta} 
                    className={css.checkBox}
                  >
                    {checkboxOfertaAgreed ? <CheckSquare/> : <Square/>} 
                  </div>
                  <label className={css.text}>
                    Я погоджуюсь з <Link 
                    to="https://yedyni.org/wp-content/uploads/2023/08/dogovir-oferty.pdf"
                    target="_blank"
                    className={css.oferta} 
                    >
                      Публічною офертою
                    </Link>
                  </label>
                </li>
              </ul>
            </form>
          </div>           
      )
  }