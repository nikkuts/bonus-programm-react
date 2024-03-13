import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BonusMenu } from 'components/BonusMenu/BonusMenu';

export const BonusLayout = () => {

  return (
    <>
      <BonusMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};