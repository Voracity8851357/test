import Vue from 'vue'
import Router from 'vue-router'

import Index from "./routes/index";
import store from './store.js';
import login from './components/app/login.vue';
import reg from './components/app/reg.vue';
import ServiceManage from './components/serviceManage/serviceManage.vue'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/reg',
            name: 'reg',
            component: reg
        },
        {
            path: "/index",
            component: Index,
            children: [
                {
                    path: '/index/userAccount',
                    // component: UserAccount,
                },
                {
                    path: '/index/shopName',
                    // component: ShopName,
                },
                {
                    path: '/index/applyForShop',
                    // component: ApplyForShop,
                },
                {
                    path: '/index/goodsName',
                    // component: GoodsName,
                },
                {
                    path: '/index/serviceManage',
                    name:'serviceManage',
                    component: ServiceManage,
                },
                {
                    path: '/index/petOwners',
                    // component: PetOwners,
                },
                {
                    path: '/index/orderManagement',
                    // component: OrderManagement,
                },
            ]
        }
    ]
})
