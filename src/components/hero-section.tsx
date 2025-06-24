import React, { useEffect } from 'react'
import { getCalApi } from "@calcom/embed-react"
import StyledBlurText from './ui/StyledBlurText'

export default function HeroSection() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({"namespace":"15min"});
            cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, [])

    return (
        <section>
            <div className="relative z-10 mx-auto w-full max-w-2xl px-6 pt-12">
                <div className="relative text-center mb-8">
                    <h2 className="mb-6 text-xs sm:text-sm font-medium uppercase tracking-wider text-gray-400">
                        Computer Science @ University of Manchester
                    </h2>
                    <StyledBlurText
                        segments={[
                            { text: "I", className: "text-gray-300" },
                            { text: "love", className: "text-gray-300" },
                            { text: "building", className: "text-gray-300" },
                            { text: " products", className: "text-gray-900" },
                            { text: " that", className: "text-gray-300" },
                            { text: " solve", className: "text-gray-900" },
                            { text: " real ", className: "text-gray-900" },
                            { text: " problems", className: "text-gray-900" },
                            { text: " for", className: "text-gray-300" },
                            { text: " real", className: "text-gray-900" },
                            { text: " people.", className: "text-gray-900" }
                        ]}
                        delay={150}
                        animateBy="words"
                        direction="bottom"
                        onAnimationComplete={() => console.log('Hero animation completed!')}
                        className="mx-auto mt-2 max-w-7xl text-balance text-3xl font-semibold tracking-tight md:text-5xl"
                    />

                    {/* <div className="flex flex-col items-center gap-2 *:w-full sm:flex-row sm:justify-center sm:*:w-auto mt-8">
                        <Button
                            variant="tactile-primary"
                            data-cal-namespace="15min"
                            data-cal-link="noahpham/15min"
                            data-cal-config='{"layout":"month_view","theme":"light"}'>
                            <span className="text-nowrap">Let&apos;s Talk</span>
                        </Button>
                        <Button
                            asChild
                            variant="tactile-secondary">
                            <Link href="#link">
                                <span className="text-nowrap">My Resume</span>
                            </Link>
                        </Button>
                    </div> */}
                </div>

                {/* <div className="relative mt-12 overflow-hidden rounded-3xl bg-black/10 md:mt-16">
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
                </div> */}
            </div>
        </section>
    )
}
