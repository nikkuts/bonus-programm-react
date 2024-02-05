import { Suspense } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import courses from "../courses.json";
import css from './LessonLayout.module.css';

export const LessonLayout = () => {
    const {courseId, lessonId = '1'} = useParams();
    const currentCourse = courses.find(course => course.id === courseId);
    const currentLesson = currentCourse.lessons.find(lesson => lesson.day === lessonId);

    if (!currentLesson) {
        return alert('Урок не знайдено');
    }

    return (
        <>
            {courseId === 'id-2' &&
            <ul className={css.lessonNavigation}>
                    <li>
                        <Link 
                            to="theory"
                            className={css.lessonNavLink}
                        >
                            Теорія
                        </Link> 
                    </li>
                    <li>
                        <Link 
                            to=""
                            className={css.lessonNavLink}
                        >
                            Матеріали
                        </Link> 
                    </li>
                    <li>
                        <Link 
                            to=""
                            className={css.lessonNavLink}
                        >
                            Практика
                        </Link> 
                    </li>
                    <li>
                        <Link 
                            to=""
                            className={css.lessonNavLink}
                        >
                            Відповіді
                        </Link> 
                    </li>
                    <li>
                        <Link 
                            to=""
                            className={css.lessonNavLink}
                        >
                            Тест
                        </Link> 
                    </li>
                </ul>
                }
                <div className={css.wrapperFrame}>
                    <Suspense fallback={null}>
                        <Outlet />
                    </Suspense>  
                </div>
        </>           
    )
  };