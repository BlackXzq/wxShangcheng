// pages/goodsDetail/goodsDetail.js

var app = getApp();
var WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsInfo:null,
    goodsPics:null,
    properties:null,
    popupViewHidden:true,
    popupType:"toBuy",
    buyNumber: 0,
    buyNumMin: 1,
    buyNumMax: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    });
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/tz/shop/goods/detail',
      data: {
        id: options.id
      },
      success: function(res) {
        console.log(res);
        if (res.data.code == 404) {
          wx.showModal({
            title: '提示',
            content: '暂无数据',
            showCancel: false,
            complete: function() {
              wx.navigateBack({
              });
            }
          })
          return;
        };
        that.setData({
          goodsPics: res.data.data.pics,
          goodsInfo: res.data.data.basicInfo,
          properties: res.data.data.properties,
          buyNumMax: res.data.data.basicInfo.stores,
          buyNumber: (res.data.data.basicInfo.stores>0)?1:0
        });
        WxParse.wxParse('article', 'html', res.data.data.content, that, 5);
      },
      complete: function() {
        wx.hideLoading();
      }
    })
  },

  gotoShopCart: function () {
    console.log("购物车");
    wx.switchTab({
      url: '../shopCart/shopCart'
    })
  },

  onShareAppMessage: function () {
    return {
      title: this.data.goodsInfo.name,
      path: '/pages/goods-details/index?id=' + this.data.goodsDetail.basicInfo.id + '&inviter_id=' + app.globalData.uid,
      success: function (res) {
        // 转发成功
        console.log("转发成功");
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败");
      }
    }
  },

  gobuy: function(e) {
    var useType =  e.currentTarget.dataset.type;
    this.setData({
      popupType:useType,
      popupViewHidden:false
    });
  },

  popupViewClose: function() {
    this.setData({
      popupViewHidden: true
    });
  },

  numJiantap: function() {
    var currentNum = this.data.buyNumber;
    var minNum = this.data.buyNumMin;
    if(currentNum > minNum) {
      currentNum--;
      this.setData({
        buyNumber: currentNum
      });
    }
  },

  numJiaTap: function() {
    var currentNum = this.data.buyNumber;
    var maxNum = this.data.buyNumMax;
    if(maxNum > currentNum) {
      currentNum++;
      this.setData({
        buyNumber: currentNum
      });
    }
  },

  labelItemTap: function (e){
    console.log(e);
    var that = this;
    var propertyIndex = e.currentTarget.dataset.propertyindex;
    var propertyChildIndex = e.currentTarget.dataset.propertyChildindex;
    var childs = this.data.properties[propertyIndex].childsCurGoods;
    for (var i = 0; i < childs.length; i++) {
      childs[i].active = false;
    }
    childs[propertyChildIndex].active = true;

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
  
  }
})