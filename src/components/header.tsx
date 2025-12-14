'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { cn } from '@/lib/utils'
import { getCalApi } from "@calcom/embed-react"
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

const profileImages = [
    '/profile-icons/speaker-icon.jpeg',
    '/profile-icons/cartoon2.jpg',
    '/profile-icons/icon1.png',
];


export const Header = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [isAnimating, setIsAnimating] = React.useState(false);

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({"namespace":"15min"});
            cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, [])

    const handleImageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
        setIsAnimating(true);
    };

    React.useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 1500); // Tailwind's bounce is 1s
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);


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
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2 text-3xl font-semibold tracking-tight text-accent-foreground">
                                <button
                                    onClick={handleImageClick}
                                    className={cn("h-10 w-10 flex-shrink-0 overflow-hidden rounded-md", isAnimating && "animate-wiggle")}
                                >
                                    <Image
                                        src={profileImages[currentImageIndex]}
                                        alt="Profile Picture"
                                        width={40}
                                        height={40}
                                        className="h-full w-full object-cover"
                                    />
                                </button>
                                <span>Noah Pham</span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
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
                                                                    onClick={() => setMenuState(false)} // Close menu on click
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
                                                    onClick={() => setMenuState(false)} // Close menu on click
                                                >
                                                    <span>{item.name}</span>
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
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
