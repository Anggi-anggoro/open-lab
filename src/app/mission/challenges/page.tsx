import React from 'react';
import Logo2 from '@/app/assets/logo2.png';
import Image from 'next/image';
const MissionPage = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:text-2xl md:px-12 md:py-16 max-md:pt-24 mb-12">
            <div className="w-3/5">
                <ul className="list-disc list-inside text-[#0A3D5C] space-y-6">
                    <li>
                        <strong>Too much talk, not enough action!</strong><br />
                        Science in school is still way too theoretical — pages, formulas, and long lectures.
                    </li>
                    <li>
                        <strong>Kids are getting curious, but...</strong><br />
                        When they do explore, it's mostly apps and coding. Cool, but where’s the hands-on fun?
                    </li>
                    <li>
                        <strong>Where’s the messy, sparkly, exploding stuff?</strong><br />
                        Access to real, practical science — the kind with test tubes, magnets, slime, and satellites — is still hard to find.
                    </li>
                </ul>
            </div>

            <div className="w-2/5 flex flex-col items-center text-center md:self-end md:pb-14">
                <h2 className="text-2xl md:text-4xl font-bold text-[#0A3D5C]">Challenges</h2>
                <Image src={Logo2} alt="Rocket and rock icon" className="w-96 mt-6" />
            </div>
        </div>

    );
};

export default MissionPage;