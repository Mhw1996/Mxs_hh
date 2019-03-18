<template>
    <div id="appback"> 
        <h3 class="header">站长回复留言</h3> 
        <input type="text" name="" id="" placeholder="请输入管理员凭证" class="inp" v-model="card">
        <textarea name="" id="" cols="30" rows="10" style="margin-bottom:-6px;" v-model="msgback"></textarea>
        <button class="btn nextpage" @click="jumpmessage">返回留言页...</button>
        <button class="btn" @click="callback">回复留言</button> 
        
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return {
            msgback:'',
            mid:"",
            card:''
        }
    },
    methods: {
        callback(){
            if(!this.card){
                Toast("这需要通知站长吧");
                return
            } 
            if(!this.msgback){
                Toast("觉得会让你回复么!")
                return;
            }
            this.mid=this.$route.query.mid;
            // console.log(this.msgback)   
            // console.log(this.mid)
            // console.log(this.card)
            var url="http://127.0.0.1:3000/ownback?msgback="+this.msgback
                url+="&mid="+this.mid
                url+="&card="+this.card
            this.axios.get(url).then(result=>{
                // console.log(result)
                if(result.data.code==-1){
                    Toast("凭证号错误")
                    this.msgback=""
                    this.card=""
                }else {
                    Toast("回复留言成功")
                    this.msgback=""
                    this.card=""
                }
            })
        },
        jumpmessage(){
            this.$router.push("/Message")
        }
    },
}
</script>
<style scoped>
#appback{
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fff;
}
#appback .header{
    margin-top:20%;
    text-align: center;
    color: rgb(77, 13, 6);
    font-family: "幼圆"
}
#appback .inp{
    margin-top: 10%;
    margin-bottom: 0px
}
#appback .btn{
    width: 50%;
    background: rgb(211, 179, 0);
    color: #fff;
    /* border:1px solid #ddd; */
    border:0px;
    border-radius: 0px;
}
#appback .nextpage{
    background: rgb(0, 165, 194)
}
</style>
