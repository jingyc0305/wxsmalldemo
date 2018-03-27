//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [],
    mode: 'aspectFill',
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    articals: [],
    curPage: 1,
    perPageSize: 10,
    pageCount: 10,
    isHideLoadMore: false,
    loadingMoreHidden: true
  },
  //事件处理函数
  goToHome: function () {
    wx.navigateTo({
      url: '../house/house'
    })
  },
  goToUpload: function () {
    wx.navigateTo({
      url: '../upload/upload'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    wx.showNavigationBarLoading()
    this.getBanners()
    //默认加载第0页
    var curPage = 0
    //获取文章列表
    this.getArticals(curPage)
  },
  onPullDownRefresh: function () {
    this.data.curPage = 0
    this.getArticals(0)
    console.log('下拉刷新')
  },
  onReachBottom: function () {
    console.log('加载更多')
    if (!this.data.loadingMoreHidden) {

    } else {
      this.getArticals(this.data.curPage)
    }
    this.setData({
      loadingMoreHidden: true
    })
    this.getArticals(this.data.curPage)

  },
  showAddItem: function () {
    this.setData({
      addVlue: !this.data.addVlue
    })

  },
  getArticals: function (artical_pageindex) {
    var that = this
    wx.request({
      url: 'http://www.wanandroid.com/article/list/' + artical_pageindex + '/json',

      data: {
        
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideNavigationBarLoading()
        that.setData({
          perPageSize: res.data.data.size,
          curPage: res.data.data.curPage,
          pageCount: res.data.data.pageCount
        })
        var articalsTemp = that.data.articals
        if (that.data.curPage == 1) {
          articalsTemp = []
        }
        var articals = res.data.data.datas
        if (articals.length < that.data.perPageSize) {
          console.log('没有更多了')
          that.setData({
            articals: articalsTemp.concat(articals),
            loadingMoreHidden: false
          })
        } else {
          console.log('有更多可加载')
          that.setData({
            articals: articalsTemp.concat(articals),
            loadingMoreHidden: true,
            curPage: that.data.curPage + 1
          })
        }


      }
    })
  },
  getBanners: function () {
    var that = this
    wx.request({
      url: 'http://www.wanandroid.com/banner/json',
      data: {
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.stopPullDownRefresh()
        that.setData({
          imgUrls: res.data.data
        })
      }
    })
  }

})
