<template>
    <div id="app-spring">
        <br><br>
        <div  v-for="item of list" :key="item.id">
            <div class="imgs001">
                <img  alt="" class="img001" v-lazy="item.spr_img">
            </div>
        </div>
    </div>
</template>
<script>
// import { Lazyload } from 'mint-ui';
export default {
    data(){
        return{
            num:1,
            list:[]
        }
    },
    methods: {
        childClick(){
            this.$emit("FatherNum",this.num)
        },
        getSpring(){
            var url="http://127.0.0.1:3000/spring"
            this.axios.get(url).then(result=>{
                this.list=result.data.data
                // console.log(this.list)
            })
        }
    },   
    created() {
        this.childClick()
        this.getSpring()
    }, 
}
</script>
<style scoped>
 #app-spring  .imgs001{
     width: 100%;
}
 #app-spring  .img001{
    width: 100% !important;
}
</style>
