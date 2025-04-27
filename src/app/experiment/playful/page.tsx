import React from 'react';
import Logo2 from '@/app/assets/logo2.png';
import Image from 'next/image';
import Disc from '@/app/assets/disc1.png';
const BuildingPage = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 text-2xl px-12 md:py-16 text-primary max-md:pt-24 mb-12">
            <div className="w-2/5 flex flex-col items-center text-center self-end pb-14">
                <Image src={Logo2} alt="Rocket and rock icon" className="w-96 mt-6" />
            </div>
            <div className="md:w-3/5">
                <div className='flex max-md:text-center md:pl-[30%] md:items-start flex-col md:px-8 font-bold pb-10'>
                    <div className='text-center'>
                        <h1 className='text-3xl md:text-4xl'>Playful Lab</h1>
                        <p className='font-normal'>Where Science Begins with Wonder</p>
                    </div>
                </div>
                <ul className="text-[#0A3D5C] space-y-6">
                    <li>
                        <Image className='inline' alt="" src={Disc} height={40} width={40} /> <strong>A Playground for curious minds</strong><br />
                        A shared space where techies (the lab geeks and project tinkerers) meet miners (the young explorers digging into science with wide eyes).
                    </li>
                    <li>
                        <Image className='inline' alt="" src={Disc} height={40} width={40} /> <strong>Interest-based discovery</strong><br />
                        We serve just the right kind of science — from space gadgets to crystal experiments — based on what each kid loves.
                    </li>
                    <li>
                        <Image className='inline' alt="" src={Disc} height={40} width={40} /> <strong>Because science should feel like magic</strong><br />
                        Not just facts in textbooks. We make science fun, hands-on, and full of “whoa!” moments.
                    </li>
                </ul>
            </div>


        </div>

    );
};

export default BuildingPage;