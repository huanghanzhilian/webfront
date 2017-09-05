<template>
	<!-- 组件盒子 -->
	<div class="followlist_container">
		1
	</div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import {getmyAuthors,deleteFollow} from 'src/service/getData'

export default {
	//数据
	data(){
		return {
			followListArr:1,//数据
		}
	},
	//开始创建  vue后自动执行
	mounted(){
		//this.initData();
	},
	//需要使用的模块
	components: {

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
		async initData(){
			//获取数据
			let res = await getmyAuthors(this.pagenum, this.querySize);
			this.followListArr = [...res.object];
		},

	},

	watch: {

	}
}
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';

</style>