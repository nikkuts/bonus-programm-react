import { Suspense } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import courses from "../courses.json";
import css from './Course.module.css';
import { useDispatch } from "react-redux";
import { getExercise } from 'redux/exercises/operations';

export default function Course () {
    const {courseId} = useParams();
    const currentCourse = courses.find(course => course.id === courseId);

    const dispatch = useDispatch();

    if (!currentCourse) {
        return alert('Курс не знайдено');
    }
    
    return (
        <div className={css.courseContainer}>
            <h2 className={css.courseTitle}>{currentCourse.title}</h2>
            <ul className={css.courseWave}>
                <li className={css.currentWave}>
                <span className={css.numberWave}>{currentCourse.wave}</span> хвиля
                </li>
                <li>
                    <Link
                        to={`${currentCourse.canal}`}
                        target='blank' 
                        className={css.courseBtn}
                    >
                        Канал
                    </Link>
                </li>
                <li>
                    <Link
                        to={`${currentCourse.chat}`}
                        target='blank' 
                        className={css.courseBtn}
                    >
                        Чат
                    </Link>
                </li>
            </ul>                
            <div className={css.courseWrapper}>
                <ul className={css.courseList}>
                    {currentCourse.lessons.slice(0,7).map(
                        lesson => (
                        <li key={lesson.day}>
                            <Link
                                onClick={() => dispatch(getExercise({courseId, lessonId: lesson.day}))}
                                to={`${lesson.day}`}
                                className={css.link}
                            >
                                День {lesson.day}. {lesson.theme}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className={css.courseList}>
                    {currentCourse.lessons.slice(0,7).map(
                        lesson => (
                        <li key={lesson.day}>
                            <Link
                                to={`${lesson.day}`}
                                className={css.link}
                            >
                                День {lesson.day}. {lesson.theme}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className={css.courseList}>
                    {currentCourse.lessons.slice(0,7).map(
                        lesson => (
                        <li key={lesson.day}>
                            <Link
                                to={`${lesson.day}`}
                                className={css.link}
                            >
                                День {lesson.day}. {lesson.theme}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className={css.courseList}>
                    {currentCourse.lessons.slice(0,7).map(
                        lesson => (
                        <li key={lesson.day}>
                            <Link
                                to={`${lesson.day}`}
                                className={css.link}
                            >
                                День {lesson.day}. {lesson.theme}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
    )
}

    // return (
    //     <div className={css.courseContainer}>
    //         <h2 className={css.courseTitle}>{currentCourse.title}</h2>
    //         <ul className={css.courseHeader}>
    //             <li>
    //                 <Link 
    //                     to=""
    //                     className={css.courseLink}
    //                 >
    //                     Завдання червоне
    //                 </Link> 
    //             </li>
    //             <li>
    //                 <Link 
    //                     to=""
    //                     className={css.courseLink}
    //                 >
    //                     Завдання зелене
    //                 </Link> 
    //             </li>
    //         </ul>
    //         <div className={css.courseWrapper}>
    //             <ul className={css.courseList}>
    //                 {currentCourse &&
    //                 currentCourse.lessons.map(lesson => (
    //                     <li key={lesson.day}>
    //                         <Link
    //                             to={`${lesson.day}`}
    //                             className={css.link}
    //                         >
    //                             День {lesson.day}
    //                         </Link>
    //                     </li>
    //                 ))}
    //             </ul>
    //             <Suspense fallback={null}>
    //                 <Outlet />
    //             </Suspense>
    //         </div>
    //     </div>
    // )
