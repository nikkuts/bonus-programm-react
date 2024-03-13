import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import './../index.css';

export const HomeLayout = () => {

  return (
    <>
    <div className="container">
      <UserMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
    </>
  );
};