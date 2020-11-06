import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios'
import http from './assets/js/loading'      //使用loading替换axios实现全局请求加载效果
import router from './router/router'

http.defaults.baseURL = '/api'
Vue.config.productionTip = false
Vue.use(Element)
Vue.prototype.$axios = http
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')