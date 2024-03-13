// import { useSearchParams } from "react-router-dom";
// const styles = {
//     container: {
//       minHeight: 'calc(100vh - 50px)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     title: {
//       fontWeight: 500,
//       fontSize: 48,
//       textAlign: 'center',
//     },
//   };
  
//   export default function Lending() {
//     const [searchParams] = useSearchParams();
//     const inviterId = searchParams.get("x");
//     window.localStorage.setItem("inviterId", JSON.stringify(inviterId));

//     return (
//       <div style={styles.container}>
//         <h1 style={styles.title}>
//           Мова - це наш культурний фронт!
//         </h1>
//       </div>
//     );
//   };

import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
  
  export default function Lending() {
    const [searchParams] = useSearchParams();
    const inviterId = searchParams.get("x");
    window.localStorage.setItem("inviterId", JSON.stringify(inviterId));

    const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Ваш зовнішній URL
    const externalURL = 'https://yedyni.org/';

    // Редирект на зовнішній URL
    window.location.href = externalURL;

    // Позначте, що редирект вже відбувся
    setRedirect(true);
  }, []);

  if (redirect) {
    // Якщо ви хочете відобразити щось перед редиректом, ви можете використовувати React-елементи
    return (
      <div>
        Redirecting to external URL...
      </div>
    );
  }
    // Якщо редирект ще не відбувся, компонент повертає null або щось інше
    return null;
};