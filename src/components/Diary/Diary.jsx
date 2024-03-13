import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker, {registerLocale} from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import 'react-datepicker/dist/react-datepicker.css';
import { addExercise, updateExercise } from 'redux/exercises/operations';
import { selectCurrentLesson, selectExercise } from 'redux/exercises/selectors';
import css from './Diary.module.css';

export default function Diary ({courseId, lessonId}) {
    registerLocale('uk', uk)
  const dispatch = useDispatch();  

  const {homework} = useSelector(selectExercise);
  const currentLesson = useSelector(selectCurrentLesson);
  const [textInput, setTextInput] = useState(homework);
  const [isActiveTextarea, setIsActiveTextarea] = useState(false);
  const [dateInput, setDateInput] = useState('');
  const [testInput, setTestInput] = useState('');

  const handleDateInputChange = date => {
    setDateInput(date);
  };

  const handleTestInputChange = (e) => {
    setTestInput(e.target.value);
  };

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
    setIsActiveTextarea(true);
  };

  const isTextValid = (text) => {
    if (text.length > 500) {
      alert('Поле повинно містити не більше 500 символів.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('courseId', courseId);
    formData.append('lessonId', lessonId);

    if (!isTextValid(textInput)) {
      return;
    }

    formData.append('homework', textInput);
  
    if (homework === '') {
      dispatch(
        addExercise(formData)
      );
    } else {
      dispatch(
        updateExercise(formData)
      );
    }
    setIsActiveTextarea(false);
  };

  useEffect(() => {
    // Функція-обробник для обробки події beforeunload
    const handleBeforeUnload = (e) => {
      // Перевірка, чи активне текстове поле, і якщо так, попередження користувача
      if (isActiveTextarea) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    // Додавання обробника події beforeunload при монтуванні компонента
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Видалення обробника події beforeunload при розмонтуванні компонента
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isActiveTextarea]);

  return (
    <>
      <Form onSubmit={handleSubmit} className={css.form}>
        <Form.Group 
            controlId="formInput"
            className={css.groupInput} 
            >
        <Form.Group 
            controlId="formDate"
            className={css.groupInputDate} 
            >
            <Form.Label className={css.label}>
                Дата:
            </Form.Label>
            <DatePicker 
                className={css.inputDate}
                selected={dateInput}
                onChange={handleDateInputChange}
                dateFormat="dd-MM-yyyy"
                maxDate={new Date()}
                locale="uk" 
            />
        </Form.Group>
        <Form.Group 
            controlId="formTest"
            className={css.groupInputTest} 
            >
            <Form.Label className={css.label}>
                Тест:
            </Form.Label>
            <Form.Control 
            as="input"   
            value={testInput} 
            onChange={handleTestInputChange}
            className={css.inputTest} 
            />
            <Form.Label className={css.label}>
                з 10
            </Form.Label>
        </Form.Group>
        </Form.Group>
        <Form.Group 
          controlId="formText"
          className={css.groupTextarea} 
        >
          <Form.Label className={css.label}>
            Що я вмію?
          </Form.Label>
          <Form.Control 
            as="textarea" rows={4} 
            placeholder="Введіть текст" 
            value={textInput} 
            onChange={handleTextChange}
            className={css.textarea} 
          />
        </Form.Group>
        <Form.Group 
          controlId="formText"
          className={css.groupTextarea} 
        >
          <Form.Label className={css.label}>
            Над чим варто попрацювати?
          </Form.Label>
          <Form.Control 
            as="textarea" rows={4} 
            placeholder="Введіть текст" 
            value={textInput} 
            onChange={handleTextChange}
            className={css.textarea} 
          />
        </Form.Group>
        <div className={css.wrapperBtn}>
          <Button 
            variant="primary"
            type="submit"
            className={css.primaryBtn}
          >
            Зберегти
          </Button>
        </div>        
      </Form>
      <img src={currentLesson.diary} alt='Щоденник' width="100%" />
    </>
  ) 
};