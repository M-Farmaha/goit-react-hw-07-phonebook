import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<div></div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
