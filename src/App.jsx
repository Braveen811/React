import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Header from './Header'; 
import Loader from './Loader'; 
import Hero from './Hero'; 
import SocialMedia from './SocialMedia';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Quote from "./Quote";
import Footer from './Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Reference for the global Vanta 3D background canvas
  const vantaRef = useRef(null);

  // Loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Initialize Vanta.NET globally for ALL screen sizes with mobile-optimized density
  useEffect(() => {
    let vantaEffect;
    
    const isMobile = window.innerWidth <= 768;

    if (!isLoading && window.VANTA && window.VANTA.NET) {
      vantaEffect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xf92121,      // Cyberpunk Red accent
        backgroundColor: 0x0, // Pure black fallback
        backgroundAlpha: 0,   // Transparent so your CSS light/dark gradients show through
        
        // 🔥 SMART DENSITY: Fewer points and wider spacing on mobile so it never looks cluttered!
        points: isMobile ? 6.00 : 12.00,
        maxDistance: isMobile ? 15.00 : 22.00,
        spacing: isMobile ? 25.00 : 18.00
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [isLoading]);

  // Render the loading screen while isLoading is true
  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  // Render the actual portfolio once loading completes
  return (
    <>
      {/* 1. The Fixed 3D Background Layer (Active on all devices now!) */}
      <VantaBackground ref={vantaRef} />

      {/* 2. Your Header stays fixed/sticky at the top */}
      <Header /> 

      {/* 3. Your Webpage Content Container */}
      <AppContainer>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Quote />
        <Footer />
      </AppContainer>
    </>
  );
}

// =========================================
// STYLED COMPONENTS
// =========================================

const LoaderContainer = styled.div`
  background-color: #050505;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VantaBackground = styled.div`
  position: fixed;   /* Locks the canvas to the viewport */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;       /* Pushes it behind all content */
  pointer-events: none; /* Allows touch/mouse tracking without blocking clicks */

  /* Removed the display: none media query so it renders everywhere! */
`;

const AppContainer = styled.main`
  position: relative;
  z-index: 1;        /* Keeps your content and buttons clickable above Vanta */
  width: 100%;
  min-height: 100vh;
  overflow: hidden;  /* Prevents side-scrolling bugs */
`;

export default App;