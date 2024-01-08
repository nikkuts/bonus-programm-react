import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getIndicators } from 'redux/partners/operations';
import OfficeMenu from 'components/officeMenu/officeMenu';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const [isOfficeMenuOpen, setIsOfficeMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const openOfficeMenu = () => setIsOfficeMenuOpen(true);
  const closeOfficeMenu = () => setIsOfficeMenuOpen(false);

  useEffect(() => {
    dispatch(getIndicators()); 
  }, [dispatch]);

  return (
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
  );
};