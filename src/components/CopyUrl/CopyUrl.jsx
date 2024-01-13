import { useClipboard } from 'use-clipboard-copy';

export default function CopyUrl({ url }) {
  const clipboard = useClipboard({
    onSuccess() {
        alert('Ваше посилання скопійовано')
      }
  });
  return (
    <div>
      <input ref={clipboard.target} value={url} readOnly />
      <button onClick={clipboard.copy}>Скопіювати</button>
    </div>
  );
}