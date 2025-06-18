import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <section>
            <div className="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
                <div className="relative text-center">
                    <h1 className="mx-auto mt-8 lg:mt-12 max-w-xl text-balance text-5xl font-medium">Noah Pham</h1>

                    <p className="text-muted-foreground mx-auto mb-6 mt-4 text-balance text-xl">Founder, Student, Athlete</p>

                    <div className="flex flex-col items-center gap-2 *:w-full sm:flex-row sm:justify-center sm:*:w-auto">
                        <Button
                            asChild
                            variant="default">
                            <Link href="#link">
                                <span className="text-nowrap">Get Started</span>
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost">
                            <Link href="#link">
                                <span className="text-nowrap">View Demo</span>
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="relative mt-12 overflow-hidden rounded-3xl bg-black/10 md:mt-16">
                    <Image
                        src="/blue-bg.jpg"
                        alt="lol"
                        width="2880"
                        height="1842"
                        className="absolute inset-0 size-full object-cover"
                    />

                    <div className="bg-background rounded-(--radius) relative m-4 overflow-hidden border border-transparent shadow-xl shadow-black/15 ring-1 ring-black/10 sm:m-8 md:m-12">
                        <Image
                            src="/blue-gradient-placeholder.jpg"
                            alt="app screen"
                            width="2880"
                            height="1842"
                            className="object-top-left size-full object-cover"
                        />
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <p className="text-muted-foreground text-center">Trusted by teams at :</p>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <div className="flex">
                            <img
                                className="mx-auto h-4 w-fit"
                                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                alt="Nvidia Logo"
                                height="20"
                                width="auto"
                            />
                        </div>

                        <div className="flex">
                            <img
                                className="mx-auto h-3 w-fit"
                                src="https://html.tailus.io/blocks/customers/column.svg"
                                alt="Column Logo"
                                height="16"
                                width="auto"
                            />
                        </div>
                        <div className="flex">
                            <img
                                className="mx-auto h-3 w-fit"
                                src="https://html.tailus.io/blocks/customers/github.svg"
                                alt="GitHub Logo"
                                height="16"
                                width="auto"
                            />
                        </div>
                        <div className="flex">
                            <img
                                className="mx-auto h-4 w-fit"
                                src="https://html.tailus.io/blocks/customers/nike.svg"
                                alt="Nike Logo"
                                height="20"
                                width="auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
