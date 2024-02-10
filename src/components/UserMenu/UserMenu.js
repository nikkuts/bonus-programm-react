import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { getIndicators } from 'redux/partners/operations';
import { OfficeMenu } from 'components/OfficeMenu/OfficeMenu';
import { useAuth } from 'hooks';
import { ReactComponent as Favicon } from 'icons/favicon.svg';
import { ReactComponent as User } from 'icons/user.svg';
import { ReactComponent as ChevronDown } from 'icons/chevron-down.svg';
import { ReactComponent as ChevronUp } from 'icons/chevron-up.svg';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useAuth();

  const [menuVisible, setMenuVisible] = useState(false);
  const officeRef = useRef();

  const handleClickOutside = (e) => {
    if (officeRef.current && !officeRef.current.contains(e.target)) {
      setMenuVisible(false);
    }
  };

  const toggleMenu = () => {
    setMenuVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    dispatch(getIndicators()); 
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={css.header}>
      <Link to="" className={css.logo}>
        <Favicon />
        <span className={css.textLogo}>ЄДИНІ</span>
      </Link>
      <nav className={css.nav}>
        <Navigation />
        <button type="button"
          onClick={() => navigate("donat")} 
          className={css.button}
        >
          Підтримати
        </button>
      </nav>
      <div 
        ref={officeRef}
        onClick={toggleMenu}
        className={css.office}
      >
        <ul className={css.officeMenu}>
          <li className={css.officeUser}>
            <User /> {user.name}
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
        {menuVisible && <OfficeMenu />}
      </div>
    </div>
  );
};