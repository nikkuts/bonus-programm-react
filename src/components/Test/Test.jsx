import { useCallback, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { toogleModal } from 'redux/modal/modalSlice';
import css from './Test.module.css';

export const Test = ({test}) => {
    const dispatch = useDispatch()

    const closeModal = useCallback(
        () => dispatch(toogleModal()),
        [dispatch]
    );

    const onBackdropClose = e => {
        if (e.currentTarget === e.target) {
            closeModal();
        }
      };

    useEffect(() => {
        const keyDown = e => {
          if (e.code === 'Escape') {
            closeModal();
          }
        };
        window.addEventListener('keydown', keyDown);
        return () => {window.removeEventListener('keydown', keyDown);}
      }, [closeModal])

    return (
        <div  
            onClick={onBackdropClose}
            className={css.overlay}
        >  
            <iframe 
                title="Вставка Wordwall"
                style={{ maxWidth: '100%' }} 
                src={test} 
                width="1150" height="650" frameBorder="0" allowFullScreen>
            </iframe>
        </div>           
    )
}