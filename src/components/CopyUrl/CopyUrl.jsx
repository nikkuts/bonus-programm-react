import { Link } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';
import { ReactComponent as Copy } from 'icons/copy.svg';
import { ReactComponent as Telegram } from 'icons/telegram.svg';
import css from './CopyUrl.module.css'

export default function CopyUrl({ url }) {
  const clipboard = useClipboard({
    onSuccess() {
        alert('Ваше посилання скопійовано')
      }
  });
  const text = 'Тут ми разом з однодумцями плюсуємо українську) Доєднуйся'

  return (
    <div className={css.wrapper}>
        <input 
          ref={clipboard.target} 
          value={url} 
          readOnly
          className={css.input} 
        />
        <button 
          onClick={clipboard.copy}
          className={css.button}
        >
          <Copy />
          <span className={css.text}>Скопіювати</span>
        </button>
      <Link
        to={`https://t.me/share/url?url=${url}&text=${encodeURIComponent(text)}`} 
        target='blank'
        className={css.telegramBtn}
      >
        <Telegram />
      </Link>
    </div>
  );
}