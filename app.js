App({
  onLaunch: function (options) {
    console.log('生命周期函数--监听小程序初始化' + JSON.stringify(options))
  },
  onShow: function () {
    console.log('生命周期函数--监听小程序显示')
  },
  onHide: function () {
    console.log('生命周期函数--监听小程序隐藏')
  },
  globalData: {
    hasLogin: false
  }
})
