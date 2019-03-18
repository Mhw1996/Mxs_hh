<template>
<div id="app-swipe">
<br><br>
    <mt-swipe :auto="3000" id="ex01">
        <mt-swipe-item v-for="item of list"  :key="item.id">
            <router-link to="">
                <img :src="item.swipe_img">
            </router-link>
        </mt-swipe-item>
    </mt-swipe>
</div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    methods: {
    getSwipe(){
        var url="http://127.0.0.1:3000/swipe_img"
        this.axios.get(url).then(result=>{
            // console.log(result)
            this.list=result.data
        })
    }
    },
    created() {
        this.getSwipe()
    },
}
</script>
<style scoped>
 #app-swipe  #ex01{
    width: 100%;
    height: 158px;
}
#app-swipe  #ex01 img{
    width: 100%;
    height:160px ;
}
#app-swipe {
    position: relative;
    z-index: -1;
    top: 16px;
}

</style>
