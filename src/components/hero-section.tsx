import { useEffect } from 'react'
import { getCalApi } from "@calcom/embed-react"
import StyledBlurText from './ui/StyledBlurText'

const icons = {
    manchester: {
        src: "/landing/manchester.png",
        alt: "University of Manchester",
        className: "inline-block h-[1.8em] w-[1.8em] align-[-0.45em] mr-[0.15em] object-contain",
    },
    byteful: {
        src: "/landing/byteful.png",
        alt: "Byteful",
        className: "inline-block h-[1em] w-[1em] align-[-0.15em] ml-[0.25em] mr-[0.25em] object-contain",
    },
    cloudflare: {
        src: "/landing/cloudflare.svg",
        alt: "Cloudflare",
        className: "inline-block h-[0.8em] w-[1.8em] align-[0.05em] mr-[0.2em] object-contain",
    },
}

const mobileSegments = [
    { text: "Computer Science" },
    { text: "@", className: "text-gray-400 text-[0.7em] align-[0.15em]" },
    { text: "Manchester", icon: icons.manchester, lineBreak: true },
    { text: "Software Developer" },
    { text: "@ ", className: "text-gray-400 text-[0.7em] align-[0.15em]" },
    { text: "Byteful", className: "font-[family-name:var(--font-space-grotesk)] tracking-normal", icon: icons.byteful, lineBreak: true },
    { text: "Incoming", className: "text-gray-400" },
    { text: "@", className: "text-gray-400 text-[0.7em] align-[0.15em]" },
    { text: "Cloudflare", icon: icons.cloudflare },
]

const desktopSegments = [
    { text: "Noah studies", className: "text-gray-400" },
    { text: "Computer Science" },
    { text: "@", className: "text-gray-400 text-[0.7em] align-[0.15em]" },
    { text: "Manchester", icon: icons.manchester, lineBreak: true },
    { text: "Currently", className: "text-gray-400" },
    { text: "Software Developer" },
    { text: "@", className: "text-gray-400 text-[0.7em] align-[0.15em]" },
    { text: "Byteful", className: "font-[family-name:var(--font-space-grotesk)] tracking-normal", icon: icons.byteful, lineBreak: true },
    { text: "Incoming", className: "text-gray-400" },
    { text: "@", className: "text-gray-400 text-[0.7em] align-[0.15em]" },
    { text: "Cloudflare", icon: icons.cloudflare },
]

export default function HeroSection() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({"namespace":"15min"});
            cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, [])

    return (
        <section>
            <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 pt-10 sm:pt-6 md:pt-8">
                <div className="relative text-center mb-3 sm:mb-4 md:mb-6">
                    <StyledBlurText
                        as="div"
                        segments={mobileSegments}
                        delay={100}
                        animateBy="words"
                        direction="bottom"
                        className="block sm:hidden mx-auto text-[clamp(1.125rem,5.5vw,1.75rem)] font-semibold tracking-tight leading-[1.4] text-gray-900 whitespace-nowrap"
                    />
                    <StyledBlurText
                        segments={desktopSegments}
                        delay={100}
                        animateBy="words"
                        direction="bottom"
                        className="hidden sm:block mx-auto mt-2 sm:text-xl md:text-3xl lg:text-5xl font-semibold tracking-tight sm:leading-[1.3] md:leading-[1.35] lg:leading-[1.4] text-gray-900 whitespace-nowrap"
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
