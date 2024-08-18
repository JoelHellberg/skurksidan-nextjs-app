"use client";
import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import { useScrollBlock } from '@/hooks/useScrollBlock';
import useMediaQuery from '@/hooks/useMediaQuery';
import Footer from '@/components/Footer';
import Popup_template from '@/components/popups/Popup_template';
import Game_rules from '@/components/popups/content/Game_rules';
import CharacterDetails from '@/components/popups/content/CharacterDetails';
import Content from './Content';

export default function Page() {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [blockScroll, allowScroll] = useScrollBlock();
  const [characterDetails, SetCharacterDetails] = useState("regina");
  const [popUpImg, SetpopUpImg] = useState("");
  const [renderPopUp, SetRenderPopUp] = useState(false);
  const [renderDetails, SetRenderDetails] = useState(false);
  const [renderGameRules, SetRenderGameRules] = useState(false);
  const [pages, setPages] = useState(isMobile ? 11.5 : 7);
  const [windowDimension, setWindowDimension] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const [footerPosition, setFooterPosition] = useState(0);

  const footerRef = useRef<HTMLDivElement>(null);

  // Function to update window dimensions
  const updateWindowDimensions = useCallback(() => {
    setWindowDimension({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  }, [isMobile]);

  // Debounce handler for resize events
  const debounceResize = (callback: () => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, delay);
    };
  };

  // Effect to handle resizing
  useEffect(() => {
    const handleResize = debounceResize(updateWindowDimensions, 200);
    window.addEventListener('resize', handleResize);

    // Initial calculation
    updateWindowDimensions();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateWindowDimensions]);

  // Layout effect to handle initial footer position calculation
  useEffect(() => {
    updateFooterPosition()
  })
  const updateFooterPosition = () => {
    if (footerRef.current) {
      requestAnimationFrame(() => {
        if (footerRef.current) {
          const footerTop = footerRef.current.getBoundingClientRect().top + window.scrollY;
          const calculatedPages = footerTop / window.innerHeight;
          setFooterPosition(footerTop);
          setPages(calculatedPages);
        }
      });
    }
  };
  useLayoutEffect(() => {
    // Run initial calculation
    updateFooterPosition();

    // Recalculate on resize
    window.addEventListener('resize', updateFooterPosition);

    return () => {
      window.removeEventListener('resize', updateFooterPosition);
    };
  }, [windowDimension.winHeight]); // Depend on window dimensions

  const openDetails = (characterId: string) => {
    SetCharacterDetails(characterId);
    SetpopUpImg("/images/characters/thom-removebg.png");
    SetRenderDetails(true);
    openPopUp();
  };

  const openGameRules = () => {
    SetRenderGameRules(true);
    openPopUp();
  };

  const openPopUp = () => {
    SetRenderPopUp(true);
    blockScroll();
  };

  const closePopup = async () => {
    allowScroll();
    SetRenderPopUp(false);
    SetRenderDetails(false);
    SetRenderGameRules(false);
  };

  const moonSpeed = isMobile ? 1 : 0.1;
  const boatSpeed = isMobile ? 1 : 0.3;
  const stoneSpeed = isMobile ? 1 : 0.5;
  const textSpeed = isMobile ? 1 : 0.4;

  return (
    <main>
      <p>Pages: {pages}</p>
      <p>Window Height: {windowDimension.winHeight}</p>
      <p>Footer Position: {footerPosition}</p>
      <Parallax key={pages} pages={pages}>
        <ParallaxLayer
          offset={0}
          speed={moonSpeed}
          style={{
            background: 'linear-gradient(to bottom, #1a1a1a, #000000)',
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={moonSpeed}
          style={{
            backgroundImage: 'url(/images/parallax/moon.svg)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />
        <ParallaxLayer offset={0.4} speed={textSpeed}>
          <h1 className='w-full mx-auto glitchEffect' title='SKURKERIET'>SKURKERIET</h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={boatSpeed}
          style={{
            backgroundImage: 'url(/images/parallax/boat.svg)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />
        <ParallaxLayer offset={0.6} speed={textSpeed}>
          <h3 className='m-auto'>NOLLE-P SKA BLI VÅRT</h3>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.4}
          speed={stoneSpeed}
          style={{
            backgroundImage: 'url(/images/parallax/stones.svg)',
            backgroundSize: 'fill',
            backgroundPosition: 'center',
            zIndex: '1',
          }}
        />
        <ParallaxLayer offset={1}>
          <Content openGameRules={openGameRules} openDetails={openDetails} />
          <Footer />
          <div ref={footerRef} id="footerRef"></div> {/* Assign the ref to this div */}
        </ParallaxLayer>
      </Parallax>
      <Popup_template imgSrc={popUpImg} SetCondition={closePopup} condition={renderPopUp}>
        {renderGameRules && <Game_rules />}
        {renderDetails && <CharacterDetails alias={characterDetails} />}
      </Popup_template>
    </main>
  );
}
