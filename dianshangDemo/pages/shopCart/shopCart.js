// pages/shopCart/shopCart.js

var shopData = require('../../utils/shopCartMock.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var goodlist = shopData.shopList;
    console.log(goodlist);
    var useList = {
      list: goodlist
    };
    console.log(useList);
    this.setData({
      goods: useList
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // var goodlist = shopData.shopList;
    // console.log(goodlist);
    // console.log(this.data.goods);
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

  tapguang: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  }

})