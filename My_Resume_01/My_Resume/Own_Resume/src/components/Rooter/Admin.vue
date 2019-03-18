<template>
<div id="app-admin">
<mt-swipe :auto="3000" id="ex01" :continuous="false"> 
    
    <mt-swipe-item class="item1"><br><br><br>
      <div class="circle">
          <h1 class="center">MHW</h1>
      </div>
      <h2 class="title">人生格言</h2>
      <h4 class="left">我一定能成功</h4>
      <h4 class="right">别人还得失败</h4>
    </mt-swipe-item>
    <mt-swipe-item class="item2">
    <br><br><br>
     <div class="circle">
          <h1 class="center">MHW</h1>
      </div>
      <h2 class="title1">个人口号</h2>
      <h4 class="left1">自己选择的路</h4>
      <h4 class="right1">再荒谬也要走完</h4>
    </mt-swipe-item>
    <mt-swipe-item class="item3">
    <br><br><br>
     <div class="circle">
          <h1 class="center">MHW</h1>
      </div>
      <h2 class="title2">口头禅</h2>
      <h4 class="left2">你若是傻逼</h4>
      <h4 class="right2">我便把你培养成大傻逼</h4>
    </mt-swipe-item>
    <mt-swipe-item class="item4" continous="false">
    <br><br><br>
     <div class="circle3">
          <h1 class="center3" @click="JumpGetMore">了解更多 </h1>
      </div>
    </mt-swipe-item>
</mt-swipe> 
</div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
             value:''
        }
    },
    methods: {
      JumpGetMore(){
         MessageBox.prompt('站长邮箱').then(({ value, action }) => {
                this.value=value;
                if(!this.value){
                    MessageBox('暗示', '你觉得能进去么');
                    return
                }
                // console.log(this.value)
                var url="http://127.0.0.1:3000/card?value="+this.value;
                this.axios.get(url).then(result=>{
                    // console.log(result)
                    if(result.data.code==1){
                          MessageBox('恭喜', '操作成功');
                          this.$router.push("/GetMore")
                    }else{
                        MessageBox('暗示', '请联系站长微信:mhw1541371309');
                    }
                })
            })
      }
    },
  created() {
  },
    
}
</script>
<style scoped>
#app-admin{
    position: absolute;
    width: 100%;
    height: 100%;
}
#app-admin .item1{
    width:100%;
    height:100%;
    background: rgb(231, 83, 46);
}
#app-admin .item2{
    width:100%;
    height:100%;
    background: #67C962;
}
#app-admin .item3{
    width:100%;
    height:100%;
    background: rgb(9, 208, 243);
}
#app-admin .item4{
    width:100%;
    height:100%;
    background: #FCD208 ;
}
#app-admin .circle{
    width:200px;
    height: 200px;
    background:transparent;
    border-radius: 50%;
    border: 1px solid #fff;
    margin: 100px auto; 
    font-weight: 500;
    overflow: hidden;
}
#app-admin .center{
    text-align: center;
    line-height: 200px;
    color: #fff;
    
}
#app-admin .center3{
    text-align: center;
    line-height: 200px;
    color: #fff;
    position: relative;
    top:-400px;
    animation: center3 1s linear 0.6 ;
    animation-fill-mode: forwards;
}
@keyframes center3{
    0%{position: relative;top:-400px}
    50%{position: relative;top:0px}
    65%{position: relative;top:-10px;}
    75%{position: relative;top:20px;}      
    100%{position: relative;top:0px}
}
#app-admin .circle3{
    width:200px;
    height: 200px;
    background:transparent;
    border-radius: 50%;
    border: 1px solid #fff;
    margin: 100px auto; 
    font-weight: 500;
}
#app-admin .title,.title1,.title2{
    text-align: center;
    position: relative;
    top:-1000px;
    animation: key 1s linear 1.6s ;
    animation-fill-mode: forwards;
    color: #fff;
}
@keyframes key {
    0%{position: relative;top:-1000px}
    80%{position: relative;top:0px}
    85%{position: relative;top:-30px;}
    100%{position: relative;top:-10px}
}
#app-admin .left,.left1,.left2{
    text-align: left;
    position: relative;
    top:10px;
    left:-200px;
    animation: left 0.6s linear 0.5s ;
    animation-fill-mode: forwards;
    font-family: "幼圆";
    color: rgba(255, 255, 255, 0);
    font-size: 25px;
    padding-left:20px;
}
@keyframes left {
    0%{position: relative;left:-200px;}
    50%{position: relative;left:0px; color: rgba(255, 255, 255, 1);}
    70%{position: relative;left:10px; color: rgba(255, 255, 255, 1);}
    80%{position: relative;left:-30px; color: rgba(255, 255, 255, 1);}  
    100%{position: relative;left:0px; color: rgba(255, 255, 255, 1);}
}
#app-admin .right,.right1,.right2{
    text-align: right;
    position: relative;
    top:10px;
    right:-270px;
    animation: right 0.5s linear 1.1s ;
    animation-fill-mode: forwards;
    font-family: "幼圆";
    color: rgba(255, 255, 255, 0);
    font-size: 25px;
    padding-right: 20px;
}
@keyframes right {
    0%{position: relative;right:-270px;}
    80%{position: relative;right:10px;color: rgba(255, 255, 255, 1);}
    90%{position: relative;right:-20px;color: rgba(255, 255, 255, 1);}    
    100%{position: relative;right:0px;color: rgba(255, 255, 255, 1);}
}
html{scroll-behavior: smooth}
</style>
