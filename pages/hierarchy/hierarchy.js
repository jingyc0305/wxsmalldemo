// pages/tool/tool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: 'aspectFill',
    hierarchys: [],
    titles: [],
    superid: 60,
    curPageIndex: 0,
    wrap: 'wrap',
    enter_nextpage_img_src: '../images/hierarchy/more_data.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHierarchySuperData()
  },
  /**
   * 进入下一级分类页面
   */
  goToHierarchyDetail: function (e) {
    var that = this
    var item_click_index = parseInt(e.currentTarget.dataset.index)
    var hs = JSON.stringify(that.data.hierarchys[item_click_index])
    var _title = []
    console.log("that.data.hierarchys.length=" + that.data.hierarchys.length)
    for (var i = 0; i < that.data.hierarchys.length;i++){
      _title.push(that.data.hierarchys[i].name) 
    }
    console.log("that.data.hierarchys=" + that.data.hierarchys)
    
    wx.navigateTo({
      url: '../hierarchy-details/hierarchy-details?hs=' + hs + '&item_click_index=' + item_click_index + '&titles=' + JSON.stringify(_title)
    })
  },
  /**
   * 获取体系父节点数据
   */
  getHierarchySuperData: function () {
    var that = this
    wx.request({
      url: 'http://www.wanandroid.com/tree/json',
      success: function (res) {
        that.setData({
          hierarchys: res.data.data,
        })
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

  }
})