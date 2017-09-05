import {
	RECORD_ADDRESS,
	ADD_CART,
	REDUCE_CART,
	INIT_BUYCART,
	CLEAR_CART,
	RECORD_SHOPDETAIL,
	RECORD_USERINFO,
	GET_USERINFO,
	CONFIRM_REMARK,
	CONFIRM_INVOICE,
	CHOOSE_SEARCH_ADDRESS,
	SAVE_GEOHASH,
	CONFIRM_ADDRESS,
	CHOOSE_ADDRESS,
	NEED_VALIDATION,
	SAVE_CART_ID_SIG,
	SAVE_ORDER_PARAM,
	CHANGE_ORDER_PARAM,
	ORDER_SUCCESS,
	SAVE_SHOPID,
	SAVE_ORDER,
	OUT_LOGIN,
	RETSET_NAME,
	SAVE_AVANDER,
	SAVE_ADDRESS,
	SAVE_ADDDETAIL,
	SAVE_QUESTION,
	ADD_ADDRESS,
	BUY_CART,
	SKEPOID,
	SER_USERINFOH,
	SER_FOOLOW,
	SER_LIKE,
	SER_SHEOWHS,
	SET_QUHAOPO,
	SET_MUCART,
	SET_ADDRESSIS
} from './mutation-types.js'

import {setStore, getStore} from '../config/mUtils'

import {localapi, proapi} from 'src/config/env'

export default {
	// 记录当前经度纬度
	[RECORD_ADDRESS](state, {
		latitude,
		longitude
	}) {
		state.latitude = latitude;
		state.longitude = longitude;
	},

	[RECORD_SHOPDETAIL](state, detail) {
		state.shopDetail = detail;
	},
	// 加入购物车
	[ADD_CART](state, {
		shopid,
		category_id,
		item_id,
		food_id,
		name,
		price,
		specs,
		packing_fee,
		sku_id,
		stock
	}) {
		let cart = state.cartList;
		let shop = cart[shopid] = (cart[shopid] || {});
		let category = shop[category_id] = (shop[category_id] || {});
		let item = category[item_id] = (category[item_id] || {});
		if (item[food_id]) {
			item[food_id]['num']++;
		} else {
			item[food_id] = {
					"num" : 1,
					"id" : food_id,
					"name" : name,
					"price" : price,
					"specs" : specs,
					"packing_fee" : packing_fee,
					"sku_id" : sku_id,
					"stock" : stock
			};
		}
		state.cartList = {...cart};
		//存入localStorage
		setStore('buyCart', state.cartList);
	},
	// 移出购物车
	[REDUCE_CART](state, {
		shopid,
		category_id,
		item_id,
		food_id,
		name,
		price,
		specs,
	}) {
		let cart = state.cartList;
		let shop = (cart[shopid] || {});
		let category = (shop[category_id] || {});
		let item = (category[item_id] || {});
		if (item && item[food_id]) {
			if (item[food_id]['num'] > 0) {
				item[food_id]['num']--;
				state.cartList = {...cart};
				//存入localStorage
				setStore('buyCart', state.cartList);
			} else {
				//商品数量为0，则清空当前商品的信息
				item[food_id] = null;
			}
		}
	},

	//清空当前商品的购物车信息
	[CLEAR_CART](state, shopid) {
		state.cartList[shopid] = null;
		state.cartList = {...state.cartList};
		setStore('buyCart', state.cartList);
	},
	// 记录用户信息
	[RECORD_USERINFO](state, info) {
		state.userInfo = info;
		state.login = true;
		state.userId = info;
		//setStore('userId', info.userId);
		setStore('userId', info);
	},
	//获取用户信息存入vuex
	[GET_USERINFO](state, info) {
		if (state.userInfo && (state.userInfo.username !== info.username)) {
			return;
		};
		if (!state.login) {
			return
		}
		if (!info.message) {
			state.userInfo = {...info};
		} else {
			state.userInfo = null;
		}
	},
	//修改用户名
	[RETSET_NAME](state,username) {
		state.userInfo = Object.assign({}, state.userInfo,{username})
	},
	//保存商铺id
	[SAVE_SHOPID](state, shopid) {
		state.shopid = shopid;
	},
	//记录订单页面用户选择的备注, 传递给订单确认页面
	[CONFIRM_REMARK](state, {
		remarkText,
		inputText
	}) {
		state.remarkText = remarkText;
		state.inputText = inputText;
	},
	//是否开发票
	[CONFIRM_INVOICE](state, invoice) {
		state.invoice = invoice;
	},
	//选择搜索的地址
	[CHOOSE_SEARCH_ADDRESS](state, place) {
		state.searchAddress = place;
	},
	//保存geohash
	[SAVE_GEOHASH](state, geohash) {
		state.geohash = geohash;
		
	},


	//确认订单页添加新的的地址
	[CONFIRM_ADDRESS](state, newAddress) {
		state.newAddress.push(newAddress);
	},
	//选择的地址
	[CHOOSE_ADDRESS](state, {
		address,
		index
	}) {
		state.choosedAddress = address;
		state.addressIndex = index;
	},
	//保存下单需要验证的返回值
	[NEED_VALIDATION](state, needValidation) {
		state.needValidation = needValidation;
	},
	//保存下单后购物id 和 sig
	[SAVE_CART_ID_SIG](state, {
		cart_id,
		sig
	}) {
		state.cart_id = cart_id;
		state.sig = sig;
	},
	//保存下单参数，用户验证页面调用
	[SAVE_ORDER_PARAM](state, orderParam) {
		state.orderParam = orderParam;
	},
	//修改下单参数
	[CHANGE_ORDER_PARAM](state, newParam) {
		state.orderParam = Object.assign({}, state.orderParam, newParam);
	},
	//下单成功，保存订单返回信息
	[ORDER_SUCCESS](state, order) {
		state.cartPrice = null;
		state.orderMessage = order;
	},
	//进入订单详情页前保存该订单信息
	[SAVE_ORDER](state, orderDetail) {
		state.orderDetail = orderDetail;
	},

	//保存图片
	[SAVE_AVANDER](state, imgPath) {
		state.imgPath = imgPath;
	},
	//删除地址列表
	[SAVE_ADDRESS](state, newAdress) {
		state.removeAddress = newAdress
	},
	//添加地址name
	[SAVE_ADDDETAIL](state, addAddress){
		state.addAddress=addAddress;
	},
	//保存所选问题标题和详情
	[SAVE_QUESTION](state, question) {
		state.question = {...question};
	},
	//增加地址
	[ADD_ADDRESS](state, obj) {
		state.removeAddress = [obj, ...state.removeAddress];
	},
	//会员卡价格纪录
	[BUY_CART](state, price) {
		state.cartPrice = price;
	},




	//保存shareId
	[SKEPOID](state, shareId) {
		state.shareId = shareId;
	},
	//保存用户信息
	[SER_USERINFOH](state, info) {
		state.userInfo = info;
		state.login = true;
		state.userId = info.userId;
		setStore('userId', info.userId);
		setStore('userInfo', info);
		setStore('userPhone', info.userPhone);
		setStore('hasRegistWx', info.hasRegistWx);
	},
	//退出登录
	[OUT_LOGIN](state) {
		state.userInfo = {};
		state.login = false;
		state.userId='';
	},

	//设置关注数
	[SER_FOOLOW](state,num) {
		state.foolow = num;
	},

	//设置喜欢数量
	[SER_LIKE](state,num) {
		state.like = num;
	},

	//夺宝需要授权记录回跳页面
	[SER_SHEOWHS](state,url) {
		state.sheowps = url;
	},

	//获取用户信息
	[SET_QUHAOPO](state,obj){
		state.hasQuhao = obj.hasQuhao;   //是否取过号，0否，1是
		state.hasRegistWx = obj.hasRegistWx;  //是否关注微信，0否，1是
		state.hasBindPhone = obj.hasBindPhone;  //是否绑定手机号，0否，1是
		state.userInfo = obj.userInfo;  //用户头像
		//setStore('userId', info);
	},
	//获取更新购物车信息
	[SET_MUCART](state,array){
		state.mucartList=array;
		setStore('buyCarts', array);
	},
	//网页初始化时从本地缓存获取购物车数据
	[INIT_BUYCART](state) {
		let initCart = getStore('buyCarts');
		if (initCart) {
			state.mucartList = JSON.parse(initCart);
		}
	},
	//SET_ADDRESSIS   获取地址列表id
	[SET_ADDRESSIS](state,id) {
		state.addressIds=id;
	},
}
