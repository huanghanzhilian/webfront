<template>
    <div class="market food_container">
    	<!-- 头部 -->
    	<head-top search="true" @startSearch="startSearch">
    	</head-top>

		<section class="shop_list_container">
	    	<search-list :jskop="keyword"></search-list>
    	</section>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import headTop from 'src/components/header/head'
import searchList from 'src/components/common/searchlist'

export default {
	data(){
        return {
		keyword:'',
		hasData: false

        }
    },

    components: {
    	headTop,
    	searchList
    },

    created(){
    	this.initData();
		this.keyword='';
    },
    computed: {
    },
    methods: {
    	...mapMutations([
    		'RECORD_ADDRESS','SKEPOID'
    	]),
    	//初始化获取数据
        async initData(){

        },

		startSearch(data){
          console.log(data);
			this.keyword=data;
        },


		//去除空数组
		ayysho(array){
			for(var i = 0 ;i<array.length;i++)
			{
				if(array[i] == "" || typeof(array[i]) == "undefined")
				{
			      array.splice(i,1);
			      i= i-1;
				}
			}
			return array;
		},
		huskls(){
			this.sortBy = '';
		},

		//触摸
		slaoak(event){
			event.preventDefault()
		}




    },
}

</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
	.food_container{
		//padding-top: 3.6rem;
		padding-top: 1.65rem;
		padding-bottom: 2.4rem;
	}
	.listtiem{
		font-family: "huangFont";
		font-size:.64rem;
	}
	.sort_container{
		background-color: #fff;
		//border-bottom: 0.025rem solid #f1f1f1;
		position: fixed;
		//top: 1.95rem;
		top: 0rem;
		right: 0;
		width: 100%;
		display: flex;
		z-index: 13;
		box-sizing: border-box;
		//border-bottom: 1px solid #bbb;
		.sort_item{
			@include sc(0.55rem, #444);
			@include wh(33.3%, 1.6rem);
			text-align: center;
			line-height: 1rem;
			.sort_item_container{
				@include wh(100%, 100%);
				position: relative;
				z-index: 14;
				background-color: #fff;
				box-sizing: border-box;
				padding-top: .3rem;
				vertical-align: middle;
			    border-bottom: 0.025rem solid $bc;
				.slpwopaq{
					overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    display: inline-block;
				    max-width: 59px;
				    vertical-align: middle;
				}
				.active{
						color:#B4282D;
					}
				.sort_item_border{
					height: 1rem;
					border-right: 0.025rem solid $bc;
					.active{
						color:#B4282D;
					}
				}
			}
			.sort_icon{
				vertical-align: middle;
				transition: all .3s;
				fill:#666;
				font-size:.35rem;
			}

		}
		.choose_type{
			.sort_item_container{

				.category_title{
					color: #B4282D;
				}
				.sort_icon{
					transform: rotate(180deg);
					fill:$blue;
					color:#B4282D;
					display: inline-block;
				}
			}
		}
		.showlist-enter-active, .showlist-leave-active {
			transition: all .3s;
			transform: translateY(0);
		}
		.showlist-enter, .showlist-leave-active {
			opacity: 0;
			transform: translateY(-100%);
		}
		.sort_detail_type{
			/*width: 100%;
			position: absolute;
			display:flex;
			top: 1.6rem;
			left: 0;
			border-top: 0.025rem solid $bc;
			background-color: #fff;*/
			position: fixed;
		    top: 0;
		    left: 0;
		    right: 0;
		    bottom: 0;
		    background-color: #fff;
		    z-index: 2;
		    padding-top: 1.65rem;
		}
		.category_container{
			.category_left{
				flex: 1;
				background-color: #f1f1f1;
				height: 16rem;
				overflow-y: auto;
				span{
					@include sc(0.5rem, #666);
					line-height: 1.8rem;
				}
				.category_left_li{
					@include fj;
					padding:0 0.5rem;
					.category_icon{
						@include wh(.8rem, .8rem);
						vertical-align: middle;
						margin-right: .2rem;
					}
					.category_count{
						background-color: #ccc;
						@include sc(.4rem, #fff);
						padding: 0 .1rem;
						border: 0.025rem solid #ccc;
						border-radius: 0.8rem;
						vertical-align: middle;
						margin-right: 0.25rem;
					}
					.category_arrow{
						vertical-align: middle;
					}
				}
				.category_active{
					background-color: #fff;
				}
			}
			.category_right{
				flex: 1;
				background-color: #fff;
				padding-left: 0.5rem;
				height: 16rem;
				overflow-y: auto;
				.category_right_li{
					@include fj;
					height: 1.8rem;
					line-height: 1.8rem;
					padding-right: 0.5rem;
					border-bottom: 0.025rem solid $bc;
					span{
						color: #666;
					}
				}
				.category_right_choosed{
					span{
						color: $blue;
					}
				}
			}
		}
		.sort_list_container{
			//width: 100%;
			padding-bottom:.4rem;
			padding:1.2rem .8rem;
			.sort_list_li{
				//height: 2.2rem;
				//display: flex;
				//align-items: center;
				height: 1.1rem;
				float: left;
				width: 30%;
    			margin-right: 5%;
    			margin-bottom: 1rem;
    			&:nth-of-type(3n) {
				    margin-right: 0;
				}
				p{
					//flex: auto;
					//text-align: center;
					//text-indent: 0.25rem;
					//border-bottom: 0.025rem solid $bc;
					//@include fj;
					span{
						//display:block;
					    display: inline-block;
    					background: #F5F5F5;
						text-align: center;
						width:100%;
						height:100%;
						color: #818181;
						padding:0 .4rem;
						border-radius: .2rem;
						border: 1px solid #F5F5F5;
					    vertical-align: middle;

					}
				}
				.sort_select{
					span{
						border: 1px solid #B4282D;
						color: #B4282D;
						background: #fff;
					}
				}
			}
		}
		.filter_container{
			flex-direction: column;
			align-items: flex-start;
			min-height: 10.6rem;
			background-color: #fff;
			font-size:.52rem;
			.filter_header_style{
				@include sc(.60rem, #333);
				line-height: 1.8rem;
				height: 1.8rem;
				text-align: left;
				//padding-left: .8rem;
				background-color: #fff;
			}
			.filter_ul{
				display: flex;
				flex-wrap: wrap;
				//padding: 0 0.5rem;
				background-color: #fff;
				.filter_li{
					text-align: center;

					@include wh(30%, 1.1rem);
					margin-right: 5%;
					border-radius: 0.125rem;
					//padding: 0 0.25rem;
					margin-bottom: 1rem;
					float: left;
					&:nth-of-type(3n) {
					    margin-right: 0;
					}

					svg{
						@include wh(.8rem, .8rem);
						margin-right: 0.125rem;
					}
					span{
						@include sc(0.52rem, #333);
						background:#F5F5F5;
						color:#818181;
						display: inline-block;
						width:100%;
						border: 0.025rem solid #F5F5F5;
						border-radius: 0.15rem;
					}
					.filter_icon{
						@include wh(.8rem, .8rem);
						font-size: 0.5rem;
						border: 0.025rem solid $bc;
						border-radius: 0.15rem;
						margin-right: 0.25rem;
						line-height: .8rem;
						text-align: center;

					}
					.activity_svg{
						margin-right: .25rem;
					}
					.selected_filter{
						color: #B4282D;
						background:#fff;
						border: 0.05rem solid #B4282D;
					}
				}
			}
			.confirm_filter{
				display: flex;
				background-color: #fff;
				box-shadow: 0 0 8px -2px rgba(7,17,27,.4);
				width: 100%;
				padding: .3rem .9rem;
				position: absolute;
    			bottom: 0;
				.filter_button_style{
					@include wh(50%, 1.5rem);
					font-size: 0.62rem;
					line-height: 1.5rem;
					border-radius: 0.2rem;
				}
				.clear_all{
					background-color: #D9D9D9;
					margin-right: .5rem;
					border: 0.025rem solid #fff;
					color:#818181;
				}
				.confirm_select{
					background-color: #B4282D;
					color: #fff;
					span{
						color: #fff;
					}
				}
			}
		}
	}
	.empty_data{
		font-size:.64rem;
		text-align: center;
	}
	.showcover-enter-active, .showcover-leave-active {
		transition: opacity .3s
	}
	.showcover-enter, .showcover-leave-active {
		opacity: 0
	}
	.back_cover{
		position: fixed;
		@include wh(100%, 100%);
		z-index: 10;
		background-color: rgba(0,0,0,0.3);
	}
</style>
