//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    types: ["全部", "上装", "裤装","家居内衣","特价区","裙装","套装","外套","秒杀"],
    selectTypeIndex:0,
    notices:["商铺新开张，优惠多多，戳 戳 我看详情",
             "大甩卖，大甩卖，老板带着秘书跑路了～～",
             "耐克店庆100周年，全场5折。。。"],
    coupons:[
      {
        price:40,
        fullPrice:300,
        validDay:15
      },
      {
        price: 25,
        fullPrice: 200,
        validDay: 10
      },
      {
        price: 10,
        fullPrice: 100,
        validDay: 7      
      }
    ],
    goodsList: [
      {
        url:"https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg",
        name:"初冬蕾丝裙初冬蕾丝裙初冬蕾丝裙",
        price:20,
        oriPrice: 50
      },
      {
        url: "https://cdn.it120.cc/apifactory/2017/09/18/92b79640b3c2c2bfdf1cb972c1d95992.jpg",
        name: "开爱套裙",
        price: 30,
        oriPrice: 60
      },
      {
        url: "https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg",
        name: "初冬蕾丝裙",
        price: 120,
        oriPrice: 250
      },
      {
        url: "https://cdn.it120.cc/apifactory/2017/09/18/92b79640b3c2c2bfdf1cb972c1d95992.jpg",
        name: "开爱套裙",
        price: 50,
        oriPrice: 90
      },
      {
        url: "https://cdn.it120.cc/apifactory/2017/09/18/3e1d9b4200ba4ea4fe0c607d5b67b2aa.jpg",
        name: "初冬蕾丝裙",
        price: 20,
        oriPrice: 50
      },
      {
        url: "https://cdn.it120.cc/apifactory/2017/09/18/92b79640b3c2c2bfdf1cb972c1d95992.jpg",
        name: "开爱套裙",
        price: 300,
        oriPrice: 960
      }
    ]
  },

  typeItemClick: function(e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      selectTypeIndex:index
    });
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },
  tapSwiperImg: function(e) {
    console.log(e.currentTarget.dataset.index);
  }
})
