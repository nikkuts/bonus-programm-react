import { Link, useParams } from 'react-router-dom';
import courses from "../courses.json";
import css from './Lesson.module.css';

export default function Lesson () {
    const {courseId, lessonId} = useParams();
    const currentCourse = courses.find(course => course.id === courseId);
    const currentLesson = currentCourse.lessons.find(lesson => lesson.day === lessonId);

    return (
        <div className={css.lessonWrapper}>
            <Link 
                to={currentLesson.link}
                className={css.link}
            >
                {currentLesson.link}
            </Link>   
        </div>                  
    )
  };