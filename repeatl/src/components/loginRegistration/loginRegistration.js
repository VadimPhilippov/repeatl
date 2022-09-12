import React from 'react';
import Login from './login/login.js';
import Registration from './registration/registration.js';
import { Routes, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavLink } from 'react-bootstrap';

const LoginRegistration = () => {
  return (
    <div className='loginRegistration'>
      <Routes>
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <NavLink eventKey='4' as={Link} to='/registration'>
        Регистрация
      </NavLink>
      <NavLink eventKey='5' as={Link} to='/login'>
        Логин
      </NavLink>
    </div>
  );
};

export default LoginRegistration;

<input className='userName' />;
