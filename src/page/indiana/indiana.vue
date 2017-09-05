<template>
	<!-- 组件盒子 -->
	<div class="indiana_container">
		<!-- 头部 -->
    	<head-top goBack="true" logins="true">
        </head-top>
		<section class="main_container">
    		<!-- 轮播 -->
    		<nav class="indiana_nav">
	    		<div class="swiper-container" id="nev_1">
			        <div class="swiper-wrapper">
			            <div v-for="item in activity" class="swiper-slide food_types_container" >
		            		<div class="link_to_food">
		            			<img :src="item">
		            		</div>
			            </div>
			            <!--<div class="swiper-slide">1</div>
			            <div class="swiper-slide">2</div>-->
			        </div>
			        <div class="swiper-pagination"></div>
			    </div>
	    	</nav>
    	</section>
    	<div class="item_box goods_info_box">
    		<h4 class="goods_name">{{wininfo.goodsName}}</h4>
    		<p class="goods_info">{{wininfo.description}}</p>
    		<p class="goods_price">商品价格：<span>￥ {{wininfo.price}}</span></p>
    	</div>
    	<p v-if="palwpoop==1" class="apswl">恭喜您，您已中奖</p>
    	<!-- 夺宝期号 -->
    	<div class="item_box duobao_info">
    		<div class="duobao_bo" v-if="iskolo==10"> 
    			<p class="duobao_bo_top">夺宝期号：{{winGoodsInfo.periodNo}}</p>
    			<p class="duobao_bo_ero">
    				<span class="reo_line" style="width:0%" ref="abc"></span>
    			</p>
    			<p class="ifon_lpowe"> 
    				<span class="renci">总需{{winGoodsInfo.totalCnt}}人次({{winGoodsInfo.unitMoney}}元/人次)</span>
    				<span class="shengyu">剩余{{winGoodsInfo.remainCnt}}人次</span>	
    			</p>
    		</div>
    		<div class="duobao_bo" v-if="iskolo==20"> 
    			<p class="duobao_bo_top">揭晓倒计时：<span class="alpwoaq">{{remaining}}</span></p>
    			<p class="ifon_lpowe"> 
    				<span class="renci">参与人次：{{conslop}}人次</span>
    			</p>
    			<p class="ifon_lpowe"> 
    				<span class="renci">夺宝期号：{{winGoodsInfo.periodNo}}</span>
    			</p>
    		</div>


			<img v-if="palwpoop==0" :src="luckyUser.userHead" class="privateImages">

    		<div class="duobao_bo" v-if="iskolo==30">
    			
    			<p class="ifon_lpowe" v-if="palwpoop==0"> 
    				<span class="renci">中奖者：{{luckyUser.userName}}</span>
    			</p>
    			<p class="ifon_lpowe"> 
    				<span class="renci">中奖号码：{{luckyUser.luckyNum }}</span>
    			</p>
    			<p class="ifon_lpowe"> 
    				<span class="renci">参与人次：{{conslop}}人次</span>
    			</p>
    			<p class="ifon_lpowe"> 
    				<span class="renci">夺宝期号：{{winGoodsInfo.periodNo}}</span>
    			</p>
    			<p class="ifon_lpowe"> 
    				<span class="renci">揭晓时间：{{winGoodsInfo.endTime }}</span>
    			</p>

    		</div>






    		<div class="inning"> 
    			<span class="hsiow">中奖规则</span>
    		</div>
    	</div>
    	<!-- 夺宝期号 -->
    	<!-- 提示 -->
    	<p class="emptys_data" v-html="isselectNumList"></p>
    	<!-- 提示 -->
    	<!-- 跳转 -->
    	<section class="profile-1reTe">
            <router-link to='/order' class="myorder">
                <div class="myorder-div">
                    <span>商品图文详情</span>
                    <span class="myorder-divsvg icon-wode_icon_xiayiji"></span> 
                </div>
            </router-link> 
            <router-link to='/order' class="myorder">
                <div class="myorder-div">
                    <span>往期夺宝</span>
                    <span class="myorder-divsvg icon-wode_icon_xiayiji"></span> 
                </div>
            </router-link>
        </section>
        <!-- 跳转 -->


        <!-- 本期参与列表 -->
        <div class="participate_list_wrap">
        	<span data-v-874532c4="" class="icon-shouye_icon_youpintuijian splpoa"></span>
        	<ul class="participate_list">
        		<li class="participate_list_item"> 
        			<img src="http://images.cangdu.org/15d9d8207bd3817.svg" class="privateImage">
        			<div class="par_list-info"> 
        				<p class="par_list_top">{{con_remainCnt}}</p>
        				<p class="par_list_top2"> 
        					<span class="par_list_top2_l">IP:122323</span>
        					<span class="par_list_top2_r">2017-09-12</span>
        				</p>
        			</div>
        		</li>
        		<li class="participate_list_item"> 
        			<img src="http://images.cangdu.org/15d9d8207bd3817.svg" class="privateImage">
        			<div class="par_list-info"> 
        				<p class="par_list_top">说三道四多</p>
        				<p class="par_list_top2"> 
        					<span class="par_list_top2_l">IP:122323</span>
        					<span class="par_list_top2_r">2017-09-12</span>
        				</p>
        			</div>
        		</li>
        	</ul>
        </div>
        <!-- 本期参与列表 -->

        <!-- 底部 -->
        <div class="buycarts" v-if="iscanyu">
        	<div class="buycarts_wrap">
        		<div class="buycarts_left">支付：0元</div>
        		<div class="buycarts_right">
        			<span @click="inSubmit">立即参与</span> 
        		</div>
        	</div>
        </div>
        <!-- 底部 -->

        

	</div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import {duobaoDetail,userWinGoods,winGoodsLoop} from 'src/service/getData'
import headTop from 'src/components/header/head'
import {getStore,setStore} from 'src/config/mUtils'
import 'src/plugins/swiper.min.js'
import 'src/style/swiper.min.css'

export default {
	//数据
	data(){
		return {
			indianaListArr:{},//数据
			activity:[],//轮播数据
			wininfo:{},//详情参数
			winGoodsInfo:{},//夺宝信息
			selectNumList:[],//分配给用户的号码
			luckyUser:{},//中奖信息
			iskolo:'',//
			conslop:'',//参与人次
			isthiszk:false,//判断是否为自己中奖

			countNum: 0, //倒计时15分钟


		}
	},
	//开始创建  vue后自动执行
	mounted(){
		//console.log(con_remainCnt)
		//this.$refs.abc.style.width='100%';
		//console.log(this.$refs.abc.style.width)
		this.initData().then(res => {
    		setTimeout(() => {
	        	new Swiper('#nev_1', {
			        pagination: '.swiper-pagination',
			        autoplayDisableOnInteraction : false,
			        loop: true
			    });
	      	}, 10);
	      	if(this.$refs.abc){
	      		this.$refs.abc.style.width=this.con_remainCnt+'%';
	      	}
	      	this.remainingTime();
	      	this.alwiniets();
        });
	},
	beforeDestroy(){
        clearInterval(this.timer);
    },
	//需要使用的模块
	components: {
		headTop
	},

	//父组件的参数书
	props: [],

	//需要引用的外部js方法
	mixins: [],

	//计算值 这里可以实时监听某个数据的变化
	computed: {
		...mapState([
			'userInfo','foolow','like'
		]),
		//时间转换
        remaining: function (){
	    	//d=parseInt(lefttime/(60*60*24));//parseInt求整数(lefttime/(60*60*24));剩余时间毫秒除以（24小时*60分钟*60秒）等于天数
			let h=parseInt(this.countNum/(60*60))>=10?parseInt(this.countNum/(60*60)):'0'+parseInt(this.countNum/(60*60));//parseInt求整数(lefttime/(60*60)%24)剩余时间毫秒除以(60*60)%24)求天剩下的小时数
			let m=parseInt(this.countNum/60%60)>=10?parseInt(this.countNum/60%60):'0'+parseInt(this.countNum/60%60);//parseInt求整数(lefttime/60%60);剩余时间毫秒除以60秒再求除60余数
			let s=parseInt(this.countNum%60)>=10?parseInt(this.countNum%60):'0'+parseInt(this.countNum%60);//求秒余数
            return h+' : ' + m + ' : ' + s;
        },
		//得出是否自己中奖
		palwpoop(){
			if(this.iskolo=="30"&&this.isthiszk){
				return "1";
			}else if(this.iskolo=="30"){
				return "0";
			}
		},
		con_remainCnt(){
			//剩余
			let a=parseInt(this.winGoodsInfo.remainCnt);
			//总数
			let b=parseInt(this.winGoodsInfo.totalCnt);
			let lop=(b-a)/b*100;
			return lop;
		},
		isselectNumList(){
			if(!this.selectNumList.length&&this.winGoodsInfo.winGoodsStatus=="10"){
				return '您没有参与本次夺宝哦';
			}else if(!this.selectNumList.length&&this.winGoodsInfo.winGoodsStatus=="20"){
				return '活动已截止，您未参与';
			}else if(this.selectNumList.length){
				return '<p style="line-height: 1rem;padding-top: .5rem; font-size:.48rem">您的本次夺宝码</p><p style="line-height: 1.5rem; color:#B4282D;">'+this.selectNumList.join(",")+'</p>';
				return '您没有参与本次夺宝哦';
			}
		},
		//是否参与
		iscanyu(){
			if(this.selectNumList.length||this.iskolo=="20"||this.iskolo=="30"){
				return false;
			}else{
				return true;
			}
		}
	},
	updated(){
		// console.log(this.supportIds, this.sortByType)
	},
	//方法
	methods: {
		//注入vuex方法
		...mapMutations([
            'SER_FOOLOW'
        ]),
        //倒计时
        remainingTime(){
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                this.countNum --;
                if (this.countNum == 0) {
                    clearInterval(this.timer);
                    //this.showAlert = true;
                    //this.alertText = '支付超时';
                    this.initData().then(res => {
			    		setTimeout(() => {
				        	new Swiper('#nev_1', {
						        pagination: '.swiper-pagination',
						        autoplayDisableOnInteraction : false,
						        loop: true
						    });
				      	}, 10);
				      	if(this.$refs.abc){
				      		this.$refs.abc.style.width=this.con_remainCnt+'%';
				      	}
				    });
                }
            }, 1000);
        },

        alwiniets(){
        	clearInterval(this.timerq);
            this.timerq = setInterval(() => {
                this.alwinGoodsLoop();
            }, 5000);
        },
        //winGoodsLoop夺宝轮询接口
        async alwinGoodsLoop(){
        	//获取数据
			let res = await winGoodsLoop(this.$route.query.id);
			if(res.success){
				this.winGoodsInfo.remainCnt=res.object.remainCnt;
				this.winGoodsInfo.winGoodsStatus=res.object.winGoodsStatus;
				//活动状态
				this.iskolo=this.winGoodsInfo.winGoodsStatus;
				//参与人次
				this.conslop=parseInt(this.winGoodsInfo.totalCnt)-parseInt(this.winGoodsInfo.remainCnt);
			}

        },
		async initData(){
			if(this.$route.query.id){
				//获取数据
				let res = await duobaoDetail(this.$route.query.id);
				this.indianaListArr = res.object;
				this.wininfo=this.indianaListArr.goodsInfo;
				this.winGoodsInfo=this.indianaListArr.winGoodsInfo;
				this.activity=this.indianaListArr.goodsInfo.picUrl.split(",");
				//分配给用户的号码
				this.selectNumList =this.indianaListArr.selectNumList;
				//中奖者信息
				this.luckyUser=this.indianaListArr.luckyUser;
				//活动状态
				this.iskolo=this.winGoodsInfo.winGoodsStatus;
				//参与人次
				this.conslop=parseInt(this.winGoodsInfo.totalCnt)-parseInt(this.winGoodsInfo.remainCnt);
				//倒计时时间获得
				this.countNum=((Date.parse(new Date(this.winGoodsInfo.endTime)))-(Date.parse(new Date(this.winGoodsInfo.nowTime))))/1000;

				//判断是否为自己中奖
				if(getStore('userId')){
					if(getStore('userId')==this.luckyUser.luckyUserId){
						this.isthiszk=true;
					}
				}
				//console.log(this.countNum)
				//console.log(this.activity)
			}else{
				this.$router.push('/');
			}
		},
		//参加
		async inSubmit(){
			let res = await userWinGoods(this.$route.query.id);
			if(res.success){
				//this.isselectNumList='<p style="line-height: 1rem;padding-top: .5rem; font-size:.48rem">您的本次夺宝码</p><p style="line-height: 1.5rem; color:#B4282D;">"'+res.message+'"</p>'
				this.selectNumList=res.message.split(",");
			}else{
				alert(res.message)
			}
		}

	},

	watch: {
		con_remainCnt: function (value){
			if(this.$refs.abc){
	      		this.$refs.abc.style.width=this.con_remainCnt+'%';
	      	}
		},
	}
}
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';


	.alpwoaq{
		@include sc(1rem,#B4282D);
	}

	.apswl{
		line-height: 1rem;
	    color: #B4282D;
	    padding-left: .6rem;
	    background: #fff;
	    font-size: .8rem;
	    padding-top: .3rem;

	}
	.participate_list_wrap{
		margin-top:.4rem;
		background:#fff;
	}

	.indiana_container{
		padding-bottom: 2rem;
		background:#f5f5f5;
		.splpoa{
			display: block;
		    text-align: center;
		    font-size: .6rem;
		    line-height: 1.6rem;
		    border-bottom: solid .02rem #d9d9d9;
		}
	}

	.privateImages{
			display: inline-block;
		    width: 1.76rem;
		    height: 1.76rem;
		    border-radius: 50%;
		    vertical-align: middle;
		    margin-right:.2rem;
		}


	//本期参与列表
	.participate_list{
		padding:0 .6rem;
		.participate_list_item{
			display:block;
			display:flex;
			box-align: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			padding:.6rem 0;
			border-bottom: solid .02rem #d9d9d9;
			.privateImage{
				display: inline-block;
			    width: 1.76rem;
			    height: 1.76rem;
			    border-radius: 50%;
			    vertical-align: middle;
			}
			.par_list-info{
				margin-left:.48rem;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                .par_list_top{
                	@include sc(.56rem,#333);
                }
                .par_list_top2{
                	@include fj;
                	@include sc(.48rem,#818181);
                	margin-top:.2rem;
                	span{
                		@include sc(.48rem,#818181);
                	}
                }
			}
		}
	}
	

	//轮播
    .indiana_nav{
		background-color: #fff;
		border-bottom: 0.025rem solid $bc;
		height: 14rem;
		.swiper-container{
			@include wh(100%, 100%);
			padding-bottom: 0.6rem;
			.swiper-pagination{
				bottom: 0.2rem;
			}
		}
		.fl_back{
			@include wh(100%, 100%);
		}
		img{
			width:100%;
			height: 14rem;
			display:block;
		}

	}

	//底部
	.buycarts{
    	text-align: center;
    	background-color: #fff;
	    position: fixed;
	    z-index: 100;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    width: 100%;
	    height: 2rem;
	    font-size:.64rem;
	    line-height:2rem;
	    -webkit-box-shadow: 0 0 10px 2px rgba(7, 17, 27, 0.1);
	    box-shadow: 0 0 10px 1px rgba(7, 17, 27, 0.1);
	    padding:0 .6rem;
	    .buycarts_wrap{
	    	@include fj;
			.buycarts_left{
				
			}
			.buycarts_right{
				line-height:2rem;
				span{
					@include wh(5.6rem,1.44rem);
					@include sc(.64rem,#fff);
					line-height:1.44rem;
					//@include ct();
					background: #B4282D;
					display: inline-block;
					margin-top:.3rem;
					border-radius: 4px;
				}
					
			}
	    }

    }

	//跳转列表
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

	//商品信息
	.goods_info_box{
		background:#fff;
		padding: .4rem .6rem;
		line-height: .6rem;
		border-bottom:solid .02rem #d9d9d9;
		.goods_name{
			font-size:.56rem;

		}
		.goods_info{
			color:#818181;
			font-size:.48rem;
			margin:.2rem 0 .4rem;
		}
		.goods_price{
			color:#B4282D;
			span{
				color:#B4282D;
			}
		}
	}

	//夺宝期号
	.duobao_info{
		//@include fj;
		display:block;
        display:flex;
        box-align: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background:#fff;
        padding: .4rem .6rem;
        
        .duobao_bo{
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            border-right: 0.025rem solid #e4e4e4;
            line-height: 1rem;
            padding-right:.6rem;
            .duobao_bo_top{
            	@include sc(0.56rem, #333);
            }
            .ifon_lpowe{
            	@include sc(0.48rem, #818181);

            	@include fj;
            	span{
            		@include sc(0.48rem, #818181);
            	}
            }
        }
		.inning{
			//display:inline-block;

			.hsiow{
				margin-left:.4rem;
			    border: 1px solid #818181;
			    padding:.1rem .3rem;
			    border-radius: 4px;
			    font-size:.52rem;
			}
		}
		.duobao_bo_ero{
			height:.24rem;
			width:100%;
			background:#E8E8E8;
			border-radius: 100px;
			margin:.4rem 0;
			.reo_line{
				display: block;
			    //width: 50%;
			    height: 100%;
			    background: #DEA34C;
			    border-radius: 100px;
			}
		}
	}

	//没有更多了提示
	.emptys_data{
		@include sc(0.64rem, #333);
		text-align: center;
		line-height: 2.24rem;
		background: #FAFAFA;

	}
	.opqsop{
		
	}
	.pwksopp{
		
	}





</style>