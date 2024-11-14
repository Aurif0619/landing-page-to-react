import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/header/Header';
import HeroSection from './components/hero/HeroSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;