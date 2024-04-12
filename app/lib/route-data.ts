export const routeData = [
    {
        id:'2',
        root:true,
        path: '/dashboard',
        title: 'dashboard.title',
        description: 'dashboard.description',
        icon: '/dashboard.svg',
        active: true
    },
    {
        id:'3',
        root:true,
        path: '/reports',
        title: 'reports.title',
        description: 'reports.description',
        icon: '/reports.svg',
        active: true
    },
    {
        id:'4',
        root:true,
        path: '/settings',
        title: 'settings.title',
        description: 'settings.description',
        icon: '/settings.svg',
        related:['5','6'],
        active: true
    },
    {
        id:'5',
        path: '/settings/user',
        title: 'settings.user.title',
        description:'settings.user.description',
        icon: '/users.svg',
        active: true
    },
    {
        id:'6',
        path: '/settings/events',
        title: 'settings.events.title',
        description:'settings.events.description',
        icon: '/events.svg',
        active: false
    }
]