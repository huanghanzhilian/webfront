<template>
    <div class="buycarts flex">
    	<!--<div class="service" @click="custom">
    	<i class="icon-Page-1 icon-Page-kefu"></i></div>-->
    	<div class="service" @click="custom">
			<span class="icon-Page-1 icon-Page-kefu"></span>
		</div>
		<!--<div @click="custom" class="flex_v">
			联系客服购买
		</div>
		<div @click="custom" class="flex_v purchase">
			立即购买
		</div>-->
    	<div class="flex_v" @click="shoppingCart">加入购物车</div>
    	<div class="flex_v purchase">立即购买</div>
    </div>
</template>

<script>
    export default {
        methods: {
            custom(){
                this.$emit('custom');
            },
            shoppingCart(){
                this.$emit('shoppingCart');
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    .buycarts{
    	text-align: center;
    	background-color: #fbfbfb;
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
    }
    .service{
    	width:3rem;
    	border-right: 0.025rem solid #e4e4e4;
    	line-height:2rem;
    }
    .purchase{
    	background:#B4282D;
    	color:#fff;
    }
    .icon-Page-kefu{
    	font-size:1rem;
    	color:#231815;
    	display: inline-block;
    	vertical-align: middle;
    }
</style>

