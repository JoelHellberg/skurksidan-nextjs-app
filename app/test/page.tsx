"use client";
import FadeInSection from '@/components/FadeInSection';
import CardPhone from '@/components/CardPhone';
import Image from 'next/image';
import React, { useState } from 'react';



const YourComponent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(prevIsVisible => !prevIsVisible);
    };

    return (
        <div className='h-screen overflow-y-auto'>
            <div className="w-screen">
                <div className="transition-all ease-in-out duration-500 relative m-auto rounded-md w-2/5 handheld:w-4/5 p-20 
                  bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] 
                  bg-gray-500 bg-opacity-20 hover:bg-opacity-30 bg-[length:250%_250%,100%_100%] 
                  bg-no-repeat 
                  shimmer-animation 
                  shadow-2xl
                  hover:cursor-pointer" onClick={toggleVisibility}>

                    {/* Scale content container */}
                    <div className="scale-content">
                        <h2>SPELREGLER</h2>
                        <div className="m-auto w-3/5">
                            <Image
                                src={"/images/group11.svg"}
                                layout="responsive"
                                alt="Rectangle 1"
                                width={500}
                                height={500}
                                className="relative object-contain"
                            />
                        </div>
                    </div>

                    {/* Rotated Image */}
                    <div className="absolute bottom-10 right-10 transform rotate-45 translate-x-1/2 translate-y-1/2">
                        <div className="relative aspect-[5/7] w-32">
                            <Image
                                src={"/images/characters/baksida_Idolkort24_25.jpg"}
                                layout="fill"
                                alt="Rectangle 1"
                                sizes="50vw"
                                className="relative object-cover"
                            />
                        </div>

                    </div>
                </div>
            </div>

            {isVisible && (
                <div className="fixed" id="myDIV">
                    This is my DIV element.
                </div>
            )}

            <div className='h-screen bg-black'>AA</div>
            <div className='h-screen bg-slate-200'>AA</div>
            <div className='h-screen bg-red-300'>AA</div>
        </div>

    );
};

export default YourComponent;
