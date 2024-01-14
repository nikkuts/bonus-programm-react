import { useClipboard } from 'use-clipboard-copy';
import { BsCopy } from "react-icons/bs";
import css from './CopyUrl.module.css'

export default function CopyUrl({ url }) {
  const clipboard = useClipboard({
    onSuccess() {
        alert('Ваше посилання скопійовано')
      }
  });
  return (
    <div>
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
        <BsCopy />
        <span className={css.text}>Скопіювати</span>
      </button>
    </div>
  );
}