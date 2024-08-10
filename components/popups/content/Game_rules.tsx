import Image from 'next/image';


const Game_rules = () => {

    return (
        <div className='m-auto w-4/5 handheld:w-5/6 mobile:w-full'>
            <h2>SPELREGLER</h2>
            <p>
                Som Nollan vet (eller åtminstone kommer att lära sig), så älskar Phadderister att leka. Skurkeriet vill därför introducera Phadderistspelet.
                Ett spel där Nollan genom att samla idolkort kan lära känna Phadderister och andra Nollan.<br />
                <br />
            </p>
            <h6>NOLLAN BEHÖVER</h6>
            <ul className='list-disc pl-[20px]'>
                <li>Tre idolkort. Om Nollan har fler än så får Nollan välja ut tre kort att spela med</li>
                <li>En annan Nollan.</li>
            </ul>
            <br />
            <h6>SÅ HÄR SPELAR NOLLAN</h6>
            <p>
                Varje Nollan tar sina tre kort och studerar dem. Phadderistspelet handlar om såväl tur som skicklighet. Försök lägga kortens färdighetspoäng
                på minnet. Vänd sedan på korten så att avigsidan hamnar uppåt och blanda. Framför vardera Nollan ligger nu en hög med tre kort i okänd ordning.
                Utse vem av Nollan som ska börja - Spelare 1.
                <br />
                Spelare I bestämmer vilken av de tre färdigheterna 1, 2 eller 3 som ska spelas ut först. På given signal vänder båda Nollan upp sitt översta
                kort i högen. Nollan med högst färdighetspoäng på den valda färdigheten 1,2 eller 3 vinner omgången. Nu är det spelare II:s tur att bestämma
                vilken av de resterande färdigheterna som ska spelas ut. Här kan spelare II tänka taktiskt och försöka komma ihåg hur många färdighetspoäng
                kvarvarande idolkort har. Förslagsvis väljer spelare II att spela ut en färdighet som har höga poäng på båda korten.<br />
                <br />
                På given signal vänder båda Nollan upp det översta kortet i högen. Nollan med högst färdighetspoäng på den valda färdigheten 1,2 eller 3
                vinner andra omgången. Om en av Nollan har vunnit båda omgångarna är spelet slut. Om Nollan har vunnit en gång var fortsätter spelet.<br />
                <br />
                Nu återstår bara en färdighet att spelas ut. På given signal vänder båda Nollan upp det sista kortet i högen. Om Nollan av en händelse
                skulle vinna lika många omgångar var vinner den som har flest använda färdighetspoäng.
            </p>
            <Image
                src="/images/rules.jpg"
                alt="Regler"
                width="1200"
                height="500"
                className='mt-6 m-auto'
            />
        </div>
    );
};

export default Game_rules;