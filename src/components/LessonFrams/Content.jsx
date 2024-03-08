import { useSelector } from 'react-redux';
import { selectCurrentLesson } from 'redux/exercises/selectors';

export default function Content () {
    const currentLesson = useSelector(selectCurrentLesson);

    return (
        <>
            <iframe 
                title="Вставка Google doc"
                src={currentLesson.content} 
                width="100%" height="900" frameBorder="0" allow="autoplay"
            />       
        </>           
    )
  };