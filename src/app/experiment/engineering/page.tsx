import React from 'react';
import Logo2 from '@/app/assets/logo2.png';
import Image from 'next/image';
import Disc from '@/app/assets/disc3.png';
const EngineeringPage = () => {
    return (
        <div className="flex flex-col md:flex-row items-center text-primary justify-between gap-8 text-2xl px-12 md:py-16 font-open-sans max-md:pt-24 mb-12">
            <div className="md:w-4/5 px-4 md:px-8">
                <div className='flex max-md:text-center md:pl-[30%] flex-col items-center md:px-8 font-bold pb-10'>
                    <h1 className='text-3xl md:text-4xl max-md:pb-2'>Engineering Lab</h1>
                    <p className='font-normal'>Where Big Ideas Get Built</p>
                </div>
                <ul className="space-y-6">
                    <li>
                        <Image className='inline' alt="" src={Disc} height={40} width={40}/> <strong>Challenge accepted</strong><br />
                        Designed for high-difficulty experiments that push the limits — from robotics to nano-stuff.
                    </li>
                    <li>
                    <Image className='inline' alt="" src={Disc} height={40} width={40}/>  <strong>Collab like pros</strong><br />
                        Work together, virtually or live, with real-time support and interactive mentoring. Science isn’t solo anymore — it’s teamwork that clicks.
                    </li>
                    <li>
                    <Image className='inline' alt="" src={Disc} height={40} width={40}/>  <strong>Experts in your corner</strong><br />
                        Need a brain boost? We’ve got engineers, makers, and innovators ready to guide your journey.
                    </li>

                </ul>
            </div>

            <div className="w-1/5 flex flex-col items-center text-center self-end pb-14">
                <Image src={Logo2} alt="Rocket and rock icon" className="w-80 mt-6" />
            </div>
        </div>

    );
};

export default EngineeringPage;