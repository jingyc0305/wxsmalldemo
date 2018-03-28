// pages/house/house.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      { title: '常用网站',  cid: '272' },
      { title: '个人博客',  cid: '274' },
      { title: '公司博客',  cid: '281' },
      { title: '开发社区',  cid: '280' },
      { title: '常用工具',  cid: '275' },
      { title: '在线学习',  cid: '276' },
      { title: '开放平台',  cid: '277' },
      { title: '互联网资讯',cid: '278' },
      { title: '求职招聘',  cid: '279' },
      { title: '应用加固',  cid: '282' },
      { title: '三方支付',  cid: '283' },
      { title: '推送平台',  cid: '284' },
      { title: '三方分享',  cid: '285' },
      { title: '地图平台',  cid: '286' },
      { title: '直播SDK',   cid: '287' },
      { title: 'IM即时通讯',cid: '288' },
      { title: 'Bug管理',   cid: '289' },
      { title: '后端云',     cid:'290' },
      { title: 'WebView内核',cid:'291' },
      { title: '创意&素材',  cid: '299 '},
      { title: '互联网统计', cid: '300' },
      { title: '快速开发',   cid: '301'}],

    navs:[],
    navarticals:[],
    curcid:'272',
    curindex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //获取标签下数据
    //this.getTabDatas()
    wx.request({
      url: 'http://www.wanandroid.com/navi/json',
      data: {
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log("success:")
        that.setData({
          navs: res.data.data,
          navarticals: res.data.data[that.data.curindex].articles
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
  
  },
  //tab切换事件响应============
  onClick: function (e) {
    //console.log(`ComponentId:${e.detail.componentId},you selected:${e.detail.key}`);
    var that = this
   
    console.log("you selected:" + e.detail.key)
    if (that.data.navs.length > 0){
      that.setData({
        navarticals: that.data.navs[e.detail.key].articles
      })
    }
    
  },
  //获取tab以及tab数据
  getTabDatas: function(){
    var that = this
   
  }

})