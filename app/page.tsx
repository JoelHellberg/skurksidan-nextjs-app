"use client"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { stories } from '@/data/OLD_character_data'
import { useScrollBlock } from '@/hooks/useScrollBlock';
import useMediaQuery from '@/hooks/useMediaQuery'
import Character_details from '@/components/Character_details';
import Footer from '@/components/Footer'
import Popup_template from '@/components/popups/Popup_template'
import Game_rules from '@/components/popups/content/Game_rules';
import CharacterDetails from '@/components/popups/content/CharacterDetails';


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

  const pages = isMobile ? 14 : 8

  return (
    <main>
      {/* Group image */}
      <Parallax pages={14}>
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
          }}
        />
        <ParallaxLayer offset={1}> <Content openGameRules={openGameRules} openDetails={openDetails} /> <Footer /></ParallaxLayer>
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
