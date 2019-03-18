<template>
    <div id="app-more"  @scroll="onScroll">
        <a name="top" id="top"></a>
        <div class="header"></div>
        <!-- <div class="header_bottom"></div> -->
        <div class="my_name">
            <img src="../../.././public/img/xmg.jpg" alt="" class="my_img">
            <span class="myown" >小马 <sup>3</sup>先生</span>
        </div>
        <div class="center" >
            <span class="head">内心独白</span>
            <img src="../../.././public/img/open.png" alt="" > 
            <div class="center-img"></div>
            <p>我叫马红伟,今年22岁,接触前端开发其实并不是一个偶然的机会,而是一种机缘在作祟,2016年报考志愿的时候,对计算机没有一点了解的我,选择了计算机专业,不是因为我对它有兴趣,只是当时觉得《IT精英》听起来真的牛逼,大一时,当我从c++,数据算法,Java,javaEE,linux,mysql,Ps,等课程中走过一遍的时候,发现,计算机就是和一群代码打交道,然而,其中的课程并没有真正的让我提起兴趣,大一就这样不了了之了.</p>
            <p>当人生没有丝毫方向感的时候,整个人都是堕落的.</p>
            <p>大二,一个转折点,当我觉得我给计算机专业无缘的时候,一门新的课程随之而来.</p>
            <p>【网页设计】能在网页中显示自己用代码敲出来的文字,图像,视屏,还能够给文字加入样式,连接,随着课程的不断学习,我对网页设计这门课程产生了极大的兴趣,但随着时间的推移,刚令我产生兴趣的课程就这样结束了,但是自己对网页设计这门课程的热爱程度却没有丝毫的减少,于是乎,百度,,,视频,,,文档,,,书籍,,,不行,学的东西还是做不出来能拿的出手的东西..</p>
            <p>此时的我也仅仅掌握了,HTML,css,和JavaScript的基础用法,掌握了一点dom的操作,但是又能怎样呢,我离前端开发工程师这个岗位还差了太多</p>
            <p>大三,当我踏进校门的时候,就已经听书有个机构要给我们进行培训,于是乎,我便开启了长达6个月的学习历程</p>
            <span class="head">技术提升</span>
            <img src="../../.././public/img/open.png" alt="" > 
            <div class="center-img"></div>
            <p>在此期间,我做了《个人博客Pc》《手机大卖场->移动端》《小马 <sup>3</sup>先生的个人博客->移动端》....</p>
            <p>从Mysql->NodeJs->html->css->bootstrap->JavaScript->JQuery->vue->微信小程序->angle->react....一个课程一个课程的学习,这不仅仅让我体验到学习的兴趣,感受的新一代技术的高深,也让我自己的水平得到了飞一般的提高.</p>
            <p>解决了并掌握了比如:</p>
            <p>(1):响应式布局 <br>
               (2):弹性布局   <br>
                (3):JavaScript中声明全局函数，全局变量，造成的全局污染；<br>
               (4):浏览器兼容性问题<br>
               (3):ajax异步请求数据出现404错误<br>
               (4):json mysql xml 存储数据的方式<br>
                (5):掌握了jsonp,cors,代理,解决跨域请求数据的方式<br>
                (6):熟练掌握并用vue-cli脚手架做出了自己的第一个移动端项目手机大卖场<br>
                (7):并使用session存储用户登录成功的uid判断用户是否登录,用vuex存储全局数据，用父与子之间的通信传递数据，<br>
                (8):移动端第二个项目，小马哥的个人博客，这次真正的让我掌握vue-cli的强大之处在于，用数据操纵元素，用vue全家桶开发的方便之处，并攻克了留言，回复留言，点赞，评论，侧滑动，分页查询等等技术难题；<br>
            </p>
            <span class="head">展望未来</span>
            <img src="../../.././public/img/open.png" alt="" > 
            <div class="center-img"></div>
            <p>谁不知道，一如前端深似海的道理呢，但未来的路就在脚下，我知道自己离一个合格的前端开发工程师的距离还是很遥远的，但我有信心在我不断学习，不断开发中，为自己打磨出一副坚实的铠甲去面对以后，更多的挑战。。。</p>
            
            <p style="text-align:right">-----我就是我，不一样的【小马 <sup>3</sup>先生】</p>
            <p style="text-align:right"><router-link to="/Admin" >返回上一页</router-link></p>
            <a href="#top"><img src="../../.././public/img/top.png" alt="" ></a>
        </div>
        <div class="header"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods: {
        onScroll(e){
            console.log(e.offsetX)
            console.log(1111)
        }
    },
    created() {
        // this.onScroll()
    },
}
</script>
<style scoped>
#app-more{
    position: absolute;
    width: 100%;
    /* height: 100%; */
    background: #fff;
}
#app-more .header{
    width:100%;
    height: 10px; 
    background: rgb(185, 7, 7);
}
#app-more .header_bottom{
    width: 50%;
    height: 10px;
    background: rgb(185, 7, 7);
    margin: 0 auto;
    border-bottom-left-radius:100%;
    border-bottom-right-radius: 100%; 
}
#app-more .my_name{
    margin: 20px;
}
#app-more .my_img{
    border-radius: 50%;
    border:2px solid rgb(185, 7, 7);
}
#app-more .myown{ 
    margin: 0px 0px 0px -19px;
    font-family: "华文行楷";
    color:rgb(185, 7, 7);
}
#app-more .head{
    margin:0px 0px 0px 26px;
    border-bottom: 3px dashed rgb(185, 7, 7);
    font-size: 24px;
    padding: 0px 0px 0px 0px 
}
#app-more .center{
    margin: 38px 8px 0px 16px;
    }
#app-more .center p{
    line-height: 25px;    
    color: black
}
#app-more .center-img{
    margin-top:20px
}
html{scroll-behavior: smooth}
</style>
