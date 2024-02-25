import { useParams } from 'react-router-dom';
import courses from "../courses.json";
// import { ReactComponent as Day } from 'images/day1.pdf';

export default function Lesson () {
    const {courseId, lessonId = '1'} = useParams();
    const currentCourse = courses.find(course => course.id === courseId);
    const currentLesson = currentCourse.lessons.find(lesson => lesson.day === lessonId);

    return (
        <>
            {courseId === 'id-1' &&
            <div>
                <img src={currentLesson.image} alt={`День ${currentLesson.day}`} width="100%" />
                <audio controls>
                    <source src={currentLesson.audio[0]} type="audio/mp3" />
                    Ваш браузер не підтримує відтворення аудіо.
                </audio>
                <audio controls>
                    <source src={currentLesson.audio[1]} type="audio/mp3" />
                    Ваш браузер не підтримує відтворення аудіо.
                </audio>
            </div>
            }
           
            <iframe 
                title="Вставка Google doc"
                src={currentLesson.content} 
                width="100%" height="900" frameBorder="0" allow="autoplay">
            </iframe> 
        </>           
    )
  };