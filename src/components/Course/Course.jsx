import { useNavigate } from 'react-router-dom';
import css from './Course.module.css';

export default function Course ({id, title}) {
  const navigate = useNavigate();

      return (
          <li key={id} className={css.box}>
            <h2 className={css.title}>{title}</h2>
            <button type="button"
              onClick={() => navigate(`/courses/${id}`)} 
              className={css.button}
            >
              Продовжити навчання
            </button>
          </li>
        );     
};