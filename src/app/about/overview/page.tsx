import React from 'react';
import Logo2 from '@/app/assets/logo2.png';
import Image from 'next/image';
const InfoPage = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-xl:text-xl text-2xl px-12 h-screen text-primary pt-12">
            <div className="w-2/5 flex flex-col items-center text-center self-center">                
                <Image src={Logo2} alt="Rocket and rock icon" className="w-96" />
            </div>
            <div className="w-4/5">
               <div className='flex flex-col items-start font-bold pb-10'>                
                    <h1 className=''>Open Lab is a digital platform that bridges techies — the creators, engineers, and lab lovers — with miners — curious young learners eager to explore real science.</h1>            
                </div>
                <p className='font-bold'>It’s more than just content. It’s a living lab environment where:
                </p>
                <ul className="list-disc list-inside text-[#0A3D5C] space-y-6">
                    <li>
                        <strong>🧪 A Science gets personal — </strong> 
                        Choose your own adventure! Projects are categorized by difficulty, making it easy for each learner to match their age, interest, and experience level.  
                    </li>
                    <li>
                        <strong>🛠 All fields, all fun — </strong>
                        Dive into hands-on activities across electrical, chemical, civil, and architectural science.
                    </li>
                    <li>
                        <strong>🔄 Many ways to learn and share — </strong>
                        From video demos, 3D mockups, to real-time virtual consultations with experts — every learner finds their flow.
                    </li>
                </ul>
                <h1 className='font-bold pt-10'>
                Open Lab is where imagination meets instruction — making practical science accessible, inclusive, and insanely fun.

                </h1>

            </div>


        </div>

    );
};

export default InfoPage;