import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const LendingLayout = () => {
    
  return (
    <>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};