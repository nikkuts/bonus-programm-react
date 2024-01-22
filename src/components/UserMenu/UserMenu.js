import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { getIndicators } from 'redux/partners/operations';
import OfficeMenu from 'components/officeMenu/officeMenu';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const [isOfficeMenuOpen, setIsOfficeMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openOfficeMenu = () => setIsOfficeMenuOpen(true);
  const closeOfficeMenu = () => setIsOfficeMenuOpen(false);

  useEffect(() => {
    dispatch(getIndicators()); 
  }, [dispatch]);

  return (
    <>
      <Link to="" className={css.logo}>
        ЄДИНІ
      </Link>
      <nav className={css.nav}>
        <Navigation />
        <button type="button"
          onClick={() => navigate("bonus/donat")} 
          className={css.button}
        >
          Підтримати
        </button>
      </nav>
      <div className={css.office}>
        <button type="button"
          onClick={openOfficeMenu} 
          className={css.button}
        >
          Особистий кабінет
        </button>
        {isOfficeMenuOpen && 
        <OfficeMenu
          closeOfficeMenu={closeOfficeMenu}
        />
        }
      </div>
    </>
  );
};