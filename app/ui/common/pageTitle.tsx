export function PageTitle({ title }: { title: string }) {
    return (<div className="flex items-center justify-center h-16 md:h-32 ml-16 md:ml-20 border-b-2 bg-[url('/page-title-bg.png')] bgCover">
        <p className="text-3xl md:text-6xl">{title}</p>
    </div>)
}