import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue")
    },


    {
        path: "/about",
        name: "About",
        component: () => import(/* webpackChunkName: "About" */ "../views/About.vue")
    },
    {
        path: "/devlog",
        name: "Devlog",
        component: () => import(/* webpackChunkName: "Devlog" */ "../views/Devlog.vue")
    },
    {
        path: "/latest",
        name: "Latest",
        component: () => import(/* webpackChunkName: "Latest" */ "../views/Latest.vue")
    },
    {
        path: "/faq",
        name: "FAQ",
        component: () => import(/* webpackChunkName: "FAQ" */ "../views/Faq.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;