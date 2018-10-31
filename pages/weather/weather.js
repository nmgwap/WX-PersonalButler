// pages/weather/weather.js

var model = require('../../model/model.js')

var show = false;
var item = {};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      show: show
    },
    my: "未知",
    liveweather: {
      
    },
    three: [
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        wx.request({
          url: 'https://free-api.heweather.com/s6/weather/now?key=9aab750e479648829ea03e5646a3bc36&location=' + longitude + ',' + latitude,
          data: {
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            console.log(JSON.stringify(res))
            var my = res.data.HeWeather6[0].basic.admin_area + " " + res.data.HeWeather6[0].basic.parent_city + " " + res.data.HeWeather6[0].basic.location
            that.setData({
              my: my,
              liveweather: res.data.HeWeather6[0].now
            })
            wx.request({
              url: 'https://free-api.heweather.com/s6/weather/forecast?key=9aab750e479648829ea03e5646a3bc36&location=' + longitude + ',' + latitude,
              data: {
              },
              header: {
                'content-type': 'application/json' // 默认值
              },
              success: function (res1) {
                wx.hideLoading();
                console.log(JSON.stringify(res))
                that.setData({
                  three: res1.data.HeWeather6[0].daily_forecast
                })
              }
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  //生命周期函数--监听页面初次渲染完成
  onReady: function (e) {
    var that = this;
    //请求数据
    model.updateAreaData(that, 0, e);
  },
  //点击选择城市按钮显示picker-view
  translate: function (e) {
    model.animationEvents(this, 0, true, 400);
  },
  //隐藏picker-view
  hiddenFloatView: function (e) {
    model.animationEvents(this, 200, false, 400);
    console.log(this.data.item)
    var length = this.data.item.value[2];
    var lengthc = this.data.item.value[1];
    var countyCity = this.data.item.countys[length].name;
    console.log()
    if (countyCity == "市辖区"){
      console.log("============")
      countyCity = this.data.item.citys[lengthc].name;
    }
    console.log(countyCity);
    wx.showLoading({
      title: '加载中',
    });
    var that = this;
    wx.request({
      url: 'https://free-api.heweather.com/s6/weather/now?key=9aab750e479648829ea03e5646a3bc36&location=' + countyCity,
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(JSON.stringify(res))
        var my = res.data.HeWeather6[0].basic.admin_area + " " + res.data.HeWeather6[0].basic.parent_city + " " + res.data.HeWeather6[0].basic.location
        that.setData({
          my: my,
          liveweather: res.data.HeWeather6[0].now
        })
        wx.request({
          url: 'https://free-api.heweather.com/s6/weather/forecast?key=9aab750e479648829ea03e5646a3bc36&location=' + countyCity,
          data: {
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res1) {
            wx.hideLoading();
            console.log(JSON.stringify(res))
            that.setData({
              three: res1.data.HeWeather6[0].daily_forecast
            })
          }
        })
      }
    })
  },
  //滑动事件
  bindChange: function (e) {
    model.updateAreaData(this, 1, e);
    item = this.data.item;
    this.setData({
      province: item.provinces[item.value[0]].name,
      city: item.citys[item.value[1]].name,
      county: item.countys[item.value[2]].name
    });
  },
  onReachBottom: function () {
  },
  nono: function () { },

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
   * 获取天气
   */
  getlive: function (lon, lat) {
    wx.request({
      url: 'https://free-api.heweather.com/s6/weather/now?key=9aab750e479648829ea03e5646a3bc36&location=' + lon + ',' + lat,
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  getthree: function (lon, lat) {
    wx.request({
      url: 'https://free-api.heweather.com/s6/weather/forecast?key=9aab750e479648829ea03e5646a3bc36&location=' + lon + ',' + lat,
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})