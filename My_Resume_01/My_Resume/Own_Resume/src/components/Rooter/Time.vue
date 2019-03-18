<template>
<div id="app-time">
    <br><br>
    <div class="box" v-for="item of list"  :key="item.id">
    <div > 
        <div class="rivle"></div>
        <div class="content">
        <div class="time-out">{{item.ttime|timeline }}</div>
        <div class="cricle-border"></div>
        <p style="font-size:18px;color:black">{{item.title}}</p>
        <p style="text-indent:20px">
            {{item.tcontent}}
        </p>
        </div>
    </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            list:[]
        }
    },
    methods: {
        getTime(){
            var url="http://127.0.0.1:3000/getTime"
            this.axios.get(url).then(result=>{
                // console.log(result)
                this.list=result.data.data
            })
        }
    },
    created() {
        this.getTime()
    },
}
</script>
<style scoped>
#app-time .box{
    position: relative;
    width: 100%;
    height: 100%;
    top:58px;
}
#app-time .cricle-border{
    position: relative;
    background-color: rgb(238, 15, 15);
    width: 12px;
    height: 12px;
    box-shadow: 0 0 0 4px white, inset 1px 1px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    z-index: 103;
    margin: -8px 18px 6px -51px;
    float: left;
}
#app-time .rivle{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 35%;
    z-index: 100;
    width: 4px;
    height: 100%;
    margin-left: -1px;
    box-shadow: 1px 1px 2px 1px #d7e4ed;
    background-color: #fff;

}
#app-time .content{
    background: #fff;
    width: 50%;
    float: right;
    padding: 0px 15px 13px 15px;
    margin: 25px 24px 16px 0px;
    box-shadow: 1px 2px 5px #d7e4ed;
    border-radius: 5px;
}
#app-time .content::before{
    position: relative;
    top: 14px;
    right: 28px;
    width: 0;
    height: 0;
    content: '';
    border-style: solid;
    border-width: 6px;
    border-color: transparent rgb(240, 31, 31) transparent transparent;
    float: left;
}
#app-time .time-out{
    position: relative;
    top: 9px;
    left: -165px;
}
</style>
