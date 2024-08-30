import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

// configure router
const router = new VueRouter({
    mode: 'history',
    routes, // short for routes: routes
    linkActiveClass: 'active',
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash };
        }
        return { x: 0, y: 0 };
    }
});

// Middleware for authentication
router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token');
    console.log(to.matched.some(record => record.meta.requiresAuth));

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next({
                path: '/auth/login',
            });
        } else {
            next();
        }
    } else if ((isAuthenticated && to.path === '/auth/register') || (isAuthenticated && to.path === '/auth/login')) {
        // Rediriger vers le dashboard si l'utilisateur est connecté et tente d'accéder à la page register
        next({
            path: '/dashboard/home',
        });
    } else {
        next(); // Assurez-vous d'appeler toujours next()
    }
});

export default router;