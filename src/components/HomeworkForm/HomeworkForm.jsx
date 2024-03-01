import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addExercise, updateExercise, deleteFile } from 'redux/exercises/operations';
import { selectExercise } from 'redux/exercises/selectors';
import css from './HomeworkForm.module.css';

export const HomeworkForm = ({courseId, lessonId}) => {
  const dispatch = useDispatch();
  const {homework, fileURL} = useSelector(selectExercise);

  const [textInput, setTextInput] = useState(homework);
  const [fileInput, setFileInput] = useState(null);

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileInput(file);
  };

  const isTextValid = (text) => {
    if (text === '' || text.length > 3000) {
      alert('Поле повинно бути заповненим і містити не більше 3000 символів.');
      return false;
    }
    return true;
  };

  const isFileValid = (file) => {
    if (file.size > 1048576) {
      alert('Файл повинен бути не більше 1 Мб.');
      return false;
    }
    return true;
  };

  const handleDeleteFile = () => {
    if (fileURL === '') {
      return;
    };

    const formData = {
      courseId,
      lessonId,
      fileURL,
    };

    dispatch(
      deleteFile(formData)
    );
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

    if (fileInput) {
      
        if (!isFileValid(fileInput)) {
          return;
        }

        formData.append('file', fileInput);
    }
  
    if (homework === '') {
      dispatch(
        addExercise(formData)
      );
    } else {
      dispatch(
        updateExercise(formData)
      );
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className={css.form}>
        <Form.Group 
          controlId="formText"
          className={css.groupTextarea} 
        >
          <Form.Label className={css.label}>
            Домашня робота
          </Form.Label>
          <Form.Control 
            as="textarea" rows={10} 
            placeholder="Введіть текст" 
            value={textInput} 
            onChange={handleTextChange}
            className={css.textarea} 
          />
        </Form.Group>
        {fileURL && fileURL !== '' ?
          <div className={css.groupFile}>
            <Link
              to={fileURL}
              target='blank'
              className={css.link}         
            >
              Прикріплений файл
            </Link>
            <Button 
              variant="danger"
              type='button' 
              onClick={handleDeleteFile}
              className={css.dangerBtn}
            >
              Видалити файл
            </Button>
          </div>
          :
          <Form.Group 
            controlId="formFile" 
            className={css.groupFile}
          >
            <Form.Control 
              type="file" 
              onChange={handleFileChange}
              className={css.file} 
            />               
          </Form.Group>
        }
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
    </>
  ) 
};

