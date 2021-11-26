import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import IndexView from '../views/indexView.vue'
import Login from "../views/Login.vue"
import Logout from "../views/Logout.vue"
import Editprofile from "../views/Editprofile.vue"
import AddproductView from "../views/Addproduct.vue"
const routes = [

    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    { path: '/', name: 'IndexView', component: IndexView },
    { path: '/accounts/login', name: 'Login', component: Login },
    { path: '/accounts/editprofile', name: 'Editprofile', component: Editprofile },
    { path: '/accounts/logout', name: "Logout", component: Logout },
    { path: '/product/add', name: "Addproduct", component: AddproductView },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router