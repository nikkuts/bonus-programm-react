// import { useSearchParams } from "react-router-dom";
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import css from './LendingLayout.module.css';

export const LendingLayout = () => {
    // const [searchParams] = useSearchParams();
    // const inviterId = searchParams.get("x");
    // window.localStorage.setItem("inviterId", JSON.stringify(inviterId));

  return (
    <>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};