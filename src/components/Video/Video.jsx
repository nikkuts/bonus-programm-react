import { useEffect } from "react";
import css from './Video.module.css';

export const Video = ({url, closeModal}) => {

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
                title="Video player"
                style={{ maxWidth: '100%' }} 
                src={url} 
                width="1150" height="650" 
                frameBorder="0" allow="autoplay" allowFullScreen
            />
        </div>           
    )
}