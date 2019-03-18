<template>
<div id="app-login">
<br><br><br>
<div class="mui-card top" >
    <div class="mui-card-header mui-card-media back">
    <p class="heard">用户请登录</p>   
    </div>
    <div class="mui-card-content inpu" >
        <input type="text" placeholder="邮箱" v-model="email">
        <input type="password" placeholder="登录密码" v-model="upwds">
        <button class="btn" @click="login">点击登录</button>
    </div>
    <div class="mui-card-footer">
        <span  class="mui-card-link" @click="pageUp"> 
            <img src="../../.././public/img/home.png" alt=""> 
            <span> 返回上层</span>
        </span>
        <router-link to="Sigin" class="mui-card-link">
            <img src="../../.././public/img/sigin.png" alt=""> 
            <span> 注册一下</span>
        </router-link>
    </div>
</div>
</div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data() {
        return {
            email:'',
            upwds:''
        }
    },
    methods: {
        login(){
            var email=this.email;
            var upwds=this.upwds;
            var upwd=this.upwd;
            if(email.trim().length==0){
                Toast("请输入邮箱地址!!!");
                return;
            }
            if(upwds.trim().length==0){
                Toast("请输入密码!!!");
                return;
             }
            var url="http://127.0.0.1:3000"
                url+="/login?email="+email
                url+="&upwds="+upwds;
            this.axios.get(url).then(result=>{
                // console.log(result)
                if(result.data.code==1){
                    setTimeout(()=>{
                        this.$router.push("/")
                    },2000)
                    Toast("成功登录,"+2+"s后返回首页")
                }else{
                    Toast("请确认你的用户名及密码")
                }
            })      
        },
        pageUp(){
            this.$router.go(-1)
        }
    },
}
</script>
<style scoped>
#app-login{
    position: fixed;
    background: #fff;
    width: 100%;   
    height: 100%;
    z-index: -20;
}
#app-login .heard{
    font-size: 18px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #000;
}
#app-login .back{
    background: #f5f5f5;  
    border-color: #ddd;
}
#app-login .top{
    margin-top:15%;
}
#app-login .inpu{
    margin:40px 12px 50px 12px;
}
#app-login .inpu input{
    margin:10px 1px 28px 0px;
}
#app-login .mui-card-footer{
    background: #f5f5f5;
}
#app-login .btn{
    width: 100%;
    padding: 6px 0px 6px 0px;
    color: #fff;
    background-color: rgb(185, 7, 7);
    border-color: rgb(185, 7, 7);
    font-size: 17px;
    font-family: "幼圆"
}
</style>
