import MenuBar from "@/ui/common/menubar";

export default function LayoutWithMenu({
    children,
  }: Readonly<{children: React.ReactNode;}>){
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="fixed"> <MenuBar /></div>
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}