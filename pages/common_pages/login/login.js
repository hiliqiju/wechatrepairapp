// pages/login/login.js
Page({

  // page.js示例代码
  data: {
    error: ''
  },
  onShow() {
    this.setData({
      error: '这是一个错误提示'
    })
  },

  /**
   * 页面的初始数据
   */
  // data: {},
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为:', e.detail.value)
    var username = e.detail.value.username;
    var password = e.detail.value.password;
    wx.request({
      url: 'http://119.45.143.167/repairapp/v1/login',
      data: {
        "username": username,
        "password": password
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: function (res) {
        var data = res.data
        var code = res.data.code;
        var msg = res.data.msg;
        var permission = res.data.data.permission
        wx.setStorageSync('data', data);
        if (code == 2000) {
          switch (permission) {
            case '0':
              console.log('普通用户登录成功');
              // wx.navigateTo({
              //   url: '/pages/user_pages/main/main',
              // });
              wx.switchTab({
                url: '/pages/user_pages/main/main',
              });
              break;
            case '1':
              console.log('技工');
              // wx.navigateTo({
              //   url: '/pages/techn_pages/main/main'
              // });
              wx.switchTab({
                url: '/pages/techn_pages/main/main',
              });
              break;
            case '2':
              console.log('管理员');
              // wx.navigateTo({
              //   url: '/pages/admin_pages/main/main'
              // });
              wx.switchTab({
                url: '/pages/admin_pages/main/main',
              });
              break;
          }
        } else if (code == 2002) {
          console.log('密码错误');
          wx.showToast({
            title: msg,
            duration: 2000
          })
        } else {
          console.log('用户不存在');
          wx.showToast({
            title: msg,
            duration: 2000
          })
        }
      },
      fail: function (res) {
        console.log('fail', res.data)
      },
    })
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