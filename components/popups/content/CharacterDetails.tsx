import useMediaQuery from "@/hooks/useMediaQuery";
import Image from 'next/image';
import { characters } from "@/data/character_data";
import closeIcon from "/icons/close.svg"


type Props = {
    alias: string
}

const CharacterDetails = (props: Props) => {
    {/* Get the details of the specific character */ }
    const character_index = characters.aliases.indexOf(props.alias)
    const character = characters.characters[character_index]
    const isMobile = useMediaQuery('(max-width: 750px)')

    return (
        <div className="h-full w-full">
            <div className='m-auto w-4/5 handheld:w-full'>
                <h2>{character.name + " " + character.surname}</h2>
                <p>{character.story}</p>
            </div>
        </div>
    );
};

export default CharacterDetails;