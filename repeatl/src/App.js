import './App.css';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import LoginRegistration from './components/loginRegistration/loginRegistration.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/loginRegistration' element={<LoginRegistration />} />
      </Routes>
      <div className='App'>
        <Header />
        <Link to='/loginRegistration'>Логин-регистрация</Link>
        <h1>Repeatl</h1>
        <Footer />
      </div>
    </>
  );
}

export default App;
