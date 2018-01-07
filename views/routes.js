const login = resolve => require(['./pages/login'], resolve)
const register = resolve => require(['./pages/register'], resolve)

export default [{
    path: '/',
    component: login,
    name: 'login',
    meta: {
        title: '首页'
    }
}, {
    path: '/register',
    component: register,
    name: 'register',
    meta: {
        title: '注册'
    }
}]