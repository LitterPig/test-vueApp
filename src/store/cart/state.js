export default {
    cartInfos:{
        total_price:0,   //商品总价
        total_amount:0,  //商品的数量
        commitPrice:0,
    },
    cartList:[],   //购物车商品数组
    curIndex:-1,  //当前商品操作的下标index
    commitList:[], //立即购买的订单信息
    commitAdress:[], //新增的地址
    loginStatus:false,  //用户的登陆状态
    count:0, //商品被选中的次数
    toUrl:''
 }