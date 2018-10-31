// index.js
var app = getApp()
var pinyin = require('../../utils/pinyin.js');
Page({
  data: {
    pinyinText: '',
    val : "",
    show: false
  },
  onLoad: function () {

  },
  /**
   * 获取用户输入 
   */
  val: function (e) {
    this.setData({
      val: e.detail.value
    })
  },
  // 事件处理函数
  onInput: function(e) {
    var that = this;
    var char = that.data.val;
    char = char && char.trim();
    if (char.length == 1) {
      if (pinyin.hasOwnProperty(char)) {
        console.log(pinyin[char].join(', '))
        this.setData({
          pinyinText: pinyin[char].join(', '),
          show: true
        });
      }
      else {
        this.setData({
          pinyinText: '没有查询到',
          show: true
        });
      }
    }
    else {
      this.setData({
        pinyinText: '请输入单个汉字！',
        show: true
      });
    }
  },

})
