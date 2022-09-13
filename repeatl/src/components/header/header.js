import React from 'react';
import Bootstrap from 'bootstrap';
import { Nav, Navbar, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import LoginRegistration from '../loginRegistration/loginRegistration';
const Header = () => {
  return (
    <>
      <Routes>
        <Route path='/loginRegistration' element={<LoginRegistration />} />
      </Routes>
      <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
        <Navbar.Toggle
          aria-controls='navbarScroll'
          data-bs-toggle='collapse'
          data-bs-target='#navbarScroll'
        />
        <Navbar.Collapse id='navbarScroll'>
          <Nav>
            <NavLink eventKey='1' as={Link} to='/'>
              Главная
            </NavLink>
            <NavLink eventKey='2' to='/about'>
              Выбор заданий
            </NavLink>
            <NavLink eventKey='3' to='/contact'>
              Задания на сегодня
            </NavLink>
            <NavLink eventKey='4' to='/contact'>
              Сервис
            </NavLink>
            <NavLink eventKey='5' as={Link} to='/loginRegistration'>
              Вход / Регистрация
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
