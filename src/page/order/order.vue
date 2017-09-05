 <template>
    <div class="order_page">
        <head-top head-title="订单列表" go-back='true'></head-top>
        

        <!-- 顶部tab -->
        <section class="change_show_type flex" ref="chooseType">
            <span :class='{choo_pe: changeShowType =="recom1"}' @click="switchdoc('recom1')">全部</span>
            <span :class='{choo_pe: changeShowType =="recom2"}' @click="switchdoc('recom2')">待支付</span>
            <span :class='{choo_pe: changeShowType =="recom3"}' @click="switchdoc('recom3')">待收货</span>
            <span :class='{choo_pe: changeShowType =="recom4"}' @click="switchdoc('recom4')">交易成功</span>
            <span :class='{choo_pe: changeShowType =="recom5"}' @click="switchdoc('recom5')">已退款</span>
        </section>
        <!-- 顶部tab -->

        <!-- 全部 -->
        <transition name="fade-choose">
        	<section class="food_list">
        		<ul clss="food_list_box" v-load-more="loaderMore" v-if="confirmListArr.length">
        			<li class="food_list_wrap" v-for="(item,index) in confirmListArr">
		        		<header class="item_yop">
		        			<div class="item_yop_box">
		        				<!--<img :src="item.attachmentUrl">-->
				                <span>订单编号：{{item.orderId}}</span>
		        			</div>
				            <div>{{item.orderStatusDesc}}</div>  
			            </header>
			            <router-link tag='div' :to='{path: "/order/orderDetail", query:{ id: item.orderId}}' class="item_com" v-for="itemz in item.goodsList">
			            	<img class="image_iten" :src="itemz.goodsImg">
			            	<div class="item_info_box">
			            		<p class="item_info_top">
			            			<span>{{itemz.goodsName}}</span>
			            			<span>×{{itemz.goodsNum}}</span>
			            		</p>
			            		<p class="item_info_top2">定制</p>
			            		<p class="info_money">￥ {{itemz.goodsMoney}}</p>
			            	</div>
			            </router-link>
			            <div style="line-height: 1.4rem;text-align: right;">共{{item.goodsTotalNum}}件，合计￥{{item.goodsTotalMoney}}</div>
			            <div class="item_bottom">
			            	<div v-if="item.orderStatus=='0'">
			            		<span @click="cancelsOrder(item.orderId)">取消订单</span>
			            		<span class="zhsuow" @click="confinOrder(item.orderId)">去支付</span>
			            	</div>
			            	<div v-if="item.orderStatus=='1000'">
			            		<span @click="shouhou">售后服务</span>
			            	</div>

			            	<div v-if="item.orderStatus=='2000'">
			            		<span @click="shouhou">售后服务</span>
			            		<span class="zhsuow" @click="receiveOrders(item.orderId)">确认收货</span>
			            	</div>

			            	<div v-if="item.orderStatus=='3000'">
			            		<span @click="shouhou">售后服务</span>
			            	</div>

			            	<!-- 交易关闭 -->
			            	<div v-if="item.orderStatus=='-1000'">
			            		<!--<span>删除订单</span>-->
			            	</div>
			            	<!-- 交易关闭 -->

			            	<div v-if="item.orderStatus=='4000'">
			            		<span @click="shouhou">售后服务</span>
			            	</div>
			            	
			            </div>
		        	</li>

		        </ul>

		        <div class="no_log" v-show="islengthnull && changeShowType=='recom1'">
		            <img src="../../images/icon/kongzhuangtai_icon_quanbu@2x.png">
		            <p>目前数据为空</p>
		        </div>

		        <div class="no_log" v-show="islengthnull && changeShowType=='recom2'">
		            <img src="../../images/icon/kongzhuangtai_icon_daifukuan@2x.png">
		            <p>目前没有待支付的订单</p>
		        </div>

		        <div class="no_log" v-show="islengthnull && changeShowType=='recom3'">
		            <img src="../../images/icon/kongzhuangtai_icon_daifahuo@2x.png">
		            <p>目前没有待收货的订单</p>
		        </div>

		        <div class="no_log" v-show="islengthnull && changeShowType=='recom4'">
		            <img src="../../images/icon/kongzhuangtai_icon_daidaizhifu@2x.png">
		            <p>目前没有待完成的订单</p>
		        </div>

		        <div class="no_log" v-show="islengthnull && changeShowType=='recom5'">
		            <img src="../../images/icon/kongzhuangtai_icon_daihuankuan@2x.png">
		            <p>目前没有已退款的订单</p>
		        </div>



        	</section>
        </transition>


        <transition name="loading">
            <loading v-show="showLoading"></loading>
        </transition>


        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
 		<toast ref="toast"></toast>
 		<dialo-gue v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" @dialoGue="dialoGue" :alertText="alertText"></dialo-gue>

    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import headTop from 'src/components/header/head'
    import computeTime from 'src/components/common/computeTime'
    import loading from 'src/components/common/loading'
    import {getImgPath} from 'src/components/common/mixin'
    import footGuide from 'src/components/footer/footGuide'
    import {getOrderPage,cancelOrder,receiveOrder} from 'src/service/getData'
    import {loadMore} from 'src/components/common/mixin'
    import {imgBaseUrl} from 'src/config/env'
    import Toast from 'src/components/common/Toast'
    import dialoGue from '../../components/common/dialoGue'


    export default {
      data(){
            return{
            	changeShowType: '',//切换显示tab
            	pagenum:1,//页码
				querySize:4,//页条数

				confirmListArr:[],//数据列表

				islengthnull:false,
				ispowp:null,//要删除的订单

				showAlert: false, //显示提示组件
				alertText: null, //提示的内容


                orderList: null, //订单列表
                offset: 0, 
                preventRepeat: false,  //防止重复获取
                showLoading: true, //显示加载动画
                imgBaseUrl
            }
        },
        //创建
		created(){
			//初始化获得确认订单列表
			//this.INIT_BUYCART();
			//console.log(this.$route.path)
			//console.log(this.$route.query.type)
			if(this.$route.query.type){
				this.changeShowType=this.$route.query.type;
			}else{
				this.changeShowType='recom1';
			}
			
	    },

        mounted(){

            //this.initData();
        },
        mixins: [loadMore],
        components: {
            headTop,
            footGuide,
            loading,
            computeTime,
            Toast,
            dialoGue
        },
        computed: {
            ...mapState([
                'userInfo', 'geohash'
            ]),
        },
        methods: {
             ...mapMutations([
               'SAVE_ORDER'
            ]),

            closeTip(){
            this.showAlert = false;
	        },
	        dialoGue(){
	        	this.showAlert = false;
	        	this.cancelsOrderss(this.ispowp);
	        	//this.$router.push('login')
	        },

             //售后
             shouhou(){
             	this.$router.push('profile/contactser');
             },
             //取消订单
			async cancelsOrder(id){
				this.alertText="是否取消该订单";
				this.ispowp=id;
				this.showAlert=true;
				
				/*await cancelOrder(id).then(res => {
	        		if(res.success){
	        			this.$refs.toast.show('操作成功');
	        			this.initData();
	        		}else{
	        			this.$refs.toast.show(res.message);
	        		}
	        	});*/
			},
			//取消订单
			async cancelsOrderss(id){
				await cancelOrder(id).then(res => {
	        		if(res.success){
	        			this.$refs.toast.show('操作成功');
	        			this.initData();
	        		}else{
	        			this.$refs.toast.show(res.message);
	        		}
	        	});
			},
			//确认收货
			async receiveOrders(id){
				await receiveOrder(id).then(res => {
	        		if(res.success){
	        			this.$refs.toast.show('操作成功');
	        			this.initData();
	        		}else{
	        			this.$refs.toast.show(res.message);
	        		}
	        	});
			},
			//去支付
			async confinOrder(id){
				this.$router.push("/order/orderDetail?id="+id+"");
			},



            //切换
	        switchdoc(obj){
	        	this.islengthnull=false;
	        	this.changeShowType=obj;
	        	document.body.scrollTop=0;
	        },
            //初始化获取信息
            async initData(){
            	let type="";
				switch (this.changeShowType){
					case 'recom1':
						type="0";
						break;
					case 'recom2':
						type="1";
						break;
					case 'recom3':
						type="2";
						break;
					case 'recom4':
						type="3";
						break;
					case 'recom5':
						type="4";
						break;
					default:
    					type="0";
    					break;
				}
                /*if (this.userInfo && this.userInfo.user_id) {
                    let res = await getOrderList(this.userInfo.user_id, this.offset);
                    this.orderList = [...res];
                    this.hideLoading();
                }else{
                    this.hideLoading();
                }*/
                this.pagenum=1;
                this.showLoading = true;
                this.confirmListArr=[];
                let res = await getOrderPage(type,this.querySize,this.pagenum);
                this.confirmListArr=[...res.object];
                if(this.confirmListArr.length){
                	this.islengthnull=false;
                }else{
                	this.islengthnull=true;
                }

                this.confirmListArr.forEach(function (res) {
					res.goodsList=JSON.parse(res.goodsList);
	            });
                this.showLoading = false;
                //this.hideLoading();

            },
            //加载更多
            async loaderMore(){
            	let type="";
				switch (this.changeShowType){
					case 'recom1':
						type="0";
						break;
					case 'recom2':
						type="1";
						break;
					case 'recom3':
						type="2";
						break;
					case 'recom4':
						type="3";
						break;
					case 'recom5':
						type="4";
						break;
					default:
    					type="0";
    					break;
				}
                if (this.preventRepeat) {
                    return
                }
                this.preventRepeat = true;
                this.showLoading = true;
                //数据页码+1
				this.pagenum+=1;
                //获取信息
                let res = await getOrderPage(type,this.querySize,this.pagenum);
                res.object.forEach(function (res) {
					res.goodsList=JSON.parse(res.goodsList);
	            });


                this.confirmListArr = [...this.confirmListArr, ...res.object];
                
                this.hideLoading();
                if (res.object.length < this.querySize) {
                    return
                }
                this.preventRepeat = false;
            },
            //显示详情页
            showDetail(item){
                this.SAVE_ORDER(item);
                this.preventRepeat = false;
                this.$router.push('/order/orderDetail');
            },
            //生产环境与发布环境隐藏loading方式不同
            hideLoading(){
                this.showLoading = false;
            },
        },
        watch: {
            /*userInfo: function (value) {
                if (value && value.user_id && !this.orderList) {
                    this.initData();
                }
            },*/
            changeShowType:function(value){
            	this.initData();
            },

            '$route' (to, from) {
				this.initData();
			}


        }
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';

    //无数据样式
    .no_log{
        text-align: center;
        margin-top: 1rem;
        padding:2rem;
        img{
            @include wh(100%, auto);
        }
        p{
            margin-top: .5rem;
            @include sc(.7rem, #666);
        }
    }



    .item_bottom{
    	span{
    		border: 0.025rem solid #D8D8D8;
    		display: inline-block;
    		line-height: 1rem;
    		padding:0 .4rem;
    		margin-left:.3rem;
    		border-radius: 3px;

    	}
    }

    //列表

	.food_list{
		font-size: .56rem;
		margin-top:.1rem;
		.food_list_wrap{
			padding:0 .6rem;
			background:#fff;
			margin-bottom:.6rem;
		}
		.item_yop{
			
			padding:.48rem 0;
			@include fj;
			border-bottom: 0.025rem solid #f1f1f1;
			.item_yop_box{
				display:block;
				display:flex;
				box-align: center;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
			}
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
		    	&.zhsuow{
			    	border-color:#B4282D;
			    	color:#B4282D;
			    }
		    }
		}
	}

    .change_show_type{
    	font-size:.56rem;
    	line-height: 1.8rem;
    	background-color: #fbfbfb;
    	position: fixed;
	    top: 1.95rem;
	    right: 0;
	    width: 100%;
	    z-index:2333;
    	span{
    		background-color: #fbfbfb;
			-webkit-box-flex: 1;
		    -webkit-flex: 1;
		    flex: 1;
		    margin:0 .3rem;
		    text-align: center;
		    &.choo_pe{
		    	border-bottom: solid .1rem #B4282D;
		    }
    	}
    }


    
    .order_page{
        background-color: #f5f5f5;
        //margin-bottom: 1.95rem;
        padding-top: 3.8rem;
        p, span, h4{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }




    .loading-enter-active, .loading-leave-active {
        transition: opacity .7s
    }
    .loading-enter, .loading-leave-active {
        opacity: 0
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }


    //切换box动画
    .fade-choose-enter-active, .fade-choose-leave-active {
        transition: opacity .5s;
    }
    .fade-choose-leave, .fade-choose-leave-active {
        display: none;
    }
    .fade-choose-enter, .fade-choose-leave-active {
        opacity: 0;
    }

</style>
