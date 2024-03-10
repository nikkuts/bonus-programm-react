import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCurrentLesson } from 'redux/exercises/selectors';
import { Video } from 'components/Video/Video';
import css from './VideoMaterials.module.css';

export default function VideoMaterials () {
    const currentLesson = useSelector(selectCurrentLesson);
    const [openedVideoIndex, setOpenedVideoIndex] = useState(null);

    const handleClickVideo = (index) => {
        setOpenedVideoIndex(index);
      };
    
      const handleCloseModal = () => {
        setOpenedVideoIndex(null);
      };

    return (
        <>
            <div className={css.descriptionVideo}>
                <p>Перегляньте відео до цього уроку та невідкладно скористайтеся цінними порадами 🙏 
                </p>
            </div>
            <ul className={css.wrapperVideo}>
                {currentLesson.video.map(({ title, url }, index) => (
                    <li key={url}>
                    <Link 
                        onClick={() => handleClickVideo(index)} 
                        className={css.link}
                    >
                        {title}
                    </Link>
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