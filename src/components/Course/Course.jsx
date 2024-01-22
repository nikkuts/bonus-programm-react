import { Suspense } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import courses from "../courses.json";
import css from './Course.module.css';

export default function Course () {
    const {courseId} = useParams();
    const currentCourse = courses.find(course => course.id === courseId);

    return (
        <div className={css.courseContainer}>
            <h2 className={css.courseTitle}>{currentCourse.title}</h2>
            <ul className={css.courseHeader}>
                {/* <li>
                    <span>"{currentCourse.title}"</span>
                </li> */}
                <li>
                    <Link 
                        to=""
                        className={css.courseLink}
                    >
                        Теорія
                    </Link> 
                </li>
                <li>
                    <Link 
                        to=""
                        className={css.courseLink}
                    >
                        Вправи
                    </Link> 
                </li>
                <li>
                    <Link 
                        to=""
                        className={css.courseLink}
                    >
                        Перевірка
                    </Link> 
                </li>
                <li>
                    <Link 
                        to=""
                        className={css.courseLink}
                    >
                        Матеріали
                    </Link> 
                </li>
            </ul>
            <div className={css.courseWrapper}>
                <ul className={css.courseList}>
                    {currentCourse &&
                    currentCourse.lessons.map(lesson => (
                        <li key={lesson.day}>
                            <Link
                                to={`${lesson.day}`}
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