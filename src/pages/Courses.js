import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";
import Course from "components/Course/Course";
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

export default function Courses () {

  return (
    <>
        <h1 style={styles.title}>Моє навчання</h1>
        <ul style={styles.container}>
          <li>
            <Course title={'Курс переходу на українську мову'}/>
          </li>
          <li>
            <Course title={'Граматичний курс української мови'}/>
          </li>
        </ul> 
    </>
  );       
};