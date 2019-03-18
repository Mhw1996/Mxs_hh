<template>
    <div id="app-autumn">
        <br><br>
       <div v-for="item of list" :key="item.id">
            <div class="box">
                <img  alt=""  v-lazy="item.aut_img" class="items">
            </div>
        </div>
    </div>
</template>
<script>
export default {
     data(){
        return{
            num:3,
            list:[]
        }
    },
    methods: {
        childClick(){
            this.$emit("FatherNum",this.num)
        },
        getAutumn(){
            var url="http://127.0.0.1:3000/autumn"   
            this.axios.get(url).then(result=>{
                // console.log(result)
                this.list=result.data.data
            })
        }
    },   
    created() {
        this.childClick()
        this.getAutumn()
    },
}
</script>
<style scoped>
#app-autumn .box{
    width: 100%;
}
#app-autumn   img{
    width: 100% !important;
    border-radius: 3px;
}
</style>
