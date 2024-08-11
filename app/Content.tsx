import Image from 'next/image';
import Character from '@/components/Character';
import Socials_image from '@/components/Socials_image';
import Sponsor from '@/components/Sponsor';
import Card_passwords from '@/components/Card_passwords';
import Card from '@/components/Card';
import CardPhone from '@/components/CardPhone';
import FadeInSection from '@/components/FadeInSection';
import useMediaQuery from '@/hooks/useMediaQuery'

import Characters from '@/sections/Characters'; // Import the new component
import GameRules from '@/sections/GameRules'; // Import the new component




type Props = {
  openDetails: Function
  openGameRules: Function
}

const Content = (props: Props) => {

  const isHandheld = useMediaQuery('(max-width: 1024px)')
  // Conditionally set the height
  const divStyle = {
    backgroundImage: 'url(/images/paperTest.png)',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    height: isHandheld ? '50vh' : '60vh'
  };
  return (
    <div>
      {/* History */}
      <div className="flex flex-col justify-center items-center text-center m-auto w-3/5 pt-20 pb-20 bg-black h-screen handheld:w-3/5 handheld:h-auto mobile:w-4/5">
        <FadeInSection>
          <h2>HISTORIEN OM SKURKERIET</h2>
          <p>
            I århundraden har Skurkeriet färdats i de mörka skuggorna, ett sällskap som sträcker sig långt bortom tid och rum.
            Ingen visste riktigt vad de var ute efter, men rykten talade om en skatt av oändligt värde, gömd någonstans i det dunkla djupet av världen.
            <br /><br />
            En ljus natt utanför Bråviken, en av de sällsynta nätterna där månen sken så klart att den fördrev även de tätaste skuggorna, förlorade Skurkeriet sin väg.
            Deras vägvisare svek dem när de kom för nära det strålande ljuset från Campus Norrköping och Mörkrets Vrede gick upp i rök.
            <br /><br />
            Efter att i 36 dagar ha färdats på en flotte i motströms, kastade vågorna dem slutligen in i Strömmen och de steg i land på Campus.
            Mitt under Nolle-P fann sig Skurkeriet strandsatta bland faddrar och nollan.
            <br /><br />
            Skurkarna insåg snabbt, för att återfå Mörkrets Vrede och sin plats i skuggorna måste de infiltrera och förgöra Nolle-P.
            Men det var svårare än vad de trott. Campus Norrköping var beskyddat av sina egna phadderier som såg över studenternas välmående.
            Skurkeriet förstod att för att förgöra Nolle-P och återfå Mörkrets Vrede, måste de överlista dessa phadderister.
            Med list och strategi började de sätta sin plan i verket.
            <br /><br />
            Ska vi säga hej till Skurkeriet?
          </p>
        </FadeInSection>
      </div>


      {/* Characters */}
      <div>
            <div className='w-screen justify-center text-center desktop:-mb-10'>
                <h4>Klicka på ett kort</h4>
            </div>

            {isHandheld ? (
                <div>
                    <div className='handheld:w-full handheld:m-auto handheld:grid handheld:grid-cols-2 mobile:grid-cols-1 handheld:gap-4'>
                        <CardPhone alias='Bree' openDetails={props.openDetails} />
                        <CardPhone alias='Connie' openDetails={props.openDetails} />
                        <CardPhone alias='Maddy' openDetails={props.openDetails} />
                        <CardPhone alias='Jaques' openDetails={props.openDetails} />
                        <CardPhone alias='Jill' openDetails={props.openDetails} />
                        <CardPhone alias='Von' openDetails={props.openDetails} />
                        <CardPhone alias='Sav' openDetails={props.openDetails} />
                        <CardPhone alias='Wendy' openDetails={props.openDetails} />
                        <CardPhone alias='Lincoln' openDetails={props.openDetails} />
                        <CardPhone alias='Noa' openDetails={props.openDetails} />
                    </div>
                    <div className='handheld:w-1/2 mobile:w-full handheld:m-auto'>
                        <CardPhone alias='Rolph' openDetails={props.openDetails} />
                    </div>
                </div>
            ) : (
                <div>
                    {/* Characters */}
                    <div className='relative w-screen desktop:h-screen flex justify-center items-center'>

                        {/* Background Image */}
                        <div className='absolute mx-auto inset-0 z-0 handheld:hidden'>
                            <Image
                                src="/images/boardOblong.png"
                                layout="fill"
                                alt="Background"
                                className='object-contain object-center absolute inset-0 z-0'
                            />
                        </div>

                        {/* Content Grid */}
                        <div className='desktop:relative desktop:grid desktop:gap-0 z-10'>
                            {/* First row: 4 Cards */}
                            <div className='desktop:flex desktop:justify-center desktop:gap-4'>
                                <Card alias='Bree' openDetails={props.openDetails} />
                                {/*<Card name='Annie' alias_first_name='Wendy' alias_surname='Ceglith' />*/}
                                <div className="w-56 handheld:hidden" />
                                {/*<Card name='Arvid' alias_first_name='T. Rolph' alias_surname='Ace' />*/}
                                <Card alias='Connie' openDetails={props.openDetails} />
                            </div>

                            {/* Second row: 3 Cards */}
                            <div className='desktop:flex desktop:justify-center desktop:gap-4'>
                                <Card alias='Maddy' openDetails={props.openDetails} />
                                <Card alias='Jaques' openDetails={props.openDetails} />
                                <div className='desktop:relative desktop:-mt-10'>
                                    <Card alias='Jill' openDetails={props.openDetails} />
                                </div>
                                <Card alias='Von' openDetails={props.openDetails} />
                                <Card alias='Sav' openDetails={props.openDetails} />
                            </div>

                            {/* Third row: 2 Cards */}
                            <div className='desktop:flex desktop:justify-center desktop:gap-4'>
                                <Card alias='Wendy' openDetails={props.openDetails} />
                                <Card alias='Lincoln' openDetails={props.openDetails} />
                                <Card alias='Noa' openDetails={props.openDetails} />
                                <Card alias='Rolph' openDetails={props.openDetails} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>




      {/* Game rules */}
      <div className='pt-20 pb-20'>
        <GameRules openGameRules={props.openGameRules} />
      </div>


      {/* Card password */}
      <div className='text-center m-auto w-2/3 mobile:w-5/6 pt-20 pb-64 h-full my-16 px-16 mobile:p-8'
        style={divStyle}>
        <h2 className='text-neutral-700 mobile:text-2xl'>HAR NOLLAN HITTAT ETT LÖSENORD?</h2>
        <Card_passwords />
      </div>

      {/* Social medias */}
      <div className='text-center m-auto w-2/3 pt-4 pb-64'>
        <h2>SOCIALA MEDIER</h2>
        <p className='text-center mobile:text-left'>
          psst...<br />
          <br />
          Enligt rykten kan det vara bra att Nollan har en god sikt <br />
          på våra sociala medier för lite &quot;behind the scenes&quot;...
        </p>
        <div className='flex justify-center pt-10'>
          <Socials_image company='facebook' link='https://www.facebook.com/Skurkeriet' />
          <Socials_image company='instagram' link='https://www.instagram.com/skurkeriet2324/' />
        </div>
      </div>

      {/* Tengil */}
      <div className='text-center m-auto w-1/3 pt-4 pb-36 handheld:w-4/5'>
        <h2 className="font-vinyl glitchEffect" title="ALL MAKT ÅT TENGIL">ALL MAKT ÅT TENGIL</h2>
        <p className='text-justify'>
          All makt åt Tengil, vår Befriare. Vid tidens begynnelse, strax innan Big Bang, steg ett mäktigt väsen fram ur skuggorna. Det som givit styrka
          och hopp åt Skurkarna. Detta väsen, Tengil, tog formen av en ståtlig maniken för att nå er alldagliga! Tengil höjer Skurkeriets omoral och
          beskyddar dess handlingar. Han höljer Skurkarnas själar i skuggor och fyller deras hjärtan med ofog. Skurkeriet bär med sig Tengils avatar
          från och till, men frukta ej! Tengil har trots sitt hårda yttre en av de stillsammaste själar. Nollan löper ingen risk att utsättas för Tengils
          vrede. Sanningen är dock att ingen vet vad Tengil planerar i skuggorna annat än han själv.<br />
          <br />
          P.S also good at parties.
        </p>
        <a href="http://www.mera.se">
          <Image
            src="/images/tengil.jpg"
            alt="All makt åt Tengil"
            width="700"
            height="200"
            className='mt-10 m-auto'
          />
        </a>
      </div>

      {/* Sponsors */}
      <div className="
      flex flex-wrap justify-evenly items-center w-full py-20 px-32
      handheld:px-20 handheld:flex-col handheld:space-y-10
      mobile:px-8   
      ">
        <Sponsor company1="ICA" company2="" className="grow-1 h-52 w-1/3 mobile:w-3/5" />
        {/*<Sponsor company1="NAB" company2="Voyado" className="grow-1 h-48 w-1/3 mobile:w-3/5" />*/}
        {/*<Sponsor company1="Micropower" company2="" className="grow-2 h-48 w-2/3 mobile:w-full" />*/}
      </div>
    </div >
  )
}

export default Content