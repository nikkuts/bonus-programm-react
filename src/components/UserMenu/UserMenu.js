import { useState } from "react";
import OfficeMenu from 'components/officeMenu/officeMenu';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const [isOfficeMenuOpen, setIsOfficeMenuOpen] = useState(false);

  const openOfficeMenu = () => setIsOfficeMenuOpen(true);
  const closeOfficeMenu = () => setIsOfficeMenuOpen(false);

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