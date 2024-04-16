export type RouteData ={
    id: string;
    path: string;
    title: string;
    description: string;
    icon: string;
    active: boolean,
    children:RouteData[]
}

export const routeData:RouteData[] = [
    {
        id:'1',
        path: '/dashboard',
        title: 'dashboard.title',
        description: 'dashboard.description',
        icon: '/dashboard.svg',
        active: true,
        children:[]
    },
    {
        id:'2',
        path: '/reports',
        title: 'reports.title',
        description: 'reports.description',
        icon: '/reports.svg',
        active: true,
        children:[]
    },
    {
        id:'3',
        path: '/settings',
        title: 'settings.title',
        description: 'settings.description',
        icon: '/settings-icon.svg',
        active: true,
        children:[
            {
                id:'5',
                path: '/settings/users',
                title: 'settings.user.title',
                description:'settings.user.description',
                icon: '/users-icon.svg',
                active: true,
                children:[]
            },
            {
                id:'6',
                path: '/settings/events',
                title: 'settings.events.title',
                description:'settings.events.description',
                icon: '/events-icon.svg',
                active: false,
                children:[]
            }
        ]

    }
    
]