// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [{
      img: "../../images/EmptyBanner.jpg",
      openpath: "../../pages/figure/figure"
    },{
        img: "../../images/EmptyBanner1.jpg",
        openpath: "../../pages/bankQuery/bankQuery"
    },{
        img: "../../images/EmptyBanner2.jpg",
        openpath: "../../pages/IDCard/IDCard"
    },{
        img: "../../images/EmptyBanner3.jpg",
        openpath: "../../pages/MobileHome/MobileHome"
    }],
    server: [
      {
        img: "../../images/sfz.png",
        openpath: "../../pages/IDCard/IDCard",
        text: "身份证查询"
      },
      {
        img: "../../images/yhk.png",
        openpath: "../../pages/bankQuery/bankQuery",
        text: "银行查询"
      },
      {
        img: "../../images/gsd.png",
        openpath: "../../pages/MobileHome/MobileHome",
        text: "手机归属地"
      },
      {
        img: "../../images/ip.png",
        openpath: "../../pages/IP/IP",
        text: "IP查询"
      },
      {
        img: "../../images/sc.png",
        openpath: "../../pages/figure/figure",
        text: "身材计算"
      },
      {
        img: "../../images/wsyt.png",
        openpath: "../../pages/gojuuonn/gojuuonn",
        text: "五十音图"
      },
      {
        img: "../../images/cha.png",
        openpath: "../../pages/pinyin/index",
        text: "查拼音"
      },
      {
        img: "../../images/clac.png",
        openpath: "../../pages/calculator-index/index",
        text: "计算器"
      },
      {
        img: "../../images/hl.png",
        openpath: "../../pages/cand/index",
        text: "程序员黄历"
      },
      {
        img: "../../images/gz.png",
        openpath: "../../pages/game/game",
        text: "摇骰子"
      },
      {
        img: "../../images/2048.png",
        openpath: "../../pages/2048/2048",
        text: "2048"
      }
      
    ],
    unserver: [
      {
        img: "../../images/kd.png",
        openpath: "../../pages/",
        text: "全国快递"
      },
      {
        img: "../../images/gj.png",
        openpath: "../../pages/",
        text: "公交地铁"
      },
      {
        img: "../../images/gjj.png",
        openpath: "../../pages/",
        text: "公积金计算"
      },
      {
        img: "../../images/sl.png",
        openpath: "../../pages/",
        text: ""
      },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
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

  }
})