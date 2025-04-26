import React from 'react';
import Logo2 from '@/app/assets/logo2.png';
import Image from 'next/image';
const BuildingPage = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:text-2xl md:px-12 md:py-16 max-md:pt-24 mb-12">
            <div className="w-2/5 flex flex-col items-center text-center md:self-end md:pb-14">
                <h2 className="text-2xl md:text-4xl font-bold text-[#0A3D5C]">What We're Building</h2>
                <Image src={Logo2} alt="Rocket and rock icon" className="w-96 mt-6" />
            </div>
            <div className="max-md:px-10 md:w-3/5">
                <ul className="list-disc list-inside text-[#0A3D5C] space-y-6">
                    <li>
                        <strong>A Playground for curious minds</strong><br />
                        A shared space where techies (the lab geeks and project tinkerers) meet miners (the young explorers digging into science with wide eyes).
                    </li>
                    <li>
                        <strong>Interest-based discovery</strong><br />
                        We serve just the right kind of science — from space gadgets to crystal experiments — based on what each kid loves.
                    </li>
                    <li>
                        <strong>Because science should feel like magic</strong><br />
                        Not just facts in textbooks. We make science fun, hands-on, and full of “whoa!” moments.
                    </li>
                </ul>
            </div>


        </div>

    );
};

export default BuildingPage;