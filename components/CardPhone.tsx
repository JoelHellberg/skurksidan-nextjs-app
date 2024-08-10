import Image from 'next/image';

type Props = {
    alias: string
    openDetails: Function
}

const CardPhone = (props: Props) => {
    function handleClick() { props.openDetails(props.alias) }
    return (
        <div className="flex flex-col items-center p-4 m-2 rounded-lg w-3/5 mx-auto" onClick={handleClick}>
            <div className="relative aspect-[5/7] w-full">
                <div>
                    <Image
                        src={"/images/characters/" + props.alias + "_Idolkort24_25.png"}
                        layout="fill"
                        alt="Rectangle 1"
                        sizes="50vw"
                        className="relative object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default CardPhone;
