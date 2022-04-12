import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes'
// import store from '@/store/index'
import NProgress from "nprogress"; // nprogress 进度条
import "nprogress/nprogress.css"; // nprogress 进度条样式

let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

const router = new VueRouter({
    routes
});

router.afterEach((to) => {
    document.title = to.name
    NProgress.done(); // 跳转完成，关闭进度条
});

export default router