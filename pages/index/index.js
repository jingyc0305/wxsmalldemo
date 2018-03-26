//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://www.wanandroid.com/blogimgs/50c115c2-cf6c-4802-aa7b-a4334de444cd.png',
      'http://www.wanandroid.com/blogimgs/62c1bd68-b5f3-4a3c-a649-7ca8c7dfabe6.png',
      'http://www.wanandroid.com/blogimgs/ffb61454-e0d2-46e7-bc9b-4f359061ae20.png',
      'http://www.wanandroid.com/blogimgs/fb0ea461-e00a-482b-814f-4faca5761427.png',
      'http://www.wanandroid.com/blogimgs/ab17e8f9-6b79-450b-8079-0f2287eb6f0f.png',
      'http://www.wanandroid.com/blogimgs/84810df6-adf1-45bc-b3e2-294fa4e95005.png',
      'http://www.wanandroid.com/blogimgs/90cf8c40-9489-4f9d-8936-02c9ebae31f0.png',
      'http://www.wanandroid.com/blogimgs/acc23063-1884-4925-bdf8-0b0364a7243e.png'
    ],
    mode:'aspectFill',
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    artical_pageindex:'0',
    articals:[]
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
    var artical_pageindex = '0'
    var that = this
    wx.showNavigationBarLoading()
    //获取文章列表
    wx.request({
      url: 'http://www.wanandroid.com/article/list/' + artical_pageindex +'/json',
      data: {
      },
      method:'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideNavigationBarLoading()
        console.log(res.data)
        that.setData({
           articals: res.data.data.datas
        })
      }
    })
  },
  showAddItem: function () {
    this.setData({
      addVlue: !this.data.addVlue
    })

  },
 
  
})
