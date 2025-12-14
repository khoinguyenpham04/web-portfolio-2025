import React from 'react';
import Image from 'next/image';
import { SparkleIcon } from '../icons/SparkleIcon';
import { Button } from "@/components/ui/button";
import { IconPointerFilled } from "@tabler/icons-react";
import Link from 'next/link';
import { Codesandbox } from 'lucide-react';

const FeaturedHackathons = () => {
    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 text-sm font-medium border border-neutral-300 bg-white px-3 py-1.5 rounded-full mb-4">
                        <SparkleIcon className="size-5"/>
                        <span>Featured Projects</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
                        Favorite Hackathons
                    </h2>
                    <p className="text-lg text-gray-400 max-w-[50ch] mx-auto">
                        Competitions that shaped my journey as a developer.
                    </p>
                </div>

                <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-6">
                    
                    {/* --- Race The Ages Block --- */}
                    <div className="bg-[#F6F5F4] rounded-xl overflow-hidden relative flex flex-col justify-between lg:row-span-2">
                        <div className="p-8 flex flex-col gap-4">
                            <div className="relative w-22 h-22">
                                <Image 
                                    src="/hackathon-images/ChronoQuest.png"
                                    alt="ChronoQuest Logo"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 96px, 128px"
                                    priority
                                />
                            </div>
                            <div>
                                <h3 className="text-[28px] font-bold leading-tight m-0">Race The Ages</h3>
                                <p className="text-base text-black/70 mt-1">Real-time historical guesser multiplayer game</p>
                            </div>
                            <Button variant="tactile-black" size="default" asChild className="w-fit">
                                <Link href="/projects/race-the-ages" className="inline-flex items-center gap-2">
                                    <IconPointerFilled className="w-6 h-6 fill-current" />
                                    Click to View More
                                </Link>
                            </Button>
                        </div>
                        <div className="w-full relative p-3">
                            <div className="relative pt-[61.29%] rounded-2xl overflow-hidden">
                                <Image
                                    src="/racetheagescollage.png"
                                    alt="race the ages image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* --- LeetCoachBlock --- */}
                    <div className="bg-[#F6F5F4] rounded-xl overflow-hidden relative flex flex-col lg:flex-row justify-between min-h-[250px]">
                         <div className="p-6 flex flex-col gap-4 flex-grow z-10 lg:max-w-[50%]">
                            {/* LeetCoach Icon */}
                            <Image
                                src="/leetcoach.png"
                                alt="LeetCoach Icon"
                                width={64}
                                height={64}
                            />
                            <div>
                                <h3 className="text-[28px] font-bold leading-tight m-0">LeetCoach</h3>
                                <p className="text-base text-black/70 mt-1">
                                    Your personal coding interview voice agent AI.
                                </p>
                            </div>
                            <Button variant="tactile-black" size="default" asChild className="w-fit">
                                <Link href="/projects/leetcoach" className="inline-flex items-center gap-2">
                                    <IconPointerFilled className="w-6 h-6 fill-current" />
                                    Click to View More
                                </Link>
                            </Button>
                        </div>
                         <div className="relative w-full lg:w-[600px] h-[300px] sm:h-[350px] lg:h-full z-0 p-3">
                            <div className="relative h-full w-full rounded-2xl overflow-hidden">
                                <Image
                                    src="/leetcoach-thumbnail.png"
                                    alt="Placeholder image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* --- Omni Block --- */}
                    <div className="bg-[#F6F5F4] rounded-xl overflow-hidden relative flex flex-col lg:flex-row justify-between min-h-[250px]">
                        <div className="p-6 flex flex-col gap-4 flex-grow z-10 lg:max-w-[50%]">
                            <Codesandbox className="w-12 h-12 text-black" />
                            <div>
                                <h3 className="text-[28px] font-bold leading-tight m-0">Omni</h3>
                                <p className="text-base text-black/70 mt-1">Crypto Wallet and Trading AI strategist</p>
                            </div>
                            <Button variant="tactile-black" size="default" asChild className="w-fit">
                                <Link href="/projects/omni" className="inline-flex items-center gap-2">
                                    <IconPointerFilled className="w-6 h-6 fill-current" />
                                    Click to View More
                                </Link>
                            </Button>
                        </div>
                        <div className="relative w-full lg:w-[600px] h-[300px] sm:h-[350px] lg:h-full z-0 p-3">
                            <div className="relative h-full w-full rounded-2xl overflow-hidden">
                                <Image
                                    src="/omni-thumbnail.png"
                                    alt="Placeholder image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedHackathons;