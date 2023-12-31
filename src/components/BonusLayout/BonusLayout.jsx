import { useEffect, Suspense } from 'react';
import { useDispatch } from "react-redux";
import { Link, Outlet } from 'react-router-dom';
import { getIndicators } from 'redux/partners/operations';
import css from './BonusLayout.module.css';

export const BonusLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIndicators()); 
    }, [dispatch]);

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
        </>
    )
  };