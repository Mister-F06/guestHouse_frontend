import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';
import NotFound from '@/views/NotFoundPage.vue';

const routes = [
    {
        path: '/',
        name: 'Accueil',
        component: () => import('../views/Pages/LandingPage.vue'),
    },
    {
        path: '/dashboard',
        redirect: '/dashboard/home',
        component: DashboardLayout,
        children: [
            {
                path: 'home',
                name: 'dashboard',
                component: () => import('../views/Dashboard.vue')
            },
            {
                path: 'addGueshouse',
                name: 'Gestion des Guesthouses',
                component: () => import('../views/AddGueshouse.vue')
            },
            {
                path: 'profile',
                name: 'profile',
                component: () => import('../views/Pages/UserProfile.vue')
            },
            {
                path: 'maps',
                name: 'maps',
                component: () => import('../views/GoogleMaps.vue')
            },
            {
                path: 'tables',
                name: 'tables',
                component: () => import('../views/RegularTables.vue')
            }
        ],
    },
    {
        path: '/auth',
        redirect: '/auth/login',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('../views/Pages/Login.vue')
            },
            {
                path: 'askEmailVerify',
                name: 'askEmailVerify',
                component: () => import('../views/Pages/AskEmailVerify.vue')
            },
            {
                path: 'changePassword',
                name: 'changePassword',
                component: () => import('../views/Pages/ChangePassword.vue'),
                props: route => ({
                    expires: route.query.expires,
                    token: route.query.token,
                    signature: route.query.signature,
                    password: "",
                    password_confirmation: "",
                })
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('../views/Pages/Register.vue')
            },
            {
                path: 'verify/email',
                name: 'verifyEmail',
                component: () => import('../views/Pages/VerifyEmail.vue'),
                props: route => ({
                    expires: route.query.expires,
                    token: route.query.token,
                    signature: route.query.signature
                }),
            },
        ]
    },
    {
        path: '*',
        component: NotFound
    }
];

export default routes;
