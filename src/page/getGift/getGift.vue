<template>
	<!-- 组件盒子 -->
	<div class="indiana_container">
		<!-- 头部 -->
    	<head-top goBack="true" logins="true">
        </head-top>
		<section class="main_container">
    		<!-- 轮播 -->
    		<nav class="indiana_nav">
	    		<div class="swiper-container" id="nev_duo">
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
    		<div class="duobao_bo" v-show="iskolo==20"> 
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
    			<span @click="rulecount" class="hsiow">中奖规则</span>
    		</div>
    	</div>
    	<!-- 夺宝期号 -->
    	<!-- 提示 -->
    	<p class="emptys_data" v-html="isselectNumList"></p>
    	<!-- 提示 -->
    	<!-- 跳转 -->
    	<section class="profile-1reTe">
            <router-link :to="{path: 'details', query:{ goodsId: goodsid}}" class="myorder">
                <div class="myorder-div">
                    <span>商品图文详情</span>
                    <span class="myorder-divsvg icon-wode_icon_xiayiji"></span> 
                </div>
            </router-link> 
            <!--<router-link to='/order' class="myorder">
                <div class="myorder-div">
                    <span>往期夺宝</span>
                    <span class="myorder-divsvg icon-wode_icon_xiayiji"></span> 
                </div>
            </router-link>-->
        </section>
        <!-- 跳转 -->


        <!-- 本期参与列表 -->
        <div class="participate_list_wrap">
        	<span class="icon-safrg splpoa"></span>
        	<wingoods-list :winGoodsId="winGoodsId" :isRefreshList="isRefreshList" ></wingoods-list>
        </div>
        <!-- 本期参与列表 -->

        <!-- 底部 -->
        <div class="buycarts" v-if="iscanyu">
        	<div class="buycarts_wrap">
        		<div class="buycarts_left">支付：0元</div>
        		<div class="buycarts_right">
        			<span @click="inSubmit">立即参与</span> <!-- inSubmit -->
        		</div>
        	</div>
        </div>
        <!-- 底部 -->

        <!-- 底部活动结束 -->
        <div class="buycarts" v-show="palwpoop==0||palwpoop==1">
        	活动已结束
        </div>
        <!-- 底部活动结束 -->


        <!-- 对话提交 -->
        <transition name="toggle-cart">
            <section class="cart_food_list " v-show="showDialogue">
            	<p class="aletapel_top">确认夺宝</p>
            	<div class="item_wrap">
	                <div class="item_maoswo">
	                	<p>参与人次(0元/人次)</p>
	                	<p>剩余{{winGoodsInfo.remainCnt}}人次</p>
	                </div>
	                <!--<div class="item_count">
	                	<div class="item_count_oper">-</div>
	                	<div class="item_count_contenr">1</div>
	                	<div class="item_count_oper">+</div>
	                </div>
	                <div class="skunsers flex">
	                	<span class="skunsers_list flex_v">5</span>
	                	<span class="skunsers_list flex_v">10</span>
	                	<span class="skunsers_list flex_v">15</span>
	                	<span class="skunsers_list flex_v">包尾</span>
	                </div>-->
            	</div>
            	<div class="item_money_wrap">
                	<div class="item_money_some">共计</div>
                	<div class="item_money_number">0元</div>
                </div>
            	<div class="item_confirm" @click="inSubmits">确定</div>
            </section>
        </transition>
        <!-- 对话提交 -->
        <!-- 蒙版 -->
        <transition name="fade">
            <div class="screen_cover" v-show="showDialogue" @click="toggleDialogue"></div>
        </transition>
        <!-- 蒙版 -->



        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>

	</div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import {duobaoDetail,userWinGoods,winGoodsLoop,sendLogins} from 'src/service/getData'
import headTop from 'src/components/header/head'
import wingoodsList from 'src/components/common/wingoodsList'
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
			iskolo:'',//夺宝状态
			conslop:'',//参与人次
			isthiszk:false,//判断是否为自己中奖
			goodsid:'',

			countNum: 1, //倒计时15分钟
			winGoodsId:this.$route.query.id,

			showDialogue: false,//显示对话


			stresop:"10",





		}
	},
	//开始创建  vue后自动执行
	mounted(){
		//console.log(this.$route.fullPath)
		//console.log(this.$route.query.id)
		this.initData().then(res => {
    		setTimeout(() => {
	        	new Swiper('#nev_duo', {
			        pagination: '.swiper-pagination',
			        autoplayDisableOnInteraction : false,
			        loop: true
			    });
			    if(this.$refs.abc){
		      		this.$refs.abc.style.width=this.con_remainCnt+'%';
		      	}
		      	//轮询倒计时
		      	this.alwiniets();
	      	}, 10);  	
        });
	},
	created(){

		this.winGoId = this.$route.query.id;
        this.enshrines();
        //
        //執行微信分享
		var link = window.location.href;
		this.wxShare('巧工艺','在复杂的世界里，做一个简单的人。以清静心看世界，以欢喜心过生活。不浮不躁，淡雅如茶',link)
    },

	beforeDestroy(){
        clearInterval(this.timer);
        clearInterval(this.timerq);
    },
	//需要使用的模块
	components: {
		headTop,
		wingoodsList
	},

	//父组件的参数书
	props: [],

	//需要引用的外部js方法
	mixins: [],

	//计算值 这里可以实时监听某个数据的变化
	computed: {
		...mapState([
			'userInfo','foolow','like','sheowps'
		]),
		
		//是否刷新子列表
		isRefreshList(){
			if(this.winGoodsInfo.winGoodsStatus=="10"||this.winGoodsInfo.winGoodsStatus=="20"){
				return this.winGoodsInfo.remainCnt;
			}
		},

		//时间转换
        remaining: function (){
        	if(this.winGoodsInfo.endTime==undefined||this.winGoodsInfo.nowTime==undefined){
        		return '00:00:00';
        	}else{
        		//d=parseInt(lefttime/(60*60*24));//parseInt求整数(lefttime/(60*60*24));剩余时间毫秒除以（24小时*60分钟*60秒）等于天数
				let h=parseInt(this.countNum/(60*60))>=10?parseInt(this.countNum/(60*60)):'0'+parseInt(this.countNum/(60*60));//parseInt求整数(lefttime/(60*60)%24)剩余时间毫秒除以(60*60)%24)求天剩下的小时数
				let m=parseInt(this.countNum/60%60)>=10?parseInt(this.countNum/60%60):'0'+parseInt(this.countNum/60%60);//parseInt求整数(lefttime/60%60);剩余时间毫秒除以60秒再求除60余数
				let s=parseInt(this.countNum%60)>=10?parseInt(this.countNum%60):'0'+parseInt(this.countNum%60);//求秒余数
	            return h+' : ' + m + ' : ' + s;
        	}
		    	
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
            'SER_FOOLOW','SER_USERINFOH','SER_SHEOWHS'
        ]),
        //控制购物列表是否显示
        toggleDialogue(){
			this.showDialogue = !this.showDialogue;
        },
        //查看是否是微信重定向来的
        async enshrines(){
        	if(!getStore('userId')&&this.$route.query.code){
                var shareId=getStore('shareId')?getStore('shareId'):'';
        		this.userInfos = await sendLogins(this.$route.query.code,shareId);
                if(this.userInfos.success){
                    this.SER_USERINFOH(this.userInfos.object);
                    this.initData().then(res => {
			    		setTimeout(() => {
				        	new Swiper('#nev_duo', {
						        pagination: '.swiper-pagination',
						        autoplayDisableOnInteraction : false,
						        loop: true
						    });
						    if(this.$refs.abc){
					      		this.$refs.abc.style.width=this.con_remainCnt+'%';
					      	}
					      	//轮询倒计时
					      	//this.alwiniets();
				      	}, 10);
			        });
                }
        	}
        },
        //微信授权类
        warrAnt(){
        	//当前url
        	var appid="wx44f0c0399de653fd";
            var resultUrl=encodeURI(window.location.href);
            var open="https://open.weixin.qq.com/connect/oauth2/authorize?appid="
                + appid
                + "&redirect_uri="
                + resultUrl
                + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
            //this.$router.push('market')
            //
            window.location.href=open;
        },
        //参加
		async inSubmit(){
			setStore('tabUrl', this.$route.fullPath);
			//this.SER_SHEOWHS(1);
			
			//如果有id和电话号码  直接可以夺宝
			if(getStore('userId')&&getStore('userPhone')&&getStore('userPhone')!="undefined"){
				//alert("可以抢购")
				this.toggleDialogue();
            }else if(getStore('userId')&&(getStore('userPhone')=="undefined"||!getStore('userPhone'))){
            	//如果有id但是没有手机号去登入页面
            	//alert("没有手机号,去登入页")
            	this.$router.push('/login')

            }else if(!getStore('userId')&&(getStore('userPhone')=="undefined"||!getStore('userPhone'))){
            	//如果没有手机号和没有id  要授权
            	//alert("要授权")
            	this.warrAnt();
            }


			/*
			//如果有id和电话号码  直接可以夺宝
			 if(getStore('userId')&&getStore('userPhone')&&getStore('userPhone')!="undefined"){
				//alert("可以抢购")
				this.toggleDialogue();
            }else if(getStore('userId')&&(getStore('userPhone')=="undefined"||!getStore('userPhone'))){
            	//如果有id但是没有手机号去登入页面
            	//alert("没有手机号,去登入页")
            	this.$router.push('/login')

            }else if(!getStore('userId')&&(getStore('userPhone')=="undefined"||!getStore('userPhone'))){
            	//如果没有手机号和没有id  要授权
            	//alert("要授权")
            	this.warrAnt();
            }*/

		},
		//确定参与
		async inSubmits(){
            	let res = await userWinGoods(this.$route.query.id);
				if(res.success){
					//this.isselectNumList='<p style="line-height: 1rem;padding-top: .5rem; font-size:.48rem">您的本次夺宝码</p><p style="line-height: 1.5rem; color:#B4282D;">"'+res.message+'"</p>'
					this.selectNumList=res.message.split(",");
					
					this.initData().then(res => {
			    		setTimeout(() => {
				        	new Swiper('#nev_duo', {
						        pagination: '.swiper-pagination',
						        autoplayDisableOnInteraction : false,
						        loop: true
						    });
				      	}, 10);
				      	if(this.$refs.abc){
				      		this.$refs.abc.style.width=this.con_remainCnt+'%';
				      	}
				      	//倒计时
		      			//this.remainingTime();
				    });


					this.toggleDialogue();
				}else{
					alert(res.message)
				}
		},
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
				        	new Swiper('#nev_duo', {
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

        //跳转规则页面
		rulecount(){
			this.$router.push('/coninfo/ruleone?id='+this.winGoId+'');			
		},

        //轮询倒计时
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
				//console.log(res)
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
				this.wininfo=this.indianaListArr.goodsInfo;//商品信息
				this.goodsid=this.indianaListArr.goodsInfo.goodsId;//商品id

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

				if(this.winGoodsInfo.endTime!=undefined&&this.winGoodsInfo.nowTime!=undefined){
					this.countNum=(Date.parse(this.winGoodsInfo.endTime.replace(/-/g,'/'))-Date.parse(this.winGoodsInfo.nowTime.replace(/-/g,'/')))/1000;
				}
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


	},

	watch: {
		con_remainCnt: function (value){
			if(this.$refs.abc){
	      		this.$refs.abc.style.width=this.con_remainCnt+'%';
	      	}
		},
		//监听是否进入倒计时
		iskolo:function(value){
				
			if(value=="20"){
				this.initData().then(res => {
		    		setTimeout(() => {
			        	new Swiper('#nev_duo', {
					        pagination: '.swiper-pagination',
					        autoplayDisableOnInteraction : false,
					        loop: true
					    });
					    if(this.$refs.abc){
				      		this.$refs.abc.style.width=this.con_remainCnt+'%';
				      	}

				      	//倒计时
		      			this.remainingTime();
			      	}, 10);
				      	
			    });
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
			font-size:.56rem;
			color:#B4282D;
			span{
				font-size:.56rem;
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



	//蒙版
	.screen_cover{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.6);
        z-index: 1111;
    }
    //对话
    .cart_food_list{
        position: fixed;
        width: 100%;
        z-index: 1112;
        bottom: 0;
        left: 0;
        background-color: #fff;
        font-size:.56rem;
        .aletapel_top{
        	line-height:1.8rem;
    	    border-bottom: solid .02rem #d9d9d9;
    	    text-align: center;
        }
        .item_wrap{
        	padding:1rem 1.15rem;
        	.item_maoswo{
        		@include fj;
        		line-height:1.2rem;
        		font-size:.52rem;
        	}
        	.item_count{
        		display:block;
				display:flex;
				box-align: center;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				line-height:1.58rem;
				border-top: solid .022rem #f2f2f2;
    			border-bottom: solid .022rem #f2f2f2;
				.item_count_contenr{
					-webkit-box-flex: 1;
				    -ms-flex-positive: 1;
				    flex-grow: 1;
				    text-align:center;
				    font-size: .8rem;
				    //border-top:solid .022rem #d9d9d9;
				    //border-bottom:solid .022rem #d9d9d9;
				    line-height:1.54rem;
				}
				.item_count_oper{
					width:1.58rem;
					height:1.58rem;
					background-color:#f2f2f2;
					text-align:center;
					font-size: 1rem;
    				color: #fff;
				}
        	}
        	.skunsers{
        		margin-top: 1rem;
        		.skunsers_list{
        			color:#818181;
        			border: 1px solid #818181;
        			border-radius: .1rem;
        			margin-right:.56rem;
        			text-align: center;
    				line-height: 1rem;

        		}
        		.skunsers_list:last-child{
        			margin-right:0;
        		}
        		
        	}

        }
        .item_money_wrap{
    		text-align: center;
    		padding:.4rem 0;
    		background:#FAFAFA;
    		line-height:1rem;
    		margin-bottom: .6rem;
    		.item_money_some{
    			font-size:.48rem;
    			color:#818181;
    		}
    		.item_money_number{
    			font-size:.8rem;
    			color:#B4282D;
    		}
    	}
        .item_confirm{
    		height:1.9rem;
    		line-height:1.9rem;
    		text-align: center;
    		color:#fff;
    		font-size:.63rem;
    		background:#b4282d;
    	}

    }

    .toggle-cart-enter-active, .toggle-cart-leave-active {
        transition: all .3s ease-out;
    }
    .toggle-cart-enter, .toggle-cart-leave-active {
        transform: translateY(100%);
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }




	.router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }


</style>