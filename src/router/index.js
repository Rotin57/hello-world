import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import HomePage from '../components/Home.vue';
import BlogPage from '../components/Blog.vue';
import Lab1 from '../components/Lab1/Bai1.vue';
import Lab2 from '../components/Lab2/Bai1.vue';
import lab3 from '../components/Lab2/Bai2.vue';
import Lab4 from '../components/Lab3/Bai1.vue';
import lab5 from '../components/Lab3/Bai2.vue';
import Lab6 from '../components/Lab5/App.vue';
import Lab7 from '../components/Lab5/Lab5Bai1.vue';
import Lab8 from '../components/Lab5/Lab5Bai2.vue';
import Lab9 from '../components/Lab5/Lab5Bai3.vue';
import Lab10 from '../components/Lab5/CreatePost.vue';
import Lab11 from '../components/Lab5/PostList.vue';
import Lab12 from '../components/Lab6/Lab6Bai1.vue';
import Lab13 from '../components/Lab6/Lab6Bai2.vue';
import Lab14 from '../components/Lab6/Lab6Bai3.vue';
import Lab15 from '../components/Lab6/Lab6Bai4.vue';

import TrangChu from '../components/ASM/Trangchu.vue';
import DangNhap from '../components/ASM/Dangnhap.vue';
import Chitiet from '../components/ASM/ChiTiet.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/blog', component: BlogPage },
    { path: '/about', component: About },
    { path: '/Lab1/Bai1', component: Lab1},
    { path: '/Lab2/Bai1', component: Lab2},
    { path: '/Lab2/Bai2', component: lab3},
    { path: '/Lab3/Bai1', component: Lab4},
    { path: '/Lab3/Bai2', component: lab5},
    { path: '/Lab5/App', component: Lab6},
    { path: '/Lab5/Bai1', component: Lab7},
    { path: '/Lab5/Bai2', component: Lab8},
    { path: '/Lab5/Bai3', component: Lab9},
    { path: '/Lab5/CreatePost', component: Lab10},
    { path: '/Lab5/PostList', component: Lab11},
    { path: '/Lab6/Lab6Bai1', component: Lab12},
    { path: '/Lab6/Lab6Bai2', component: Lab13},
    { path: '/Lab6/Lab6Bai3', component: Lab14},
    { path: '/Lab6/Lab6Bai4', component: Lab15},

    { path: '/ASM/Trangchu', component: TrangChu},
    { path: '/ASM/Dangnhap', component: DangNhap },
    { path: '/ASM/ChiTiet', component: Chitiet}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;