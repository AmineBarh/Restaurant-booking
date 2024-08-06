import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from './images/logo.svg';

const Layout = () => {
  return (
    <>
      <header className='flex items-center justify-around m-1 mb-5 sticky top-0 bg-white z-50 pt-1 pb-2'>
        <img src={logo} alt="Logo" className='h-10' />
        <nav className='flex items-center justify-between gap-3'>
          <Link to="/" className='m-0'>Home</Link>
          <Link to="/service" className='m-0'>Service</Link> 
          <Link to="/events" className='m-0'>Events</Link>  
          <Link to="/about" className='m-0'>About</Link> 
        </nav>
        <Link to="/bookingtable" > <button type="button" className='rounded-tl-md rounded-br-md px-3 py-2 bg-orange-500 text-white text-lg font-normal hover:bg-orange-300'>
          Book a table
        </button> </Link>
      </header>
      <main>
        <Outlet /> 
      </main>
    </>
  );
};

export default Layout;
