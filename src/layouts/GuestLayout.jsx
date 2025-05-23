import React from 'react';
import { Outlet } from 'react-router-dom';
import GuestHeader from '../components/guest/GuestHeader';
import GuestFooter from '../components/guest/GuestFooter';

const GuestLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <GuestHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <GuestFooter />
    </div>
  );
};

export default GuestLayout;
