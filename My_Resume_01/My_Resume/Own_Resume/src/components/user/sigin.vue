<template>
<div id="app-sigin">
<br><br><br>
<div class="mui-card top" >
    <div class="mui-card-header mui-card-media back">
    <p class="heard">用户注册</p>   
    </div>
    <div class="mui-card-content inpu" >
        <input type="text" placeholder="昵称" v-model="uname">
        <input type="text" placeholder="邮箱" v-model="email">
        <input type="password" placeholder="密码包含数字字母下划线(6-8位)" v-model="upwd">
        <input type="password" placeholder="确认密码" v-model="upwds">    
        <mt-button  class="btn" @click="sigin">点击注册</mt-button >
    </div>
</div>
</div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data() {
    return {
        uname:'',
        email:'',
        upwd:'',
        upwds:''
    }
    },
    methods: {
sigin(){
    var postData=this.qs.stringify({
    uname:this.uname,
    email:this.email,
    upwd:this.upwd,
    upwds:this.upwds
    });
    var uname=this.uname;
    var email=this.email;
    var upwd=this.upwd;
    var upwds=this.upwds;
    var u=/^[\u4E00-\u9FA5\uf900-\ufa2d·s]|[a-z]{3,10}$/
    if(!u.test(uname)){
      Toast("昵称为3-10位字母或至少一位汉字")
      return ;
    }
    var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/
    if(!reg.test(email)){
      Toast("请注意邮箱格式")
      return;
    }
    var p=/^(\w){6,20}$/
    if(!p.test(upwd)){
      Toast("请正确输入密码格式")
      return;
    }
    if(upwds!=upwd){
      Toast("两次密码不一致！！")
      return
    }
    var url="http://127.0.0.1:3000/sigin";
    this.axios.post(url,postData).then(result=>{
      if(result.data.code==1){
          setTimeout(()=>{
                this.$router.push("/")
            },2000)
        Toast("恭喜注册成功,并跳转到登录页面!")
        this.$router.push("/Login")
        uname="";
        email="";
        upwd="";
        upwds="";
        
      }else{
        Toast("注册失败！！！")
      }
    })
    },
    
}
   
}
</script>
<style scoped>
#app-sigin{
    position: fixed;
    background: #fff;
    width: 100%;   
    height: 100%;
    z-index: -20;
}
#app-sigin .heard{
    font-size: 18px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #000;
}
#app-sigin .back{
    background: #f5f5f5;  
    border-color: #ddd;
}
#app-sigin .top{
    margin-top:15%;
}
#app-sigin .inpu{
    margin:12px 12px 28px 12px
}
#app-sigin .inpu input{
    margin:10px 1px 28px 0px;
}
#app-sigin .mui-card-footer{
    background: #f5f5f5;
}
#app-sigin .btn{
    width: 100%;
    padding: 6px 0px 6px 0px;
    color: #fff;
    background-color: rgb(185, 7, 7);
    border-color: rgb(185, 7, 7);
    font-size: 17px;
    font-family: "幼圆"
}
 
</style>
