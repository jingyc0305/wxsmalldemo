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
    curPage: 0,
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
    var curPage = 0
    //获取文章列表
    this.getArticals(curPage)
  },
  onPullDownRefresh: function () {
    this.data.curPage = 0
    this.getArticals(this.data.curPage)
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
    this.getArticals(curPage)

  },
  showAddItem: function () {
    this.setData({
      addVlue: !this.data.addVlue
    })

  },
  getArticals: function (artical_pageindex) {
    console.log('====getArticals=====' + artical_pageindex)
    var that = this
    wx.request({
      url: 'http://www.wanandroid.com/article/list/' + artical_pageindex + '/json',

      data: {
        //curpage: that.data.curPage
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('====url=====' + url),
          wx.stopPullDownRefresh()
        that.setData({
          perPageSize: res.data.data.size,
          curPage: res.data.data.curPage,
          pageCount: res.data.data.pageCount
        })
        var articalsTemp = that.data.datas.datas

        console.log('res.errorCode == 0')
        if (that.data.curPage == 0) {
          articalsTemp = []
        }
        var articals = res.data.data.datas
        if (articals.length < that.data.perPageSize) {
          console.log('articals.length < that.data.perPageSize')
          that.setData({
            articals: articalsTemp.concat(articals),
            loadingMoreHidden: true
          })
        } else {
          console.log('articals.length > that.data.perPageSize')
          that.setData({
            articals: articalsTemp.concat(articals),
            loadingMoreHidden: false,
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
