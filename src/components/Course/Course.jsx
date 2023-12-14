import { Suspense } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import courses from "../courses.json";
import css from './Course.module.css';

export default function Course () {
    const {courseId} = useParams();
    const currentCourse = courses.find(course => course.id === courseId);

    return (
        <div className={css.courseContainer}>
            <ul className={css.courseHeader}>
                <li>
                    <Link 
                        to="/learn"
                        className={css.courseLink}
                    >
                        Курси
                    </Link>
                </li>
                <li>
                    <span>"{currentCourse.title}"</span>
                </li>
                <li>
                    <Link 
                        to="/diary"
                        className={css.courseLink}
                    >
                        Щоденник моїх досягнень
                    </Link> 
                </li>
            </ul>
            <div className={css.courseWrapper}>
                <ul className={css.courseList}>
                    {currentCourse &&
                    currentCourse.lessons.map(lesson => (
                        <li key={lesson.day}>
                            <Link
                                to={`/learn/${courseId}/${lesson.day}`}
                                className={css.link}
                            >
                                День {lesson.day}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    )
  };