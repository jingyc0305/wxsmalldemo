// pages/hierarchy-details/hierarchy-details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],
    hierarchy_childarticals:[],
    curPageIndex: 0,
    perPageSize: 20,
    pageCount: 59,
    isHideLoadMore: false,
    loadingMoreHidden: true,
    curid:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var hs = JSON.parse(options.hs);
    var item_index = options.item_click_index
    
    var titles = JSON.parse(options.titles) 
    var super_id = hs.id
    var hierarchy_nmae = hs.name
    console.log("super_id=" + super_id)
    console.log("hierarchy_nmae=" + hierarchy_nmae)
    console.log("titles=" + titles)
    wx.setNavigationBarTitle({
      title: hierarchy_nmae
    })
    that.setData({
      curid:super_id,
      tabs: titles
    })
    console.log("tabs=" + that.data.tabs)
    //this.getHierarchyCHuldTabs()
    //this.getHierarchyChildData(super_id)
  },
  /**
   * 获取标签数据 考虑用上一级页面传参过来 看行不行
   */
  getHierarchyCHuldTabs: function(){

  },
  /**
   * 获取体系子节点数据
   */
  getHierarchyChildData: function (pageindex) {
    var that = this
    wx.request({
      url: 'http://www.wanandroid.com/article/list/' + pageindex + '/json?',
      data: {
        cid: that.data.curid
      },
      success: function (res) {
        that.setData({
          hierarchy_childarticals: res.data.data.datas
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