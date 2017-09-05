import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
const msite2 = r => require.ensure([], () => r(require('../page/msite2/msite2')), 'msite2')

const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')
const info = r => require.ensure([], () => r(require('../page/profile/children/info')), 'info')
const mylike = r => require.ensure([], () => r(require('../page/profile/children/mylike')), 'mylike')
const myfollow = r => require.ensure([], () => r(require('../page/profile/children/myfollow')), 'myfollow')
const contactser = r => require.ensure([], () => r(require('../page/profile/children/contactser')), 'contactser')
const forget = r => require.ensure([], () => r(require('../page/forget/forget')), 'forget')
const order = r => require.ensure([], () => r(require('../page/order/order')), 'order')
const orderDetail = r => require.ensure([], () => r(require('../page/order/children/orderDetail')), 'orderDetail')
const vipcard = r => require.ensure([], () => r(require('../page/vipcard/vipcard')), 'vipcard')
const invoiceRecord = r => require.ensure([], () => r(require('../page/vipcard/children/invoiceRecord')), 'invoiceRecord')
const useCart = r => require.ensure([], () => r(require('../page/vipcard/children/useCart')), 'useCart')
const vipDescription = r => require.ensure([], () => r(require('../page/vipcard/children/vipDescription')), 'vipDescription')
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')

//确认订单页
const confirmOrder = r => require.ensure([], () => r(require('../page/confirmOrder/confirmOrder')), 'confirmOrder')
//订单确认页面  - 新建地址
const addressc = r => require.ensure([], () => r(require('../page/confirmOrder/children/address')), 'addressc')
//确认订单页 - 地址列表
const chooseAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/chooseAddress')), 'chooseAddress')

//订单确认页面 - 地址列表  - 新建地址
const addAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/addAddress')), 'addAddress')

//关注微信
const followwx = r => require.ensure([], () => r(require('../page/followwx/followwx')), 'followwx')








const foodDetail = r => require.ensure([], () => r(require('../page/shop/children/foodDetail')), 'foodDetail')
const shopDetail = r => require.ensure([], () => r(require('../page/shop/children/shopDetail')), 'shopDetail')
const shopSafe = r => require.ensure([], () => r(require('../page/shop/children/children/shopSafe')), 'shopSafe')
const setusername = r => require.ensure([], () => r(require('../page/profile/children/setusername')), 'setusername')
const address = r => require.ensure([], () => r(require('../page/profile/children/children/address')), 'address')
const add = r => require.ensure([], () => r(require('../page/profile/children/children/children/add')), 'add')
const addDetail = r => require.ensure([], () => r(require('../page/profile/children/children/children/children/addDetail')), 'addDetail')
const balance = r => require.ensure([], () => r(require('../page/balance/balance')), 'balance')
const balanceDetail = r => require.ensure([], () => r(require('../page/balance/children/detail')), 'balanceDetail')
const benefit = r => require.ensure([], () => r(require('../page/benefit/benefit')), 'benefit')
const coupon = r => require.ensure([], () => r(require('../page/benefit/children/coupon')), 'coupon')
const hbDescription = r => require.ensure([], () => r(require('../page/benefit/children/hbDescription')), 'hbDescription')
const hbHistory = r => require.ensure([], () => r(require('../page/benefit/children/hbHistory')), 'hbHistory')
const exchange = r => require.ensure([], () => r(require('../page/benefit/children/exchange')), 'exchange')
const commend = r => require.ensure([], () => r(require('../page/benefit/children/commend')), 'commend')
const points = r => require.ensure([], () => r(require('../page/points/points')), 'points')
const pointsDetail = r => require.ensure([], () => r(require('../page/points/children/detail')), 'pointsDetail')
const service = r => require.ensure([], () => r(require('../page/service/service')), 'service')
const questionDetail = r => require.ensure([], () => r(require('../page/service/children/questionDetail')), 'questionDetail')
const find = r => require.ensure([], () => r(require('../page/find/find')), 'find')
const download = r => require.ensure([], () => r(require('../page/download/download')), 'download')
const market = r => require.ensure([], () => r(require('../page/market/market')), 'market')
const details = r => require.ensure([], () => r(require('../page/details/details')), 'details')
const standard = r => require.ensure([], () => r(require('../page/details/children/standard')), 'standard')

const author = r => require.ensure([], () => r(require('../page/author/author')), 'author')
const errorPage = r => require.ensure([], () => r(require('../page/404/404')), '404')

const llp = r => require.ensure([], () => r(require('../page/llp/llp')), 'llp')
const ccc = r => require.ensure([], () => r(require('../page/llp/children/ccc')), 'ccc')

const getGift = r => require.ensure([], () => r(require('../page/getGift/getGift')), 'getGift')

const coninfo = r => require.ensure([], () => r(require('../page/coninfo/coninfo')), 'coninfo')
const ruleone = r => require.ensure([], () => r(require('../page/coninfo/children/ruleone')), 'ruleone')

//商品搜索
const searchGoods = r => require.ensure([], () => r(require('../page/searchGoods/searchGoods')), 'searchGoods')

//cart 购物车页
const cart = r => require.ensure([], () => r(require('../page/cart/cart')), 'cart')


export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转msite页面
        {
            path: '',
            redirect: '/msite'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        //cart 购物车页
        {
            path: '/cart',
            component: cart
        },
        //信息页
        {
            path: '/coninfo',
            component: coninfo,
            children: [{
                path: 'ruleone', //规格详情页
                component: ruleone,
            }, ]
        },
        //关注微信
        {
            path: '/followwx',
            component: followwx,
        },
        //商品搜索
        {
            path: '/searchGoods',
            component: searchGoods,
        },
        {
            path: '/llp',
            component: llp,
            children: [{
                path: 'ccc',
                component: ccc,
            }, ]
        },
        //夺宝
        {
            path: '/wingoods',
            component: getGift,
        },
        //集市
        {
            path: '/market',
            component: market,
            meta: { keepAlive: true },
        },
        //商品详情
        {
            path: '/details',
            component: details,
            children: [{
                path: 'standard', //规格详情页
                component: standard,
            }, ]
        },
        //匠人详情author
        {
            path: '/author',
            component: author,
        },

        //当前选择城市页
        {
            path: '/city/:cityid',
            component: city
        },
        //所有商铺列表页
        {
            path: '/msite',
            component: msite,
            meta: { keepAlive: true },
        },
        //所有商铺列表页2
        {
            path: '/msite2',
            component: msite2,
            meta: { keepAlive: true },
        },
        //特色商铺列表页
        {
            path: '/food',
            component: food
        },
        //搜索页
        {
            path: '/search/:geohash',
            component: search
        },
        //商铺详情页
        {
            path: '/shop',
            component: shop,
            children: [{
                path: 'foodDetail', //食品详情页
                component: foodDetail,
            }, {
                path: 'shopDetail', //商铺详情页
                component: shopDetail,
                children: [{
                    path: 'shopSafe', //商铺安全认证页
                    component: shopSafe,
                }, ]
            }]
        },
        //确认订单页
        {
            path: '/confirmOrder',
            component: confirmOrder,
            children: [{
            	path: 'chooseAddress', //选择地址
                component: chooseAddress,
                children: [{
                    path: 'addAddress', //添加地址
                    component: addAddress,
                }]
            },{
            	path: 'addressc', //新建地址
                component: addressc,
            }]
        },
        //登录注册页
        {
            path: '/login',
            component: login,
        },

        //修改密码页
        {
            path: '/forget',
            component: forget
        },
        //订单列表页
        {
            path: '/order',
            component: order,
            children: [{
                path: 'orderDetail', //订单详情页
                component: orderDetail,
            }, ]
        },
        //vip卡页
        {
            path: '/vipcard',
            component: vipcard,
            children: [{
                path: 'invoiceRecord', //开发票
                component: invoiceRecord,
            }, {
                path: 'useCart', //购买会员卡
                component: useCart,
            }, {
                path: 'vipDescription', //会员说明
                component: vipDescription,
            },]
        },
        //发现页
        {
            path: '/find',
            component: find
        },
        //下载页
        {
            path: '/download',
            component: download
        },
        //服务中心
        {
            path: '/service',
            component: service,
             children: [{
                path: 'questionDetail', //订单详情页
                component: questionDetail,
            }, ]
        },
        //余额
        {
            path: 'balance',
            component: balance,
            children: [{
                path: 'detail', //余额说明
                component: balanceDetail,
            }, ]
        },
        //我的优惠页
        {
            path: 'benefit',
            component: benefit,
            children: [{
                path: 'coupon', //代金券说明
                component: coupon,
            }, {
                path: 'hbDescription', //红包说明
                component: hbDescription,
            }, {
                path: 'hbHistory', //历史红包
                component: hbHistory,
            }, {
                path: 'exchange', //兑换红包
                component: exchange,
            }, {
                path: 'commend', //推荐有奖
                component: commend,
            },]
        },
        //我的积分页
        {
            path: 'points',
            component: points,
            children: [{
                path: 'detail', //积分说明
                component: pointsDetail,
            }, ]
        },

        //个人信息页
        {
            path: '/profile',
            component: profile,
            children: [{
                path: 'info', //个人信息详情页
                component: info,
                children: [{
                    path: 'address',
                    component: address,     //编辑地址
                    children:[{
                        path:'add',
                        component:add,
                        children:[{
                            path:'addDetail',
                            component:addDetail
                        }]
                    }]
                }]
            },
            {
                path: 'setusername',
                component: setusername,
            },
            {
                path: 'service', //服务中心
                component: service,
            },
            {
                path: 'mylike', //喜欢页
                component: mylike,
            },{
                path: 'myfollow', //我的关注
                component: myfollow,
            },{
                path: 'contactser', //我的客服
                component: contactser,
            }]
        },
        {
            path: '*',
            component: errorPage
        }
    ]
}]
