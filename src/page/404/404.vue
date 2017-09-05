<template>
    <div class="errorContainer">
        <div id="db-content">
	    	<h3>抱歉，服务器打盹了</h3>
	    	<p>请返回后重新操作~</p>
	    	<img src="//yun.duiba.com.cn/webapp/img/retrylogin.png">
	    </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/head'
    import alertTip from '../../components/common/alertTip'
    import {localapi, proapi, imgBaseUrl} from 'src/config/env'
    import {mapState, mapMutations} from 'vuex'
    import {mobileCode, checkExsis, sendLogin, getcaptchas, accountLogin} from '../../service/getData'
    import {getStore} from 'src/config/mUtils'


    export default {
        data(){
            return {
                
            }
        },
        //创建初始化ajax请求数据
        created(){
            
        },
        //声明页面需要引入的组件
        components: {
            headTop,
            alertTip,
        },
        //计算 实时计算
        computed: {
            
        },
        //组件方法
        methods: {
            ...mapMutations([
                'RECORD_USERINFO',
            ]),
            



        }
    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';











    #db-content {
	    text-align: center;
	    overflow: hidden;
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%,-50%);
	    -webkit-transform: translate(-50%,-50%);
	}
	h3 {
	    font-size: 26px;
	    color: #0d7fd5;
	    margin-bottom: 15px;
	}
	p {
	    font-size: 14px;
	    color: #666;
	    margin-bottom: 19px;
	}
	img {
	    width: 176px;
	    height: 176px;
	}
</style>
