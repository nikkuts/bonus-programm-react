import { useNavigate } from 'react-router-dom';
import css from './CourseCover.module.css';

export default function CourseCover ({id, title}) {
  const navigate = useNavigate();

      return (
          <li className={css.box}>
            <h2 className={css.title}>{title}</h2>
            <button type="button"
              onClick={() => navigate(`${id}`)} 
              className={css.button}
            >
              Продовжити навчання
            </button>
          </li>
        );     
};