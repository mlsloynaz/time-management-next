import Image from "next/image";

type ThumbnailProps = {
    title: string;
    description: string;
    pageId: string;
    src: string;
}

export function Thumbnail({ title, description, pageId, src }: ThumbnailProps) {
    return (
        <div className="card flex flex-col w-56 min-w-56 h-60">
            <div className="flex  gap-4">
                <Image className="h-16 w-16 object-cover"  src={src} alt={pageId}  width={224} height={224}/>
                <p className="flex-none content-center uppercase tracking-wide text-sm font-semibold">{title}</p>
            </div>
            <div className="p-4">
                <p className="mt-2 text-slate-500">{description}</p>
            </div>
        </div>
     
    );
}