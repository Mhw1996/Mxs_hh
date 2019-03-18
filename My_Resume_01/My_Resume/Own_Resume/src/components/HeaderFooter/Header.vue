<template>
  <div id="app-header">
    <!-- <mt-header fixed title="努力有用的话，要天才干什么"></mt-header> -->
    <div class="nav">
      <span>努力有用的话，要天才干什么 </span> 
      <img src="../../.././public/img/Hbb.png" alt="" class="hbb" @click="Block()">    
  </div>
  <div class="side" :class="{size_hidden:isactive}">
    <ul class="box">
      <li class="item" @click="jumpIndex()">
        <span class="link1">
          <img src="../../.././public/img/首页.png" alt=""> 
          <span :style="{color:activeColor}"> 网站首页</span>
        </span>
        </li>
      <li class="item" @click="jumpBook()">
        <span to="Products" class="link1" >
          <img src="../../.././public/img/阅读.png" alt=""> 
          <span :style="{color:activeColor1}"> 浅阅读深体会</span>
        </span>
        </li>
      <!-- <li class="item">
        <span class="link1">
          <img src="../../.././public/img/icon25.png" alt=""> 
          <span :style="{color:activeColor2}" > 程序猿的世界</span>
        </span>
        </li> -->
      <li class="item" @click="jumpLife">
        <span class="link1">
          <img src="../../.././public/img/shenghuo.png" alt=""> 
          <span :style="{color:activeColor3}"> 诗和生活</span>
        </span>
        </li>
      <li class="item" @click="jumpTime">
        <span class="link1">
          <img src="../../.././public/img/shijian.png" alt=""> 
          <span :style="{color:activeColor4}"> 时间光轴</span>
        </span>
      </li>
      <li class="item" @click="jumpMessage">
        <span class="link1" >
          <img src="../../.././public/img/liuyan.png" alt=""> 
          <span :style="{color:activeColor5}"> 留言贴近你我</span>
        </span>
        </li>
         <li class="item">
        <span class="link1">
          <img src="../../.././public/img/guanyuwo.png" alt=""> 
          <span :style="{color:activeColor6}" @click="jumpAdmin"> 关于站长</span>
        </span>
        </li>
      <li class="item" @click="jumplogin()">
        <span class="link1">
          <img src="../../.././public/img/denglu.png" alt=""> 
          <span :style="{color:activeColor7}"> 登个录</span>
        </span>
        </li>
    </ul>
  </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isactive:true,
        activeColor:"red",
        activeColor1:"",
        activeColor2:"",
        activeColor3:"",
        activeColor4:"",
        activeColor5:"",
        activeColor6:"",
        activeColor7:""
      }
    },
    methods: {
      Block(){
        if(this.isactive==true){
          this.isactive=false
        }else{
          this.isactive=true
        }
      },
      // 跳转到首页
      jumpIndex(){
        this.$router.push("/")
       if(this.isactive==false){
          this.isactive=true
        } ;
        this.activeColor="red"
        this.activeColor1="";
        this.activeColor2="";
        this.activeColor3="";
        this.activeColor4="";
        this.activeColor5="";
        this.activeColor6="";
        this.activeColor7="";
      },
      // 跳转到浅阅读深体会页面
      jumpBook(){
      this.$router.push("/details")
       if(this.isactive==false){
          this.isactive=true
        } ;
        this.activeColor=""
        this.activeColor1="red";
        this.activeColor2="";
        this.activeColor3="";
        this.activeColor4="";
        this.activeColor5="";
        this.activeColor6="";
        this.activeColor7="";
    },
    // 登录页面的跳转
    jumplogin(){
       this.$router.push("/Login")
       if(this.isactive==false){
          this.isactive=true
        } ;
        this.activeColor=""
        this.activeColor1="";
        this.activeColor2="";
        this.activeColor3="";
        this.activeColor4="";
        this.activeColor5="";
        this.activeColor6="";
        this.activeColor7="red";
    },
    // 跳转到时光轴页面
     jumpTime(){
       this.$router.push("/Time")
       if(this.isactive==false){
          this.isactive=true
        } ;
        this.activeColor=""
        this.activeColor1="";
        this.activeColor2="";
        this.activeColor3="";
        this.activeColor4="red";
        this.activeColor5="";
        this.activeColor6="";
        this.activeColor7="";
    },
    // 跳转到诗和生活
      jumpLife(){
       this.$router.push("/Life/Spring")
       if(this.isactive==false){
          this.isactive=true
        } ;
        this.activeColor=""
        this.activeColor1="";
        this.activeColor2="";
        this.activeColor3="red";
        this.activeColor4="";
        this.activeColor5="";
        this.activeColor6="";
        this.activeColor7="";
    },
     // 跳转到留言
      jumpMessage(){
       this.$router.push("/Message")
       if(this.isactive==false){
          this.isactive=true
        } ;
        this.activeColor=""
        this.activeColor1="";
        this.activeColor2="";
        this.activeColor3="";
        this.activeColor4="";
        this.activeColor5="red";
        this.activeColor6="";
        this.activeColor7="";
    },
       // 跳转到站长
      jumpAdmin(){
       this.$router.push("Admin")
       if(this.isactive==false){
          this.isactive=true
        } ;
        this.activeColor=""
        this.activeColor1="";
        this.activeColor2="";
        this.activeColor3="";
        this.activeColor4="";
        this.activeColor5="";
        this.activeColor6="red";
        this.activeColor7="";
    }
    },
  }
</script>

<style scoped>
#app-header .nav{
  position: fixed;
  top: 0px;
  display:block;
  background: rgb(185, 7, 7);
  width:100%;
  padding: 18px 0px 18px 13px;
  color: antiquewhite;
  font-family: "幼圆";
  font-weight: 800; 
  font-size: 20px;
  z-index: 919;
  border-bottom: 1px solid #fff;
}
#app-header .hbb{
  float:right;
  margin: -5px 19px -8px 0px;
}
#app-header .side{
  position: fixed;
  top:57px;
  right: 0;
  width: 80%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  transition: 0.7s all;
  z-index: 999;
}
.size_hidden{
  /* display: none; */
  width: 0% !important;
  overflow: hidden !important;
  transition: 0.7s all
}
ul{
  width: 300px;
  list-style: none;
  padding: 0px;
}
#app-header .item{
  padding:17px 0px 13px 30px;
  border-bottom: 1px  solid rgb(228, 226, 226); 
  font-size: 20px;
  font-weight: 500;
}
.link1>img{
  vertical-align: middle;
}
</style>