import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import HomePage from '../components/Home.vue';
import BlogPage from '../components/Blog.vue';
import Lab1 from '../components/Lab1/Bai1.vue';
import Lab2 from '../components/Lab2/Bai1.vue';
import lab3 from '../components/Lab2/Bai2.vue';
import Lab4 from '../components/Lab3/Bai1.vue';
import lab5 from '../components/Lab3/Bai2.vue';

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

    { path: '/ASM/Trangchu', component: TrangChu},
    { path: '/ASM/Dangnhap', component: DangNhap },
    { path: '/ASM/ChiTiet', component: Chitiet}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;