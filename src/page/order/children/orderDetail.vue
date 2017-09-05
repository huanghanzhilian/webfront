 <template>
  <div class="order_detail_page">
        <head-top head-title="订单详情" go-back='true'></head-top>

        <section v-if="!showLoading" id="scroll_section" class="scroll_container">
            <div class="order_titel">
            	<div class="sopwser" v-if="orderStatus==='0'">
            		<h4 class="order_state">等待您付款</h4>
	            	<p>{{orderData.statusDesc}}</p>
            	</div>

            	<div class="sopwser" v-if="orderStatus==='3000'">
            		<h4 class="order_state">交易成功</h4>
            	</div>

            	<div class="sopwser" v-if="orderStatus==='4000'">
            		<h4 class="order_state">交易成功</h4>
            	</div>


            	<!-- 待发货 -->
            	<div class="sopwser" v-if="orderStatus==='1000'">
            		<h4 class="order_state">{{orderData.statusDesc}}</h4>
            		<p>卖家正在准备您的宝贝</p>
            	</div>
            	<!-- 待发货 -->

            	<!-- 待收货 -->
            	<div class="sopwser" v-if="orderStatus==='2000'">
            		<h4 class="order_state">卖家已发货</h4>
            		<p>{{orderData.statusDesc}}</p>
            	</div>
            	<!-- 待收货 -->

            	<!-- 买家取消 -->
            	<div class="sopwser" v-if="orderStatus==='-1000'">
            		<h4 class="order_state">{{orderData.orderStatusStr}}</h4>
	            	<p>买家取消</p>
            	</div>
            	<!-- 买家取消 -->

            	<!-- 退货成功 -->
            	<div class="sopwser" v-if="orderStatus==='-2000'">
            		<h4 class="order_state">退货成功</h4>
	            	<p>{{orderData.statusDesc}}</p>
            	</div>
	            	
            </div>

            <div class="order_info">
            	<p class="address_empty_c_top">
        			<span>收货人：{{orderData.receiverName}}</span>&emsp;&emsp;
        			<span>{{orderData.receiverPhone}}</span>
        		</p>
        		<p class="address_empty_c_c">{{orderData.detailAddress}}</p>
            </div>



            <!-- 订单 -->
            <section class="food_list">
	        	<div class="food_list_box">

	        		<div class="food_list_wrap" >
		        		<!--<header class="item_yop">
			                <img src="">
			                <span>张大千</span>
			            </header>-->
			            <router-link tag='div'  class="item_com" v-for="item in orderData.goodsList" :to='{path: "/details", query:{ goodsId: item.goodsId}}'>
			            	<img class="image_iten" :src="item.goodsImg">
			            	<div class="item_info_box">
			            		<p class="item_info_top">
			            			<span>{{item.goodsName}}</span>
			            			<span>×{{item.goodsNum}}</span>
			            		</p>
			            		<p class="item_info_top2">定制</p>
			            		<p class="info_money">￥ {{item.goodsMoney}}</p>
			            	</div>
			            </router-link>
			            <div class="item_bottom">
			            	<span>共{{orderData.goodsNum}}件，</span><span>合计：￥ {{orderData.goodsMoney}}</span>
			            </div>
		        	</div>



	        	</div>
	        </section>
	        <!-- 订单 -->

	        <!-- 订单信息 -->
	        <div class="order_info">
	        	<div class="sowpwaa">
	        		<p class="address_emptyswe">
	        			<span class="slopo">订单编号：</span>
	        			<span>{{orderData.orderId}}<input readonly="readonly" style="opacity: 0; width: 1px;" id="cpLink" v-model="orderData.orderId" /></span>
	        		</p>
	        		<p class="address_empsq" @click="copyLink">复制</p>
	        	</div>
	        	<div class="sowpwaa" v-if="orderData.createTime!=''">
	        		<p class="address_emptyswe">
	        			<span class="slopo">创建时间：</span>
	        			<span>{{orderData.createTime}}</span>
	        		</p>
	        	</div>	
	        	<div class="sowpwaa" v-if="orderData.payTime!=''">
	        		<p class="address_emptyswe">
	        			<span class="slopo">付款时间：</span>
	        			<span>{{orderData.payTime}}</span>
	        		</p>
	        	</div>	

	        	<div class="sowpwaa" v-if="orderData.deliverTime!=''">
	        		<p class="address_emptyswe">
	        			<span class="slopo">发货时间：</span>
	        			<span>{{orderData.deliverTime}}</span>
	        		</p>
	        	</div>	

	        	<div class="sowpwaa" v-if="orderData.receiveTime!=''">
	        		<p class="address_emptyswe">
	        			<span class="slopo">成交时间：</span>
	        			<span>{{orderData.receiveTime}}</span>
	        		</p>
	        	</div>	

	            	
            </div>
	        <!-- 订单信息 -->


            

        </section>


        <div class="confirmOrder_wrap">
        	<!-- 待支付 -->
    		<section class="confrim_order" v-if="orderStatus==='0'">
                <span @click="cancelsOrder">取消订单</span>
                <span @click="confinOrder">去支付</span>
            </section>
            <!-- 待支付 -->

            <!-- 待发货 -->
    		<section class="confrim_order" v-if="orderStatus==='1000'">
                <span @click="shouhou">售后服务</span>
            </section>
            <!-- 待发货 -->

            <!-- 待收货 -->
    		<section class="confrim_order" v-if="orderStatus==='2000'">
                <span @click="shouhou">售后服务</span>
                <span @click="receiveOrders">确认收货</span>
            </section>
            <!-- 待收货 -->





    	</div>

    	<dialo-gue v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" @dialoGue="dialoGue" :alertText="alertText"></dialo-gue>


        <transition name="loading">
            <loading v-if="showLoading"></loading>
        </transition>
        <toast ref="toast"></toast>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import headTop from 'src/components/header/head'
    import {getImgPath} from 'src/components/common/mixin'
    import {orderDetail,cancelOrder,receiveOrder,unifiedorder} from 'src/service/getData'
    import loading from 'src/components/common/loading'
    import BScroll from 'better-scroll'
    import {imgBaseUrl} from 'src/config/env'
    import Toast from 'src/components/common/Toast'
    import {getStore,setStore,removeStore} from 'src/config/mUtils'
    import dialoGue from '../../../components/common/dialoGue'


    export default {

      data(){
            return{
                showLoading: true, //显示加载动画
                orderData: null, //订单信息
                orderStatus:null,

                orderId:null,//订单id

                showAlert: false, //显示提示组件
				alertText: null, //提示的内容
            }
        },
        created(){
            this.orderId = this.$route.query.id;
        },
        mounted(){
            this.initData();
        },
        mixins: [getImgPath],
        components: {
            headTop,
            loading,
            Toast,
            dialoGue
        },
        computed: {
            ...mapState([
                'mucartList'
            ]),
        },
        methods: {
        	//注入vuex方法
			...mapMutations([
	            'SET_MUCART','SER_USERINFOH'
	        ]),
            async initData(){
            	let res = await orderDetail(this.orderId);
            	res.object.goodsList=JSON.parse(res.object.goodsList);
                this.orderData=res.object;
                this.orderStatus=this.orderData.orderStatus;
                //关闭动画
                this.showLoading = false;

            },

            //复制
			copyLink: function () {
			    var url = document.getElementById("cpLink");
			    url.select();
			    document.execCommand("copy");
			    this.$refs.toast.show('复制成功！');
			    //alert('复制成功！');
			    
			},
			//取消订单
			async cancelsOrder(){
				this.alertText="是否取消该订单";
				//this.ispowp=id;
				this.showAlert=true;

				/*await cancelOrder(this.orderId).then(res => {
	        		if(res.success){
	        			this.$refs.toast.show('操作成功');
	        			this.initData();
	        		}else{
	        			this.$refs.toast.show(res.message);
	        		}
	        	});*/
			},
			async cancelsOrderss(){
				this.showAlert = false;
				await cancelOrder(this.orderId).then(res => {
	        		if(res.success){
	        			this.$refs.toast.show('操作成功');
	        			this.initData();
	        		}else{
	        			this.$refs.toast.show(res.message);
	        		}
	        	});

			},

			closeTip(){
            	this.showAlert = false;
	        },
	        dialoGue(){
	        	this.cancelsOrderss();        	
	        	//this.cancelsOrderss(this.ispowp);
	        	//this.$router.push('login')
	        },


			//确认收货
			async receiveOrders(){
				await receiveOrder(this.orderId).then(res => {
	        		if(res.success){
	        			this.$refs.toast.show('操作成功');
	        			this.initData();
	        		}else{
	        			this.$refs.toast.show(res.message);
	        		}
	        	});
			},

			//售后
			shouhou(){
				this.$router.push('/profile/contactser');
			},

			//去支付
			async confinOrder(){
				//console.log(this.orderData.payLogId)
				//this.SET_MUCART(v);		
				let url=this.$route.fullPath;
				setStore('tabUrl', this.$route.fullPath);

				//如果有id和电话号码  直接可以夺宝
				if(getStore('userId')&&getStore('userPhone')&&getStore('userPhone')!="undefined"){
					var uesrinfo=JSON.parse(getStore('userInfo'));
					//调用支付接口
					await unifiedorder(uesrinfo.openId,this.orderData.payLogId).then(res => {
		        		if(res.success){
		        			//唤起微信
		        			this.onBridgeReady(res.object);
		        			//this.initData();
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
				//调用支付接口
				await unifiedorder(uesrinfo.openId,res.payLogId).then(res => {
	        		if(res.success){
	        			//唤起微信
	        			this.onBridgeReady(res.object);
	        			//this.initData();
	        		}else{
	        			this.$refs.toast.show(res.message);
	        		}
	        	});
			},

			/**
			* @method 支付费用方法
			* @param data:后台返回的支付对象,(详情微信公众号支付API中H5提交支付);
			*/
			onBridgeReady: function(data) {
				var  vm = this;
				WeixinJSBridge.invoke('getBrandWCPayRequest', {
					"appId": data.appId,//公众号名称，由商户传入
					"timeStamp": data.timeStamp,//时间戳，自1970年以来的秒数
					"nonceStr": data.nonceStr,//随机串
					"package": data.package,
					"signType": data.signType,//微信签名方式：
					"paySign": data.paySign //微信签名
				},function(res) {
					alert(JSON.stringify(res.err_msg))

					// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
					if (res.err_msg == "get_brand_wcpay_request:ok") {
						//alert("支付成功,转页面" + res.err_msg);
						vm.$refs.toast.show("支付成功");
						vm.initData();
						//vm.$router.push("/msite");
						//this.$router.push('/login')
					} else {
						vm.$refs.toast.show("支付失败");
						vm.initData();
						//alert("支付失败,转页面" + res.err_msg);
						//vm.$router.push("/msite");
						//alert("支付失败,请跳转页面" + res.err_msg);
					}
				});
			},




        },
        watch: {
            userInfo: function (value) {
                if (value && value.user_id) {
                    this.initData();
                }
            }
        }
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';


    .sowpwaa{
    	@include fj; 
    }
    .address_empsq{
    	line-height: 1rem;
	    display: inline-block;
	    border: 0.025rem solid #D8D8D8;
	    border-radius: 3px;
	    margin-left: .4rem;
	    padding: 0 .2rem;
	    color:#D8D8D8;
    }


    //底部确订单
	.confrim_order{
        //display: flex;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 2rem;
        box-shadow: 0 0 10px 1px rgba(7, 17, 27, 0.1);
        background-color:#fff;
        line-height:2rem;
        text-align: right;
        padding:0 .6rem;
        span{
        	line-height:1rem;
        	display: inline-block;
        	border: 0.025rem solid #D8D8D8;
        	border-radius: 3px;
        	margin-left:.4rem;
        	padding:0 .2rem;
        }
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


    .order_titel{
    	background-color:#fff;
    	padding:.4rem .6rem;
    	line-height:1rem;
    	margin-bottom:.6rem;
    }
    .order_info{
    	background-color:#fff;
    	padding:.4rem .6rem;
    	line-height:1rem;

    	.address_empty_c_c{
    		color:#818181;
    	}
    }


    //订单
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



  
    .order_detail_page{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f1f1f1;
        z-index: 3202;
        padding-top: 1.95rem;
        font-size:.56rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .scroll_container{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding-top: 1.95rem;
    }
    .scroll_insert{
        padding-bottom: 3rem;
    }





    .loading-enter-active, .loading-leave-active {
        transition: opacity .7s
    }
    .loading-enter, .loading-leave-active {
        opacity: 0
    }
    
</style>
