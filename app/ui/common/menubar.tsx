"use client"

import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import { routeData } from "@/lib/route-data";
import { MenuButtonImg } from "./menu-button";
import { NavBar } from "./navbar";


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

export default function MenuBar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const mainRoutes = routeData.filter(route => route.active);

    return (
        // <div className="z-10 flex gap-2 flex-col w-60 h-screen">
        <>
            <div className="flex items-center justify-center h-16 md:h-32 border-b-2  bg-[#E4E6F9] px-2 md:px-4">
                <button aria-label={'translations.menuAria.open'} className="flex items-center justify-center h-12 w-12  py-2 border rounded text-[#0D0C55] border-[#0D0C55] hover:buttonHover" onClick={toggleMenu}>
                    <MenuButtonImg menuOpen={menuOpen} />
                </button>
            </div>
            {menuOpen &&
                <div className="fixed h-screen top-16 md:top-32 bg-[#E4E6F9] w-16 md:w-60">
                    <NavBar routes={mainRoutes} />
                </div>
            }
        {/* </div> */}
        </>
    )
}


