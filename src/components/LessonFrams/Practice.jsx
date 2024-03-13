import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCurrentLesson, selectExercise } from 'redux/exercises/selectors';
import { HomeworkForm } from 'components/HomeworkForm/HomeworkForm';

export default function Practice () {
    const {courseId, lessonId} = useParams();

    const currentLesson = useSelector(selectCurrentLesson);
    const { homework } = useSelector(selectExercise);

    const [nextHomework, setNextHomework] = useState(homework);

    useEffect(() => {
        setNextHomework(homework);      
    }, [homework]);

    return (
        <>
            {currentLesson.practice !== '' &&
                <iframe 
                    title="Вставка Google doc"
                    src={currentLesson.practice} 
                    width="100%" height="600" frameBorder="0" allow="autoplay"
                />
            }
            {homework === nextHomework &&
                <HomeworkForm 
                    courseId={courseId}
                    lessonId={lessonId}
                />
            }
            <img src={currentLesson.diary} alt='Щоденник' width="100%" />       
        </>           
    )
  };