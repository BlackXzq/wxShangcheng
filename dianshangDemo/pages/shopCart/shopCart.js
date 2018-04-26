// pages/shopCart/shopCart.js

var shopData = require('../../utils/shopCartMock.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    goods:{
      totalPrice:0,
      isAllSeleted: false,
      list:[]
    },
    delBtnWidth:120
  },

  //获取元素自适应后的实际宽度
  getEleWidth: function (w) {
    var real = 0;
    try {
      var res = wx.getSystemInfoSync().windowWidth;
      var scale = (750 / 2) / (w / 2);  //以宽度750px设计稿做宽度的自适应
      real = Math.floor(res / scale);
      return real;
    } catch (e) {
      return false;
      // Do something when catch error
    }
  },
  initEleWidth: function () {
    var delBtnWidth = this.getEleWidth(this.data.delBtnWidth);
    this.setData({
      delBtnWidth: delBtnWidth
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initEleWidth();
    var goodlist = shopData.shopList;
    this.setGoodsData(this.totalPrice(), this.caculAllselect(), goodlist);
    this.setGoodsData(this.totalPrice(), this.caculAllselect(), goodlist);
  },


  jianBtnTap: function (e) {
    var index = e.currentTarget.dataset.index;
    var list = this.data.goods.list;
    var item = list[index];
    var num = item.num;
    if (num >= 2) {
      item.num = num - 1;
      this.setGoodsData(this.totalPrice(), this.caculAllselect(), list);
    }
  },

  jiaBtnTap: function (e) {
    var index = e.currentTarget.dataset.index;
    var list = this.data.goods.list;
    var item = list[index];
    var num = item.num;
    if(num <10) {
      item.num = num+1;
      this.setGoodsData(this.totalPrice(), this.caculAllselect(), list);
    } 
  },  

  selectTap: function (e) {
    var index = e.currentTarget.dataset.index;
    var list = this.data.goods.list;
    var item = list[index];
    item.isSelect = !item.isSelect;
    this.setGoodsData(this.totalPrice(), this.caculAllselect(), list);
  },

  touchS: function(e) {
    if(e.touches.length==1) {
      this.setData({
        startX: e.touches[0].clientX
      });
    }
  },

  touchM: function(e) {
    var index = e.currentTarget.dataset.index;
    if(e.touches.length==1){
      var moveX = e.touches[0].clientX;
      var disX = this.data.startX - moveX;
      var delBtnWidth = this.data.delBtnWidth;
      var left = "";
      if(disX <= 0) {
        left = "margin-left:0px";
      } else {
        left = "margin-left:-"+disX+"px";
        if(disX>=delBtnWidth){
          left = "left:-"+delBtnWidth+"px";
        }
      }
      var list = this.data.goods.list;
      if(index!=""&& index != null) {
        list[parseInt(index)].left = left;
        this.setGoodsData(this.totalPrice(), this.caculAllselect(), list);
      }
    }
  },
  touchE: function(e) {
    var index = e.currentTarget.dataset.index;
    if (e.changedTouches.length == 1) {
      var endX = e.changedTouches[0].clientX;
      var disX = this.data.startX - endX;
      var delBtnWidth = this.data.delBtnWidth;
      var left = disX > delBtnWidth/2 ? "margin-left:-"+delBtnWidth+"px" : "margin-left:0px";  
      var list = this.data.goods.list;
      if(index!=="" && index!=null) {
        list[parseInt(index)].left = left;
        this.setGoodsData(this.totalPrice(), this.caculAllselect(), list);
      }
    }
  }, 

  delItemClick: function(e) {
    var index = e.currentTarget.dataset.index;
    var list = this.data.goods.list; 
    if(index < list.length) {
      list.splice(index, 1);
      this.setGoodsData(this.totalPrice(), this.caculAllselect(), list);
    }
  },

  selectAllClick: function () {
    var selectedAll = this.data.goods.isAllSeleted;
    var list = this.data.goods.list;
    for(var i=0; i < list.length; i++) {
      var item = list[i];
      item.isSelect = !selectedAll;
    }
    this.setGoodsData(this.totalPrice(), !selectedAll, list);
  },

  setGoodsData: function(toprice, isAllSeleted, list) {
    this.setData({
      goods: {
        totalPrice:toprice,
        isAllSeleted: isAllSeleted,
        list: list
      }
    });
    console.log(this.data.goods);
  },

  /**
   * 计算是否全选
   */
  caculAllselect: function() {
    var list = this.data.goods.list;
    if(list.length <= 0) {
      return false;
    }
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      if (!item.isSelect) {
        return false;
      }
    }
    return true;
  },
  /**
   * 计算总价格
   */
  totalPrice: function () {
    var list = this.data.goods.list;
    var sum = 0;
    for(var i=0; i<list.length; i++) {
      var item = list[i];
      if (item.isSelect) {
        var itemprice = item.price*item.num;
        sum = sum + itemprice;
      }
    }
    return sum;
  },

  gopayclick: function(e) {
    var that = this;
    var totalprice = e.currentTarget.dataset.price;
    var list = this.data.goods.list;
    var temlist = [];
    for(var i=0; i<list.length; i++) {
      var item = list[i];
      if (!item.isSelect) {
        temlist.push(item);
      }
    } 
    wx.showModal({
      title: '确认',
      content: '确认购买 ' + totalprice + " 元商品吗？",
      success:function(res) {
        if (res.confirm) {
          that.setData({
            goods: {
              totalPrice: 0,
              isAllSeleted: false,
              list: temlist
            }
          });
        } else if(res.cancel) {
          console.log("取消");
        }
      }
    })
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

  tapguang: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  }

})