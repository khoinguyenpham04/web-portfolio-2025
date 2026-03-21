'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Snowflake, Flower, Sun } from 'lucide-react'
import { useSeasonStore } from '@/store/useSeasonStore'
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { cn } from '@/lib/utils'
import { getCalApi } from "@calcom/embed-react"
import { useWebHaptics } from 'web-haptics/react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

interface SubMenuItem {
    name: string;
    href: string;
}

interface MenuItem {
    name: string;
    href?: string;
    submenu?: boolean;
    items?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resume', href: '/resume' },
]

const profileImage = '/profile-icons/profile-icon.jpeg';

const SeasonToggle = ({ season, toggleSeason }: { season: string, toggleSeason: () => void }) => (
    <Button
        onClick={toggleSeason}
        variant="tactile-secondary"
        size="icon"
        className="!rounded-full !w-8 !h-8 !p-0 relative overflow-hidden active:!scale-95 flex-shrink-0"
        aria-label="Toggle Season"
    >
        <AnimatePresence mode="wait">
            <motion.div
                key={season}
                initial={{ filter: 'blur(2px)', opacity: 0, scale: 0.8 }}
                animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
                exit={{ filter: 'blur(2px)', opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center p-0 m-0"
            >
                {season === 'spring' ? (
                    <Flower className="h-4 w-4 text-pink-400" />
                ) : season === 'christmas' ? (
                    <Snowflake className="h-4 w-4 text-blue-400" />
                ) : (
                    <Sun className="h-4 w-4 text-yellow-500 relative -top-[0.5px]" />
                )}
            </motion.div>
        </AnimatePresence>
    </Button>
);

export const Header = () => {
    const season = useSeasonStore((state) => state.season);
    const toggleSeason = useSeasonStore((state) => state.toggleSeason);
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isVietnamese, setIsVietnamese] = React.useState(false)
    const haptic = useWebHaptics();

    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const mql = window.matchMedia('(max-width: 767px)');
        setIsMobile(mql.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, []);

    const displayName = isVietnamese
        ? (isMobile ? "Nguyên Phạm" : "Phạm Trần Khôi Nguyên")
        : "Noah Pham";
    const nameWords = displayName.split(" ");

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({"namespace":"15min"});
            cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, []);


    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-50 w-full px-4 sm:px-6 lg:px-8">
                <div className={cn('mx-auto mt-2 max-w-7xl px-0 transition-all duration-300', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between items-center lg:w-auto">
                            <div className="flex items-center space-x-2 text-3xl font-semibold tracking-tight text-accent-foreground">
                                <Link
                                    href="/"
                                    aria-label="home"
                                    onClick={() => haptic.trigger('light')}
                                >
                                    <div className="relative">
                                        {season === 'christmas' && (
                                            <Image
                                                src="/christmas_hat.png"
                                                alt="Christmas Hat"
                                                width={28}
                                                height={28}
                                                className="absolute -top-3 -right-2.5 z-10 w-7 h-7 rotate-[25deg] pointer-events-none"
                                            />
                                        )}
                                        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
                                            <Image
                                                src={profileImage}
                                                alt="Profile Picture"
                                                width={40}
                                                height={40}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </Link>
                                <button
                                    onClick={() => {
                                        haptic.trigger('light');
                                        setIsVietnamese(prev => !prev);
                                    }}
                                    className="cursor-pointer active:scale-[0.97] transition-transform duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.span
                                            key={displayName}
                                            className="flex"
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={{
                                                visible: {
                                                    transition: { staggerChildren: 0.08 }
                                                },
                                                exit: {
                                                    transition: { staggerChildren: 0.03 }
                                                }
                                            }}
                                        >
                                            {nameWords.map((word, i) => (
                                                <motion.span
                                                    key={i}
                                                    variants={{
                                                        hidden: {
                                                            filter: "blur(10px)",
                                                            opacity: 0,
                                                            y: 6,
                                                        },
                                                        visible: {
                                                            filter: "blur(0px)",
                                                            opacity: 1,
                                                            y: 0,
                                                        },
                                                        exit: {
                                                            filter: "blur(8px)",
                                                            opacity: 0,
                                                            y: -4,
                                                        },
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                        ease: [0.23, 1, 0.32, 1],
                                                    }}
                                                    className="inline-block"
                                                    style={{ willChange: "transform, filter, opacity" }}
                                                >
                                                    {word}
                                                    {i < nameWords.length - 1 ? "\u00A0" : ""}
                                                </motion.span>
                                            ))}
                                        </motion.span>
                                    </AnimatePresence>
                                </button>
                            </div>

                            <div className="flex items-center gap-3 lg:hidden">
                                <SeasonToggle season={season} toggleSeason={toggleSeason} />
                                <button
                                    onClick={() => {
                                        haptic.trigger('selection');
                                        setMenuState(!menuState);
                                    }}
                                    aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -mr-4 block cursor-pointer p-2.5">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>
                            </div>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <NavigationMenu>
                                <NavigationMenuList className="flex gap-2 text-sm">
                                    {menuItems.map((item, index) => (
                                        <NavigationMenuItem key={index}>
                                            {item.submenu && item.items ? (
                                                <>
                                                    <NavigationMenuTrigger className="text-muted-foreground hover:text-accent-foreground bg-transparent px-3 py-2 focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                                                        {item.name}
                                                    </NavigationMenuTrigger>
                                                    <NavigationMenuContent>
                                                        <ul className="grid w-[200px] gap-1 p-2 md:w-[200px]">
                                                            {item.items.map((subItem, subIndex) => (
                                                                <li key={subIndex}>
                                                                    <NavigationMenuLink asChild>
                                                                        <Link
                                                                            href={subItem.href}
                                                                            className="text-muted-foreground hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                                                                        >
                                                                            {subItem.name}
                                                                        </Link>
                                                                    </NavigationMenuLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </NavigationMenuContent>
                                                </>
                                            ) : (
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={item.href!}
                                                        className="text-muted-foreground hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </NavigationMenuLink>
                                            )}
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            {item.submenu && item.items ? (
                                                <div>
                                                    <span className="text-foreground block font-medium">
                                                        {item.name}
                                                    </span>
                                                    <ul className="ml-4 mt-2 space-y-3">
                                                        {item.items.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link
                                                                    href={subItem.href}
                                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                                                    onClick={() => {
                                                                        haptic.trigger('selection');
                                                                        setMenuState(false);
                                                                    }} // Close menu on click
                                                                >
                                                                    <span>{subItem.name}</span>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : (
                                                <Link
                                                    href={item.href!}
                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                                    onClick={() => {
                                                        haptic.trigger('selection');
                                                        setMenuState(false);
                                                    }} // Close menu on click
                                                >
                                                    <span>{item.name}</span>
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit items-center flex-nowrap">
                                <div className="hidden lg:flex items-center justify-center">
                                    <SeasonToggle season={season} toggleSeason={toggleSeason} />
                                </div>
                                <Button
                                    size="sm"
                                    variant="tactile-black"
                                    data-cal-namespace="15min"
                                    data-cal-link="noahpham/15min"
                                    data-cal-config='{"layout":"month_view","theme":"light"}'
                                >
                                    <span>Let&apos;s Talk</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
