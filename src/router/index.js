import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import MyAdding from '@/pages/MyAdding'
import MyList from '@/pages/MyList'
import myTodoList from '@/pages/myList/myTodoList'
import myDoneList from '@/pages/myList/myDoneList'


const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/add' },
        {
            path: '/add',
            name: 'note-add',
            component: MyAdding,
            // beforeEnter: (to, from, next) => {
            //     console.log('路由独享守卫 beforeEnter', to, from)
            //     next()
            // }
        },
        {
            path: '/list',
            component: MyList,
            children: [
                {
                    name: 'note-todo',
                    path: 'todo',
                    component: myTodoList,
                    // props({ query: { msg } }) {   函数传参
                    //     return { msg }
                    // }
                },
                {
                    name: 'note-done',
                    // path: 'done/:msg',
                    path: 'done',
                    component: myDoneList,
                    // props:true  布尔值
                    // props:{msg:doneList:} 对象
                },
                { 
                    path: '', 
                    redirect: '/list/todo' 
                },
            ]
        }
    ]
})
// router.beforeEach((to, from, next) => {
//     console.log('beforeEach', to, from)
//     next()
// })
// router.beforeResolve((to, from, next) => {
//     console.log('全局解析守卫 beforeResolve', to, from)
//     next()
// })
router.afterEach((to) => {
    document.title = to.name
})
export default router