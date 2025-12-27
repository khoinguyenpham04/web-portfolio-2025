import React, { useEffect, useState } from 'react'
import { getCalApi } from "@calcom/embed-react"
import { motion } from 'framer-motion'
import StyledBlurText from './ui/StyledBlurText'
import RotatingText from './RotatingText'

export default function HeroSection() {
    const [blurAnimationDone, setBlurAnimationDone] = useState(false)

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({"namespace":"15min"});
            cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, [])

    return (
        <section>
            <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pt-12">
                <div className="relative text-center mb-8">
                    <h2 className="mb-6 text-xs sm:text-sm font-medium uppercase tracking-wider text-gray-400">
                        Computer Science @ University of Manchester
                    </h2>
                    <h1 className="mx-auto mt-2 max-w-7xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                        <StyledBlurText
                            as="span"
                            segments={[
                                { text: "I", className: "text-gray-300" },
                                { text: "love", className: "text-gray-300" },
                            ]}
                            delay={150}
                            animateBy="words"
                            direction="bottom"
                        />
                        <motion.span
                            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
                            animate={{
                                filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                                opacity: [0, 0.5, 1],
                                y: [50, -5, 0]
                            }}
                            transition={{ duration: 0.7, delay: 0.3, times: [0, 0.5, 1] }}
                            style={{ display: "inline-block" }}
                        >
                            <RotatingText
                                texts={[" building ", " shipping ", " crafting "]}
                                mainClassName="text-gray-900 inline-flex overflow-hidden pb-1.5 -mb-1.5 min-w-[130px] md:min-w-[195px] justify-center"
                                staggerFrom="last"
                                staggerDuration={0.025}
                                rotationInterval={2000}
                                auto={blurAnimationDone}
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "-100%", opacity: 0 }}
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            />
                        </motion.span>
                        <StyledBlurText
                            as="span"
                            segments={[
                                { text: " products", className: "text-gray-900" },
                                { text: " that", className: "text-gray-300" },
                                { text: " solve", className: "text-gray-900" },
                                { text: " real", className: "text-gray-900" },
                                { text: " problems", className: "text-gray-900" },
                                { text: " for", className: "text-gray-300" },
                                { text: " real", className: "text-gray-900" },
                                { text: " people.", className: "text-gray-900" }
                            ]}
                            delay={150}
                            initialDelay={450}
                            animateBy="words"
                            direction="bottom"
                            onAnimationComplete={() => setBlurAnimationDone(true)}
                        />
                    </h1>

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
