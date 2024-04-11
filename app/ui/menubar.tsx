"use client"

import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";

const translations = {
    appTitle: "Time insights",
    settings: {
        title: "Settings",
    },
    dashboard: {
        title: "Dashboard",
    },
    reports: {
        title: "Reports",
    },
    home: {
        title: "Home",
    },
    menuAria:{
        close:"close menu",
        open:"open menu"
    }
}

// TODO: Create overlay when menu is open
// TODO: question: why svg don't need the "/"
// TODO: refactor the repeated css
// TODO: Create BreadCrumb
// TODO: open menu by default in mobile or make the logo visible
// TODO: Add selected state
// TODO: set on menuItems selected and hover state

export default function MenuBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="flex flex-col w-screen">
            <div className="flex flex-1 bg-[#E4E6F9] border-[#464CD4] border-b-2">
                <div className="p-4 flex w-20">
                    {!menuOpen &&
                        <button aria-label={translations.menuAria.open}  className="flex items-center px-3 py-2 border rounded text-[#0D0C55] border-[#0D0C55] hover:text-white hover:border-white" onClick={() => setMenuOpen(true)}>
                            <Image src="menu-open.svg" alt="" width={32} height={32} />
                        </button>
                    }
                    {menuOpen &&
                        <button aria-label={translations.menuAria.close} className="flex items-center px-3 py-2 border rounded text-[#0D0C55] border-[#0D0C55] hover:text-white hover:border-white" onClick={() => setMenuOpen(false)}>
                            <Image src="menu-close.svg" alt="" width={32} height={32} />
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
                <nav className="flex flex-col justify-between flex-wrap bg-[#E4E6F9] text-[#0D0C55] p-4 w-44 rounded-br-md border-b-2 border-b-[#464CD4] ">
                    <div className="w-full  block flex-grow ">
                        <div className="text-sm lg:flex-grow">
                            <Link href="/" className="md:hidden mt-4 p-2 flex   border-b-2 " >
                                <Image src="/app-logo.png" alt="" width={40} height={40} /> <span className="flex-none ml-4 content-center">{translations.home.title}</span>
                            </Link>
                            <Link href="dashboard" className="mt-4 p-2 flex   border-b-2 hover:border-b-[#464CD4] hover:bg-slate-300">
                                <Image src="dashboard.svg" alt="" width={32} height={32} /> <span className="flex-none ml-4 content-center">{translations.dashboard.title}</span>
                            </Link>
                            <Link href="reports" className="mt-4 p-2 flex  border-b-2 hover:border-b-[#464CD4] hover:bg-slate-300">
                                <Image src="reports.svg" alt="" width={32} height={32} /> <span className="flex-none ml-4 content-center">{translations.reports.title}</span>
                            </Link>
                            <Link href="settings" className="mt-4 p-2 flex  border-b-2 hover:border-b-[#464CD4] hover:bg-slate-300">
                                <Image src="settings.svg" alt="" width={32} height={32} /> <span className="flex-none ml-4 content-center">{translations.settings.title}</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            }
        </div>
    )
}