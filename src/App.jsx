import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Notfound from './components/Notfound';

function App() {
  const location = useLocation();

  // Har qanday noto'g'ri yo'lda Header va Footerni yashirish
  const isNotFound = location.pathname !== '/';

  return (
    <>
      {!isNotFound && <Header />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      {!isNotFound && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
