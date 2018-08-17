/**
 * Created by Administrator on 2017/3/7.
 */

// 引用模板
let { Vue } = window;
import Router from 'vue-router';

// 首页
import home from './views/home.vue';
import song from './views/song.vue';

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            component: home
        },
        {
            path: '/home',
            component: home
        },
        {
            path:'/song',
            component:song
        }
    ]
})