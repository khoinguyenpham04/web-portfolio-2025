import React from 'react';
import Image from 'next/image';
import { SparkleIcon } from '../icons/SparkleIcon';
import { Button } from "@/components/ui/button";
import { IconPointerFilled, IconTrophy } from "@tabler/icons-react";
import Link from 'next/link';

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
                    
                    {/* --- HackJunction Block --- */}
                    <div className="bg-[#F6F5F4] rounded-xl overflow-hidden relative flex flex-col justify-between lg:row-span-2">
                        <div className="p-8 flex flex-col gap-4">
                            <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full text-xs font-semibold w-fit">
                                <IconTrophy className="w-3.5 h-3.5" />
                                1st Place in the Snap Challenge
                            </div>
                            <div>
                                <h3 className="text-[28px] font-bold leading-tight m-0">HackJunction</h3>
                                <p className="text-base text-black/70 mt-1">AR safety navigation with Agentic AI companion</p>
                            </div>
                            <Button variant="tactile-black" size="default" asChild className="w-fit">
                                <Link href="/projects/race-the-ages" className="inline-flex items-center gap-2">
                                    <IconPointerFilled className="w-6 h-6 fill-current" />
                                    Click to View More
                                </Link>
                            </Button>
                        </div>
                        <div className="w-full relative p-3 flex-1">
                            <div className="relative w-full h-full min-h-[200px] lg:aspect-[4/3] rounded-2xl overflow-hidden">
                                <span className="absolute bottom-3 right-3 z-10 text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">November 2025</span>
                                <Image
                                    src="/HackJunction.jpg"
                                    alt="HackJunction image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* --- GreatUniHack 2025 Block --- */}
                    <div className="bg-[#F6F5F4] rounded-xl overflow-hidden relative flex flex-col lg:flex-row min-h-[250px]">
                         <div className="p-6 flex flex-col gap-3 justify-center z-10 w-full lg:w-[40%] lg:flex-shrink-0">
                            {/* Mobile: Show all awards */}
                            <div className="flex flex-wrap gap-1.5 lg:hidden">
                                <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full text-xs font-semibold">
                                    <IconTrophy className="w-3.5 h-3.5" />
                                    1st Reply Challenge
                                </div>
                                <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full text-xs font-semibold">
                                    <IconTrophy className="w-3.5 h-3.5" />
                                    1st ARM Challenge
                                </div>
                                <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full text-xs font-semibold">
                                    <IconTrophy className="w-3.5 h-3.5" />
                                    3rd Overall
                                </div>
                            </div>
                            {/* Desktop: Compact version */}
                            <div className="hidden lg:flex flex-wrap gap-1.5">
                                <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full text-xs font-semibold">
                                    <IconTrophy className="w-3.5 h-3.5" />
                                    1st Place
                                </div>
                                <div className="inline-flex items-center gap-1.5 bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full text-xs font-semibold">
                                    +2 awards
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[24px] font-bold leading-tight m-0">GreatUniHack</h3>
                                <p className="text-base text-black/70 mt-1">
                                    Agentic AI for Dementia patients and their caretakers
                                </p>
                            </div>
                            <Button variant="tactile-black" size="default" asChild className="w-fit">
                                <Link href="/projects/leetcoach" className="inline-flex items-center gap-2">
                                    <IconPointerFilled className="w-6 h-6 fill-current" />
                                    Click to View More
                                </Link>
                            </Button>
                        </div>
                         <div className="relative w-full lg:flex-1 h-[300px] sm:h-[350px] lg:h-auto z-0 p-3">
                            <div className="relative h-full w-full rounded-2xl overflow-hidden">
                                <span className="absolute bottom-3 right-2 z-10 text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">October 2025</span>
                                <Image
                                    src="/GreatUniHack25.jpg"
                                    alt="Placeholder image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* --- Race The Ages Block (horizontal) --- */}
                    <div className="bg-[#F6F5F4] rounded-xl overflow-hidden relative flex flex-col lg:flex-row min-h-[250px]">
                        <div className="p-6 flex flex-col gap-4 justify-center z-10 w-full lg:w-[40%] lg:flex-shrink-0">
                            <div className="inline-flex items-center gap-1.5 bg-slate-200 text-slate-600 px-2.5 py-1 rounded-full text-xs font-semibold w-fit">
                                <IconTrophy className="w-3.5 h-3.5" />
                                2nd Place Overall
                            </div>
                            <div>
                                <h3 className="text-[24px] font-bold leading-tight m-0">GreatUniHack</h3>
                                <p className="text-base text-black/70 mt-1">Historical guesser multiplayer game</p>
                            </div>
                            <Button variant="tactile-black" size="default" asChild className="w-fit">
                                <Link href="/projects/race-the-ages" className="inline-flex items-center gap-2">
                                    <IconPointerFilled className="w-6 h-6 fill-current" />
                                    Click to View More
                                </Link>
                            </Button>
                        </div>
                        <div className="relative w-full lg:flex-1 h-[300px] sm:h-[350px] lg:h-auto z-0 p-3">
                            <div className="relative h-full w-full rounded-2xl overflow-hidden">
                                <span className="absolute bottom-3 right-2 z-10 text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">November 2024</span>
                                <Image
                                    src="/racetheagescollage.png"
                                    alt="Race the ages image"
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