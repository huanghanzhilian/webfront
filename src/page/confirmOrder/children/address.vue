 <template>
  <div class="rating_page">
        <head-top head-title="新建地址" go-back='true'> 
        	<p class="right_edit" slot="right_edit" @click.prevent="submitThing">
	            <span>保存</span>
	        </p>
        </head-top>
        <section class="adddetail">
        	<form action="" v-on:submit.prevent>
        		<section class="ui-padding-block">
        			<div class="input-new">
        				<input type="text" placeholder="姓名" v-model="message" >
        			</div>
        			<!--<router-link to='/profile/info/address/add/addDetail' class="add-detail">
	        			<div class="input-new">
	        				<input type="text" placeholder="小区/写字楼/学校等" readonly="readonly" v-model="addAddress" />
	        			</div>
        			</router-link>-->
        			
        			<div class="input-new">
        				<input type="text" placeholder="手机号码" v-model="telenum" />
        			</div>
        			<div class="input-new">
        				<input @click="toggleDialogue" type="text" placeholder="省份，城市，区县" readonly="readonly" v-model="addAddress" />
        			</div>
        			<div class="input-new">
        				<input type="text" placeholder="详细地址，如街道、楼牌号"  v-model="mesthree"/>
        			</div>

        		</section>

        		<div class="dkspwse" @click="isSelected=!isSelected"> 
        			<span  class="spsopse" :class="{checked:isSelected}"></span>设置为默认地址
        		</div>
        		<!--<section class="addbutton">
        			<button :class="{butopacity:butpart}" @click.prevent="submitThing">新增地址</button>
        		</section>-->
        	</form>
        </section>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
        <alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>

        <toast ref="toast"></toast>

        <!-- 遮罩 -->
        <transition name="fade">
            <div class="screen_cover" v-show="showDialogue" @click="toggleDialogue"></div>
        </transition>
        <!-- 遮罩 -->
        <!-- 省市区 -->
        <transition name="toggle-cart">
            <section class="cart_food_list " v-show="showDialogue">
            	<div class="opslo_wrap"> 
	            	<div class="citys_wrap">
	            		<div class="citys_top">
	            			<div class="citys_top_l"> 
	            				<span class="province_tab" @click="taba('showP')" :class="{choo_pe:sortBy == 'showP',slpwpd:province.length}">{{tabnamep}}</span>
	            				<span class="city_tab" @click="taba('showC')" :class="{choo_pe:sortBy == 'showC',slpwpd:city.length}">{{tabnamec}}</span>
	            				<span class="area_tab" @click="taba('showA')" :class="{choo_pe:sortBy == 'showA',slpwpd:area.length}">{{tabnamea}}</span>
	            			</div>
	            			<div class="confirm" :class="{idconfig:idconfig}" @click="confirmse">确定</div>
	            		</div>
	            	</div>
	            	<div class="citys_box">
	            		<ul class="province_conter" v-show="sortBy == 'showP'"> 
	            			<li v-for="(item,index) in province" :class="{choose_type:provincecode.code == item.code}" @click="getCitydata(item.code,item.name)">{{item.name}}</li>
	            		</ul>
	            		<ul class="city_conter" v-show="sortBy == 'showC'"> 
	            			<li v-for="(item,index) in city" @click="getAreadata(item.code,item.name)" :class="{choose_type:citycode.code == item.code}" >{{item.name}}</li>
	            		</ul>
	            		<ul class="area_conter" v-show="sortBy == 'showA'"> 
	            			<li v-for="(item,index) in area" @click="getsdf(item.code,item.name)" :class="{choose_type:arerdata.code == item.code}" >{{item.name}}</li>
	            		</ul>
	            	</div>
            	</div>
            	
	                
            </section>
        </transition>
        <!-- 省市区 -->

    </div>
</template>

<script>
    import headTop from 'src/components/header/head'
    import {getImgPath} from 'src/components/common/mixin'
    import {mapState, mapMutations} from 'vuex'
    import {provinceList,defaultAddress} from 'src/service/getData'
    import alertTip from 'src/components/common/alertTip'

    import Toast from 'src/components/common/Toast'


    export default {
      data(){
            return{
            	message:'',//姓名
            	telenum:'', //手机号
            	addAddress:'',//省市区
            	mesthree:'',//详细地址

            	sortBy: '', // 选择显示省市区

            	province:[],//获取省数据
            	city:[],//获取城市
            	area:[],//获取区域

            	provincecode:{},//选择的省
            	citycode:{},//选择的城市
            	arerdata:{},//选择区域

            	tabnamep:'请选择',//省
            	tabnamec:'请选择',//市
            	tabnamea:'请选择',//区

            	idconfig:false,

            	isSelected:true,//默认选中


            	showDialogue: false,//显示遮罩省市区
                showAlert: false, //弹出框
                alertText: null, //弹出信息


            }
        },

        created(){

        },
        //安装
		mounted(){
			//console.log(this.mucartList)
			this.initData();
		},
        mixins: [getImgPath],

        components: {
            headTop,
            alertTip,
            Toast
        },
        computed:{
             ...mapState([
                
            ]),
        },
        props:[],
        methods: {
        	...mapMutations([
            	'ADD_ADDRESS'
            ]),

            async initData(){
				//获取数据
				let res = await provinceList();
				//获取省
				this.province = [...res.object];
				this.sortBy='showP';
				this.idconfig=false;
			},

			//获取城市数据
			async getCitydata(code,name){
				//获取选中的省信息
				this.provincecode={'code':code,'name':name};
				this.tabnamep=name;
				this.tabnamec='请选择';
				this.tabnamea='请选择';

				this.city=[];
				this.area=[];

				//获取数据
				let res = await provinceList(code);
				//获取城市
				this.city = [...res.object];
				//动态切换到选城市
				this.sortBy='showC';
				this.idconfig=false;
			},

			//获取区域数据
			async getAreadata(code,name){
				//获取选中的省信息
				this.citycode={'code':code,'name':name};
				this.tabnamec=name;
				this.area=[];

				//获取数据
				let res = await provinceList(code);
				//获取区域
				this.area = [...res.object];
				//动态切换到选城市
				this.sortBy='showA';
				this.idconfig=false;
			},

			//选定区数据
			async getsdf(code,name){
				//获取选中的区信息
				
				this.arerdata={'code':code,'name':name};
				this.tabnamea=name;
				//是否可以点击确定按钮
				this.idconfig=true;
			},

			//提交省市区
			confirmse(){
				if(this.idconfig){
					this.addAddress=this.provincecode.name+' '+this.citycode.name+' '+this.arerdata.name;
					this.toggleDialogue();
				}
			},


			//切换tab
			taba(obj){
				if(obj=='showP'&&!this.province.length){
					return;
				}
				if(obj=='showC'&&!this.city.length){
					return;
				}
				if(obj=='showA'&&!this.area.length){
					return;
				}

				this.sortBy=obj;
			},

           //控制省市区是否显示
	        toggleDialogue(){
				this.showDialogue = !this.showDialogue;
	        },
            
            //保存地址
            async submitThing(){
            	//姓名判断
            	if(!this.message){
            		this.$refs.toast.show('请填写姓名');
            		return;
            	}
            	//手机号判断
            	if((/^[1][358][0-9]{9}$/).test(this.telenum)){
            		
            	}else if(this.telenum == ''){
            		this.$refs.toast.show('手机号不能为空');
            		return;
            	}else{
            		this.$refs.toast.show('请输入正确的手机号');
            		return;
            	}
            	//省市区
            	if(!this.addAddress){
            		this.$refs.toast.show('请选择省市区');
            		return;
            	}
            	//判断详细地址
            	if(this.mesthree.length == 0){
            		this.$refs.toast.show('请详细填写送餐地址');
            		return;
            	}else if(this.mesthree.length > 0 && this.mesthree.length <= 2){
            		this.$refs.toast.show('地址太短了，不能辨识');
            		return;
            	}

            	let isSelecteds=this.isSelected?1:0;
                let res = await defaultAddress('1','',this.message,this.telenum,this.citycode.code,this.provincecode.code,this.citycode.name,this.provincecode.name,this.mesthree,this.arerdata.code,this.arerdata.name,isSelecteds);
                if(res.success){
                	this.$refs.toast.show('添加成功');
                	this.$router.go(-1);
                }else{
                	this.$refs.toast.show(res.message);
                }
                
            }




        }
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';


    .dkspwse{
    	line-height: 2.8rem;
    	vertical-align: middle;
    	text-align: center;
    	.spsopse{
    		color: #999;
		    border-radius: 50%;
	        border: 0.025rem solid #D8D8D8;
	        display: inline-block;
		    width: .64rem;
		    height: .64rem;
		    background: #fff;
		    box-sizing: border-box;
		    padding: 0;
		    -webkit-appearance: none;
		    outline: 0;
		    vertical-align: middle;
		    margin-right: .4rem;
    	}
    	.checked{
			background:#B4282D url(../../../images/icon/gouwuche_icon_xuanzhong@1x.png) no-repeat;
	        background-size:100% 100%;
	        border: 0.025rem solid #B4282D;
		}
    }
    .confirm{
    	color:#818181;
    	&.idconfig{
    		color:#333;
    	}
    }

    
    //城市区域
    .opslo_wrap{
    	position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
		font-size: .6rem;
		overflow: auto;
		//padding-top: 2rem;
    }
    //城市tab
    .citys_wrap{
    	position: fixed;
	    z-index: 100;
	    left: 0;
	    //top: 0;
	    width: 100%;
	    background: #fff;
    	.citys_top{
		    
    		@include fj;
    		line-height: 2rem;
    		padding: 0 .6rem;
    		box-shadow: 0 0 10px 1px rgba(7,17,27,.1);
    		.citys_top_l{
	    		span{
					height: 100%;
					display: inline-block;
					padding: 0 .2rem;
					margin-right: .4rem;
					color:#818181;
					&.choo_pe{
						border-bottom: solid .1rem #B4282D;
					}
					&.slpwpd{
						color:#333;
					}
	    		}
	    	}
    	}
    }
    .citys_box{
    	padding: 2.6rem .6rem .6rem;
    	li{
    		line-height: 1.8rem;
    		&.choose_type{
    			color:#B4282D;
    		}
    	}
    }





  	.router-slid-enter-active, .router-slid-leave-active {
  	    transition: all .4s;
  	}
  	.router-slid-enter, .router-slid-leave-active {
  	    transform: translate3d(2rem, 0, 0);
        opacity: 0;
  	}
    .rating_page{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 202;
        padding-top: 1.95rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .adddetail{
    	//margin-top:.4rem;
    }
    .ui-padding-block{
    	background:#fff;
    	padding-top:.4rem;
    	.add-detail{display:block;}
    	.input-new{
    		//padding-bottom:.4rem;
    		input{
    			display:block;
    			width:15rem;
    			font-size:.6rem;
    			margin:0 auto;
    			padding:.6rem .3rem;
    			background:#fff;
    			border-bottom:0.025rem solid #D9D9D9;
    			//@include borderRadius(3px);
    		}
    		.verifies{
				border-color:#ea3106;
    		}
    		p{
				@include sc(.4rem,#ea3106);
				padding-left:.5rem;
				margin-top:.2rem;
    		}
    	}
    	
    }
    .addbutton{
    	margin:.6rem auto;
    	width:15rem;
    	background:#4cd964;
    	@include borderRadius(3px);
    	button{
    		width:100%;
    		@include sc(.6rem,#fff);
    		line-height:1.6rem;
    		background:none;
    		font-weight:700;
    		opacity:.6;
    	}
    	.butopacity{
    		transition: all .4s;
    		opacity:1;
    	}
    }

    //遮罩省市区
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
    //省市区
    .cart_food_list{
    	position: fixed;
        width: 100%;
        height:18rem;
        z-index: 1112;
        bottom: 0;
        left: 0;
        background-color: #fff;

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
    //遮罩省市区
</style>
