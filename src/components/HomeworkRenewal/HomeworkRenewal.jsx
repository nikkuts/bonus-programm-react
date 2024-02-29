import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addExercise, updateExercise } from 'redux/exercises/operations';
import { selectExercise } from 'redux/exercises/selectors';

export const HomeworkRenewal = ({courseId, lessonId}) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData;

    if (!isTextValid(textInput)) {
        return;
    }

    formData = {
      courseId,
      lessonId, 
      homework: textInput, 
    }

    if (fileInput) {
        if (!isFileValid(fileInput)) {
              return;
          }
          formData = {
            ...formData, 
            file: fileInput, 
          }
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
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formText">
                <Form.Label>Домашнє завдання</Form.Label>
                <Form.Control 
                    as="textarea" rows={10} 
                    placeholder="Введіть текст" 
                    value={textInput} 
                    onChange={handleTextChange} 
                />
              </Form.Group>

              {fileURL && fileURL !== '' ?
               <Link>{fileURL}</Link>
               :
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Прикріпити файл</Form.Label>
                    <Form.Control 
                    type="file" 
                    onChange={handleFileChange}
                />               
              </Form.Group>
              } 
              <Button type="submit">
                  Зберегти
              </Button>
            </Form>           
        </>
    )
};


   {/* <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Прикріпити файл</Form.Label>
                {fileURL === null ? (
                    <Form.Control 
                    type="file" 
                    onChange={handleFileChange}
                    />        
                ) : (
                    <p>{fileURL}</p>
                )
                }
                </Form.Group> */}
        
              {/* <Form.Group controlId="formFile">
                <Form.Label>Файл</Form.Label>
                {fileInput && (
                  <div>
                    <p>Вибраний файл: {fileInput.name}</p>
                    <Button variant="danger" onClick={() => setFileInput(null)}>Видалити файл</Button>
                  </div>
                )}
                {fileInput === '' && (
                  <Form.File id="custom-file" label="Виберіть файл" onChange={handleFileChange} />
                )}
              </Form.Group> */}
        
              {/* {editMode && (
                <Button variant="primary" type="submit">
                  Зберегти
                </Button>
              )}
        
              {!editMode && (
                <Button variant="success" onClick={handleEdit}>
                  Редагувати
                </Button>
              )} */}