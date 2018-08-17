<template>
    <div id="header">
        <div class="bg">
           <div class="nav">
                <ul>
                    <li class="A"><router-link to="/song">ACG</router-link></li>
                    <li class="B"><router-link to="/song">Song</router-link></li>
                    <li class="C"><router-link to="/song">Cartoon</router-link></li>
                    <li class="D"><router-link to="/song">Movie</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="less" scope>
    #header{
        overflow: hidden;
        .bg{
            height: 180px;
            background: url('/resource/image/header.png') no-repeat 50% 0;
        }
        .nav{
            position: relative;
            height: 140px;
            width: 900px;
            margin: 0 auto;
            ul{
                position: absolute;
                bottom: 0;
                right: 0;
                li{
                    display: block;
                    float: left;
                    a{
                        color: #000;
                        padding: 5px 15px;
                        text-decoration-line: none;
                    }
                }
                &:after{
                    display: inline-block;
                    content: " ";
                    clear:both;
                }
            }
        }
    }
</style>
<script>
export default {
    name: 'header',
    data() {
        return {
            
        }
    }
    , methods: {
        
    }
}
</script>