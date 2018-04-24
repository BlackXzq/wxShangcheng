// pages/mine/mine.js

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    blanceY:100,
    blanceD:50,
    items:[
      {
        title:"当前积分",
        showArrow:false,
        showBtn: true,
        itemTagName:"jifen"
      },
      {
        title: "我的订单",
        showArrow: true,
        showBtn: false,
        itemTagName: "order"
      },
      {
        title: "我的收货地址",
        showArrow: true,
        showBtn: false,
        itemTagName: "address"
      },
      {
        title: "我的优惠券",
        showArrow: true,
        showBtn: false,
        itemTagName: "youhuiquan"
      },]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.getUserInfo(function(info){
      that.setData({
        userInfo: info
      })
    });
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 用户点击功能列表
   */
  tapItemClick: function (e) {
    var itemId = e.target.id;
    console.log(itemId);
    switch(itemId) {
      case "order": 
        console.log("我的订单");
        wx.navigateTo({
          url: '../order-list/order-list',
        })
        break;
      case "address":
        console.log("我的收获地址");
        wx.navigateTo({
          url: '../select-address/select-address',
        })
        break;
      case "youhuiquan":
        console.log("我的优惠券");
        break;
      case "ours":
        console.log("关于我们");
        break;
    }
  },
  /**
   * 充值按键
   */
  rechargeClick: function () {
    wx.navigateTo({
      url: '../recharge/recharge?isrecharge=1',
    })
  },
  /**
   * 提现按键
   */
  tixianClick: function () {
    wx.navigateTo({
      url: '../recharge/recharge?isrecharge=0',
    })
  },
  /**
   * 每日签到
   */
  signClick: function () {
    wx.showModal({
      title: '签到',
      content: '签到成功',
      showCancel: false
    })
  }

})