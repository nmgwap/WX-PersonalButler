// pages/figure/figure.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: "",
    weight: "",
    show: false,
    res: {
      img: "",
      msg: "",
      ideal: "",
      bmi: ""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  /**
   * 获取用户输入 
   */
  height: function (e) {
    this.setData({
      height: e.detail.value
    })
  },
  weight: function (e) {
    this.setData({
      weight: e.detail.value
    })
  },
  /**
   *用户点击获取数据事件 
   */
  getdata: function (e) {
    var that = this;
    wx.showLoading({
      title: '计算中',
    });
    var height = this.data.height;
    var weight = this.data.weight;
    if (height == "" || weight == "") {
      wx.showToast({
        title: '请输入身高体重',
        icon: 'none',
        image: '../../images/error.png',
        duration: 2000
      })
      return false;
    }
    if (!isNaN(height) && !isNaN(weight)) {
      var ideal = (height - 100) * 0.9;
      var bmi = weight / ((height / 100) * (height / 100));
      if (bmi < 18.5) {
        that.setData({
          show: true,
          res: {
            img: "../../images/bq4.png",
            msg: "你的体重太轻,要多吃点哟!",
            ideal: ideal,
            bmi: bmi
          }
        })
      } else if (bmi >= 18.5 && bmi < 25) {
        that.setData({
          show: true,
          res: {
            img: "../../images/bq1.png",
            msg: "亲,你的体重正常,要继续保持哟",
            ideal: ideal,
            bmi: bmi
          }
        })
      } else if (bmi >= 25 && bmi < 30) {
        that.setData({
          show: true,
          res: {
            img: "../../images/bq3.png",
            msg: "亲,您的体重过重,要减肥了!",
            ideal: ideal,
            bmi: bmi
          }
        })
      } else {
        that.setData({
          show: true,
          res: {
            img: "../../images/bq2.png",
            msg: "亲,你确实要减肥了!",
            ideal: ideal,
            bmi: bmi
          }
        })
      }

      wx.hideLoading();
    } else {
      wx.showToast({
        title: '请正确输入！',
        icon: 'none',
        image: '../../images/error.png',
        duration: 2000
      })
    }
  }
})