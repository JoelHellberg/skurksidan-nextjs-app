import React from 'react';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';
import Card from '@/components/Card';
import CardPhone from '@/components/CardPhone';

type Props = {
    openDetails: Function
}

const Characters = (props: Props) => {
    const isHandheld = useMediaQuery('(max-width: 1024px)');

    return (
        <div>
            <div className='w-screen justify-center text-center desktop:-mb-10'>
                <h4>Klicka på ett kort</h4>
            </div>

            {isHandheld ? (
                <div>
                    <div className='handheld:w-full handheld:m-auto handheld:grid handheld:grid-cols-2 handheld:gap-4'>
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
                    <div className='handheld:w-1/2 handheld:m-auto'>
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
    );
};

export default Characters;
