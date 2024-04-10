import MenuBar from "@/ui/menubar";

export default function LayoutWithMenu({
    children,
  }: Readonly<{children: React.ReactNode;}>){
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <header className="flex">
              <MenuBar />
            </header>
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}