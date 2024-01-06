import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './Bonus.module.css';

export const Bonus = () => {

    return (
        <div className={css.bonusWrapper}>
            {/* <h1 className={css.bonusTitle}>Бонусна програма</h1> */}
            <ul className={css.bonusNav}>
                <li>
                    <Link 
                        to="/bonus"
                        className={css.bonusLink}
                    >
                        Інструменти
                    </Link>
                </li>
                <li>
                    <Link 
                        to="indicators"
                        className={css.bonusLink}
                    >
                        Показники
                    </Link>
                </li>
                <li>
                    <Link 
                        to="structure"
                        className={css.bonusLink}
                    >
                        Структура
                    </Link>
                </li>
                <li>
                    <Link 
                        to="rules"
                        className={css.bonusLink}
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