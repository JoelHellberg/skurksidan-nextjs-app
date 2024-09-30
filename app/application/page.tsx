"use client"
import Image from 'next/image';
import Roles from '@/components/Roles';
import Countdown from '@/components/Countdown';
import useMediaQuery from '@/hooks/useMediaQuery'
import { useEffect, useState } from 'react';

export default function Page() {
  const isHandheld = useMediaQuery('(max-width: 1050px)')
  const deadlineTime = new Date("Oct 18, 2024 00:00:00").getTime();
  const [deadline, setDeadline] = useState(false);

  // Update date every second to trigger deadline
  useEffect(() => {
    var deadlineTimer = setInterval(function () {
      const now = new Date().getTime();

      if (now > deadlineTime) {
        setDeadline(true);
        clearInterval(deadlineTimer);
      }

    }, 1000)
  }, [deadlineTime]);

  return (
    <main className="bg-[#000000] h-screen overflow-y-auto">
      {/* Group image */}
      <div className='flex flex-col-reverse items-left w-full h-screen bg-cover bg-left-bottom'>
        {!deadline ? (
          <div className='text-whiteText h-full w-full pl-[18%] pt-[5%] mobile:px-[5%] handheld:pt-0'>
            <div className='fadeIn1 relative h-1/3 w-4/5 mobile:w-full'>
              <Image
                src={'/images/darkness.jpg'}
                fill
                unoptimized
                alt={'BLI EN DEL AV MÖRKRET'}
                sizes="50vw"
                className="object-contain object-left" />
            </div>
            <div className='w-1/2 pt-8 mobile:w-full mobile:pt-0'>
              <p className='fadeIn2 text-xl text-left mobile:text-lg'>
                Sök själv eller föreslå någon du tror skulle passa in i nästa generation av Skurkeriet.
                Nedan finner du beskrivningar av de poster som erbjuds.&nbsp;
                <a href='/?redir=true' className='inline-block font-semibold'> Klicka här för att gå tillbaka till skurkeriet.se</a>
              </p>
              {isHandheld ? (<></>) : (<br />)}
              <br/>
              {/*<p className='fadeIn2 text-xl text-left mobile:text-xs bg-yellow text-black p-1 font-modestoExpanded'>
              Söket stänger på Mörkrets Natt
              </p>*/}              
              <a href='https://docs.google.com/forms/d/e/1FAIpQLScCXtuL9oUByfKkVDWrRx0YbMfem3Pn40ywCb2GSRjrP0Q6Gg/viewform?usp=sf_link'>
                <button
                  className='fadeIn3 bg-transparent rounded-3xl px-12 py-3 m-auto mt-10 font-modestoExpanded text-3xl text-yellow border-yellow border-2 ease-linear duration-500
                  hover:scale-110 mobile:px-10 mobile:text-2xl'
                >
                  SÖK
                </button>
              </a><br />
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSeCv3T1SfBWKnW90ckudvP2VZe945gOsZWhlQ6Yt9p-dQDp6A/viewform?usp=sf_link'>
                <button
                  className='fadeIn4 bg-transparent rounded-3xl px-12 py-3 m-auto mt-5 font-modestoExpanded text-3xl text-yellow border-yellow border-2 ease-linear duration-500
                  hover:scale-110 mobile:px-10 mobile:text-2xl'
                >
                  NOMINERA
                </button>
              </a>
            </div>
          </div>
        ) : (
          <div className='text-whiteText h-full w-full pl-[18%] pt-[10%] mobile:px-[5%]'>
            <div className='w-1/2 pt-8 mobile:w-full mobile:pt-[40%]'>
              <p className='fadeIn2 text-xl text-left mobile:text-lg'>
                Sökperioden till Skurkeriet är tyvärr stängd.
                <a href='/?redir=true' className='block font-semibold pt-4'> Klicka här för att gå tillbaka till skurkeriet.se</a>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Render the roles */}
      <Roles />
      {!isHandheld ? (
      <Countdown />
    ) : (<></>)}
    </main >
  )
}
