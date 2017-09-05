 <template>
    <div class="rating_page">
        <head-top head-title="选择地址" go-back='true'></head-top>
        <router-link to="/confirmOrder/chooseAddress/addAddress" class="add_icon_footer" >
            <span>新增收货地址</span>
        </router-link>
        <section class="scroll_container">
            <div  class="address_container" v-for="(item,index) in addressList" @click.prevent.stop="chooseAddress(item, index)">
	            <div  class="address_empty_no allpow">
	            	<div class="slppw">
	            		<div class="address_empty_l">
		            		<p class="rusml">{{item.receiverName}}</p>
		            		<span class="moren" v-if="item.isDefault=='1'">默认</span>
		            	</div>
		            	<div class="address_empty_c">
		            		<p class="address_empty_c_top">
		            			<span>{{item.receiverPhone}}</span>&emsp;&emsp;
		            			<span></span>
		            		</p>
		            		<p class="address_empty_c_c">{{item.detailAddress}}</p>
		            	</div>
		            	<div class="address_empty_r"></div>
	            	</div>

	                <span class="myorder-divsvg"></span>
	            </div>
	        </div>
        </section>

        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import headTop from 'src/components/header/head'
    import {mapState, mapMutations} from 'vuex'
    import {getAddress, getAddressList,addressLists} from 'src/service/getData'
    import alertTip from 'src/components/common/alertTip'
    import BScroll from 'better-scroll'

    export default {
      data(){
            return{
               	addressList: [], //地址列表
            }
        },
        created(){
            this.id = this.$route.query.id;
            this.sig = this.$route.query.sig;
        },
        //安装
		mounted(){
			//console.log(this.mucartList)
			this.initData();
		},
        components: {
            headTop,
            alertTip,
        },
        props:[],
        computed: {
            ...mapState([
                'userInfo', 'addressIndex', 'newAddress'
            ]),
            //选择地址
            defaultIndex: function (){
                if (this.addressIndex) {
                    return this.addressIndex;
                }else{
                    return 0;
                }
            }
        },
        methods: {
            ...mapMutations([
                'CHOOSE_ADDRESS','SET_ADDRESSIS'
            ]),
            //初始化信息
            async initData(){
                //this.addressList = [];
                //获取数据
				let res = await addressLists("100","1");
				this.addressList = [...res.object];
				console.log(res)
                /*if (this.userInfo && this.userInfo.user_id) {
                    this.addressList = await getAddressList(this.userInfo.user_id);
                    //将当前所有地址访问有效无效两种
                    this.addressList.forEach(item => {
                        if (item.is_deliverable) {
                            this.deliverable.push(item);
                        }else{
                            this.deliverdisable.push(item);
                        }
                    })

                }*/
            },

            //选择地址
            chooseAddress(address, index){
            	//console.log(address)
            	//console.log(index)
            	this.SET_ADDRESSIS(address.id);
                //this.CHOOSE_ADDRESS({address, index});
                this.$router.go(-1);
            },
        },
        watch: {
            userInfo: function (value) {
                if (value && value.user_id) {
                    //this.initData();
                }
            },
            newAddress: function (value) {
                //this.initData();
            },
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

    //收货地址列表
    .scroll_container{
    	.address_container:first-child .address_empty_no {
			background:#FFF url(../../../images/icon/shouhuodizhi_caitiao@2x.png) 0 0 repeat-x;
			background-size: auto .2rem;
		}
    }
    .address_empty_no{
		min-height: 3.4rem;
		padding: 0 .6rem;
		position: relative;
		//background:#FFF url(../../../images/icon/shouhuodizhi_caitiao@2x.png) 0 0 repeat-x;
		//background-size: auto .2rem;
		background-color:#FFF;
		margin-bottom:.6rem;
		
		&.allpow{

		}
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
			background:url(../../../images/icon/Slice@2x.png) center center no-repeat;
			width: .8rem;
			height: .8rem;
			background-size: 100%;
		}
	}

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






  
    .rating_page{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f5f5f5;
        z-index: 202;
        padding-top: 1.95rem;
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
        overflow-y: auto;
    }

    //底部
    .add_icon_footer{
        position: fixed;
        bottom: .8rem;
        left: 0;
        right: 0;
        height: 1.8rem;
        background-color: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 204;
        border: solid 0.025rem #B4282D;
        width:90%;
        margin: 0 auto;
        border-radius: 2px;
        span{
            @include sc(.64rem, #B4282D);
            margin-left: .3rem;
        }
    }
    //底部






    .list_cotainer{
        padding-bottom: 5rem;
    }
    
    .deliverable_address{
        background-color: #fff;
        li{
            display: flex;
            align-items: center;
            border-bottom: 0.025rem solid #f5f5f5;
            padding: .7rem;
            line-height: 1rem;
            .choosed_address{
                @include wh(.8rem, .8rem);
                fill: #4cd964;
                margin-right: .4rem;
                opacity: 0;
            }
            .default_address{
                opacity: 1;
            }
            header{
                @include sc(.7rem, #333);
                span:nth-of-type(1){
                    font-size: .8rem;
                    font-weight: bold;
                }
            }
            .address_detail{
                width: 100%;
                display: flex;
                align-items: center;
                span{
                    @include sc(.5rem, #fff);
                    border-radius: .15rem;
                    background-color: #ff5722;
                    height: .6rem;
                    line-height: .6rem;
                    padding: 0 .2rem;
                    margin-right: .3rem;
                }
                p{
                    @include sc(.6rem, #777);
                }
            }
        }
    }







    #out_delivery{
        .out_header{
            @include sc(.6rem, #666);
            line-height: 1.5rem;
            padding-left: .5rem;
            background-color: #f5f5f5;
        }
        *{
            color: #ccc;
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
