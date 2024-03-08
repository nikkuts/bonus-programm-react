import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toogleModal } from 'redux/modal/modalSlice';
import { selectCurrentLesson } from 'redux/exercises/selectors';
import { Video } from 'components/Video/Video';
import css from './VideoMaterials.module.css';

export default function VideoMaterials () {
    const dispatch = useDispatch();
    const currentLesson = useSelector(selectCurrentLesson);
    const [openedVideoIndex, setOpenedVideoIndex] = useState(null);

    const handleClickVideo = (index) => {
        setOpenedVideoIndex(index);
        dispatch(toogleModal());
      };
    
      const handleCloseModal = () => {
        setOpenedVideoIndex(null);
        dispatch(toogleModal());
      };

    return (
        <>
            <div className={css.descriptionVideo}>
                <p>Перегляньте відео та невідкладно скористайтеся цінними порадами 🙏 
                </p>
            </div>
            <ul className={css.wrapperVideo}>
                {currentLesson.video.map(({ title, url }, index) => (
                    <li key={url}>
                    <button 
                        type="button"
                        onClick={() => handleClickVideo(index)} 
                        className={css.link}
                    >
                        {title}
                    </button>
                    {openedVideoIndex === index && 
                    <Video 
                        url={url} 
                        closeModal={handleCloseModal}
                    /> 
                    }  
                    </li>                   
                ))}   
            </ul>
        </>           
    )
  };