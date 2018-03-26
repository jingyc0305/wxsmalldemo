//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://welove.b0.upaiyun.com/562949969191531/tl/8B5FFA37_huge',
      'http://welove.b0.upaiyun.com/562949969191510/tl/9077CEBC_huge',
      'http://welove.b0.upaiyun.com/562949969191531/tl/8B5FFA37_huge'
    ],
    mode:'aspectFill',
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
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
    //获取相册列表
    wx.request({
      url: 'http://api.welove520.com/v5/album/list',//http://api.welove520.com/v5/album/list
      data: {
        access_token: '562949969191531-17ca21e7ed0617489c',
        sig: 'Td3d9Fd8ni6PaQRvYOadjLZj1P0=',
        count: "20"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'//application/x-www-form-urlencoded
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  showAddItem: function () {
    this.setData({
      addVlue: !this.data.addVlue
    })

  },
 
  
})
