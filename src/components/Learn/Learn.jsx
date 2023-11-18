import { Link, useParams } from 'react-router-dom';
import courses from "../courses.json";
import css from './Learn.module.css';

export default function Learn () {
    const {courseId} = useParams();
    const currentCourse = courses.find(course => course.id === courseId);

    return (
        <>
            <div className={css.headerLearn}>
                <Link 
                    to="/courses"
                    className={css.link}
                >
                    Курси
                </Link>
                <span>{currentCourse.title}</span> 
            </div>
            <nav>
                <ul>
                    {currentCourse &&
                    currentCourse.lessons.map(lesson => (
                        <li key={lesson.day}>
                            <Link
                                to={`/courses/${courseId}/${lesson.day}`}
                                className={css.link}
                            >
                                День {lesson.day}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
  };