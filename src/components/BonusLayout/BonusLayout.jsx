import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './BonusLayout.module.css';

export const BonusLayout = () => {

    return (
        <>
            <div className={css.bonusWrapper}>
                <ul className={css.bonusNav}>
                    <li>
                        <Link 
                            to="/bonus"
                            className={css.bonusLink}
                        >
                            Показники
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="tools"
                            className={css.bonusLink}
                        >
                            Інструменти
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="team"
                            className={css.bonusLink}
                        >
                            Команда
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
        </>
    )
  };