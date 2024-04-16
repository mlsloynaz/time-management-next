import { ReactNode } from "react";

type ContentPageProps = {
    title: string;
    children: ReactNode;
}

export default function ContentPage({ title, children }: ContentPageProps) {

    return (
        <div className="flex flex-col"><PageTitle title={title} />
            <div className="flex-1 flex  flex-col p-5 md:px-24"> {children} </div>
        </div>
    )
}

function PageTitle({ title }: { title: string }) {
    
    return (<div className="flex items-center justify-center h-16 md:h-32 ml-16 md:ml-20 border-b-2 bg-[url('/page-title-bg.png')] bgCover">
        <p className="text-3xl md:text-6xl">{title}</p>
    </div>)
}