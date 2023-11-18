import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";
import Course from "components/Course/Course";
import courses from "../components/courses.json";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";

const styles = {
  container: {
    display: 'flex',
    gap: 20,
    marginTop: 20,
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
  },
};

export default function Courses ({courses}) {

  return (
    <>
        <h1 style={styles.title}>Моє навчання</h1>
        <ul style={styles.container}>
          {courses.map((course) => (
              <Course 
                id={course.id} 
                title={course.title} 
              />
            ))
          }
        </ul> 
    </>
  );       
};