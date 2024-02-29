import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectExercise } from 'redux/exercises/selectors';
import { HomeworkForm } from 'components/HomeworkForm/HomeworkForm';
// import { HomeworkRenewal } from 'components/HomeworkRenewal/HomeworkRenewal';
import courses from "../courses.json";

export default function Lesson () {
    const { homework } = useSelector(selectExercise);
    const [nextHomework, setNextHomework] = useState(homework);

    const {courseId, lessonId = '1'} = useParams();
    const currentCourse = courses.find(course => course.id === courseId);
    const currentLesson = currentCourse.lessons.find(lesson => lesson.day === lessonId);

    useEffect(() => {
        setNextHomework(homework);      
    }, [homework]);

    return (
        <>          
            {courseId === 'id-1' &&
            <div>
                <img src={currentLesson.image} alt={`День ${currentLesson.day}`} width="100%" />
                {currentLesson.audio.map((audioUrl, audioIndex) => (
                    <audio key={audioIndex} controls>
                        <source src={audioUrl} type="audio/mp3" />
                        Ваш браузер не підтримує відтворення аудіо.
                    </audio>
                ))}
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
            // <>
            //     {homework === '' ?                        
            //         <HomeworkForm 
            //             courseId={courseId}
            //             lessonId={lessonId}
            //         />                
            //     :
            //         <HomeworkRenewal 
            //             courseId={courseId}
            //             lessonId={lessonId}
            //         />
            //     }
            // </>
            <HomeworkForm 
                courseId={courseId}
                lessonId={lessonId}
            />
            }
        </>           
    )
  };