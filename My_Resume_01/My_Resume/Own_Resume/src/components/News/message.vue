<template>
<div id="app-message">
    <br><br><br>
    <div class="text1">
    <h2 class="hStyle">Message wall</h2>
    <br>
    <p>本页面可留言、吐槽、提问。欢迎灌水，杜绝广告！</p>
    <p> 
        <img src="../../.././public/img/nz.png" alt="" class="center"> 
        <span> {{yeartime}}年{{monthtime}}月{{datetime}}日  {{week}}  {{hourstime}}时{{minutestime}}分{{secondstime}}</span>  
    </p>
    <div class="border"></div>
    <p>沟通交流,拉近你我！</p>
    <p style="color:#17a2b8 ">
        <i> ---------------Speak one's mind freely--------------</i>
    </p>
    </div>
    <div>
        <div>
            <router-link to="" class="fontStyle">
                <img src="../../.././public/img/message.png" alt="" class="center1">
                <span class="spn1" >{{num}}</span>
            </router-link>
            <router-link to="/Login" class="float">
                <img src="../../.././public/img/login1.png" alt="" class="center">
                <span style="color:#000">登录</span>
            </router-link>
        </div>
        <textarea name="" cols="5" rows="4"  placeholder="请输入留言内容最多50字..." maxlength="50" style="margin-bottom:-5px;" v-model="msg">
        </textarea>
    <button class="btn_comment" @click="InsertNews">提交留言</button>
    </div>
    <!-- 留言条 -->
    <div class="comment" v-for="item of getwellinfo" :key="item.id">
        <img class="imgs" src="../../.././public/img/apple.jpg" >
        <span>{{item.uname}}</span>
        <span class="timeStyle">{{item.mtime | simpletime}}</span> 
        <p class="content">
            {{item.msg}}
            <span  style="float:right;margin-right:20px;color:black" @click="Back" :data-mid="item.mid">站长回复</span>
        </p>
        <p class="my_back" v-for="tmp of BackList" :key="tmp.id" v-if="tmp.mid==item.mid">
            <span >站长回复:{{tmp.ownback}}</span> 
        </p>
    </div>
<br><br><br><br>
</div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
  data() {
    return {
        msg:'',
        getwellinfo:[],
        BackList:[],
        yeartime:'',
        monthtime:'',
        datetime:"",
        hourstime:"",
        minutestime:"",
        secondstime:"",
        week:"",
        num:''
    };
  },
  methods: {
    //  跳转到站长回复页
    Back(e){
        var mid=e.target.dataset.mid
        // console.log(mid)
        this.$router.push("/Back?mid="+mid)
    },
    //提交留言
    InsertNews(){
        var msg=this.msg
        if(!msg){
            Toast("唠嗑呀,认真点")
            return
        }
        // console.log(msg)
        var url="http://127.0.0.1:3000/insertwell?msg="+this.msg;
        // console.log(url)
        this.axios.get(url).then(result=>{
            // console.log(result)
            if(result.data.code==-1){
                Toast({ message:"请先登录!!" })
                this.msg=""
            }else{
                 Toast({ message:"说累不是啥好话!!",})
                this.msg=""
                this.getwell()
            }
        })
    },
    // 获取留言信息
    getwell(){
        var url="http://127.0.0.1:3000/getwell"
        this.axios.get(url).then(result=>{
            // console.log(result)
            this.getwellinfo=result.data.data
        //    console.log(result.data.data.length) ;
           this.num=result.data.data.length
            // console.log(this.getwellinfo)
        })
    },
    // 获取站长回复留言的消息
    getBack(){
        var url="http://127.0.0.1:3000/getback"
        this.axios.get(url).then(result=>{
            // console.log(result)
            this.BackList=result.data.data
            // console.log(this.BackList)
        })
    },
    // 获得当前的时间
    getTime(){
        var time=new Date();
        var week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        var weeks=time.getDay();
        this.yeartime=time.getFullYear();
        this.monthtime=time.getMonth()+1;
        this.datetime=time.getDate();
        this.hourstime=time.getHours();
        this.minutestime=time.getMinutes();
        this.week=week[weeks]
    }
  },
  created() {
      this.getwell()
      this.getBack()
      this.getTime()
  },
};
</script>
<style scoped>
#app-message {
  background: #fff;
  width: 100%;
}
#app-message .hStyle {
  font-family: "幼圆";
  text-align: center;
}
#app-message .text1 p {
  text-align: center;
}
#app-message .center {
  vertical-align: middle;
}
#app-message .border {
  border-bottom: 1px solid #ddd;
  width: 96%;
  height: 1px;
  margin: 10px auto 20px;
}
#app-message .spn1 {
  color: #fff;
  background: rgb(228, 8, 8);
  border-radius: 50%;
  padding: 2px;
  font-size: 12px;
}
#app-message .btn_comment {
  width: 100% !important;
  font-family: "微软雅黑";
  font-size: 15px;
  font-weight: 600 !important;
}
#app-message .float {
  float: right;
  margin: 4px 25px 4px 0px;
}
#app-message .fontStyle {
  margin: 0px 0px 0px 25px;
}
#app-message .center1 {
  vertical-align: text-top;
}
#app-message .imgs{
    padding: 5px;
    vertical-align: middle;
    border-radius: 50%;
    width: 58px;
    height: 58px;
    margin: 11px 5px 0px 0px;
}
#app-message .timeStyle{
    float: right;
    padding: 22px 20px 0px 0px;
    font-size: 10px;
    color: rgb(14, 13, 13);
}
#app-message .content{
    margin:-12px 0px 0px 61px;
}
#app-message .comment{
     box-shadow:0 1px 2px rgba(0,0,0,.3) ;
    margin-top:10px;
}
#app-message .my_back{
    padding:5px;
    margin:-1px 0px 0px 57px;
    color:tomato;
}
</style>
