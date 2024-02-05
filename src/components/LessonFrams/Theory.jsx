import { useParams } from 'react-router-dom';
import courses from "../courses.json";

export default function Theory () {
    const {courseId, lessonId = '1'} = useParams();
    const currentCourse = courses.find(course => course.id === courseId);
    const currentLesson = currentCourse.lessons.find(lesson => lesson.day === lessonId);

    return (
        <>
            <iframe 
                title="Вставка Google doc"
                src={currentLesson.theory} 
                width="100%" height="900" frameBorder="0" allow="autoplay">
            </iframe>       
        </>           
    )
  };