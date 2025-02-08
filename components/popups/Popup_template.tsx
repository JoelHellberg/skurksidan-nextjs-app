import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import closeIcon from "/icons/close.svg"
import arrowIcon from "/icons/arrow.svg"
import { useRef, ReactNode, useEffect, useState } from "react";

interface Props {
    SetCondition: () => void;
    condition: boolean;
    imgSrc: string
    children: ReactNode; // Include children in the Props interface
}

const Popup_template: React.FC<Props> = ({ SetCondition, condition, imgSrc, children }) => {
    const divRef = useRef<HTMLInputElement>(null);
    const isMobile = useMediaQuery('(max-width: 750px)')

    {/* Get the details of the specific character
    const character_index = characters.aliases.indexOf(props.alias)
    const character = characters.characters[character_index]*/ }

    const handleClick = (event: any) => {
        // Makes sure the onclick function (this) is only called when clicking the parent element (above the details panel). (works on X button)
        if (event.target !== event.currentTarget) {
            return;
        }

        SetCondition();                                     // Send to parent (index.tsx) that the details panel should be closed
        // Since the details page is the same component for every character (it just switches out the content) we have to scroll to the top when closing it. Inline if is used so it's not NULL
        divRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (condition) {
            setIsAnimating(true);
        } else {
            setTimeout(() => setIsAnimating(false), 400); // Match the animation duration
        }
    }, [condition]);

    return (
        <div>
            {(condition || isAnimating) && (
                <div
                    className={`fixed h-full w-full flex justify-center ${condition ? "tone-in" : "tone-out"}
                    bg-gray-700 bg-opacity-20 backdrop-blur-md
                    items-center mobile:items-end`}
                    onClick={handleClick}
                >
                    <div
                        className={`${isMobile ? condition ? "roll-up" : "roll-down" : ""} 
                            w-4/5 h-4/5 handheld:w-5/6 mobile:w-full mobile:h-5/6 py-16 bg-black`}
                        id="ContentDiv">

                        {(isMobile && imgSrc != "") ||
                            <div className="absolute left-30 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <Image
                                    width={450}
                                    height={450}
                                    src={imgSrc}
                                    alt=" "
                                    onClick={handleClick}
                                />
                            </div>
                        }

                        <div className="relative">

                            {isMobile ? (
                                <Image
                                    width={40}
                                    height={40}
                                    src={arrowIcon}
                                    alt="Stäng"
                                    className="absolute -top-16 left-0 right-0 bottom-0 m-auto bg-black text-white flex items-center justify-center"
                                    onClick={handleClick}
                                />
                            ) : (
                                <Image
                                    width={30}
                                    height={30}
                                    src={closeIcon}
                                    alt="Stäng"
                                    className="absolute right-10 -top-8 hover:cursor-pointer"
                                    onClick={handleClick}
                                />
                            )}
                        </div>

                        <div className="h-full px-16 mobile:px-10 overflow-y-auto">
                            {children}
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Popup_template;