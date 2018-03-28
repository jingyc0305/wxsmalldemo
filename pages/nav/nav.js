// pages/house/house.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],
    //navs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //获取标签以及标签内数据
    //this.getTabDatas()
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
  //事件响应============
  //获取tab以及tab数据
  getTabDatas: function(){
    var that = this
    wx.request({
      url: 'http://www.wanandroid.com/navi/json',
      data: {
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success:function(res){
        var tabs = [];
        for (var i = 0; i < res.data.data.length; i++) {
          tabs.push(res.data.data[i]);
        }
        that.setData({
          tabs: tabs
        })
      }
    })
  }

})