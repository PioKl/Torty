import React from 'react';
import '../style/App.scss';

import Navigation from './Navigation';
import Hero from './Hero';
import Offer from './Offer';

import IsDesktopContextProvider from '../contexts/IsDesktopContext';

function App() {
  return (
    <IsDesktopContextProvider>
      <div className="App">
        <header className="header">
          <Navigation />
        </header>
        <main className="main">
          <Hero />
          <Offer />
        </main>
        <footer className="footer"></footer>
      </div>
    </IsDesktopContextProvider>
  );
}

export default App;
