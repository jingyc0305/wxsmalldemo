// pages/index-detail/index-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //文章链接
    artical_title: null,
    artical_link: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var title = options.title
    var link = options.link
    that.setData({
      artical_title: title,
      artical_link : link
    })
    //动态设置页面标题---文章标题
    wx.setNavigationBarTitle({
      title: that.data.artical_title
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

  }
})