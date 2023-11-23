import { useNavigate } from 'react-router-dom';
import css from './CourseCover.module.css';

export default function Course ({id, title}) {
  const navigate = useNavigate();

      return (
          <li key={id} className={css.box}>
            <h2 className={css.title}>{title}</h2>
            <button type="button"
              onClick={() => navigate(`/learn/${id}`)} 
              className={css.button}
            >
              Продовжити навчання
            </button>
          </li>
        );     
};