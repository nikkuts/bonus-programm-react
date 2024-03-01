import css from './Audio.module.css';

export const Audio = ({audioIndex, audioUrl}) => {

    return (
        <div>
            <p>Нижче ви можете прослухати аудіоверсію завдань та приклад виконання одного з них від Катрі, модераторки розмовних клубів «Єдині», викладачки української мови 🙏 Окремим аудіозаписом - додаткові матеріали.</p>
            <p>Аудіоверсія дублює текстовий варіант.</p>
            <div>
            <audio key={audioIndex} controls>
                <source src={audioUrl} type="audio/mp3" />
                Ваш браузер не підтримує відтворення аудіо.
            </audio>
            </div>
        </div>
    )
}