import React from 'react';
import Logo2 from '@/app/assets/logo2.png';
import Image from 'next/image';
const MissionPage = () => {
    return (
        <div className="flex flex-col md:flex-row items-center pt-12 justify-between gap-8 text-2xl px-12 h-screen text-primary font-open-sans">
            <div className="w-4/5 px-4">
                <div className='flex items-center gap-x-8 mb-8'>
                    <p className='text-center '>
                        Founder
                    </p>
                    <div>
                        <h1 className='font-bold text-4xl pb-2'>
                            Muhammad Purwa Manggala
                        </h1>
                        <p>
                            <strong>
                            🚀 Visionary Strategist & Science Connector
                            </strong>
                            A digital ecosystem architect with a passion for transforming science education into something bold, fun, and future-ready. Always exploring the intersection of innovation, education, and impact
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-x-8 '>
                    <p className='text-center'>
                        Co-Founder
                    </p>
                    <div>
                        <h1 className='font-bold text-4xl pb-2'>
                            Aulia Galih Manggala
                        </h1>
                        <p>
                        <strong>
                        🎨 Creative Explorer & Young Scientist Whisperer
                        </strong>
                        Bringing fresh energy and kid-centered creativity, Aulia leads the design of experiences that spark curiosity and make science magical for young minds.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-2/5 flex flex-col items-center text-center self-end pb-36">
                <h2 className="text-4xl font-bold text-[#0A3D5C]">Meet the Team – Dreamers Behind the Lab</h2>
                <Image src={Logo2} alt="Rocket and rock icon" className="w-96 mt-6" />
            </div>
        </div>

    );
};

export default MissionPage;