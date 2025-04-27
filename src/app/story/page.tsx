import React from 'react';
import Image from 'next/image';
import OpnLab1 from '@/app/assets/opnlab1.png';
import OpnLab2 from '@/app/assets/opnlab2.png';
import OpnLab3 from '@/app/assets/opnlab3.png';
import OpnLab4 from '@/app/assets/opnlab4.png';

const ExperienceSciencePage = () => {
    return (
        <div className="flex flex-col text-primary gap-8 text-2xl px-12 py-16 font-open-sans max-md:pt-24 mb-12">
            <div className="w-full">
                <div className="flex max-md:text-center flex-col items-center font-bold pb-10">
                    <h1 className="text-3xl md:text-4xl max-md:pb-2">Experience Science the Open Lab Way</h1>
                    <p className="font-normal">
                        At Open Lab, we believe science is not something to memorize — it’s something to live, explore, and create. 
                        Every child deserves a space where curiosity is celebrated and discovery feels natural and joyful. 
                        Here’s how we bring that vision to life.
                    </p>
                </div>

                <div className="space-y-20">
                    
                    {/* Section 1 */}
                    <section className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2">
                            <Image 
                                src={OpnLab1}
                                alt="Children Conducting Science Experiments" 
                                width={600} 
                                height={400} 
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold pb-4">Children Conducting Science Experiments in a Lab</h2>
                            <p>
                                The children's expressions are animated with excitement, concentration, and joy, highlighting their emotional engagement 
                                with the experiments they are conducting. Whether mixing solutions, observing chemical reactions, or assembling small inventions, 
                                each activity is portrayed as a gateway into deeper understanding and wonder.
                            </p>
                            <p className="pt-4">
                                The setting itself is bright, accessible, and designed to feel welcoming rather than intimidating. 
                                Instead of a rigid, formal lab, it feels like a creative playground for ideas — reinforcing the Open Lab philosophy 
                                that science should be lived, not memorized.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="md:w-1/2">
                            <Image 
                                src={OpnLab2}
                                alt="Kids Performing Chemistry Experiments" 
                                width={600} 
                                height={400} 
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold pb-4">Kids Performing Chemistry Experiments</h2>
                            <p>
                                In this illustration, children are shown actively participating in simple yet exciting chemistry activities — mixing colorful liquids in beakers, 
                                observing reactions that bubble or change color, and carefully noting their observations.
                            </p>
                            <p className="pt-4">
                                Each child is not working alone — they are collaborating, discussing hypotheses, and sharing their findings. 
                                It shows that exploration grows richer when shared, and learning deepens when young minds build ideas together.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2">
                            <Image 
                                src={OpnLab3}
                                alt="Young Scientists in Action" 
                                width={600} 
                                height={400} 
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold pb-4">Young Scientists in Action</h2>
                            <p>
                                Children are shown in different stages of experimentation: measuring ingredients, recording data, and discussing findings with peers. 
                                This variety highlights exploration, collaboration, and reflection — all critical to scientific learning.
                            </p>
                            <p className="pt-4">
                                Importantly, the depiction emphasizes confidence and agency: they are not just "playing" but owning their experiments, 
                                solving problems, and making decisions — the spirit of Open Lab’s vision.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="md:w-1/2">
                            <Image 
                                src={OpnLab4}
                                alt="Children Exploring Scientific Concepts" 
                                width={600} 
                                height={400} 
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold pb-4">Children Exploring Scientific Concepts</h2>
                            <p>
                                Learning is shown as multidimensional: an exciting journey across different fields. 
                                Exploration is not bound by rigid subjects — kids are allowed to discover where their passions lie.
                            </p>
                            <p className="pt-4">
                                Although the children are having fun, there’s a strong sense of meaningful discovery — asking questions, testing ideas, 
                                and building understanding through hands-on experience. Fun is the fuel for learning.
                            </p>
                        </div>
                    </section>

                    <div className="border-t border-gray-300 my-12"></div>

                    <div className="text-center font-semibold text-xl">
                        Through every experiment, every question, and every small success, Open Lab nurtures the next generation 
                        of builders, thinkers, and dreamers.
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExperienceSciencePage;
