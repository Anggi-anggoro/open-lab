import React from 'react';
import Logo2 from '@/app/assets/logo2.png';
import Image from 'next/image';
const SciencePage = () => {
    return (
        <div className="flex flex-col md:flex-row items-center text-primary justify-between gap-8 text-2xl px-12 md:py-16 font-open-sans max-md:pt-24 mb-12">
            <div className="md:w-4/5 px-2 md:px-8">
            <div className='flex max-md:text-center md:pl-[30%] flex-col items-center md:px-8 font-bold pb-10'>
                    <h1 className='text-3xl md:text-4xl'>Science Lab</h1>
                    <p className='font-normal'>Learn It, Do It, Apply It</p>
                </div>
                <ul className="list-disc list-inside space-y-6">
                    <li>
                        <strong>Just the right challenge</strong><br />
                        Medium-level experiments, perfect for high schoolers who want to go beyond the classroom — but still stay on track with what they’re learning.
                    </li>
                    <li>
                        <strong>Team up with advanced miners</strong><br />
                        Collaborate with peers who’ve been there, done that — and are excited to share what they know.
                    </li>
                    <li>
                        <strong>From class to real-life</strong><br />
                        Every project connects back to real curriculum. It’s science that clicks in school — and sticks in life.
                    </li>

                </ul>
            </div>

            <div className="w-1/5 flex flex-col items-center text-center self-end pb-14">
                <Image src={Logo2} alt="Rocket and rock icon" className="w-80 mt-6" />
            </div>
        </div>

    );
};

export default SciencePage;