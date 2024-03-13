import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HistoryMenu } from 'components/HistoryMenu/HistoryMenu';
import { ReactComponent as ChevronDown } from 'icons/chevron-down.svg';
import { ReactComponent as ChevronUp } from 'icons/chevron-up.svg';
import css from './BonusMenu.module.css';

export const BonusMenu = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const historyRef = useRef();

    const handleClickOutside = (e) => {
        if (historyRef.current && !historyRef.current.contains(e.target)) {
        setMenuVisible(false);
        }
    };

    const toggleMenu = () => {
        setMenuVisible((prevVisible) => !prevVisible);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
        document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className={css.bonusWrapper}>
                <h1 className={css.title}>Бонусна програма</h1>
                <ul className={css.bonusNav}>
                    <li>
                        <Link 
                            to=""
                            className={css.bonusLink}
                        >
                            Показники
                        </Link>
                    </li>
                    <li
                        ref={historyRef}
                        onClick={toggleMenu}
                        className={css.history}
                    >
                        <Link 
                            className={css.bonusLink}
                        >
                            <ul className={css.historyMenu}>
                                <li>
                                    Історія
                                </li>
                                <li 
                                    onClick={(e) => { 
                                        e.preventDefault(); 
                                        e.stopPropagation(); 
                                        toggleMenu(); 
                                    }}
                                >
                                    {menuVisible ? <ChevronUp/> : <ChevronDown/>}
                                </li>
                            </ul>
                        </Link>
                        {menuVisible && <HistoryMenu />}
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
                            Умови 
                        </Link> 
                    </li>
                </ul>
            </div>
        </>
    )
  };