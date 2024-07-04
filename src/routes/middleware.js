import router from './index';
import store from '../store/index'
export default  (function(){

    router.beforeEach((to,from,next) => {
        if (store.state.auth.connected && to.path === "/auth/login") next({path:"/dashboard"})
        else next()
    })
})()
