<template>
	<!-- 组件盒子 -->
	<div class="confirmOrder_container">
		<section v-if="!showLoading">
			<!-- 公共头部 -->
			<head-top goBack="true" :head-title="headTitle">
	    	</head-top>

	    	<!-- 收货地址 -->
	    	<!--<router-link :to='{path: "/confirmOrder/chooseAddress"}' class="address_container">
	            <div class="address_empty_left">
	                <div class="">
	            </div>
	        </router-link>-->
	        <router-link v-if="!choosedAddress" :to='{path: "/confirmOrder/addressc"}' class="address_container">
	            <div  class="address_empty_no">
	            	<span class="show_nocife">暂无收货地址，立即新建</span>
	                <span class="myorder-divsvg icon-wode_icon_xiayiji"></span>
	            </div>
	        </router-link>

	        <router-link v-if="choosedAddress" :to='{path: "/confirmOrder/chooseAddress"}' class="address_container">
	            <div  class="address_empty_no">
	            	<div class="slppw">
	            		<div class="address_empty_l">
		            		<p class="rusml">收货人：</p>
		            		<span v-if="choosedAddress.isDefault=='1'" class="moren">默认</span>
		            	</div>
		            	<div class="address_empty_c">
		            		<p class="address_empty_c_top">
		            			<span>{{choosedAddress.receiverName}}</span>&emsp;&emsp;
		            			<span>{{choosedAddress.receiverPhone}}</span>
		            		</p>
		            		<p class="address_empty_c_c">{{choosedAddress.detailAddress}}</p>
		            	</div>
		            	<div class="address_empty_r"></div>
	            	</div>

	                <span class="myorder-divsvg icon-wode_icon_xiayiji"></span>
	            </div>
	        </router-link>


	        <!-- 收货地址 -->
	        <section class="food_list">
	        	<div class="food_list_box">

	        		<router-link tag='div' :to='{path: "/details", query:{ goodsId: item.goodsId}}' class="food_list_wrap" v-for="(item,index) in confirmListArr">
		        		<!--<header class="item_yop">
			                <img :src="item.attachmentUrl">
			                <span>张大千</span>
			            </header>-->
			            <div class="item_com">
			            	<img class="image_iten" :src="item.attachmentUrl">
			            	<div class="item_info_box">
			            		<p class="item_info_top">
			            			<span>{{item.goodsName}}</span>
			            			<span>×{{item.goodsNum}}</span>
			            		</p>
			            		<p class="item_info_top2">定制</p>
			            		<p class="info_money">￥ {{item.price}}</p>
			            	</div>
			            </div>
			            <div class="item_bottom">
			            	<span>共{{item.goodsNum}}件，</span><span>合计：￥ {{item.goodsMoney}}</span>
			            </div>
		        	</router-link>



	        	</div>
	        </section>
	        <!-- 订单列表 -->


	        <!-- 配送方式 -->
	        <section class="pay_way container_style">
	            <router-link :to='{path: "/confirmOrder"}' class="header_style">
	                <span>配送方式</span>
	                <div class="more_type">
	                    <span class="ellipsis">快递 免邮</span>
	                </div>
	            </router-link>
	            <!--<router-link :to='{path: "/confirmOrder/remark"}' class="header_style">
	                <span>使用优惠劵</span>
	                <div class="more_type">
	                    <span class="ellipsis">使用优惠劵</span>
	                </div>
	            </router-link>-->

	        </section>
	        <!-- 配送方式 -->




	    	<!--<div>{{mucartList}}</div>-->
	    	<div class="confirmOrder_wrap">
	    		<section class="confrim_order">
	                <p>总计 ¥{{confirmListObj.totalMoney}}</p>
	                <p @click="confrimOrder">确认</p>
	            </section>
	    	</div>
		</section>

		<loading v-if="showLoading"></loading>
		<alert-tip v-if="showAlert" @closecont="showAlert = false" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>

		<toast ref="toast"></toast>

		<!-- 子页面 -->
		<transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
        <!-- 子页面 -->

	</div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import {unifiedorder,previewOrder,createOrder} from 'src/service/getData'
import {getStore,setStore,removeStore} from 'src/config/mUtils'
import headTop from 'src/components/header/head'
import loading from 'src/components/common/loading'
import alertTip from 'src/components/common/alertTip'
import Toast from 'src/components/common/Toast'

export default {
	//数据
	data(){
		return {
			headTitle:"确认订单",//页面标题
			showLoading: true, //显示加载动画
			showAlert: false, //弹出框
            alertText: null, //弹出框内容

			confirmListObj:{},//订单预览数据
			confirmListArr:[],//订单预览数据列表
			choosedAddress: null,//地址
		}
	},
	//创建
	created(){
		//初始化获得确认订单列表
		this.INIT_BUYCART();
		//console.log(this.getStatus(this.$route.path))
    },
	//安装
	mounted(){
		//console.log(this.mucartList)
		this.initData();
	},
	//需要使用的模块
	components: {
		headTop,
		loading,
		alertTip,
		Toast
	},

	//父组件的参数书
	props: [],

	//需要引用的外部js方法
	mixins: [],

	//计算值 这里可以实时监听某个数据的变化
	computed: {
		...mapState([
			'mucartList','addressIds'
		]),
	},
	updated(){
		// console.log(this.supportIds, this.sortByType)
	},
	//方法
	methods: {
		//注入vuex方法
		...mapMutations([
            'INIT_BUYCART'
        ]),
		async initData(){
			//获取数据
			let muct=JSON.stringify(this.mucartList)
			let res = await previewOrder(muct,this.addressIds);
			this.confirmListObj = res.object;
			this.confirmListArr = res.object.orderGoodsList;
			//获取地址信息
			this.choosedAddress=res.object.address;
			//数据渲染完毕关闭动画
			this.showLoading = false;
			//console.log(this.confirmListArr)
		},



		//启明
		async confrimOrder(){
			//console.log(this.$router);
			//console.log(this.$route);
			let url=this.$route.fullPath;
			setStore('tabUrl', this.$route.fullPath);
			//如果有id和电话号码  直接可以夺宝
			if(getStore('userId')&&getStore('userPhone')&&getStore('userPhone')!="undefined"){
				//alert("可以")
				//
				//console.log(this.choosedAddress);
				if(!this.choosedAddress){
					this.showAlert = true;
	                this.alertText = '请添加一个收获地址';
	                return
				}

				let muct=JSON.stringify(this.mucartList)
				await createOrder(this.choosedAddress.id,muct).then(res => {
	        		if(res.success){
	        			//this.$refs.toast.show('');
	        			this.addPayment(res.object);
	        		}else{
	        			this.$refs.toast.show(res.message);
	        		}
	        	});
            }else if(getStore('userId')&&(getStore('userPhone')=="undefined"||!getStore('userPhone'))){
            	//如果有id但是没有手机号去登入页面
            	this.$router.push('/login')

            }


		},

		//立洋
		async addPayment(res){
			var uesrinfo=JSON.parse(getStore('userInfo'));
			let orderId=res.orderId
			//调用支付接口
			await unifiedorder(uesrinfo.openId,res.payLogId).then(res => {
        		if(res.success){
        			//唤起微信
        			this.onBridgeReady(res.object,orderId);
        			//this.initData();
        		}else{
        			this.$refs.toast.show(res.message);
        		}
        	});
		},


		//关闭弹窗
		showAlertop(){
			this.showAlert=false;
		},

		/**
		* @method 支付费用方法
		* @param data:后台返回的支付对象,(详情微信公众号支付API中H5提交支付);
		*/
		onBridgeReady: function(data,orderId) {
			var  vm = this;
			WeixinJSBridge.invoke('getBrandWCPayRequest', {
				"appId": data.appId,//公众号名称，由商户传入
				"timeStamp": data.timeStamp,//时间戳，自1970年以来的秒数
				"nonceStr": data.nonceStr,//随机串
				"package": data.package,
				"signType": data.signType,//微信签名方式：
				"paySign": data.paySign //微信签名
			},function(res) {
				// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
				if (res.err_msg == "get_brand_wcpay_request:ok") {
					//alert("支付成功,转页面" + res.err_msg);
					vm.$refs.toast.show("支付成功");
					vm.$router.push("/order/orderDetail?id="+orderId+"");
					//vm.$router.push("/msite");
					//this.$router.push('/login')
				} else {
					vm.$refs.toast.show("支付失败");
					vm.$router.push("/order/orderDetail?id="+orderId+"");
					//alert("支付失败,转页面" + res.err_msg);
					//vm.$router.push("/msite");
					//alert("支付失败,请跳转页面" + res.err_msg);
				}
			});
		},
		getStatus (urlStr) {
	      var urlStrArr = urlStr.split('/')
	      return urlStrArr[urlStrArr.length - 1]
	    }



	},

	watch: {

		'$route' (to, from) {
			this.initData();
			//console.log(to)
			//console.log(from)
			//console.log(this.getStatus(this.$route.path))
		}

	}
}
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';

	//默认地址
	.slppw{
		margin-right:.8rem;
		display: flex;
		padding:.6rem 0;
		font-size:.56rem;
	    line-height: 1rem;
	    .address_empty_l{
	    	width:3rem;
	    	.moren{
	    		border: 0.025rem solid #B4282D;
    		    border-radius: 3px;
    		    color:#B4282D;
    		    padding:0 .2rem;
	    	}
	    }
	    .address_empty_c_c{
	    	color:#818181;
	    	font-size:.48rem;
	    	line-height: .7rem;
	    }
	    .address_empty_c{
	    	flex: auto;
	    }
	}

	//配送
	.container_style{
        background-color: #fff;
        margin-top: .4rem;
        padding: 0 .56rem;
    }
    .pay_way{
        .header_style{
            @include fj;
            line-height: 2rem;
            border-bottom: 0.025rem solid #f1f1f1;
            span{
            	font-size:.56rem;
            }
            span:nth-of-type(1){
                @include sc(.56rem, #333);
            }
            .more_type{
                span:nth-of-type(1){
                    @include sc(.56rem, #333);
                    width: 10rem;
                    display: inline-block;
                    text-align: right;
                    vertical-align: middle;
                }
                svg{
                    @include wh(.5rem, .5rem);
                    fill: #ccc;
                }
            }
        }
        .hongbo{
            @include fj;
            border-top: 0.025rem solid #f5f5f5;
            span{
                @include sc(.6rem, #aaa);
                line-height: 2rem;
                svg{
                    @include wh(.5rem, .5rem);
                    vertical-align: middle;
                    fill: #ccc;
                }
            }
            span:nth-of-type(2){
                color: #aaa;
            }
        }
        .support_is_available{
            span{
                color: #666;
            }
        }
    }

	//列表

	.food_list{

		margin-top:.6rem;
		.food_list_wrap{
			padding:0 .6rem;
			background:#fff;
			margin-bottom:.6rem;
		}
		.item_yop{
			display:block;
			display:flex;
			box-align: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			padding:.48rem 0;
			border-bottom: 0.025rem solid #f1f1f1;
			img{
				width:.64rem;
				height:.64rem;
				display:block;
				border-radius: 50%;
				margin-right: .3rem;
			}
		}

		.item_com{
			display: flex;
			padding:.4rem 0;
			.image_iten{
				width:3.2rem;
				height:3.2rem;
				display:block;
				margin-right: .4rem;
			}
			.item_info_box{
				flex: auto;
				position: relative;
				.item_info_top{
					@include fj;
				}
				.item_info_top2{
					color:#818181;
					margin-top: .24rem;
					font-size:.48rem;
				}
				.info_money{
					position: absolute;
					bottom: 0;
				}
			}


		}

		.item_bottom{
			border-top: 0.025rem solid #f1f1f1;
		    line-height: 1.7rem;
		    text-align: right;
		    color:#818181;
		    span{
		    	color:#818181;
		    }
		}
	}

	.confirmOrder_container{
		padding-top: 1.95rem;
    	padding-bottom: 2rem;
    	font-size:.56rem;
	}

	.address_empty_no{
		min-height: 3.4rem;
		padding: 0 .6rem;
		position: relative;
		background:#FFF url(../../images/icon/shouhuodizhi_caitiao@2x.png) 0 0 repeat-x;
		background-size: auto .2rem;
		.show_nocife{
			color:#B4282D;
			font-size:.72rem;
			display:block;
			text-align: center;
			line-height: 3.4rem;
		}
		.myorder-divsvg{
			right:.6rem;
			@include ct;
		}
	}

	//底部确订单
	.confrim_order{
        display: flex;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 2rem;
        p{
            line-height: 2rem;
            @include sc(.75rem, #333);
        }
        p:nth-of-type(1){
            background-color: #fff;
            flex: 5;
            padding-left: .7rem;
        }
        p:nth-of-type(2){
            flex: 3;
            background-color: #B4282D;
            text-align: center;
            @include sc(.75rem, #fff);
        }
    }

    .screen_cover{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(51,51,51,0.80);
        z-index: 111;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }

    //切换子页面样式
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>