import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { changeRange, resetInitialState } from 'redux/payments/rangeSlice';
import { convertStartDate, convertEndDate } from "service/handleDate";
import DatePicker, {registerLocale} from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import 'react-datepicker/dist/react-datepicker.css';
import css from './DateRange.module.css';

export const DateRange = () => {
    registerLocale('uk', uk)
  const [startDate, setStartDate] = useState(new Date().toISOString());
  const [endDate, setEndDate] = useState(new Date().toISOString());
  const dispatch = useDispatch();

  const handleStartDateChange = date => {
    setStartDate(date.toISOString());
  };

  const handleEndDateChange = date => {
    setEndDate(date.toISOString());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const start = convertStartDate(startDate);
    const end = convertEndDate(endDate);
    dispatch(changeRange({start, end}))
  };

  useEffect(() => {
    dispatch(resetInitialState());
  }, [dispatch]);

  return (
    <>
        <form 
            onSubmit={handleSubmit} 
            className={css.formDate}
        >
            <ul className={css.listForm}>
                <li>
                    <label className={css.label}>
                        Оберіть початкову дату
                    </label>
                    <DatePicker className={css.input}
                        selected={startDate}
                        onChange={handleStartDateChange}
                        placeholderText="Початкова дата"
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="yyyy-MM-dd"
                        maxDate={new Date()}
                        locale="uk" 
                    />
                </li>
                <li>
                    <label className={css.label}>
                        Оберіть кінцеву дату
                    </label>
                    <DatePicker className={css.input}
                        selected={endDate}
                        onChange={handleEndDateChange}
                        placeholderText="Кінцева дата"
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        dateFormat="yyyy-MM-dd"
                        maxDate={new Date()}
                        locale="uk"  
                    />
                </li>
            </ul>
            <button 
              type="submit" 
              className={css.button}
            >
              Переглянути
            </button>
        </form> 
    </>   
  );
};