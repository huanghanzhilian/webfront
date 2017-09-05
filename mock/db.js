// db.js
var Mock = require('mockjs');

module.exports = {
	getComment: Mock.mock({
		"error": 0,
		"message": "success",
		"result|40": [{
			"author": "@name",
			"comment": "@cparagraph",
			"date": "@datetime"
		}]
	}),
	addComment: Mock.mock({
		"error": 0,
		"message": "success",
		"result": []
	}),
	//订单详情接口
	orderDetail: Mock.mock({
	    "success": true,
	    "object": {
	        "orderId": "1",
	        "statusDesc": "还剩3天4小时自动确认收货",
	        "payTime": "2017-08-08 14:52:27",
	        "goodsList": "[{\"orderGoodsId\":\"1\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_0.png\",\"goodsMoney\":\"2000\",\"orderId\":\"1\",\"goodsId\":\"33\",\"authorName\":\"陈立功\",\"authorId\":\"9\",\"goodsName\":\"美人捧心\",\"goodsNum\":\"2\"},{\"orderGoodsId\":\"2\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/120.png\",\"goodsMoney\":\"10000\",\"orderId\":\"1\",\"goodsId\":\"34\",\"authorName\":\"顾景舟\",\"authorId\":\"1\",\"goodsName\":\"浮屠\",\"goodsNum\":\"1\"}]",
	        "orderStatus": "3000",
	        "autoEndTime": "",
	        "receiverPhone": "13499999999",
	        "cityName": "北京市",
	        "province": "北京市",
	        "orderStatusStr": "待评价",
	        "goodsNum": "3",
	        "deliverTime": "2017-08-08 14:56:33",
	        "receiverName": "测试1",
	        "receiveTime": "2017-08-08 14:56:42",
	        "goodsMoney": "12000",
	        "createTime": "2017-08-08 14:38:23",
	        "cancelTime": "2017-08-08 14:56:42",
	        "detailAddress": "北京市昌平县城御路园10号楼6单元101"
	    }
	}),

	//订单列表接口
	getOrderPage: Mock.mock({
	    "success": true,
	    "object": [
	    	{
	            "orderId": "134",
	            "orderStatusDesc": "待支付",
	            "goodsList": "[{\"orderGoodsId\":\"1\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_0.png\",\"goodsMoney\":\"2000\",\"orderId\":\"1\",\"goodsId\":\"33\",\"authorName\":\"陈立功\",\"authorId\":\"9\",\"goodsName\":\"美人捧心\",\"goodsNum\":\"2\"},{\"orderGoodsId\":\"2\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/120.png\",\"goodsMoney\":\"10000\",\"orderId\":\"1\",\"goodsId\":\"34\",\"authorName\":\"顾景舟\",\"authorId\":\"1\",\"goodsName\":\"浮屠\",\"goodsNum\":\"1\"}]",
	            "orderStatus": "0",
	            "goodsTotalMoney": "12000",
	            "goodsTotalNum": "3"
	        },{
	            "orderId": "1",
	            "orderStatusDesc": "待评价",
	            "goodsList": "[{\"orderGoodsId\":\"1\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_0.png\",\"goodsMoney\":\"2000\",\"orderId\":\"1\",\"goodsId\":\"33\",\"authorName\":\"陈立功\",\"authorId\":\"9\",\"goodsName\":\"美人捧心\",\"goodsNum\":\"2\"},{\"orderGoodsId\":\"2\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/120.png\",\"goodsMoney\":\"10000\",\"orderId\":\"1\",\"goodsId\":\"34\",\"authorName\":\"顾景舟\",\"authorId\":\"1\",\"goodsName\":\"浮屠\",\"goodsNum\":\"1\"}]",
	            "orderStatus": "3000",
	            "goodsTotalMoney": "12000",
	            "goodsTotalNum": "3"
	        },{
	            "orderId": "2",
	            "orderStatusDesc": "交易完成",
	            "goodsList": "[{\"orderGoodsId\":\"1\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_0.png\",\"goodsMoney\":\"2000\",\"orderId\":\"1\",\"goodsId\":\"33\",\"authorName\":\"陈立功\",\"authorId\":\"9\",\"goodsName\":\"美人捧心\",\"goodsNum\":\"2\"},{\"orderGoodsId\":\"2\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/120.png\",\"goodsMoney\":\"10000\",\"orderId\":\"1\",\"goodsId\":\"34\",\"authorName\":\"顾景舟\",\"authorId\":\"1\",\"goodsName\":\"浮屠\",\"goodsNum\":\"1\"}]",
	            "orderStatus": "4000",
	            "goodsTotalMoney": "12000",
	            "goodsTotalNum": "3"
	        },{
	            "orderId": "3",
	            "orderStatusDesc": "待收货",
	            "goodsList": "[{\"orderGoodsId\":\"1\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_0.png\",\"goodsMoney\":\"2000\",\"orderId\":\"1\",\"goodsId\":\"33\",\"authorName\":\"陈立功\",\"authorId\":\"9\",\"goodsName\":\"美人捧心\",\"goodsNum\":\"2\"},{\"orderGoodsId\":\"2\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/120.png\",\"goodsMoney\":\"10000\",\"orderId\":\"1\",\"goodsId\":\"34\",\"authorName\":\"顾景舟\",\"authorId\":\"1\",\"goodsName\":\"浮屠\",\"goodsNum\":\"1\"}]",
	            "orderStatus": "2000",
	            "goodsTotalMoney": "12000",
	            "goodsTotalNum": "3"
	        },{
	            "orderId": "4",
	            "orderStatusDesc": "待收货",
	            "goodsList": "[{\"orderGoodsId\":\"1\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_0.png\",\"goodsMoney\":\"2000\",\"orderId\":\"1\",\"goodsId\":\"33\",\"authorName\":\"陈立功\",\"authorId\":\"9\",\"goodsName\":\"美人捧心\",\"goodsNum\":\"2\"},{\"orderGoodsId\":\"2\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/120.png\",\"goodsMoney\":\"10000\",\"orderId\":\"1\",\"goodsId\":\"34\",\"authorName\":\"顾景舟\",\"authorId\":\"1\",\"goodsName\":\"浮屠\",\"goodsNum\":\"1\"}]",
	            "orderStatus": "1000",
	            "goodsTotalMoney": "12000",
	            "goodsTotalNum": "3"
	        },{
	            "orderId": "5",
	            "orderStatusDesc": "交易关闭",
	            "goodsList": "[{\"orderGoodsId\":\"1\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_0.png\",\"goodsMoney\":\"2000\",\"orderId\":\"1\",\"goodsId\":\"33\",\"authorName\":\"陈立功\",\"authorId\":\"9\",\"goodsName\":\"美人捧心\",\"goodsNum\":\"2\"},{\"orderGoodsId\":\"2\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/120.png\",\"goodsMoney\":\"10000\",\"orderId\":\"1\",\"goodsId\":\"34\",\"authorName\":\"顾景舟\",\"authorId\":\"1\",\"goodsName\":\"浮屠\",\"goodsNum\":\"1\"}]",
	            "orderStatus": "-1000",
	            "goodsTotalMoney": "12000",
	            "goodsTotalNum": "3"
	        },{
	            "orderId": "13",
	            "orderStatusDesc": "退货",
	            "goodsList": "[{\"orderGoodsId\":\"1\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_0.png\",\"goodsMoney\":\"2000\",\"orderId\":\"1\",\"goodsId\":\"33\",\"authorName\":\"陈立功\",\"authorId\":\"9\",\"goodsName\":\"美人捧心\",\"goodsNum\":\"2\"},{\"orderGoodsId\":\"2\",\"goodsImg\":\"http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/120.png\",\"goodsMoney\":\"10000\",\"orderId\":\"1\",\"goodsId\":\"34\",\"authorName\":\"顾景舟\",\"authorId\":\"1\",\"goodsName\":\"浮屠\",\"goodsNum\":\"1\"}]",
	            "orderStatus": "-2000",
	            "goodsTotalMoney": "12000",
	            "goodsTotalNum": "3"
	        }
	    ]
	}),
	//省市区接口
	provinceList: Mock.mock({
	    "success": true,
	    "object": [
	        {
	            "name": "北京市",
	            "code": "110000"
	        },
	        {
	            "name": "天津市",
	            "code": "120000"
	        },
	        {
	            "name": "河北省",
	            "code": "130000"
	        },
	        {
	            "name": "山西省",
	            "code": "140000"
	        },
	        {
	            "name": "内蒙古自治区",
	            "code": "150000"
	        },
	        {
	            "name": "辽宁省",
	            "code": "210000"
	        },
	        {
	            "name": "吉林省",
	            "code": "220000"
	        },
	        {
	            "name": "黑龙江省",
	            "code": "230000"
	        }
	    ]
	}),
	//省市区接口
	provinceLists: Mock.mock({
	    "success": true,
	    "object": [
	        {
	            "name": "sss",
	            "code": "110000"
	        },
	        {
	            "name": "eee",
	            "code": "120000"
	        }
	    ]
	}),
	//设置默认收货地址 接口
	defaultAddress: Mock.mock({"success":true,"object":"1"}),
	//确认订单 预览列表接口
	previewOrder: Mock.mock({
	    "success": true,
	    "object": {
	        "orderGoodsList": [
	            {
	                "goodsId": "32",
	                "goodsNum": "2",
	                "price": "1000",
	                "goodsMoney": "2000",
	                "goodsName":"看开点打款打款",
	                "attachmentUrl": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_0.png"
	            },{
	                "goodsId": "32",
	                "goodsNum": "2",
	                "price": "1000",
	                "goodsMoney": "2000",
	                "goodsName":"看开点打款打款",
	                "attachmentUrl": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_0.png"
	            }
	        ],
	        "address": {
	            "id": "7",
	            "userId": "2",
	            "cityCode": "110100",
	            "city": "北京市",
	            "provinceCode": "110000",
	            "province": "北京市",
	            "detailAddress": "北京市昌平县城御路园10号楼6单元101",
	            "receiverName": "测试1",
	            "receiverPhone": "13499999999",
	            "isDefault": "1"
	        },
	        "totalMoney": 2000
	    }
	}),
	//购物车列表 移除购物车
	removeShoppingGoods: Mock.mock({
		"success":true,
		"message":"1"
	}),
	//购物车列表 更新订单是否选中
	updateCartGoodsSelected: Mock.mock({"success":true,"message":"1"}),
	//购物车列表 商品数量
	updateCartGoodsNum: Mock.mock({
		"success": true,
		"message": "1"
	}),
	//购物车列表
	getShoppingGoodsPage: Mock.mock({
		"success": true,
		"object": [{
			"shoppingCartId": "3",
			"attachmentUrl": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
			"goodsId": "37",
			"price": "1000",
			"goodsName": "浮屠",
			"goodsNum": "1",
			"isSelected": "1",
			"remainCount": "3"
		},
		{
			"shoppingCartId": "1",
			"attachmentUrl": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
			"goodsId": "33",
			"price": "1200",
			"goodsName": "浮屠11",
			"goodsNum": "2",
			"isSelected": "0",
			"remainCount": "10"
		}]
	}),
	//微信授权 分享
	apiconfig: Mock.mock({
		"success": true,
		"object": {
			"appId": "wx44f0c0399de653fd",
			"noncestr": "PBXlsVrVquhotivRGW29XhJtfntrMt",
			"signature": "0c471b8407793dc35cb76aaf40d1d4eb39104329",
			"timestamp": "1502785040"
		}
	}),
	//user 个人信息
	userAttribute: Mock.mock({
		"success": true,
		"object": {
			"hasRegistWx": "1",
			"userInfo": {
				"wxHeadUrl": "http://wx.qlogo.cn/mmopen/O4clVONhQmclGFpNSib1tAia9x0FkOkiavKM66bW6wuw1m0lM3777SQoesazH1dwEzT7SnOn3kC0ibYzhmp8yJXpYiaicsIUHicmd1a/0",
				"openId": "o-D5C1PbSksMIzt3sOku-wUqzHfY",
				"wxName": "黄继鹏",
				"userId": "51"
			},
			"userPhone": "18231321037",
			"hasQuhao": "0",
			"hasBindPhone": "0",
			"userId": "51"
		}
	}),
	//匠人详情页
	authorDetail: Mock.mock({
		"success": true,
		"object": {
			"isFollow": "0",
			"goodsCount": "15",
			"address": "宜兴",
			"followCount": "1",
			"authorName": "陈立功",
			"authorLevel": "大师级高级工艺美术师",
			"authorHeadUrl": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg"
		}
	}),
	//匠人列表
	authorList: Mock.mock({
		"success": true,
		"object|14": [{
			"photoUrl": "http://meiyuefu.oss-cn-beijing.aliyuncs.com/顾景舟1.jpg",
			"address": "@city",
			"followCount": "0",
			"authorName": "@cname",
			"authorLevel": "6",
			"memo": "师承xxx",
			"authorHeadUrl": "https://p3.pstatp.com/list/2c6700137fe773231e96",
			"id|1-100": 100
		}]
	}),
	//夺宝详情
	duobaoDetail: Mock.mock({
		"success": true,
		"object": {
			"goodsInfo": {
				"goodsId": "6",
				"goodsName": "【扁腹仿古壶】陶纹山屋",
				"description": "宜兴纯手工紫砂壶仿古，名家全手工原矿段泥茶壶",
				"price": "688",
				"picUrl": ["http://qgy.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_1.png", "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_1.png", "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_1.png"]
			},
			"winGoodsInfo": {
				"winGoodsStatus": "10",
				"periodNo": "DB201701010005",
				"totalCnt": "100",
				"remainCnt": "50",
				"endTime": "2017-01-01:20:00:00",
				"nowTime": "2017-01-01:19:00:00",
				"unitMoney": "0"
			},
			"luckyUser": {
				"luckyUserId": "2",
				"luckyNum": "030",
				"userHead": "http://meiyuefu.oss-cn-beijing.aliyuncs.com/%E9%A1%BE%E6%99%AF%E8%88%9F1.jpg",
				"userName": "张三"
			},
			"selectNumList": ["001", "090"]
		}
	}),
	//删除我的喜欢
	favorite: Mock.mock({
		"success": true,
		"message": "操作成功"
	}),
	//我喜欢/收藏的商品
	myFavorites: Mock.mock({
		"success": true,
		"object|10": [{
			"shape": "如意",
			"goodsId": "5",
			"authorId": "9",
			"material": "紫泥",
			"goodsStatus": "0",
			"author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
			"authorName": "陈立功",
			"authorLevel": "6",
			"price": "18888",
			"authorLevelName": "大师级高级工艺美术师",
			"pot_item_bg_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/10.png",
			"goodsName": "龙凤呈详",
			"favoriteCount": "4"
		}]
	}),
	//删除 或者关注我的匠人
	followAuthor: Mock.mock({
		"success": true,
		"message": "操作成功"
	}),
	//我关注的匠人 列表接口
	myAuthors: Mock.mock({
		"success": true,
		"object|2": [{
			"isFollow": "1",
			"goodsCount": "15",
			"followCount": "1",
			"authorName": "陈立功",
			"authorLevel": "大师级高级工艺美术师",
			"authorHeadUrl": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
			"authorId": "9"
		}]
	}),
	//我的，喜欢，关注数据展示
	myStatistics: Mock.mock({
		"success": true,
		"object": {
			"followCount": "10",
			"favoriteCount": "14"
		}
	}),
	//详情页接口
	potDetail: Mock.mock({
		"success": true,
		"object": {
			"garyHeadTagList": [{
				"tagId": "102",
				"tagValue": "黑星砂",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/niliao.png",
				"tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/niliao-grey.png",
				"tagName": "泥料"
			},
			{
				"tagId": "213",
				"tagValue": "380CC",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/rongliang.png",
				"tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/rongliang-grey.png",
				"tagName": "容量"
			},
			{
				"tagId": "210",
				"tagValue": "全国包邮",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/yunfei.png",
				"tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/yunfei-grey.png",
				"tagName": "运费"
			},
			{
				"tagId": "211",
				"tagValue": "7天无理由退货",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/shouhou.png",
				"tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/shouhou-grey.png",
				"tagName": "售后"
			}],
			"goodsId": "48",
			"description": "西施「文旦壶」中的格调高雅者，壶性如美女西施丰乳《阳慕茗壶赋》，流嘴短小而撅起，若朱丽之樱桃小口，又以独特倒把之形，整壶圆润端庄，亭亭玉立，宛若佳人。",
			"authorId": "14",
			"remainCount": "5",
			"capacity": "380CC",
			"tagList": [{
				"tagId": "201",
				"tagValue": "9cm",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/koujing.png",
				"tagName": "口径"
			},
			{
				"tagId": "202",
				"tagValue": "10cm",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/hugao.png",
				"tagName": "壶身高度"
			},
			{
				"tagId": "203",
				"tagValue": "14.3cm",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/huchang.png",
				"tagName": "壶身长度"
			},
			{
				"tagId": "204",
				"tagValue": "14孔",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/chushui.png",
				"tagName": "出水"
			},
			{
				"tagId": "205",
				"tagValue": "宜兴",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/chandi.png",
				"tagName": "产地"
			},
			{
				"tagId": "206",
				"tagValue": "178g",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/maozhong.png",
				"tagName": "毛重"
			},
			{
				"tagId": "207",
				"tagValue": "纯手工",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/gongyi.png",
				"tagName": "工艺"
			},
			{
				"tagId": "208",
				"tagValue": "顺丰快递",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/fahuo.png",
				"tagName": "发货"
			},
			{
				"tagId": "209",
				"tagValue": "1~3天",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/huoyunsudu.png",
				"tagName": "货运速度"
			}],
			"material": "黑星砂",
			"goodsStatus": "0",
			"author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/author/22x.png",
			"authorName": "刘六万",
			"authorLevel": "6",
			"picList": ["http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/48_11.png", "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/48_12.png", "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/48_13_1.png", "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/48_13_2.png", "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/48_13_3.png"],
			"price": "1680",
			"authorLevelName": "大师级高级工艺美术师",
			"goodsName": "浮雕西施",
			"headTagList": [{
				"tagId": "102",
				"tagValue": "黑星砂",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/niliao.png",
				"tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/niliao-grey.png",
				"tagName": "泥料"
			},
			{
				"tagId": "213",
				"tagValue": "380CC",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/rongliang.png",
				"tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/rongliang-grey.png",
				"tagName": "容量"
			},
			{
				"tagId": "210",
				"tagValue": "全国包邮",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/yunfei.png",
				"tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/yunfei-grey.png",
				"tagName": "运费"
			},
			{
				"tagId": "211",
				"tagValue": "7天无理由退货",
				"tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/shouhou.png",
				"tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/shouhou-grey.png",
				"tagName": "售后"
			}],
			"favoriteCount": "6",
			"extraInfo": {
				"address": "宜兴",
				"followCount": "13",
				"favoriteCnt": "6",
				"wxSharePic": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/48_120.png",
				"isFollow": "0",
				"goodsCount": "1",
				"favoriteList": "44|http://wx.qlogo.cn/mmopen/ibLButGMnqJNdJY1G8EiapnSP86xN31mRiaokoptFxNGywObput4TY9PjhRbyxq2YBVDndvSAbP4SKXXrE77FHJOg/0,45|http://wx.qlogo.cn/mmopen/DY5Eib2rQSoEkpSSibiaFuOW5cnMfUIpH7Ul9sQ5bkLH5DZeoQnrP2TkJhsNX2tpm1uzqdkvwJSBPRydiaQnwtoLDJYKwOgHwOFj/0,50|http://wx.qlogo.cn/mmopen/xdynicmemSticBicvNbltw7ibWxqAefgKRMSRKYTVCBjx1CwBbAAEiaMnStnVk5p7vtfzeOibPLltftxV85kNtn5jpXw/0,52|http://wx.qlogo.cn/mmopen/P3ckSfjrkYJk1eGRHoaveueH0EBCLMsQFgQJFTia7icTRpze9znMoScW3qJEUzIWRgibwVhEDtiatffKib2AtdXpANkUNiaA0oqJK1/0,47|http://wx.qlogo.cn/mmopen/DY5Eib2rQSoEkpSSibiaFuOW4cUOz7qozHp7ltCLXf5iaMvGAgGnZGlibPMZJARUjiaqriameyzWHGmB0qoEkOb32p8ha3LXtaN0DsJ/0,53|http://wx.qlogo.cn/mmopen/ANibrRg2zMlZPX9eYC5iceuwvaow2aTcAsxT7lgD2CPOpOPLvicux8oRhPYSx0Cfaic2Uaia3HDiaiaSJiawHK5Y57OveP2ViaSWJkFnR/0",
				"authorName": "刘六万",
				"authorLevel": "6",
				"authorHeadUrl": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/author/22x.png",
				"isFavorite": "0"
			}
		}
	}),
	//赛选数据
	condition: Mock.mock({
		"success": true,
		"object": {
			"101": {
				"subTagList": [{
					"tagId": "1",
					"tagName": "西施"
				},
				{
					"tagId": "2",
					"tagName": "石瓢"
				},
				{
					"tagId": "3",
					"tagName": "仿古"
				},
				{
					"tagId": "7",
					"tagName": "如意"
				},
				{
					"tagId": "10",
					"tagName": "汉瓦"
				},
				{
					"tagId": "23",
					"tagName": "汉锋"
				},
				{
					"tagId": "37",
					"tagName": "南瓜"
				},
				{
					"tagId": "13",
					"tagName": "潘壶"
				},
				{
					"tagId": "19",
					"tagName": "半月"
				}],
				"tagId": "101",
				"tagName": "壶型"
			},
			"102": {
				"subTagList": [{
					"tagId": "101",
					"tagName": "段泥"
				},
				{
					"tagId": "102",
					"tagName": "朱泥"
				},
				{
					"tagId": "103",
					"tagName": "绿泥"
				},
				{
					"tagId": "104",
					"tagName": "红泥"
				},
				{
					"tagId": "105",
					"tagName": "红皮龙"
				},
				{
					"tagId": "112",
					"tagName": "紫泥"
				},
				{
					"tagId": "110",
					"tagName": "天青泥"
				},
				{
					"tagId": "118",
					"tagName": "古铜泥"
				}],
				"tagId": "102",
				"tagName": "泥料"
			},
			"103": {
				"subTagList": [{
					"tagId": "201",
					"tagName": "福"
				},
				{
					"tagId": "202",
					"tagName": "梅"
				},
				{
					"tagId": "213",
					"tagName": "寿"
				},
				{
					"tagId": "219",
					"tagName": "钟鼎"
				},
				{
					"tagId": "212",
					"tagName": "福"
				},
				{
					"tagId": "227",
					"tagName": "山水"
				},
				{
					"tagId": "208",
					"tagName": "瓜"
				},
				{
					"tagId": "106",
					"tagName": "小煤窑"
				},
				{
					"tagId": "230",
					"tagName": "如意"
				}],
				"tagId": "103",
				"tagName": "主题"
			},
			"104": {
				"tagId": "104",
				"subTagMap": {
					"141": {
						"subTagList": [{
							"tagId": "304",
							"tagName": "送师长"
						},
						{
							"tagId": "305",
							"tagName": "送领导"
						},
						{
							"tagId": "307",
							"tagName": "送男性"
						},
						{
							"tagId": "309",
							"tagName": "赠友"
						},
						{
							"tagId": "306",
							"tagName": "送情侣"
						}],
						"tagId": "141",
						"tagName": "功能"
					},
					"142": {
						"subTagList": [{
							"tagId": "404",
							"tagName": "201-250CC"
						},
						{
							"tagId": "405",
							"tagName": "251-300CC"
						},
						{
							"tagId": "406",
							"tagName": "301-400CC"
						}],
						"tagId": "142",
						"tagName": "容量区间"
					},
					"143": {
						"subTagList": [{
							"tagId": "505",
							"tagName": "10000元以上"
						},
						{
							"tagId": "504",
							"tagName": "5000-10000元"
						}],
						"tagId": "143",
						"tagName": "价格区间"
					}
				},
				"tagName": "更多"
			}
		}
	}),
	//列表页面数据
	potList: Mock.mock({
		"success": true,
		"object": [{
			"shape": "半月",
			"goodsId": "45",
			"authorId": "9",
			"material": "古铜泥",
			"goodsStatus": "0",
			"author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
			"authorName": "陈立功",
			"authorLevel": "6",
			"price": "1000",
			"authorLevelName": "大师级高级工艺美术师",
			"pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/45_10.png",
			"goodsName": "「牛壶」",
			"favoriteCount": "232"
		},
		{
			"shape": "潘壶",
			"goodsId": "44",
			"authorId": "9",
			"material": "段泥",
			"goodsStatus": "0",
			"author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
			"authorName": "陈立功",
			"authorLevel": "6",
			"price": "1000",
			"authorLevelName": "大师级高级工艺美术师",
			"pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/44_10.png",
			"goodsName": "「绿蚁红泥」",
			"favoriteCount": "232"
		},
		{
			"shape": "西施",
			"goodsId": "43",
			"authorId": "9",
			"material": "段泥",
			"goodsStatus": "0",
			"author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
			"authorName": "陈立功",
			"authorLevel": "6",
			"price": "1000",
			"authorLevelName": "大师级高级工艺美术师",
			"pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/43_10.png",
			"goodsName": "「牛盖壶」",
			"favoriteCount": "232"
		},
		{
			"shape": "西施",
			"goodsId": "42",
			"authorId": "9",
			"material": "段泥",
			"goodsStatus": "0",
			"author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
			"authorName": "陈立功",
			"authorLevel": "6",
			"price": "1000",
			"authorLevelName": "大师级高级工艺美术师",
			"pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/42_10.png",
			"goodsName": "「龙井神壶」西施段泥精品",
			"favoriteCount": "232"
		},
		{
			"shape": "南瓜",
			"goodsId": "41",
			"authorId": "9",
			"material": "天青泥",
			"goodsStatus": "0",
			"author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
			"authorName": "陈立功",
			"authorLevel": "6",
			"price": "1000",
			"authorLevelName": "大师级高级工艺美术师",
			"pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/41_10.png",
			"goodsName": "「大西瓜」",
			"favoriteCount": "232"
		},
		{
			"shape": "汉锋",
			"goodsId": "40",
			"authorId": "9",
			"material": "紫泥",
			"goodsStatus": "0",
			"author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
			"authorName": "陈立功",
			"authorLevel": "6",
			"price": "1000",
			"authorLevelName": "大师级高级工艺美术师",
			"pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/40_10.png",
			"goodsName": "「虎啸山林」",
			"favoriteCount": "232"
		},
		{
			"shape": "汉瓦",
			"goodsId": "39",
			"authorId": "9",
			"material": "红皮龙",
			"goodsStatus": "0",
			"author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
			"authorName": "陈立功",
			"authorLevel": "6",
			"price": "1000",
			"authorLevelName": "大师级高级工艺美术师",
			"pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/39_10.png",
			"goodsName": "「归去」",
			"favoriteCount": "232"
		},
		{
			"shape": "如意",
			"goodsId": "38",
			"authorId": "9",
			"material": "红泥",
			"goodsStatus": "0",
			"author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
			"authorName": "陈立功",
			"authorLevel": "6",
			"price": "1000",
			"authorLevelName": "大师级高级工艺美术师",
			"pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/38_10.png",
			"goodsName": "「葫芦娃」",
			"favoriteCount": "232"
		}]
	}),
	//首页
	firstPage: Mock.mock({
		"success": true,
		"object": {
			"goodsNewestList": [{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "44",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "43",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "43",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "43",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "43",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "42",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "42",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "41",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "41",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "40",
				"price": "1000"
			}],
			"activity": [{
				"activityUrl": "http://www.baidu.com",
				"activityPic": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png"
			},
			{
				"activityUrl": "http://www.baidu.com",
				"activityPic": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png"
			}],
			"goodsPopularList": [{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "44",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "43",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "43",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "43",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "43",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "39",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "39",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "37",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "37",
				"price": "1000"
			},
			{
				"attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
				"goodsId": "38",
				"price": "1000"
			}]
		}
	}),

};