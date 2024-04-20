
export default function PageTitle({ title }: { title: string }) {

    return (<div className="flex-1 flex items-center justify-center border-b-2 bg-[url('/page-title-bg.png')] bgCover">
        <p className="text-3xl md:text-6xl">{title}</p>
    </div>)
}
