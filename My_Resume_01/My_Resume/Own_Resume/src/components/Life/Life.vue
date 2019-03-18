<template>
<div id="app-Life">
    <br><br>
    <div class="nav">
        <button class="btn">
           <router-link to="/Life/Spring" class="fontStyle" :style="{color:active1}">春华</router-link>
        </button>
        <button class="btn">
           <router-link to="/Life/Summer" class="fontStyle" :style="{color:active2}">夏雨</router-link>
        </button>
        <button class="btn">
           <router-link to="/Life/Autumn" class="fontStyle" :style="{color:active3}">秋黄</router-link>
        </button>
        <button class="btn">
           <router-link to="/Life/Winter" class="fontStyle" :style="{color:active4}">冬雪</router-link>
        </button>
    </div>  
    <div v-for="item of video" :key="item.id" class="videoStyle">
        <!-- <video :src="item.video_url" id="item_video" autoplay loop
        >
        </video>        -->
    </div>
    <v-touch @swipeleft="onSwipeLeft" @swiperight="onSwipeRight" v-bind:swipe-options="{ direction:'horizontal', threshold: 50 }">
        <router-view @FatherNum="FatherNum"></router-view>  
    </v-touch>
</div> 
</template>

<script>
export default {
 data(){
    return{ 
        active1:"#ff5722",//导航栏中颜色的变化
        active2:"",
        active3:"",
        active4:"",
        childNum:'',//子组件传值给父组件的接收值
        video:[]//用于存放视频
    }
},
methods: {
    // 子组件传值给父组件调用的方法；
    FatherNum(childNum){
        this.childNum=childNum;
        if(this.childNum==1){
            this.active1="#ff5722"
            this.active2=""
            this.active3=""
            this.active4=""
        }else if(this.childNum==2){
            this.active1=""
            this.active2="#ff5722"
            this.active3=""
            this.active4=""
        }else if(this.childNum==3){
            this.active1=""
            this.active2=""
            this.active3="#ff5722"
            this.active4=""
        }else if(this.childNum==4){
            this.active1=""
            this.active2=""
            this.active3=""
            this.active4="#ff5722"
        }
    },
    // 左滑动
    onSwipeLeft(){
          if(this.childNum==1){
            this.$router.push("/Life/Summer")
        }else if(this.childNum==2){
            this.$router.push("/Life/Autumn")
        }else if(this.childNum==3){
           this.$router.push("/Life/Winter")
        }else if(this.childNum==4){
            this.$router.push("/Life/Spring")
        }
    },
    // 右滑动
    onSwipeRight(){
          if(this.childNum==1){
               this.$router.push("/Life/Winter")
        }else if(this.childNum==2){
            this.$router.push("/Life/Spring")
        }else if(this.childNum==3){
           this.$router.push("/Life/Summer")
        }else if(this.childNum==4){
            this.$router.push("/Life/Autumn")
        }
    },
    getVideo(){
        var url="http://127.0.0.1:3000/video"
        this.axios.get(url).then(result=>{
            // console.log(result)
            this.video=result.data.data
            // console.log(this.video)
        })
    }
},
created() {
    this.getVideo()
    },
}
</script>
<style scoped>
#app-Life .nav{
    display: flex;
    justify-content:space-around;
    position: fixed;
    top:58px;
    width: 100%;
    border-bottom:1px solid #ddd;
}
#app-Life .btn{
    width:25%;
    border:0px;
    border-radius: 0px;
}
#app-Life .fontStyle{
    color: #000;
    font-weight: 600;
    font-size: 15px;
    font-family: "幼圆"
}
#app-Life .videoStyle{
    width: 100%;
   
}
#item_video{ 
    position: fixed;
    top:92px;
    width: 100% !important;
}
</style>
