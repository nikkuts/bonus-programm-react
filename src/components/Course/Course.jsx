import { Suspense, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import courses from "../courses.json";
import css from './Course.module.css';
import { useDispatch } from "react-redux";
import { getExercise } from 'redux/exercises/operations';
import { getDifferenceInDays } from 'service/handleDate';
import { changeLesson } from 'redux/exercises/lessonSlice';

export default function Course () {
    const {courseId} = useParams();
    const currentCourse = courses.find(course => course.id === courseId);
    const difference = getDifferenceInDays(currentCourse.start);
    const initialLesson = difference > 0 && difference <= 27 ?
        currentCourse.lessons[difference] : currentCourse.lessons[0];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeLesson(initialLesson));
        dispatch(getExercise({courseId, lessonId: initialLesson.day}));      
    }, [dispatch, courseId, initialLesson]);

    if (!currentCourse) {
        return <div>Курс не знайдено</div>;
    }
    
    return (
        <div className={css.courseContainer}>
            <h2 className={css.courseTitle}>{currentCourse.title}</h2>
            <ul className={css.courseWave}>
                <li className={css.currentWave}>
                <span className={css.numberWave}>{currentCourse.wave}</span> хвиля
                </li>
                <li className={css.currentWave}>
                Старт: {currentCourse.start}
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
                                onClick={() => {
                                    dispatch(changeLesson(lesson));
                                    dispatch(getExercise({courseId, lessonId: lesson.day}))
                                }}
                                to={`${lesson.day}`}
                                className={css.link}
                            >
                                День {lesson.day}. {lesson.theme}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className={css.courseList}>
                    {currentCourse.lessons.slice(7,14).map(
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
            </div>
            <div className={css.wrapperFrame}>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    )
}