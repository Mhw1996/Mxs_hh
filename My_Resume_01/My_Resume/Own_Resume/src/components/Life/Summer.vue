<template>
    <div id="app-summer">
        <br><br>
        <div v-for="item of list" :key="item.id">
            <div class="box">
                <img  alt=""  v-lazy="item.sum_img" class="items">
            </div>
        </div>
    </div>
</template>
<script>
export default {
     data(){
        return{
            num:2,
            list:[]
        }
    },
    methods: {
        childClick(){
            this.$emit("FatherNum",this.num)
        },
        Summer(){
            var url="http://127.0.0.1:3000/summer"
            this.axios.get(url).then(result=>{
                // console.log(result)
                this.list=result.data.data
            })
        }
    },   
    created() {
        this.childClick()
        this.Summer()
    },
}
</script>
<style scoped>
#app-summer .box{
    width: 100%;
}
#app-summer   img{
    width: 100% !important;
    border-radius: 3px;
}
</style>
