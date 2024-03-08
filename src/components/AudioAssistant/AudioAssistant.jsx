import { useSelector } from 'react-redux';
import { selectCurrentLesson } from 'redux/exercises/selectors';
import css from './AudioAssistant.module.css';

export default function AudioAssistant () {
    const currentLesson = useSelector(selectCurrentLesson);

    return (
        <>
            <div className={css.descriptionAudio}>
                <p>Мовна практика є надзвичайно важливою! Щоб досягти кращих результатів у засвоєнні матеріалів цього дня, потренуйтесь разом з вашим аудіопомічником 🙏 
                </p>
            </div>
            <div className={css.wrapperAudio}>
                {currentLesson.audio.map((audioUrl) => (
                    <audio key={audioUrl} controls>
                        <source src={audioUrl} type="audio/mp3" />
                        Ваш браузер не підтримує відтворення аудіо.
                    </audio>
                ))}
            </div> 
        </>          
    )
};