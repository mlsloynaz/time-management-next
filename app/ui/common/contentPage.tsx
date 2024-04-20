import { ReactNode } from "react";

type ContentPageProps = {
    title: string;
    children: ReactNode;
}

export default function ContentPage({ title, children }: ContentPageProps) {

    return (
        <div className="flex h-screen flex-col">
            <div className="flex-1 flex flex-col p-5 md:px-24"> {children} </div>
        </div>
    )
}


