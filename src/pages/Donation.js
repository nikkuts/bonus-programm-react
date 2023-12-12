import { useNavigate } from 'react-router-dom';

export default function Donation() {
    const navigate = useNavigate();

    return (
      <div>
        <h1>
        Допоможи
        1 000 000 людей
        перейти на українську
        та звільнитися
        від впливу росії
        </h1>
        <button type="button"
          onClick={() => navigate("/calculator")} 
        //   className={css.button}
        >
          Підтримати проєкт
        </button>
      </div>
    );
  };