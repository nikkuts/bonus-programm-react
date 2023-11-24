import { useState } from "react";
import {RegisterForm} from 'components/RegisterForm/RegisterForm';
import {LoginForm} from 'components/LoginForm/LoginForm';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const openRegisterForm = () => setIsRegisterFormOpen(true);
  const closeRegisterForm = () => setIsRegisterFormOpen(false);
  const openLoginForm = () => setIsLoginFormOpen(true);
  const closeLoginForm = () => setIsLoginFormOpen(false);
  
  return (
    <div className={css.authNav}>
      <button type="button"
        onClick={openRegisterForm} 
        className={css.button}
      >
        Зареєструватися
      </button>
      <button type="button"
        onClick={openLoginForm} 
        className={css.button}
      >
        Увійти
      </button>
      {isRegisterFormOpen &&
      <RegisterForm 
      closeRegisterForm={closeRegisterForm}
      />
      }
      {isLoginFormOpen &&
      <LoginForm 
      closeLoginForm={closeLoginForm}
      />
      }
    </div>
  );
};

// import { useNavigate } from 'react-router-dom';
// import css from './AuthNav.module.css';

// export const AuthNav = () => {
//   const navigate = useNavigate();
  
//   return (
//     <div>
//       <button type="button"
//         onClick={() => navigate("/register")} 
//         className={css.button}
//       >
//         Зареєструватися
//       </button>
//       <button type="button"
//         onClick={() => navigate("/login")} 
//         className={css.button}
//       >
//         Увійти
//       </button>
//     </div>
//   );
// };
