// pages/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isRecharge: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    if (options.isrecharge == 1) {
      console.log("充值页面");
      wx.setNavigationBarTitle({
        title: '在线充值',
      });
      this.setData({
        isRecharge: true
      });
    } else {
      wx.setNavigationBarTitle({
        title: '我要提现',
      });
      this.setData({
        isRecharge: false
      });
    }
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
   * 用户提交申请提现
   */
  tixianFormSubmit: function (e) {
    var that = this;
    wx.showModal({
      title: '提现',
      content: '提现成功 ' + e.detail.value.tixianInput + ' 元',
      showCancel: false,
      success: function () {
        that.cancel();
      }
    })
  },
  cancel: function () {
    wx.navigateBack({});
  },
  /**
   * 用户充值
   */
  rechargeFormSubmit: function(e) {
    var that = this;
    wx.showModal({
      title: '充值',
      content: '充值成功 ' + e.detail.value.rechargeInput + ' 元',
      showCancel:false,
      success: function() { 
        that.cancel();
      }
    })
  }
})