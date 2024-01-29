import { Suspense } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import courses from "../courses.json";
import css from './Course.module.css';

export default function Course () {
    const {courseId} = useParams();
    const currentCourse = courses.find(course => course.id === courseId);

    if (courseId === "id-2") {
        
        return (
            <div className={css.courseContainer}>
                <h2 className={css.courseTitle}>{currentCourse.title}</h2>
                <ul className={css.courseHeader}>
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
                            Практика
                        </Link> 
                    </li>
                    <li>
                        <Link 
                            to=""
                            className={css.courseLink}
                        >
                            Відповіді
                        </Link> 
                    </li>
                    <li>
                        <Link 
                            to=""
                            className={css.courseLink}
                        >
                            Тестування
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
    }

    return (
        <div className={css.courseContainer}>
            <h2 className={css.courseTitle}>{currentCourse.title}</h2>
            <ul className={css.courseHeader}>
                <li>
                    <Link 
                        to=""
                        className={css.courseLink}
                    >
                        Завдання червоне
                    </Link> 
                </li>
                <li>
                    <Link 
                        to=""
                        className={css.courseLink}
                    >
                        Завдання зелене
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