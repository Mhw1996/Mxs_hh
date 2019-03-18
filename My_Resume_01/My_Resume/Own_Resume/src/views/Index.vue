<template>
<div id="app-index">
 <Swipe></Swipe>  
  <!--在此处循环卡片的内容  -->
  <input type="text" placeholder="请输入感兴趣的文章" class="input_search" v-model="search">
  <!-- <button class="btn_search">搜索</button> -->
<div class="card" v-for="item of filteredBlogs" :key="item.id">
    <div class="card-item">
        <img :src="item.dex_img" alt="" @click="jumpIndexinfo" :data-count="item.dex_count" :data-dexid="item.dex_id" :data-infoid="item.info_id">
    </div>
    <p class="text-color">{{item.dex_title}}</p>
    <p class="text-content">{{item.dex_intro|snippet}}</p>
    <p class="card-foo">
    <span class="text-time">{{item.dex_time|datetimeFilter}} 
        <span>{{item.dex_type}}</span>
    </span>
    <span style="float:right;padding:0px 11px 5px 0px;">
			阅读:{{item.dex_count}}
			</span>
    </p>
</div>
<p style="margin:0px 5px 5px 5px;">
    <button class="index-btn" @click="getIndex">点击加载更多...</button>
</p>
<router-view></router-view>
</div>
</template>
<script>
import Swipe from "@/views/Swipe.vue"
import {Toast} from "mint-ui";
export default {
	data(){
			return{
				list:[],
				pno:0,
				pageSize:5,
				count:'',
				search:''
			}
	},
	methods: {
		getIndex(){
			var pageSize=this.pageSize;
			this.pno++
			var url="http://127.0.0.1:3000"
					url+="/index1?pno="+this.pno;
					url+="&pageSize="+pageSize;
			this.axios.get(url).then(result=>{
				if(result.data.code==1){
				var rows=this.list.concat(result.data.data)
				this.list=rows;
				// console.log(result)
				}else{
					Toast("没有看尽兴吧,等我更新!!!")
				}
			})
		},
		jumpIndexinfo(e){
			var dex_count=e.target.dataset.count;
					dex_count++
			var dex_id=e.target.dataset.dexid;
			var info_id=e.target.dataset.infoid;
		 this.$router.push("Index_info?info_id="+info_id);
			var url="http://127.0.0.1:3000"
					url+="/addinfo?dex_count="+dex_count
					url+="&dex_id="+dex_id
			this.axios.get(url).then(result=>{
				// console.log("将增加的数量返hui"+result)
			})
		},
	},
	created() {
		this.getIndex()
	},
	components:{
		Swipe
	},
	computed: {
		filteredBlogs:function(){
			return this.list.filter((item)=>{
				return item.dex_title.match(this.search)
			})
		}
	},
}
</script>

<style scoped>
#app-index .card{
    border-radius: 1px;
    box-shadow:0 1px 2px rgba(0,0,0,.3) ;
    margin: 20px 6px 0px 6px;
    padding: 0px 0px 0px 0px;
    background: #fff;
}
#app-index .card-item{
    text-align: center;
}
#app-index .card-item img{
    width: 100%;
    height: 184px;   
		border-bottom:1px solid #ddd;	
}
#app-index .text-color{
    font-size: 19px;
    color: #1c1616;
    font-family: "TIBch,'Classic Grotesque W01','Helvetica Neue',Arial,'Hiragino Sans GB',STHeiti,'Microsoft YaHei','WenQuanYi Micro Hei',SimSun,sans-serif";
    padding: 10px 0px 0px 7px;
    line-height: 29px;
    text-align: left;
}
#app-index .text-content{
    padding: 0px 8px 0px 8px;
    font-size: 14px;
    color: #999;
}
#app-index .text-time{
    padding:8px;
    color: black;
}
#app-index .card-foo{
    padding: 0px 0px 13px 0px;
}
#app-index .index-btn{
    background:#F7F7F7;
    border:1px solid #ddd;
    width: 100%;
    color: rgb(114, 107, 107);
	margin-top:10px; 
}
#app-index .input_search{
	margin: 0px 0px -10px 0px;
	border: 0px;
	border-radius: 0px;
	color: rgb(185, 7, 7) !important;
	
}
</style>