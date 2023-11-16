import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "redux/contacts/selectors";
import { addContact } from "redux/contacts/operations";
import css from './Course.module.css';

export default function Course ({title}) {

      return (
          <div className={css.box}>
            <h2 className={css.title}>{title}</h2>
            <button type="button"
              // onClick={} 
              className={css.button}
            >
              Продовжити навчання
            </button>
          </div>
        );     
};