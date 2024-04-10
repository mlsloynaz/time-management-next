
import { Thumbnail } from '@/ui/thumbnail';
import Link from 'next/link';
import Image from 'next/image'

const translations ={
    appTitle: "Time insights",
    appDescription: "Empower users with valuable insights into their time management habits, users can take control of their time and achieve greater efficiency in their personal and professional lives.",
    settings:{
       title: "Settings",
       description: "Site settings and set of forms to enter the data to track"
    },
    dashboard:{
        title: "Dashboard",
        description: "An intuitive dashboard that provides a comprehensive overview of time spent on various distractions"
    },
    reports:{
        title: "Reports",
        description: "Generate reports allowing users to identify patterns and make informed decisions to improve their productivity."
    }
}

export default function Home(){
    return(
        <main className="flex flex-col h-screen overflow-hidden">
            <header className="flex flex-col justify-center content-center w-full h-60">
                <h1 className="text-3xl md:text-6xl p-4">{translations.appTitle}</h1>
                <p className="text-md md:text-xl p-2 md:p-4">{translations.appDescription}</p>
            </header>
            <section id="home-thumbnails" className="p-4 flex flex-col flex-1 content-center overflow-y-auto bg-slate-100 bg-[url('/home-page-bg.png')]">
                <div className='flex flex-wrap  justify-center content-center gap-4  md:gap-16  h-auto md:h-full '>
                    <Link key={"dashboard"}  href={'dashboard'}>
                        <Thumbnail src="dashboard.svg" pageId="dashboard" title={translations.dashboard.title} description={translations.dashboard.description}/>
                    </Link>
                    <Link key={"reports"}  href={'reports'}>
                        <Thumbnail src="/reports.svg"  pageId="reports" title={translations.reports.title} description={translations.reports.description}/>
                    </Link>
                    <Link key={"settings"}  href={'settings'}>
                        <Thumbnail src="/settings.svg" pageId="settings" title={translations.settings.title} description={translations.settings.description}/>
                    </Link>
                </div>
               <div className="block w-20 h-20 fixed bottom-4 right-4">
                  <Image src="/next.svg" width={40} height={40} alt=""/>
               </div>
            </section>
        </main>
       
    )
}