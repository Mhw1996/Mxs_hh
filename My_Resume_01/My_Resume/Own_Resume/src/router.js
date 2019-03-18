import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Details from './views/Details.vue'
import Book from './views/Book.vue'
import NotFound from './views/NotFound'
import Index_info from './components/Index_info/index_info.vue';
import Footer01 from './components/HeaderFooter/Footer.vue';
import News from './components/News/news.vue';
//用户的登录
import Login from "./components/user/login.vue"
// 用户的注册
import Sigin from "./components/user/sigin.vue";
//时光轴
import Time from './components/Rooter/Time.vue';
// 诗和生活
import Life from "./components/Life/Life.vue";
//冬
import Winter from "./components/Life/Winter.vue"
// 春
import Spring from "./components/Life/Spring.vue"
// 夏
import Summer from "./components/Life/Summer.vue"
// 秋
import Autumn from "./components/Life/Autumn.vue"
// 评论消息页
import Message from "./components/News/message.vue"
// 站长回复压面
import Back from "./components/News/back.vue"
// 关于站长
import Admin from "./components/Rooter/Admin.vue"
// 了解更多
import GetMore from "./components/Rooter/GetMore.vue"
// 功能暂未开放
import NotPage from "./views/NotPage.vue"
//ES6

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home, children:[
        { path:"", component: Index,children:[
          {path:'',component:Footer01}
        ]},
        { path:"details", component: Details},
        { path:"Book", component: Book },
        {path:"Index_info",component:Index_info,children:[
        {path:'',component:Footer01,children:[{path:'',component:News}]},
        ]},
        {path:'/Login',component:Login},
        {path:'/Sigin',component:Sigin},
        {path:'/Time',component:Time},
        {path:'/Message',component:Message},
        {path:"/Admin",component:Admin},
        {path:'/Life/Spring',component:Life,children:[
          {path:'/Life/Spring',component:Spring},
          {path:'/Life/Summer',component:Summer},
          {path:'/Life/Autumn',component:Autumn},
          {path:"/Life/Winter",component:Winter}
        ]},
        
    ]}, 
        {path:"/NotPage",component:NotPage},
        {path:"/GetMore",component:GetMore},
        {path:'/Back',component:Back},
        { path: '/*', component:NotFound }
  ]
})
