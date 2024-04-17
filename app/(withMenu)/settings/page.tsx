import { routeData } from "@/lib/route-data";
import ContentPage from "@/ui/common/contentPage";
import { Thumbnail } from "@/ui/home/thumbnail";
import Link from "next/link";

export default function SettingsPage() {
    const settingRoute = routeData.find((route) => route.path === '/settings');
    return (
        <ContentPage title="Settings">
            <div className="flex flex-1 justify-center items-center gap-4">
                {
                    settingRoute?.children.map(({id, path, title, icon}) => {
                        return (
                            <Link key={id} href={path}>
                                <Thumbnail src={icon} pageId={id} title={'translations.routes[title]'} description={'translations.routes[description]'} />
                            </Link>
                        )
                    })
                }
            </div>
        </ContentPage>

    )
}