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
    perPageSize: 20,
    pageCount: 59,
    isHideLoadMore: false,
    loadingMoreHidden: true
  },
  //进入文章详细页面
  goToArticalDetail: function (e) {
    var that = this
    var item_index = parseInt(e.currentTarget.dataset.index)
    console.log("item_index = " + item_index)
    wx.navigateTo({
      url: '../index-detail/index-detail?title=' + that.data.articals[item_index].title + '&link=' + that.data.articals[item_index].link
    })
  },
  onLoad: function () {
    console.log('onLoad')
    //显示标题菊花
    wx.showNavigationBarLoading()
    //获取轮播图
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
