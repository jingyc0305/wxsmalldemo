// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   * { title: '完整项目', cid: '294' },
    { title: '下拉刷新', cid: '310' },
    { title: '富文本', cid: '312' },
    { title: '列表动效', cid: '314' },
    { title: '系统源码', cid: '316' },
    { title: '动画', cid: '323' },
    { title: '组件化', cid: '324' },
    { title: 'PickerView', cid: '325' },
    { title: 'ShapeView', cid: '327' },
    { title: '文件下载', cid: '328' },
    { title: 'OCR', cid: '330' },
    { title: 'TextView', cid: '331' },
    { title: '性能优化', cid: '333' },
    { title: '键盘', cid: '336' },
    { title: '快应用', cid: '337' },
    { title: '日历', cid: '338' },
    { title: 'K线图', cid: '339' },
    { title: '硬件相关', cid: '340' }
   */
  data: {
    tabs: [],
    //图片加载模式
    mode: 'aspectFill',
    //数据源 项目列表
    projects:[],
    //当前页码
    curPage: 1,
    perPageSize: 15,
    pageCount: 2,
    isHideLoadMore: false,
    loadingMoreHidden: true,
    //icon
    icon_like:'star',
    //自定义tab 当前索引
    currentIndex:0,
    windowHeight: '',
    //项目分类id
    cid:'294',
    //@minui/wxc-flex 垂直正序排列
    dir:'top'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var curPage = 1
    this.getProjectTabs()
    //默认加载第1页
    this.getProjectDatas(curPage)
    ////自定义tab 初始化
    var systemInfo = wx.getSystemInfoSync()
    this.setData({
      windowHeight: systemInfo.windowHeight,
      currentIndex: options.id ? options.id : 0
    })
  },
  // 自定义 tab 点击切换 
  onClickNavBar: function (res) {
    var that = this
    if (that.data.currentIndex == res.detail.currentNum) return;
    
    that.setData({
      currentIndex: res.detail.currentNum,
      cid: that.data.tabs[res.detail.currentNum].id,
      curPage: 1
    })
    console.log("that.data.currentIndex=" + that.data.currentIndex)
    that.getProjectDatas(that.data.curPage);
  },
 
  //minui wxc-tab切换事件响应============
  // onClick: function (e) {
  //   var that = this
  //   console.log("you selected:" + e.detail.key)
  //   this.getProjectDatas(e.detail.key)
  // },
  //加载对应标签下的项目数据 分页加载更多
  
  getProjectDatas: function (project_pageindex) {
    var that = this
    console.log('project_pageindex=' + project_pageindex)
    console.log('cid=' + that.data.cid)
    wx.request({
      url: 'http://www.wanandroid.com/project/list/' + project_pageindex + '/json',
      data: {
        cid:that.data.cid
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          perPageSize: res.data.data.size,
          curPage: res.data.data.curPage,
          pageCount: res.data.data.pageCount
        })
        var projectsTemp = that.data.projects
        if (that.data.curPage == 1) {
          projectsTemp = []
        }
        var projects = res.data.data.datas
        if (projects.length < that.data.perPageSize) {
          console.log('没有更多了')
          that.setData({
            projects: projectsTemp.concat(projects),
            loadingMoreHidden: false,
            isHideLoadMore:true
          })
        } else {
          console.log('加载更多')
          that.setData({
            projects: projectsTemp.concat(projects),
            loadingMoreHidden: true,
            isHideLoadMore:false,
            curPage: that.data.curPage + 1
          })
        }
      }
    })
  },
  //获取项目tab标签数据
  getProjectTabs: function(){
    var that = this
    wx.request({
      url: 'http://www.wanandroid.com/project/tree/json',
      data: {
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          tabs: res.data.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (project_pageindex) {
  
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
    if (!this.data.loadingMoreHidden) {
      this.setData({
        loadingMoreHidden: false
      })
    } else {    
      console.log('getProjectDatas' + this.data.curPage)
      this.getProjectDatas(this.data.curPage)
      this.setData({
        loadingMoreHidden: true
      })
    }
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})