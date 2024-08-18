import Image from 'next/image';
import { characters } from "@/data/character_data";

type Props = {
    alias: string
    openDetails: Function
}

const Card = (props: Props) => {
    {/* Get the details of the specific character */ }
    const character_index = characters.aliases.indexOf(props.alias)
    const character = characters.characters[character_index]

    function handleClick() { props.openDetails(props.alias) }
    return (
        <div className='relative group perspective mx-6 my-1 hover:cursor-pointer' onClick={handleClick}>
            <div className="shadow-lg transition-all ease-in-out aspect-[5/7] w-32 group-hover:rotate-x-30 group-hover:brightness-75 duration-700">
                <Image
                    src={"/images/characters/" + props.alias + "_Idolkort24_25.png"}
                    layout="fill"
                    alt="Rectangle 1"
                    sizes="50vw"
                    className="relative object-cover"
                />
            </div>
            <div className='absolute inset-0 w-24 h-full bg-black opacity-0 group-hover:opacity-60 -z-10 filter blur-lg top-4 duration-1000' />
            <div className='absolute text-center -inset-2 aspect-[5/7] w-36 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -top-8 flex flex-col justify-end'>
                <Image
                    src={"/images/characters/" + props.alias + "-no-bg.png"}
                    layout="fill"
                    alt="Rectangle 1"
                    sizes="50vw"
                    className="relative object-cover"
                />
                <div className='p-3 z-10 mb-4 '>
                    <a className='pb-0 text-3xl'>{character.name}</a>
                    <br className='p-0'></br>
                    <a className='pt-0 text-lg'>{character.surname}</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
