 <template>
 	<div class="rating_pages">
	    <div class="rating_page">
	        <head-top head-title="计算规则" go-back='true'></head-top>
	        <section class="coninfo_container">
	            <div class="coninfo_top">
	            	<h4>计算公式</h4>
	            	<p>[[数值A+数值B]/活动所需人次]取余数+10001</p>
	            	<h4>数值A</h4>
	            	<p>=当前夺宝活动商品最后30条夺宝记录的时间戳之和</p>
	            	<p v-if="iSstateshow">={{paramA}}</p>
	            	<h4>数值B</h4>
	            	<p>=最近一期中国福利彩票“老时时彩”的揭晓结果</p>
	            	<p v-if="iSstateshow">=
	            		<span class="aevr_info">{{getTexttop}}</span>
	            		<span class="qishus">(第{{paramBPeriod}}期)</span> 
	            	</p>
 
	            	<p v-if="iSstate" class="info_p">(为保证数据的正确性，系统将从多个来源获取该期彩票数据进行对比校验，揭晓结果会延时显示)</p>

	            </div>
	            <!-- 揭晓与结束后 -->
	            <div v-if="iSstateshow" class="warp_coninfo">
	            	<div class="chusops">
	            		<p class="chusops_top">计算结果</p>
	            		<p class="inskow">幸运号码：{{getTextcon}}</p>
	            	</div>

	            	<div class="chusops">
	            		<p class="chusops_top">最后30条参与记录</p>
	            		<div class="shuwo_box">
	            			<p class="shuwo_l">夺宝时间</p>
	            			<p class="shuwo_r">对应时间戳</p>
	            		</div>
	            		<ul class="date_list">
	            			<li class="date_list_item" v-for="item in recordLisy">
	            				<p>{{item.createTime}}</p>
	            				<p>{{item.createTimeStamp}}</p>
	            			</li>
	            		</ul>
	            	</div>

	            </div>
	            <!-- 揭晓与结束后 -->
	        </section>
	    </div>
	    <div class="masks"></div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from 'vuex'
    import headTop from 'src/components/header/head'
    import {getWinGoodsRuleParam} from 'src/service/getData'
    import alertTip from 'src/components/common/alertTip'
    import {getImgPath} from 'src/components/common/mixin'
    import {imgBaseUrl} from 'src/config/env'
    import {removeStore} from 'src/config/mUtils'
    //关注列表
    import followList from 'src/components/common/followlist'

    export default {
        data(){
            return{
               winGoodsStatus:'10',//当前夺宝状态 10夺宝中 20待开奖 30夺宝结束
               recordLisy:{},//时间列表
               luckyNum:'',//中奖号码
			   paramBPeriod:'',
			   paramA:'',
			   paramB:'',
            }
        },
        beforeDestroy(){
            //clearTimeout(this.timer)
        },
        components: {
            headTop,
            alertTip,
            followList
        },
        mounted(){
        	this.initData();
        },
        created(){
	        this.winGoodsId = this.$route.query.id;
	    },
        mixins: [getImgPath],
        computed:{
            ...mapState([
                'userInfo', 'imgPath'
            ]),
            //为保证数据  提示显示隐藏
            iSstate(){
            	if(this.winGoodsStatus=="20"||this.winGoodsStatus=="10"){
            		return true;
            	}else{
            		return false;
            	}            	
            },
            //20||30 显示下面两条内容
            iSstateshow(){
            	if(this.winGoodsStatus=="20"||this.winGoodsStatus=="30"){
            		return true;
            	}else{
            		return false;
            	}            	
            },
            //得出 上部计算接口文案
            getTexttop(){
            	if(this.winGoodsStatus=="20"){
            		return "正等待揭晓...";
            	}else if(this.winGoodsStatus=="30"){
            		return this.paramB;
            	} 
            },
            //得出 中部计算接口文案
            getTextcon(){
            	if(this.winGoodsStatus=="20"){
            		return "等待揭晓";
            	}else if(this.winGoodsStatus=="30"){
            		return this.luckyNum;
            	} 
            },
        },
        methods: {
            ...mapMutations([
                'OUT_LOGIN', 'SAVE_AVANDER'
            ]),


            async initData(){

				//获取数据
				let res = await getWinGoodsRuleParam(this.winGoodsId);
				this.indianaListArr = res.object;
				this.winGoodsStatus=this.indianaListArr.winGoodsStatus;
				this.recordLisy=this.indianaListArr.recordLisy;
				this.luckyNum=this.indianaListArr.luckyNum;//中奖号码
				this.paramBPeriod=this.indianaListArr.paramBPeriod;//老时时彩期号
				this.paramA=this.indianaListArr.paramA;//数值A
				this.paramB=this.indianaListArr.paramB;//数值B

				//console.log(this.paramA)					
			},
            
        },
        watch: {
            userInfo: function (value) {
                if (value && value.user_id) {
                    this.username = value.username;
                    this.infotel = value.mobile;
                    this.avatar = value.avatar;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/style/mixin.scss';

    .chusops{
    	background:#fff;
    	margin-bottom:.6rem;
    	padding:.4rem .9rem;
    	font-size:.48rem;
    	line-height:1rem;
    	.chusops_top{
    		font-size: .6rem;
    		font-weight: 500;
    	}
    	.inskow{
    		color:#B4282D;
    		font-size:.96rem;
    		text-align: center;
    		line-height:2.5rem;
    	}
    	.shuwo_box{
    		@include fj;
    		font-size:.56rem;
    		line-height:1.4rem;
    		color:#818181;
    		p{
    			color:#818181;
    		}
    		.shuwo_l{
    			margin-left: 1rem;
    		}
    		.shuwo_r{
    			margin-right: 1rem;
    		}
    	}
    	.date_list_item{
    		@include fj;
    	}
    }


    .coninfo_top{
    	margin:.65rem .6rem;
    	padding:.45rem;
    	font-size:.56rem;
    	background:#fff;
    	-webkit-box-shadow: 0 0 10px 1px rgba(7, 17, 27, 0.1);
    	box-shadow: 0 0 10px 1px rgba(7, 17, 27, 0.1);
    	border-radius: 4px;
    	line-height:1.2rem;
    	h4{
    		font-size:.6rem;
    		font-weight:500;
    	}
    	p{
    		&.info_p{
    			font-size:.48rem;
    			line-height:.8rem;
    			color:#818181;
    		}
    		span.aevr_info{
    			color:#B4282D;
    		}
    		span.qishus{
    			color:#818181;
    		}
    	}
    }


    .shop_list_container{
        background-color:#f5f5f5;
        padding-bottom:.4rem;
    }
    .rating_page{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f5f5f5;
        z-index: 20222;
        padding-top: 1.95rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .profile-info{
        @include wh(100%,3.1rem);
        .profileinfopanel-upload{
            display: block;
            position: absolute;
            opacity: 0;
            top: 2.35rem;
            left: 0;
            @include wh(100%,3.1rem);
        }
        .headportrait{
            margin-top:.4rem;
            padding:.5rem .4rem;
            @include fj(space-between);
            align-items:center;
            border-top:1px solid #ddd;
            background:#fff;

            h2{
                @include sc(.6rem,#333);
                font-weight:500;
                display:flex;
                align-items:center;
            }
            .headportrait-div{
                span{
                    display:inline-block;

                    svg{
                        @include wh(100%,100%);
                    }
                }
                .headportrait-div-top{
                    @include wh(2rem,2rem);
                    @include borderRadius(50%);
                    vertical-align:middle;
                }
                .headportrait-div-bottom{
                    @include wh(.66667rem,1.4rem);
                    position:relative;
                    top:0.44rem;
                }
            }
        }
        .headportraitwo{
            margin-top:0;
            padding:.3rem .4rem;
            .headportrait-div{
                @include fj(left)
                p{
                    text-align:left;
                    line-height:1.39rem;
                    @include sc(.7rem,#999);
                    margin-right:.2rem;
                    font-weight:100;
                    font-family:Arial;
                }
                .headportrait-div-bottom{
                    top:0;
                }
            }
        }
        .headportraithree{
            border-bottom:1px solid #ddd;
        }
        .bind-phone{
            padding:.4rem .4rem;
            @include sc(.5rem,#666);
        }
        .exitlogin{
            width:96%;
            margin:1.3rem auto 0;
            line-height:1.5rem;
            @include borderRadius(5px);
            text-align:center;
            background:#d8584a;
            @include sc(.6rem,#fff);

        }
        .exitlogin:active{
            opacity:.8;
            background:#C1C1C1;
        }
    }
    .info-router{
        display:block;
    }
    .coverpart{
        @include wh(100%,100%);
        @include allcover;
        .cover-background{
            @include wh(100%,100%);
            @include allcover;
            background:#000;
            z-index:100;
            opacity:.2;
        }
        .cover-content{
            width:94%;
            background:$fc;
            padding:17px;
            position:absolute;
            top:20%;
            left:3%;
            z-index:1000;
            @include borderRadius(5px);
            .sa-icon{
                @include wh(90px,90px);
                border:4px solid #f8bb86;
                @include borderRadius(50%);
                margin:20px auto;
                position:relative;
                .sa-body{
                    @include wh(5px,47px);
                    @include borderRadius(2px);
                    background:#f8bb86;
                    @include cl;
                    top:10px;
                }
                .sa-dot{
                    @include wh(7px,7px);
                    @include borderRadius(50%);
                    background:#f8bb86;
                    @include cl;
                    bottom:10px;
                }
            }
            h2{
                width:100%;
                text-align:center;
                @include sc(30px,#575757);
                font-weight:500;
                margin:25px 0;
            }
            .sa-botton{
                width:100%;
                text-align:center;

                button{
                    display:inline-block;
                    padding:.4rem 1rem;
                    @include borderRadius(5px);
                    @include sc(.6rem,$fc);
                    letter-spacing:1px;
                    margin-top:26px;
                }
                .waiting{
                    background:#C1C1C1;
                    margin-right:.4rem;
                }
                .quitlogin{
                    background:rgb(221, 107, 85);
                }
            }

        }
    }
    @-webkit-keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, 100% {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(.97, .97, .97);
    transform: scale3d(.97, .97, .97);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, 100% {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(.97, .97, .97);
    transform: scale3d(.97, .97, .97);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@-webkit-keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  100% {
    opacity: 0;
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  100% {
    opacity: 0;
  }
}
body .coverpart .cover-animate{
    transition:all 1s;
    animation:bounceIn .6s;
}
body .coverpart .cover-animate-leave{
    animation:zoomOut .4s;
}
.router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
}
.router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
}
</style>
