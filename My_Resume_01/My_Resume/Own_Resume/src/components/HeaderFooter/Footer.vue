<template>
    <div id="app-footer">
        <router-view></router-view>
        <div class="Artical">
            <p class="num">备案号:00110011</p>    
        </div> 
    </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style scoped>
#app-footer .Artical{
    width: 100%;
    height: 100px;
    background: rgb(185, 7, 7);
}
#app-footer .num{
    color: #fff;
    text-align: center; 
    padding-top: 40px;
}
</style>
