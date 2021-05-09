import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TodoList from '../components/TodoList.vue';
import firebase from 'firebase';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/todolist',
        name: 'Task to-do',
        component: () =>
            import(
                /* webpackChunkName: "dashboard" */ '../components/TodoList.vue'
            ),
        meta: {
            authRequired: true,
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (firebase.auth().currentUser) {
            next();
        } else {
            alert('You must be logged in to see this page');
            next({
                path: '/',
            });
        }
    } else {
        next();
    }
});

export default router;