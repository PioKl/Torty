import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
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

  const [loaded, setLoaded] = useState(false)
  window.addEventListener("load", function () {
    console.log("JUz")
    setTimeout(() => {
      setLoaded(true)
    }, 2000) //po zaladowaniu odczekaj jeszcze 2s
  });

  useEffect(() => {
    if (loaded === true) {
      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

      tl.to(".cakeBox__seal", { y: "-401%", duration: 1.5, delay: 0.5, autoAlpha: 0 });
      tl.to(".cakeBox__left", { x: "-101%", duration: 1.5, }, "-=1.5");
      tl.to(".cakeBox__right", { x: "101%", duration: 1.5, }, "-=1.5");
      //autoAlpha jest za opacity, roznica jest taka, ze w opacity moge kliknac w jakis element, ktorego jeszcze sie nie pojawil, a autoAlpha to blokuje i moge kliknac dopiero jak bedzie widoczny
      tl.fromTo(".navigation", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 });
      tl.fromTo(".hero-desktop__author", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.5 }, "-=1.3");
    }
  }, [loaded]);
  return (
    <>
      {loaded ? <>
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
        <div className="cakeBox">
          <div className="cakeBox__seal"></div>
          <div className="cakeBox__left">
          </div>
          <div className="cakeBox__right">
          </div>
        </div>
      </> :
        <>
          <div className="loader"></div>
          <div className="cakeBox cakeBoxShade">
            <div className="cakeBox__seal"></div>
            <div className="cakeBox__left">
            </div>
            <div className="cakeBox__right">
            </div>
          </div>
        </>}
    </>
  );
}

export default App;
