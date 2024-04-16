"use client"

import { useEffect, useRef, useState } from "react";
import { routeData } from "@/lib/route-data";
import { NavBar } from "./navbar";

type MenuButtonProps = {
    menuOpen: boolean;
}

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
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen((isOpen) => !isOpen);
    }

    const mainRoutes = routeData.filter(route => route.active);

    return (
        <div ref={menuRef}>
            <div className="flex items-center justify-center h-16 md:h-32 border-b-2  bg-[#E4E6F9] px-2 md:px-4">
                <button aria-label={'translations.menuAria.open'} className="flex items-center justify-center h-12 w-12  py-2 border rounded text-[#0D0C55] border-[#0D0C55] hover:buttonHover" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        {menuOpen ?
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                           : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        }
                    </svg>
                </button>
            </div>
            {menuOpen &&
                <div className="fixed h-screen top-16 md:top-32 bg-[#E4E6F9] w-16 md:w-60">
                    <NavBar routes={mainRoutes} />
                </div>
            }
        </div>
    )
}