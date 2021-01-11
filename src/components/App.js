import React from 'react';
import '../style/App.scss';

import Navigation from './Navigation';
import Hero from './Hero';
import Offer from './Offer';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

import IsDesktopContextProvider from '../contexts/IsDesktopContext';
import BurgerMenuContextProvider from '../contexts/BurgerMenuContext';

function App() {
  return (
    <IsDesktopContextProvider>
      <BurgerMenuContextProvider>
        <div id="mainSite" className="App">
          <header className="header">
            <Navigation />
          </header>
          <main className="main">
            <Hero />
            <Offer />
            <Gallery />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </BurgerMenuContextProvider>
    </IsDesktopContextProvider>
  );
}

export default App;
