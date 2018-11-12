import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false;
Vue.use(VueRouter);

import Home from './components/Home.vue';
import About from './components/About.vue';
import Project from './components/Project.vue';
import Contact from './components/Contact.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/projects', component: Project },
    { path: '/contact', component: Contact },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
