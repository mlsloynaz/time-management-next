"use client"

import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import { usePathname } from "next/navigation";
import { routeData } from "../../lib/route-data";

const translations: Record<string, any> = {
    appTitle: "Time insights",
    routes: {
        'settings.title': "Settings",
        'dashboard.title': "Dashboard",
        'reports.title': "Reports",
        'home.title': "Home",
    },
    menuAria: {
        close: "close menu",
        open: "open menu"
    }
}


// TODO: Create BreadCrumb
// TODO: open menu by default in mobile or make the logo visible
// TODO

export default function MenuBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const mainRoutes = routeData.filter(route => route.active && route.root);

    return (
        <>
            {menuOpen && <div className="z-0 flex h-full w-full fixed bg-[#464CD4] opacity-25" onClick={toggleMenu} />}
            <div className="z-10 flex flex-col w-screen">
                <div className="flex bg-[#E4E6F9] border-[#464CD4] border-b-2">
                    <div className="p-4 flex w-20">
                        {!menuOpen &&
                            <button aria-label={translations.menuAria.open} className="flex items-center px-3 py-2 border rounded text-[#0D0C55] border-[#0D0C55] hover:buttonHover" onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        }
                        {menuOpen &&
                            <button aria-label={translations.menuAria.close} className="flex items-center px-3 py-2 border rounded text-[#0D0C55] border-[#0D0C55] hover:buttonHover" onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        }
                    </div>
                    <div className="p-4 text-white w-24 hidden md:block" >
                        <Link href={'/'}>
                            <Image src="/app-logo.png" width={100} height={100} alt="" className="border-[#0D0C55] rounded-full hover:rounded-md" />
                        </Link>
                    </div>
                    <div className="p-4 flex flex-1 flex-col ">
                        <h1 className="text-3xl">{translations.appTitle}</h1>
                        <p>Breadcrub/bread</p>
                    </div>
                </div>
                {menuOpen &&
                    <nav className="fixed top-[94px] flex flex-col justify-between flex-wrap bg-[#E4E6F9] text-[#0D0C55] w-44 rounded-br-md border-b-2 border-r-2 border-[#464CD4] shadow-xl">
                        <div className="w-full  block flex-grow ">
                            <div className="text-sm lg:flex-grow">
                                <Link href="/" className="md:hidden p-4 flex hover:buttonHover active:buttonActive " >
                                    <div>
                                        <Image src="/app-logo.png" alt="" width={40} height={40} /> <span className="flex-none ml-4 content-center">{translations.routes['home.title']}</span>
                                    </div>
                                </Link>
                                {mainRoutes.map(route => {
                                    return (
                                        <Link key={route.path} href={route.path} className={`p-4 flex hover:buttonHover active:buttonActive ${pathname === route.path ? 'buttonSelected' : ''}`}>
                                            <div className="flex">
                                                <Image src={route.icon} width={32} height={32} alt={translations.routes[route.title]} />
                                                <span className="flex-none ml-4 content-center">{translations.routes[route.title]}</span>
                                            </div>
                                        </Link>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </nav>
                }
            </div>
        </>

    )
}