<template>
<div id="app-details">
    <br><br><br> 
  <div class="mui-card" v-for="item of list" :key="item.id">
        <div class="mui-card-content">
        <div class="mui-card-content-inner">
        {{item.content}}
        </div>
        </div>
        <div class="mui-card-footer">
        <span>{{item.types}}</span> 
        <!-- <span class="heard">
        <img src="../.././public/img/aixin.png" alt="" class="img-item"  :class="{item1:activeImg}" :data-did="item.did" @click="change1">  -->
        <!-- <img src="../.././public/img/aixin2.png" alt="" class="img-item2"> -->
            <!-- <span v-for="item2 of love2" :key="item2.id" v-if="item.did==item2.did">{{item2.love}}</span> -->
            <!-- <span v-for="item2 of num" :key="item2.id" v-if="item.did==item2.did">{{item2.love}}</span> -->
        <!-- </span> -->
        </div>
    </div>

</div>
</template>

<script>
    export default {
        data(){
            return{
                activeImg:false,
                list:[],
                num:"",
                s:0
            }
        },
        methods: {
        change1(e){               
                var did=e.target.dataset.did
                this.s++
                var url="http://127.0.0.1:3000/love?did="+did
                    url+="&num="+this.num;
                    // console.log(url)
                this.axios.get(url).then(result=>{
                    // console.log(result)    
                })
            },
            // 获取信息
            getDetails(){
                var url="http://127.0.0.1:3000/detailsBook";
                this.axios.get(url).then(result=>{
                    this.list=result.data.data;
                    // console.log("将后台的信息获取到，展示出来:"+this.list)
                })
            } ,
            // 获取点赞的数量
             getlove(){
               var url="http://127.0.0.1:3000/getLove"
               this.axios.get(url).then(result=>{
                //    console.log(result)
                   this.num=result.data.data
               })
            },
        },
        created() {
            this.getDetails()
            this.getlove()
        },
    }
</script>

<style scoped>
#app-details .heard{
    float: right;
}
#app-details .img-item{
    vertical-align: top;
}
#app-details .img-item{
    position: relative;
    left: 32px; 
    z-index: 3;
}
#app-details .img-item2{
    position: relative;     
}
#app-details .mui-card-content-inner {
    position: relative;
    padding: 8px;
}
#app-details  .mui-card-footer {
    padding: 4px 22px;
}
.item1{
    z-index: -1 !important;    
}
</style>