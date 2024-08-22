import useMediaQuery from "@/hooks/useMediaQuery";
import Image from 'next/image';
import { characters } from "@/data/character_data";
import closeIcon from "/icons/close.svg"


type Props = {
    message: string
}

const CharacterDetails = (props: Props) => {
    return (
        <div className="h-full w-full">
            <div className='m-auto w-4/5 handheld:w-full'>
                <h4>Secret Message</h4>
                <h1 className="mt-10">{props.message}</h1>
            </div>
        </div>
    );
};

export default CharacterDetails;