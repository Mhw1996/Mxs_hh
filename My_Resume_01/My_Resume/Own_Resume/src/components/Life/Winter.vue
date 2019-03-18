<template>
    <div id="app-winter">
        <br><br>
         <div v-for="item of list" :key="item.id">
            <div class="box">
                <img  alt=""  v-lazy="item.win_img" class="items">
            </div>
        </div>
    </div>
</template>
<script>
export default {
      data(){
        return{
            num:4,
            list:[]
        }
    },
    methods: {
        childClick(){
            this.$emit("FatherNum",this.num)
        },
        getWinter(){
            var url="http://127.0.0.1:3000/winter"
            this.axios.get(url).then(result=>{
                this.list=result.data.data
            })
        }
    },   
    created() {
        this.childClick()
        this.getWinter()
    },
}
</script>
<style scoped>
#app-winter .box{
    width: 100%;
}
#app-winter   img{
    width: 100% !important;
    border-radius: 3px;
}
</style>
