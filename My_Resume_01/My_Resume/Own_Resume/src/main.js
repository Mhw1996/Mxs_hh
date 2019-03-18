import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入了mint-ui样文件；
import'mint-ui/lib/style.css'

Vue.config.productionTip = false
//引入mui库样式文件九宫格
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
// import './lib/mui/js/mui.js'
// import './lib/mui/js/mui.min.js'
// Vue.prototype.mui=mui
//引入mint-ui组件，header
import {Header,Swipe,SwipeItem,Button} from "mint-ui"

// 测试注册cell
// 侧滑
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {threshold: 100} //手指左右滑动距离
// 侧滑
 //引入懒加载
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
//注册Header组件
//Header.name 的值就是mt-header
Vue.component(Header.name,Header)//注册一个Header组件
Vue.component(Swipe.name,Swipe)//注册一个Swipe，轮播组件
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)//注册一个button的组件
// vue.component(CellSwipe.name, CellSwipe)//注册一个侧滑删除的组件
// 使用axios的方式发生请求,三步
// (1)引入axios库
import axios from "axios"
// (2)配置跨域访问,并保存session信息
axios.defaults.withCredentials=true;
// (3)将axios库配置到vue实例对象中
Vue.prototype.axios=axios;
// (4)当使用post请求时,引入qs模块的方式,解析成对象的形式
import qs from "qs"
// (5)将qs 模块配置到Vue实例对象中
Vue.prototype.qs=qs;
// 创建一个时间的过滤器
Vue.filter("datetimeFilter",function(val){
  //创建日期对象
  var date=new Date(val);
  //获取年月日，时分秒，
  var y=date.getFullYear(); 
  var m=date.getMonth()+1;
  var d=date.getDate();
  var h=date.getHours();
  var mi=date.getMinutes();
  var s=date.getSeconds();
  //返回字符串y-m-d; h:mi:s
  m<10&&(m="0"+m)
  d<10&&(d="0"+d)
    return `${y}年${m}月${d}日 ${h}时${mi}分${s}秒`
})
// 创建一个简版时间过滤器
Vue.filter("simpletime",function(val){
  //创建日期对象
  var date=new Date(val);
  //获取年月日，时分秒，
  var y=date.getFullYear(); 
  var m=date.getMonth()+1;
  var d=date.getDate();
  var h=date.getHours();
  var mi=date.getMinutes();
  var s=date.getSeconds();
  //返回字符串y-m-d; h:mi:s
  m<10&&(m="0"+m)
  d<10&&(d="0"+d)
    return `${y}年${m}月${d}日${h}时${mi}分`
})
// 自定义过滤器实现首页中阅读内容控制字数
Vue.filter("snippet",function(value){
  return   value.slice(0,100)+"..."
})

Vue.filter("timeline",function(val){
  //创建日期对象
  var date=new Date(val);
  //获取年月日，时分秒，
  var y=date.getFullYear(); 
  var m=date.getMonth()+1;
  var d=date.getDate();
  //返回字符串y-m-d; h:mi:s
  m<10&&(m="0"+m)
  d<10&&(d="0"+d)
    return `${y}-${m}-${d}`
})
// 自定义过滤器实现首页中阅读内容控制字数
Vue.filter("snippet",function(value){
  return   value.slice(0,100)+"..."
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
