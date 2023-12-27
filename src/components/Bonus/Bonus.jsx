import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './Bonus.module.css';

export const Bonus = () => {

    return (
        <div className={css.courseContainer}>
            <ul className={css.courseHeader}>
                <li>
                    <Link 
                        to="/bonus"
                        className={css.courseLink}
                    >
                        Показники
                    </Link>
                </li>
                <li>
                    <Link 
                        to="tools"
                        className={css.courseLink}
                    >
                        Інструменти
                    </Link>
                </li>
                <li>
                    <Link 
                        to="structure"
                        className={css.courseLink}
                    >
                        Структура
                    </Link>
                </li>
                <li>
                    <Link 
                        to="rules"
                        className={css.courseLink}
                    >
                        Умови бонусної програми
                    </Link> 
                </li>
            </ul>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
        </div>
    )
  };