import React from 'react';
import Logo2 from '@/app/assets/logo2.png';
import Image from 'next/image';

const CareersPage = () => {
    return (
        <div className="flex flex-col md:flex-row items-center text-primary justify-between gap-8 text-2xl px-12 py-16 font-open-sans max-md:pt-24 mb-12">
            <div className="w-full px-2 md:px-8">
                <div className='flex max-md:text-center flex-col items-center md:px-8 font-bold pb-10'>
                    <h1 className='text-3xl md:text-4xl max-md:pb-2'>Careers at Open Lab</h1>
                    <p className='font-normal'>Build the Future with Us</p>
                </div>
                
                <div className="space-y-6">
                    <p>
                        At Open Lab, we're more than a platform — we are a movement to make science real, playful, 
                        and accessible for every young mind. We believe that true innovation happens when curiosity 
                        is nurtured, ideas are shared, and learning is lived through hands-on experience.
                    </p>
                    
                    <p>
                        We are looking for passionate builders, educators, creators, and dreamers who share our vision: 
                        a world where every child feels empowered to explore, invent, and imagine.
                    </p>
                    
                    <h2 className="text-2xl font-bold pt-4">Working at Open Lab means:</h2>
                    <ul className="list-disc list-inside space-y-4">
                        <li>
                            <strong>Creating impact:</strong> Every experiment, every project, every lesson you contribute to 
                            can inspire a future scientist, engineer, or innovator.
                        </li>
                        <li>
                            <strong>Living innovation:</strong> Our workplace mirrors our philosophy — creative, flexible, 
                            and fueled by exploration. We encourage ideas from every corner of the team.
                        </li>
                        <li>
                            <strong>Building community:</strong> Collaboration is at the heart of everything we do. Just like 
                            the kids we serve, we believe we are stronger when we learn and grow together.
                        </li>
                    </ul>
                    
                    <h2 className="text-2xl font-bold pt-4">Who thrives here:</h2>
                    <ul className="list-disc list-inside space-y-4">
                        <li>Curious minds who see problems as opportunities.</li>
                        <li>Strategic thinkers who love building things from scratch.</li>
                        <li>Empathetic leaders who believe education should be joyful and accessible.</li>
                        <li>Team players who know that big dreams need brave, collaborative action.</li>
                    </ul>
                    
                    <div className="border-t border-gray-300 my-6"></div>
                    
                    <h2 className="text-2xl font-bold">Open Roles:</h2>
                    <ul className="list-disc list-inside space-y-4">
                        <li>Science Content Creator</li>
                        <li>STEM Program Coordinator</li>
                        <li>Partnership & Community Manager</li>
                        <li>Educational Product Designer</li>
                        <li>Lab Mentor & Facilitator</li>
                    </ul>
                    
                    <div className="border-t border-gray-300 my-6"></div>
                    
                    <h2 className="text-2xl font-bold">Don't see a role that fits?</h2>
                    <p>
                        We're always looking for passionate people who believe in what we're building. 
                        If you feel connected to our mission, reach out — let's start a conversation.
                    </p>
                    
                    <div className="border-t border-gray-300 my-6"></div>                
                </div>
            </div>    
        </div>
    );
};

export default CareersPage;