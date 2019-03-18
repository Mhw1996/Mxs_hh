<template>
<div id="app-news">
<div class="comment">
<div class="content1">
<p class="err">
    <img src="../../.././public/img/comment1.png" alt=""><span>文章评论</span>
    <router-link to="/Login" style="float:right;padding-right:20px">
        <img src="../../.././public/img/login1.png" alt="" ><span>登录</span>
     </router-link>
</p>
<textarea name="" cols="5" rows="4" v-model="content" placeholder="请输入评论内容最多50字..." maxlength="50" style="margin-bottom:0px;">
</textarea>
<button class="btn_comment" @click="comment">发表评论</button>
<p class="err">
<img src="../../.././public/img/head1.png" alt="" style=" vertical-align:bottom"> 
<span >最新评论</span>
</p>
<!--从此处开始循环评论的内容  -->
<div class="box" style="border:1px solid #ddd; margin-top:10px;" v-for="(item) of list" :key="item.id">
    <img src="../../.././public/img/user.png" alt="" class="ricle">
    <span style="color:rgb(185, 7, 7);font-size: 13px;">{{item.uname}}</span>
    <span  class="time">{{item.ctime | datetimeFilter}}</span>
    <p class="comment-news">{{item.content}}</p>
    <p class="back">{{item.my_callback}}</p>
    <div class="father">
    <div class="zan1">
        <span class="span_img" @click="callback1" :data-mynid="item.nid">回复</span>
        <span >
            <img src="../../.././public/img/zan.png" alt="">
            <span class="count-01" @click="help_use" :data-num="item.num" :data-nid="item.nid"> {{item.num}}</span>
        </span>
    </div> 
    <div id="float"></div>
</div>
</div>
</div>
</div>
<!--弹出框用来提交用户的回复消息;-->
    <div class="mask" :class="{activeMask:mask}" @click="click_mask"></div>
    <div  class="form01" :class="{form_class:acitve}">
     <textarea name="" id="" cols="20" rows="5" class="text" v-model="admincomment" autofocus></textarea>
     <button class="btn_comment" @click="submit01">提交评论</button>
    </div>
</div>
    
</template>

<script>
import {Toast} from "mint-ui"
export default {
    data() {
        return {
            content:'',
            help_count:22,
            list:[],
            callback:'',
            mask:false,
            acitve:false,
            admincomment:'',
            nid:"",
        }
    },
    methods: {
    callback1(e){
        if(this.mask==false){
            this.mask=true
            this.acitve=true
            this.nid=e.target.dataset.mynid;
        }
        },
        click_mask(){
            this.mask=false;
            this.acitve=false
        },
        submit01(){
            this.mask=false;
            this.acitve=false;
            var admincomment=this.admincomment;
            if(!admincomment){
                Toast("空?不懂啥意思");
                return;
            }
            var nid=this.nid
            // Toast("评论成功!!")
            var url="http://127.0.0.1:3000/admincomment?admincomment="+admincomment
                url+="&nid="+nid
            this.axios.get(url).then(result=>{
                // console.log(result)
                Toast("回复成功")
            })
            // this.$router.go(0)
        },
    comment(){
        var content=this.content;
        if(!content){
            Toast("评论贴近你我!!!")
            return;
        }
        // console.log(content)   
        // 参数:用户对哪篇文章进行评论的文章的info_id,评论的内容,
        var info_id=this.$route.query.info_id;
        // console.log(info_id,content)
        var url="http://127.0.0.1:3000"
            url+="/comment?info_id="+info_id
            url+="&content="+content;
            // console.log(url)
        this.axios.get(url).then(result=>{
            // console.log(result)
            if(result.data.code==0){
                Toast(result.data.msg)
                return;
                this.content=""
            }else if(result.data.code==1){
                Toast("评论成功!!!")
                this.content=""
                this.getcomment()
            }
        })     
    },  
    // 对留言的用户进行点赞
    help_use(e){
        var num=e.target.dataset.num;
        num++   
        var nid=e.target.dataset.nid;
        var url="http://127.0.0.1:3000/help?num="+num
            url+="&nid="+nid
        // console.log(url)
        this.axios.get(url).then(result=>{
            Toast("谢谢你的赞")
            this.$router.go(0)
        })
    },
    // 获取评论的内容
    getcomment(){
        var info_id=this.$route.query.info_id;
        // console.log(info_id)
        var url="http://127.0.0.1:3000/getcomment?info_id="+info_id
        this.axios.get(url).then(result=>{
            // console.log(result)
            this.list=result.data.data
        })
    }
    }, 
    created() {
        this.getcomment()
    }, 
}
</script>
<style scoped>
#app-news .comment{
    border-radius: 1px;
    width: 100%;
    margin: 15px 0px 15px 0px;
}
#app-news .content1{
    margin: 0px 10px 0px 10px;
    box-shadow:0 1px 2px rgba(0,0,0,.3) ;
}
#app-news .content1 .err{
    border-bottom: 1px solid #ddd;
    padding: 11px 0px 11px 6px;
}
#app-news .content1 p span{
    font-size: 20px;
    color: #000;
}
#app-news .content1 img{
    vertical-align: middle;
}
#app-news  .ricle{
    border:1px solid #ddd;
    border-radius: 50%;
    margin:20px 20px -14px 6px;
}
#app-news .time{
    float:right;
    padding:18px 11px 0px 0px;
    font-size: 13px;
    color: rgb(144, 141, 141);
}
#app-news .comment-news{
    padding: 0px 0px 0px 77px
}
#app-news .zan1{
    float:right;
    padding: 0px 45px 10px 0px;
}
#app-news #float{
    clear: both;
}
#app-news .span_img{
    padding: 0px 21px 0px 0px;
    font-size: 15px;
}
#app-news  .back{
    padding: 0px 0px 0px 77px;
    color: rgb(185, 7, 7);
}
#app-news .count-01{
    color: rgb(172, 30, 30);
    font-size: 14px;
}
#app-news .inp{
    display: none;
}
#app-news .btn_comment{
    width: 100%;
    font-size: 15px;
    color: #8f8f94;
    position: relative;
    z-index: -0;
    top:-7px;
}
#app-news .mask{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    top:10px;
    display: none;
}
#app-news .text{
    margin:0px 10px 0px 0px;
    background:rgb(246, 246, 246);
}
#app-news .activeMask{
    display: block !important;
}
#app-news .form01{
    position: fixed;
    top:38%;
    left:53px;
    display: none;
    border-radius: 2px;
}
#app-news .form_class{
    display: block !important;
}
</style>
