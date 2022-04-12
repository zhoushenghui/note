
const routes = [
    {
        path: '/',
        name: 'note-login',
        component: () => import('@/pages/Login'),
    },
    {
        path: '/regist',
        name: 'note-regist',
        component: () => import('@/pages/Regist'),
    },
    {
        path: '/todoMain',
        component: () => import('@/pages/TodoMain'),
        children: [
            {
                path: '/',
                redirect: "/todoMain/add"
            },
            {
                path: 'add',
                name: 'note-add',
                component: () => import('@/pages/TodoMain/MyAdding'),
            },
            {
                path: 'list',
                component: () => import('@/pages/TodoMain/MyList'),
                children: [
                    {
                        path: '/',
                        redirect: "/todoMain/list/todo"
                    },
                    {
                        name: 'note-todo',
                        path: 'todo',
                        component: () => import('@/pages/TodoMain/MyList/myTodoList'),
                    },
                    {
                        name: 'note-done',
                        path: 'done',
                        component: () => import('@/pages/TodoMain/MyList/myDoneList'),
                    },
                ]
            }
        ]
    },
]


export default routes;
