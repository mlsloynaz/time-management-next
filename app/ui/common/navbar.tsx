"use client"

import { RouteData } from "@/lib/route-data";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";

type NavBarProps = {
    routes: RouteData[];
}

export function NavBar({ routes }: NavBarProps) {
    return (
        <nav className="h-[calc(100vh-64px)] md:h-[calc(100vh-128px)] flex flex-col">
            <div className="flex-1">
                <HomeItem />
                {routes.map((route) => {
                    return (
                        <div key={route.path}>
                            <MenuItem route={route} />
                        </div>
                    )
                })}
            </div>

            <div className="flex">
                <ProfileItem />
            </div>
        </nav >  
    )           
}
 

function MenuItem({ route }: { route: RouteData }) {
    const pathname = usePathname();
    return (
        <Link href={route.path} className={`p-4 border-1 flex hover:buttonHover active:buttonActive ${pathname === route.path ? 'buttonSelected' : ''}`}>
            <div className="flex">
                <Image src={route.icon} width={32} height={32} alt={'translations.routes[route.title]'} />
                <span className="hidden md:block flex-none ml-4 content-center">{'translations.routes[route.title]'}</span>
            </div>
        </Link>
    )
}


function HomeItem() {
    return (
        <Link href={'/'} className="p-4 border-1 flex hover:buttonHover active:buttonActive">
            <Image src="/home.png" width={32} height={32} alt={'translations.routes[route.title]'} />
            <span className="hidden md:block flex-none ml-4 content-center">{'translations.routes[Home'}</span>
        </Link>
    )
}

function ProfileItem() {
    return (
        <Link href={'/profile'} className="p-4 border-1 flex hover:buttonHover active:buttonActive">
            <Image src="/profile.svg" width={32} height={32} alt={'translations.routes[route.title]'} />
            <span className="hidden md:block flex-none ml-4 content-center">{'UserName'}</span>
        </Link>
    )
}

// function SubMenu({ route }: { route: RouteData }) {
//     return (
//         <div className="p-0 md:p-4 pr-0">
//             <p className="hidden md:block">{'translations.routes[route.title'}</p>
//             <div>{route.children.map((route) => <MenuItem key={route.path} route={route} />)}</div>
//         </div>
//     )
// };