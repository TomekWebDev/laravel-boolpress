import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// import uncomponenteComp from ...
import HomePageComp from './components/pages/HomePageComp.vue';
import AboutUsComp from './components/pages/AboutUsComp.vue';
import PostsPageComp from './components/pages/posts/PostsPageComp.vue';
import SinglePostPageComp from './components/pages/posts/SinglePostPageComp.vue';

const router = new VueRouter({
    // path per le pagine
    mode: 'history',
    routes: [
        // aggiungo tutte le rotte sotto forma di oggetti
        {
            path: '/',
            name: 'home',
            component: HomePageComp
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUsComp
        },
        {
            path: '/posts',
            name: 'posts',
            component: PostsPageComp
        },
        {
            path: '/posts/:id',
            name: 'singlePost',
            component: SinglePostPageComp
        }
    ]
});

export default router;