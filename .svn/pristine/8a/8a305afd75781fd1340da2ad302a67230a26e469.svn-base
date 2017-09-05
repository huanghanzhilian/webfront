<template>
    <div class="profile_page">

        <router-link  :to="{path: '/coninfo/ruleone', query:{ id: 1}}" tag="li" class="info-data-link">
            hello
        </router-link>


        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>

    </div>
</template>

<script>
//引入头部
import headTop from 'src/components/header/head'
//引入尾部
import footGuide from 'src/components/footer/footGuide'
//引入vuex全局缓存
import {mapState, mapMutations} from 'vuex'
//引入环境切换配置
import {imgBaseUrl} from 'src/config/env'
//组件混合(包括：指令-下拉加载更多，处理图片地址)
import {getImgPath} from 'src/components/common/mixin'

import {getStore,setStore,removeStore} from 'src/config/mUtils'

//数据接口
import {getMyCollection,sendLogins} from 'src/service/getData'


export default {
	//初始化数据
    data(){
        return{

        }
    },
    //初始化执行方法
    mounted(){
        //this.initData();        
    },
    created(){

    },
    mixins: [getImgPath],
    //注册组件
    components:{
        headTop,
        footGuide,
    },
    //实时计算 得出某个数据的最新数据
    computed:{
        ...mapState([
            'userInfo','foolow','like'
        ]),       
    },
    //方法函数
    methods:{
        ...mapMutations([
            'SAVE_AVANDER','SER_FOOLOW','SER_LIKE','SER_USERINFOH'
        ]),
        

    },
    //观察
    watch: {

    }
}

</script>

<style lang="scss" scoped>
   @import 'src/style/mixin';

    .profile_page{
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
   .profile-number{
        background:#fff;
        text-align: center;
        .user_name{
            line-height: 2rem;
            color: #333;
            font-size: .6rem;
        }
        img{
            width:2.5rem;
            height:2.5rem;
            border-radius: 50%;
        }
   }
   .info-data{
        //width:100%;
        background:$fc;
        box-sizing: border-box;
        padding: 0 2rem;
        ul{
            .info-data-link{
                float:left;
                width:50%;
                display:inline-block;
                //border-right:1px solid #f1f1f1;
                span{
                    display:block;
                    width:100%;
                    text-align:center;
                }
                .info-data-top{
                    @include sc(.64rem,#333);
                    padding: .853333rem 0 .453333rem;
                    b{
                        display:inline-block;
                        @include sc(1.2rem,#333);
                        font-weight:700;
                        line-height:1rem;
                        font-family: Helvetica Neue,Tahoma;
                    }
                }
                .info-data-bottom{
                    @include sc(.48rem,#818181);
                    font-weight:400;
                    padding-bottom:.553333rem;

                }
            }
            .info-data-link:nth-of-type(2){
                .info-data-top{
                    b{
                        color:#333;
                    }
                }

            }
            .info-data-link:nth-of-type(3){
                border:0;
                .info-333{
                    b{
                        color:#6ac20b;
                    }
                }
            }
        }
   }
   .profile-1reTe{
        margin-top:.4rem;
        background:$fc;
        .myorder{
            padding: 0 .6rem;
            display:flex;
            align-items: center;
            &:last-child .myorder-div{
              border-bottom: none;
            }
            aside{
                @include wh(.7rem,.7rem);
                margin-left:-.866667rem;
                margin-right:.266667rem;
                display:flex;
                align-items: center;
                svg{
                    @include wh(100%,100%);
                }
            }
            .myorder-div{
                width:100%;
                border-bottom:1px solid #f1f1f1;
                padding:.533333rem 0 .533333rem 0;
                @include sc(.56rem,#333);
                display:flex;
                justify-content:space-between;

                span{
                    display:block;
                }
                .myorder-divsvg{
                    color:#7f7f7f;
                    @include wh(.46667rem,.466667rem);
                    svg{
                        @include wh(100%,100%);
                    }
                }
            }
        }
        .myorder:nth-of-type(3) .myorder-div{
            border:0;
        }
    }
    .profile-1reTe2{
        margin-top: 3rem;
        line-height: 1.8rem;
        text-align: center;
        font-size: .56rem;
        color:#ccc;
        span{
            color:#ccc;
        }
    }







    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }



    
</style>
