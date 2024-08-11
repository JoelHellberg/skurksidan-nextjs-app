"use client"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { useState, useEffect, useRef, useLayoutEffect  } from 'react';
import Image from 'next/image';
import { stories } from '@/data/OLD_character_data'
import { useScrollBlock } from '@/hooks/useScrollBlock';
import useMediaQuery from '@/hooks/useMediaQuery'
import Character_details from '@/components/Character_details';
import Footer from '@/components/Footer'
import Popup_template from '@/components/popups/Popup_template'
import DynamicParallax from '@/components/DynamicParallax'
import Game_rules from '@/components/popups/content/Game_rules';
import CharacterDetails from '@/components/popups/content/CharacterDetails';

import { debounce } from 'lodash';


import Content from './Content';

export default function Page() {
  const isMobile = useMediaQuery('(max-width: 1024px)')

  // Import the scroll block functions
  const [blockScroll, allowScroll] = useScrollBlock();

  const [characterDetails, SetCharacterDetails] = useState("regina")   // Set character details placeholder
  const [popUpImg, SetpopUpImg] = useState("");
  const [renderPopUp, SetRenderPopUp] = useState(false);
  const [renderDetails, SetRenderDetails] = useState(false);                                                    // Decides whether the character details box should be rendered
  const [renderGameRules, SetRenderGameRules] = useState(false);

  // Called when clicking on a character
  function openDetails(characterId: string) {
    SetCharacterDetails(characterId); // Set the character details with useState
    SetpopUpImg("/images/characters/thom-removebg.png")
    SetRenderDetails(true);   // Render the details panel
    openPopUp()
  }

  function openGameRules() {
    SetRenderGameRules(true)
    openPopUp()
  }

  function openPopUp() {
    SetRenderPopUp(true)
    blockScroll(); // Block the user from scrolling the background when a Popup window is open
  }

  async function closePopup() {
    allowScroll();            // Allow scrolling when closing the details panel
    SetRenderPopUp(false)
    SetRenderDetails(false);   // Render the details panel
    SetRenderGameRules(false)
  }

  const pages = isMobile ? 11.5 : 6.5

  const footerRef = useRef<HTMLDivElement>(null);
  const [footerPage, setFooterPage] = useState(0);

  const updateFooterPage = debounce(() => {
    if (footerRef.current) {
      const footerTop = footerRef.current.getBoundingClientRect().top + window.scrollY;
      const viewportHeight = window.innerHeight;
      const calculatedFooterPage = Math.floor(footerTop / viewportHeight);
      setFooterPage(calculatedFooterPage + 0.5);
    }
  }, 300); // Adjust debounce delay as needed

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      updateFooterPage();
    });

    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }

    const handleFullscreenChange = () => {
      updateFooterPage();
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    window.addEventListener('resize', updateFooterPage);

    updateFooterPage();

    return () => {
      if (footerRef.current) {
        resizeObserver.unobserve(footerRef.current);
      }
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('resize', updateFooterPage);
    };
  }, []);

  return (
    <main>
      {/* Group image */}
      <p>{"footerPage: " + footerPage}</p>
      <p>{"pages: " + pages}</p>
      <Parallax key={pages} pages={pages}>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            background: 'linear-gradient(to bottom, #1a1a1a, #000000)',
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            backgroundImage: 'url(/images/parallax/moon.svg)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />

        <ParallaxLayer offset={0.4} speed={0.4}>
          <h1 className='w-full mx-auto glitchEffect' title='SKURKERIET'>SKURKERIET</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.3}
          style={{
            backgroundImage: 'url(/images/parallax/boat.svg)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />

        <ParallaxLayer offset={0.6} speed={0.4}>
          <h3 className='m-auto'>NOLLE-P SKA BLI VÅRT</h3>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.4}
          speed={0.5}
          style={{
            backgroundImage: 'url(/images/parallax/stones.svg)',
            backgroundSize: 'fill',
            backgroundPosition: 'center',
            zIndex: '1'
          }}
        />
        <ParallaxLayer offset={1}> <Content openGameRules={openGameRules} openDetails={openDetails} /> 
        <Footer />
        <div ref={footerRef}></div>
        </ParallaxLayer>
      </Parallax>
      {/* Character Details Box 
      <Character_details
        condition={renderDetails}
        SetCondition={closeDetails}
        id={characterDetails.id}
        name={characterDetails.name}
        story={characterDetails.story}
        isMobile={isMobile} />*/}
      <Popup_template imgSrc={popUpImg} SetCondition={closePopup} condition={renderPopUp}>
        {renderGameRules && <Game_rules />}
        {renderDetails && <CharacterDetails alias={characterDetails} />}
      </Popup_template>
    </main >
  )
}
