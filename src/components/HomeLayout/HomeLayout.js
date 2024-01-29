import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';
import css from './HomeLayout.module.css';

export const HomeLayout = () => {

  return (
    <>
    <div className={css.container}>
      <UserMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
    </>
  );
};