import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [{
        path: '/',
        redirect: 'dashboard',
        component: DashboardLayout,
        children: [{
                path: '/dashboard',
                name: 'dashboard',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/Dashboard.vue')
            },
            {
                path: '/addGueshouse',
                name: 'Gestion des Guesthouses',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/AddGueshouse.vue')
            },
            {
                path: '/profile',
                name: 'profile',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
            },
            {
                path: '/maps',
                name: 'maps',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/GoogleMaps.vue')
            },
            {
                path: '/tables',
                name: 'tables',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/RegularTables.vue')
            }
        ]
    },
    {
        path: '/',
        redirect: 'login',
        component: AuthLayout,
        children: [{
                path: '/login',
                name: 'login',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
            },
            {
                path: '/askEmailVerify',
                name: 'askEmailVerify',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/Pages/AskEmailVerify.vue')
            },
            {
                path: '/changePassword',
                name: 'changePassword',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/Pages/ChangePassword.vue'),
                props: route => ({
                    expires: route.query.expires,
                    token: route.query.token,
                    signature: route.query.signature,
                    password: "",
                    password_confirmation: "",
                })
            },
            {
                path: '/register',
                name: 'register',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
            },
            {
                path: '/verify/email',
                name: 'verifyEmail',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/Pages/VerifyEmail.vue'),
                props: route => ({
                    expires: route.query.expires,
                    token: route.query.token,
                    signature: route.query.signature
                })
            },

            { path: '*', component: NotFound }
        ]
    }
];

export default routes;