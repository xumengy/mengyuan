//main.js项目的核心文件
let { Vue } = window;
// import ElementUI from 'element-ui'

import axios from 'axios';
Vue.prototype.$http = axios;

import router from './routes.js';

// 
import HeaderTop from './views/header.vue';

import FooterBottom from './views/footer.vue';

//开启错误提示
Vue.config.debug = true;


new Vue({
    el: '#rootmy',
    data (){
    	return {
    		show:false,
    		ifsakura:true
    	}
    },
    router,
    components: {
    	HeaderTop, 
    	FooterBottom
    },
    mounted:function(){
    	this.sakura();
    },
    methods: {
    	sakura(){
    		var that = this;
    	}
    }
})