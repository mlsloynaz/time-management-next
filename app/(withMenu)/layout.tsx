import MenuBar from "@/ui/common/menubar";
import Link from "next/link";
import { ReactNode } from "react";

export default function LayoutWithMenu({
    children,
    auth
}: Readonly<{ auth: ReactNode, children: React.ReactNode; }>) {
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <div className="fixed">
                    <MenuBar />
                </div>
                <main className="flex-1">
                    {children}
                </main>
            </div>
            <div>
                {auth}
            </div>
        </>
    )
}