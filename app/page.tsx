"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useScrollBlock } from '@/hooks/useScrollBlock';
import useMediaQuery from '@/hooks/useMediaQuery';
import Footer from '@/components/Footer';
import Popup_template from '@/components/popups/Popup_template';
import Game_rules from '@/components/popups/content/Game_rules';
import CharacterDetails from '@/components/popups/content/CharacterDetails';
import CharacterMessage from '@/components/popups/content/CharacterMessage';
import Content from './Content';

export default function Page() {
// Kontrollera om enheten är mobil baserat på skärmbredd
const isMobile = useMediaQuery('(max-width: 1024px)');

// Hook för att hantera scrollbeteende (blockera eller tillåta scroll)
const [blockScroll, allowScroll] = useScrollBlock();

// State-variabler för att hantera popup-innehåll och synlighet
const [characterDetails, SetCharacterDetails] = useState(""); // Sparar den valda karaktärens ID
const [popUpImg, SetpopUpImg] = useState(""); // Sparar bildsökvägen för popup-fönstret
const [renderPopUp, SetRenderPopUp] = useState(false); // Styr synligheten för huvudpopupen
const [renderDetails, SetRenderDetails] = useState(false); // Styr synligheten för karaktärsdetaljer
const [renderGameRules, SetRenderGameRules] = useState(false); // Styr synligheten för spelreglerna
const [renderCharacterMessage, setRenderCharacterMessage] = useState(false); // Styr synligheten för karaktärsmeddelanden
const [characterMessage, setCharacterMessage] = useState(""); // Sparar meddelandet från karaktären

// Öppnar popup med detaljer om en specifik karaktär
const openDetails = (characterId: string) => {
  SetCharacterDetails(characterId);
  SetpopUpImg("/images/characters/" + characterId + "-no-bg.png");
  SetRenderDetails(true);
  openPopUp();
};

// Öppnar popup med spelreglerna
const openGameRules = () => {
  SetRenderGameRules(true);
  openPopUp();
};

// Öppnar popup med ett meddelande från en karaktär
const openCharacterMessage = (message: string, characterId: string) => {
  setCharacterMessage(message);
  SetpopUpImg("/images/characters/" + characterId + "-no-bg.png");
  setRenderCharacterMessage(true);
  openPopUp();
};

// Öppnar popup-fönstret och blockerar scrollning
const openPopUp = () => {
  SetRenderPopUp(true);
  blockScroll();
};

// Stänger popup-fönstret och återställer scrollning
const closePopup = async () => {
  allowScroll();
  SetRenderPopUp(false);
  SetRenderDetails(false);
  SetRenderGameRules(false);
  setRenderCharacterMessage(false);
};


  // Hur snabbt de olika parallax komponenterna ska röra sig
  // (De står still för mobil, därför '1')
  const moonSpeed = isMobile ? 1 : 0.1;
  const boatSpeed = isMobile ? 1 : 0.3;
  const stoneSpeed = isMobile ? 1 : 0.5;
  const textSpeed = isMobile ? 1 : 0.4;



  /* ------------------------------------------------------------------------------------------------- */
  /*  // Dum kod som implementerades eftersom jag valde ett dåligt bibliotek för parallax effekten \\  */
  /* ------------------------------------------------------------------------------------------------- */
  const [pages, setPages] = useState(isMobile ? 11.5 : 7);
  const [windowDimension, setWindowDimension] = useState({
    winWidth: 0,
    winHeight: 0,
  });
  const [footerPosition, setFooterPosition] = useState(0);

  const footerRef = useRef<HTMLDivElement>(null);

  // Function to update window dimensions
  const updateWindowDimensions = useCallback(() => {
    if (typeof window !== 'undefined') {
      setWindowDimension({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      });
    }
  }, []);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    const debounce = (callback: () => void, delay: number) => {
      let timeoutId: NodeJS.Timeout;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(callback, delay);
      };
    };
    debounce(updateWindowDimensions, 200)();
  }, [updateWindowDimensions]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initial dimension update
      updateWindowDimensions();

      // Add event listener for resize
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [handleResize, updateWindowDimensions]);

  useEffect(() => {
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

    if (typeof window !== 'undefined') {
      // Run initial calculation
      updateFooterPosition();

      // Recalculate on resize
      window.addEventListener('resize', updateFooterPosition);

      return () => {
        window.removeEventListener('resize', updateFooterPosition);
      };
    }
  }, [windowDimension.winHeight]);

  /* ------------------------------------------------------------------------------------------------- */
  /*  \\ Dum kod som implementerades eftersom jag valde ett dåligt bibliotek för parallax effekten //  */
  /* ------------------------------------------------------------------------------------------------- */



  

  return (
    <main>
      <Parallax key={pages} pages={pages}>

        {/* [Bakgrundsbilden med en "gradience" i öppningsbilden] */}
        <ParallaxLayer
          offset={0}
          speed={moonSpeed}
          style={{
            background: 'linear-gradient(to bottom, #1a1a1a, #000000)',
          }}
        />

        {/* [Månen i öppningsbilden] */}
        <ParallaxLayer
          offset={0}
          speed={moonSpeed}
          style={{
            backgroundImage: 'url(/images/parallax/moon.svg)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />

        {/* ["SKURKERIET" texten i öppningsbilden] */}
        <ParallaxLayer offset={0.4} speed={textSpeed}>
          <h1 className='w-full mx-auto glitchEffect' title='SKURKERIET'>SKURKERIET</h1>
        </ParallaxLayer>

        {/* [Piratskeppet i öppningsbilden] */}
        <ParallaxLayer
          offset={0}
          speed={boatSpeed}
          style={{
            backgroundImage: 'url(/images/parallax/boat.svg)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />

        {/* ["NOLLE-P SKA BLI VÅRT" texten i öppningsbilden] */}
        <ParallaxLayer offset={0.6} speed={textSpeed}>
          <h3 className='m-auto'>NOLLE-P SKA BLI VÅRT</h3>
        </ParallaxLayer>

        {/* [Stenarna i öppningsbilden] */}
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

          {/* [Resten av sidans innehåll], 
          (ligger i ett "ParallaxLayer" för att paketet jag använde för parallax effekten suger) */}
          <Content openGameRules={openGameRules} openDetails={openDetails} openCharacterMessage={openCharacterMessage} />
          <Footer />
          <div ref={footerRef} id="footerRef"></div>
          
        </ParallaxLayer>
      </Parallax>

      {/* [Popup fönstret], (olika utseenden för: spelregler, karaktärer och lösenord) */}
      <Popup_template imgSrc={popUpImg} SetCondition={closePopup} condition={renderPopUp}>
        {renderGameRules && <Game_rules />}
        {renderDetails && <CharacterDetails alias={characterDetails} />}
        {renderCharacterMessage && <CharacterMessage message={characterMessage} />}
      </Popup_template>

    </main>
  );
}
