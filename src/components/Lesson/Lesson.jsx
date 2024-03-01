import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectExercise } from 'redux/exercises/selectors';
import { HomeworkForm } from 'components/HomeworkForm/HomeworkForm';
import courses from "../courses.json";
import css from './Lesson.module.css';

export default function Lesson () {
    const { homework } = useSelector(selectExercise);
    const [nextHomework, setNextHomework] = useState(homework);

    const {courseId, lessonId} = useParams();
    const currentCourse = courses.find(course => course.id === courseId);
    const currentLesson = currentCourse.lessons.find(lesson => lesson.day === lessonId);

    useEffect(() => {
        setNextHomework(homework);      
    }, [homework]);

    if (!currentLesson) {
        return <div>Урок не знайдено</div>;
    }

    return (
        <>          
            {courseId === 'id-1' &&
            <div className={css.lessonContainer}>
                <img src={currentLesson.image} alt={`День ${currentLesson.day}`} width="100%" />
                <div className={css.descriptionAudio}>
                    <p>Нижче ви можете прослухати аудіоверсію завдань та приклад виконання одного з них від Катрі, модераторки розмовних клубів «Єдині», викладачки української мови 🙏 
                        <br />Окремим аудіозаписом - додаткові матеріали.
                    </p>
                    <p>Аудіоверсія дублює текстовий варіант.</p>
                </div>
                <div className={css.wrapperAudio}>
                    {currentLesson.audio.length > 0 &&
                    <>
                        {currentLesson.audio.map((audioUrl) => (
                            <audio key={audioUrl} controls>
                                <source src={audioUrl} type="audio/mp3" />
                                Ваш браузер не підтримує відтворення аудіо.
                            </audio>
                        ))}
                    </>
                    }
                </div>
            </div>
            }
                      
           {currentLesson.content && (
                <iframe 
                    title="Вставка Google doc"
                    src={currentLesson.content} 
                    width="100%" height="800" frameBorder="0" allow="autoplay"
                />
            )}

            {homework === nextHomework &&
            <HomeworkForm 
                courseId={courseId}
                lessonId={lessonId}
            />
            }
        </>           
    )
  };