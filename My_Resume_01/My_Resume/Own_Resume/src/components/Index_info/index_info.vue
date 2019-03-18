<template>
<div id="app-index-info">
    <br><br><br>
    <div class="box" v-for="item of list" :key="item.id">
    <p class="p-item">
        <img src="../../.././public/img/position1.png" alt="" class="img_position"> 
        <span class="title">{{item.dex_title}}</span>  
    </p>
    <p class="p-span">
        <img src="../../.././public/img/data.png" alt="">
				<span>{{item.dex_time|datetimeFilter}}</span>
        <img src="../../.././public/img/file.png" alt="">
				<span>{{item.dex_type}}</span>
    </p>
    <div class="content" style="text-indent:1em;overflow:auto">
     <!-- 插入数据的位置 -->
     {{item.info_countent}}
     <!-- 插入数据结束的位置 -->
    <p style="margin-top:10px;">
			<span :data-infoid="item.info_id" @click="downpage" class="go1">上一篇</span> 
			<span style="float:right;margin-right:40px" :data-infoid="item.info_id" @click="addpage" class="go1">下一篇</span> 
    </p>
    </div>
    <router-view></router-view>
</div>
</div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
	data(){
			return{
				list:[]
			}
	}, 
	methods: {
		getinfoid(){
				var info_id=this.$route.query.info_id;
				var url="http://127.0.0.1:3000/indexinfo?info_id="+info_id
				this.axios.get(url).then(result=>{
					this.list=result.data.data;
					// console.log(this.list)
				})
		},
		addpage(e){
			var add=e.target.dataset.infoid;
			add++;
			this.$router.push("Index_info?info_id="+add)
			this.$router.go(0)
		},
		downpage(e){
			var down=e.target.dataset.infoid;
			down--;
			if(down==0){
				down=1;
			}
			this.$router.push("Index_info?info_id="+down)
			Toast("当前为首页")
			this.$router.go(0)
		}
	},
	created() {
			this.getinfoid();
	},
}
</script>
<style scoped>
#app-index-info .box{
    border-radius: 1px;
    box-shadow:0 1px 2px rgba(0,0,0,.3) ;
    background: #fff;
}
#app-index-info .title{
    color: #333;
    font-size: 25px;
    margin: 0;
    font-family:TIBch,'Classic Grotesque W01','Helvetica Neue',Arial,'Hiragino Sans GB',STHeiti,'Microsoft YaHei','WenQuanYi Micro Hei',SimSun,sans-serif;
}
#app-index-info .img_position{
    vertical-align: bottom;
}
#app-index-info .p-item{
    padding: 19px 0px 14px 9px;
}
#app-index-info .p-span{
    padding: 0px 10px 11px 0px ;
    border-bottom: 1px solid #ddd;
}
#app-index-info .p-span img{
    vertical-align: middle;
    padding: 0px 6px 0px 16px 
}
#app-index-info .p-span span{
    color: #333;
    font: 10px;
}
#app-index-info .content{
    margin:11px 14px 0px 14px;
    line-height: 30px;
    box-shadow:0 1px 2px rgba(0,0,0,.3) ;
    padding: 15px;
}
#app-index-info .go1{
	color: #0aaeed;
}
</style>
