<template>
    <div id="home">
       <div v-for="(item, index) in list">{{item}}</div>
    </div>
</template>
<style lang="less" scope>
    #home{
        div{
            display: block;
            font-size: 12px;
            text-align: center;
            color: #222;
        }
    }
</style>
<script>
export default {
    name: 'home',
    data() {
        return {
            list: []
        }
    }
    , created:function() {
        this.loadsong();
    }
    , methods: {
        loadsong(){
            var that = this;
            this.$http.get('/web/src/config.json',{emulateJSON:true})
            .then((res)=>{
                console.log(res)
                if(res){
                    that.list = res.data.greetText;
                    console.log(that.list);
                }
            },()=>{
                console.log("fail");
            });
        }
    }
}
</script>