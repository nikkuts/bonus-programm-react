import { useParams } from 'react-router-dom';
import courses from "../courses.json";
import css from './Lesson.module.css';

export default function Lesson () {
    const {courseId, lessonId} = useParams();
    const currentCourse = courses.find(course => course.id === courseId);
    const currentLesson = currentCourse.lessons.find(lesson => lesson.day === lessonId);

    if (!currentCourse || !currentLesson) {
        return (
            <p className={css.error}>Урок не знайдено</p>
        );
      }

    return (
        <div className={css.lessonContainer}>
            {/* <div className={css.lessonWrapper}>
            <Link 
                to={currentLesson.link}
                className={css.link}
            >
                {currentLesson.link}
            </Link>   
            </div> */}
            <iframe 
                title="Вставка Google doc"
                src="https://drive.google.com/file/d/1LTqPoeXPA5K5Xk3yhtLZqb6qFXDLrO9N/preview" 
                width="100%" height="800" frameBorder="0" allow="autoplay">
            </iframe>       
            <iframe 
                title="Вставка Wordwall"
                style={{ maxWidth: '100%' }} 
                src="https://wordwall.net/uk/embed/ce520c1d62424d7395cf734a46021739?themeId=1&templateId=5&fontStackId=0" 
                width="100%" height="500" frameBorder="0" allowFullScreen>
            </iframe>
        </div>           
    )
  };