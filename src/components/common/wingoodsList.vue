<template>
	<!-- 组件盒子 -->
	<div class="participate_container">
		<!-- 列表盒子 -->
		<ul v-load-more="loaderMore" class="participate_list" v-if="winGoodsUserListArr.length">
    		<li class="participate_list_item" v-for="(item, index) in winGoodsUserListArr"> 
    			<img :src="item.userHead" class="privateImage">
    			<div class="par_list-info"> 
    				<p class="par_list_top">{{item.userName }}</p>
    				<p class="par_list_top2"> 
    					<span class="par_list_top2_l">IP:{{item.userIp}}</span>
    					<span class="par_list_top2_r">{{item.createTime}}</span>
    				</p>
    			</div>
    		</li>
    	</ul>

		<!-- 列表盒子 -->

		<p v-if="touchendtext" class="empty_data">没有更多了</p>

		<!-- loading -->
		<transition name="loading">
			<loading v-show="showLoading"></loading>
		</transition>
		<!-- loading -->


        


	</div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import {winGoodsUserList} from 'src/service/getData'
import {imgBaseUrl} from 'src/config/env'
import {showBack, animate} from 'src/config/mUtils'
import {loadMore, getImgPath} from './mixin'
import loading from './loading'
import ratingStar from './ratingStar'

export default {
	//数据
	data(){
		return {
			type:1,//请求类型
			type2:'',//轮询请求类型
			winGoodsUserId:'',//类型参数
			querySize:5,//请求条数


			winGoodsUserListArr:[],//关注列表

			touchend: false, //没有更多数据不再加载
			touchendtext:false,//没有更多数据展示

			showLoading: true, //显示加载动画
			preventRepeatReuqest: false, //到达底部加载数据，防止重复加载

			setnumber:0,
		}
	},
	//开始创建  vue后自动执行
	mounted(){
		this.initData();
		//console.log(this.winGoodsId)
	},
	//需要使用的模块
	components: {
		loading,
		ratingStar,
	},

	//父组件的参数书
	//winGoodsId为父组件的id作为请求值
	//
	props: ['winGoodsId','isRefreshList'],

	//需要引用的外部js方法
	mixins: [loadMore, getImgPath],

	//计算值 这里可以实时监听某个数据的变化
	computed: {
		...mapState([
			'userInfo','foolow','like'
		]),
		//计算最后的数组id
		lastId(){
			return this.winGoodsUserListArr[this.winGoodsUserListArr.length-1].winGoodsUserId;
		},
		//计算第一的数组id
		firstId(){
			return this.winGoodsUserListArr[0].winGoodsUserId;
		}
	},
	updated(){
		// console.log(this.supportIds, this.sortByType)
	},
	//方法
	methods: {
		...mapMutations([
            'SER_FOOLOW'
        ]),
		async initData(){
			//获取数据
			let res = await winGoodsUserList(this.winGoodsId,this.type,this.winGoodsUserId,this.querySize);
			this.winGoodsUserListArr = [...res.object];

			if (res.object.length < this.querySize) {
				this.touchend = true;
			}
			this.hideLoading();
		},

		//开发环境与编译环境loading隐藏方式不同
		hideLoading(){
			this.showLoading = false;
		},
		//到达底部加载更多数据
		async loaderMore(){
			if (this.touchend) {
				return
			}
			//防止重复请求
			if (this.preventRepeatReuqest) {
				return 
			}
			//显示动画
			this.showLoading = true;
			this.preventRepeatReuqest = true;


			let res = await winGoodsUserList(this.winGoodsId,this.type,this.lastId,this.querySize);
			this.hideLoading();
			this.winGoodsUserListArr = [...this.winGoodsUserListArr, ...res.object];
			//当获取数据小于20，说明没有更多数据，不需要再次请求数据
			if (res.object.length < this.querySize) {
				this.touchend = true;
				this.touchendtext= true;
				return
			}
			this.preventRepeatReuqest = false;
		},


		//轮询插入列表数据
		async insertMore(type){
			let res = await winGoodsUserList(this.winGoodsId,type,this.firstId);
			this.winGoodsUserListArr = [...res.object,...this.winGoodsUserListArr];
			console.log(this.winGoodsUserListArr)
		},


		//轮询没有数据的使用
		async initDatanull(){
			//获取数据
			let res = await winGoodsUserList(this.winGoodsId,this.type,this.winGoodsUserId,this.querySize);
			this.winGoodsUserListArr = [...res.object];

			if (res.object.length < this.querySize) {
				this.touchend = true;
			}

		},



		//控制购物列表是否显示
        toggleDialogue(){
			this.showDialogue = !this.showDialogue;
        },
        
	},

	watch: {
		//监听父级传来的是否刷新列表状态
		isRefreshList: function (value,spok){
			console.log(spok)
			if(spok!=undefined){
				if(value){
					if(this.winGoodsUserListArr.length){
						this.insertMore('-1');
					}else{
						this.initDatanull();
					}
					
				}
			}
		},

	}
}
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';

	//初始化页面背景动画
    .shop_back_svg_container{
        position: fixed;
        @include wh(100%, 100%);
        top: 0;
	    left: 0;
	    z-index: 2000;
        img{
            @include wh(100%, 100%);
        }
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
			&:last-child{
				border-bottom: none;
			}
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

	.empty_data{
		@include sc(0.5rem, #666);
		text-align: center;
		line-height: 2rem;
	}
</style>