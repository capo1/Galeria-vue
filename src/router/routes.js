import {
    Trans
} from '@/plugins/Translation'

function load(component) {
    // '@' is aliased to src/components
    return () =>
        import (`@/views/${component}.vue`)
}

export default [{
        path: '/:lang/',
        component: load('main'),
        beforeEnter: Trans.routeMiddleware,
        props: (route) => ({
            to: route.query.to,
            stage: route.query.stage,
            bg: route.query.bg
        }),
        children: [{
                path: '',
                name: 'Albumy',
                component: load('Home')
            },
            {
                path: 'albumy',
                name: 'Albumy',
                component: load('Home')
            },
            {
                path: 'album/:id',
                name: 'Szcegóły albumu',
                component: load('PhotosView'),
                props: true
            },
            {
                path: '*',
                component: load('404')
            }
        ]
    },
    {
        // Redirect user to supported lang version.
        path: '*',
        redirect() {
            return Trans.getUserSupportedLang() + '/'
        }
    }

]