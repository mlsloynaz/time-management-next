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
        <nav className="h-auto">
            <HomeItem />
            {routes.map((route)=>  {
                return(
                    route.children.length>0 ? <SubMenu route={route}/> : <MenuItem route={route}/>
                )
            })}
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

function SubMenu({ route }: { route: RouteData }) {
    return (
        <div className="p-0 md:p-4 pr-0">
            <p className="hidden md:block">{'translations.routes[route.title'}</p>
            <div>{ route.children.map((route)=>  <MenuItem key={route.path} route={route} />)}</div>
        </div>
    )
};