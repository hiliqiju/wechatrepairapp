// pages/user/user_main.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    'gender': '男',

  },

  //自定义函数格式化日期
  formatDate: function (time) {
    var date = new Date(time);

    var year = date.getFullYear(),
      month = date.getMonth() + 1, //月份是从0开始的
      day = date.getDate(),
      hour = date.getHours(),
      min = date.getMinutes(),
      sec = date.getSeconds();
    var preArr = Array.apply(null, Array(10)).map(function (elem, index) {
      return '0' + index;
    });

    var newTime = year + '-' +
      (preArr[month] || month) + '-' +
      (preArr[day] || day) + ' ' +
      (preArr[hour] || hour) + ':' +
      (preArr[min] || min) + ':' +
      (preArr[sec] || sec);

    return newTime;
  },
  onShow: function () {
    //加载本页面的tabBar样式

  },

  queren:function(){
    wx.showModal({
      title: '提示',
      content: '提交成功',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载本页面的tabBar样式
    wx.hideTabBar({
      success: function () {
        app.onTabBar('user');
      }
    })

    //获取缓存中的数据
    var data = wx.getStorageSync("data");
    this.setData({
      'token': data.token,
      'id': data.data.id,
      'username': data.data.username,
      'permission': data.data.permission,
      'regist_date': this.formatDate(data.data.regist_date)
    })
  },
  data:{
    array: ['东1','东2','东3','东4','东5','东6','东7','东8'],
    objectArray:[
      {
        id:0,
        name: '东1'
      },
      {
        id:1,
        name: '东2'
      },
      {
        id:2,
        name: '东3'
      },
      {
        id:3,
        name: '东4'
      },
      {
        id:4,
        name: '东5'
      },
      {
        id:5,
        name: '东6'
      },
      {
        id:6,
        name: '东7'
      },
      {
        id:7,
        name: '东8'
      }
    ],
    index: 0
    },
    bindPickerChange: function(e){
      console.log('picker发送选择改变,携带值为',e.detail.value)
      this.setData({
        index:e.detail.value
      })
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