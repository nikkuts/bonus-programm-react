import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toogleModal } from 'redux/modal/modalSlice';
import { selectModal } from 'redux/modal/selectors';
import { Exercise } from 'components/Exercise/Exercise';
import exercises from "components/exercises.json";
import css from './Game.module.css';

export default function Game () {
  const[exercise, setExercise] = useState(exercises[0]);
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectModal);

  const handleClickStartGame = () => {
    const randomIndex = Math.floor(Math.random() * exercises.length);
    const randomElement = exercises[randomIndex];
    setExercise(randomElement);
    dispatch(toogleModal());
  };

    return (
      <div className={css.wrapperGame}>
        <h1 className={css.titleGame}>
          Гра-тренажер "Паляниця"
        </h1>
        <h2 className={css.decriptionGame}>
          Вивчай українську, граючи
        </h2>
        <ul className={css.listGame}>
          <li className={css.item}>
            <span className={css.numberItem}>1 </span>
            Натисни на кнопку "Почати гру"
          </li>
          <li className={css.item}>
            <span className={css.numberItem}>2 </span>
            Система рандомно обере тобі одне із багатьох цікавих завдань
          </li>
          <li className={css.item}>
            <span className={css.numberItem}>3 </span>
            Вікторини, вправи на співставлення, ігри зі словами та багато іншого
          </li>
          <li className={css.item}>
            <span className={css.numberItem}>4 </span>
            Виконай вправу. На це у тебе піде не більше 7 хвилин
          </li>
          <li className={css.item}>
            <span className={css.numberItem}>5 </span>
            Отримай результат гри та загальний рейтинг
          </li>
          <li className={css.item}>
            <span className={css.numberItem}>6 </span>
            Переглянь правильні відповіді
          </li>
          <li className={css.item}>
            <span className={css.numberItem}>7 </span>
            Зіграй ще раз :)
          </li>
        </ul>
        <p className={css.text}>
          Підходить усім, хто вміє читати на українській мові
        </p>
        <button 
          type="button"
          onClick={handleClickStartGame} 
          className={css.button}
        >
          Почати гру
        </button>
        { isModalOpen && 
        <Exercise
          exercise={exercise}
        />
        }  
      </div>
    );
  };