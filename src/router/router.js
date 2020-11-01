import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/Login'
import index from '../components/Index'
import userDetail from '../components/user/UserDetail'
import Main from '../components/Main'
import UserList from '../components/user/UserList'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: login
        },
        {
            path: '/index',
            name: 'index',
            component: index,
            children: [
                {
                    path: '',
                    name: 'main',
                    component: Main
                },
                {
                    path: '/userList',
                    name: 'userList',
                    component: UserList
                }
            ]
        },
        {
            path: '/userDetail',
            name: 'userDetail',
            component: userDetail
        }
    ]
})