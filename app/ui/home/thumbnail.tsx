import Image from "next/image";

type ThumbnailProps = {
    title: string;
    description: string;
    pageId: string;
    src: string;
}

export function Thumbnail({ title, description, pageId, src }: ThumbnailProps) {
    return (
        <div className="card flex flex-col w-56 min-w-56 h-60 ">
            <div className="px-4 flex  gap-4  hover:bg-slate-300 ">
                <Image className="object-cover"  src={src} alt={pageId}  width={64} height={64}/>
                <p className="flex-none content-center uppercase tracking-wide text-sm font-semibold">{title}</p>
            </div>
            <div className="p-4">
                <p className="text-slate-500">{description}</p>
            </div>
        </div>
    );
}