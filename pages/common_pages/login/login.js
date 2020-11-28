// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  // data: {},
  formSubmit: function (e) {
    let username = e.detail.value.username;
    let password = e.detail.value.password;
    if (username === '') {
      wx.showToast({
        title: '请填写账号',
        icon: 'none',
        duration: 1500
      })
    } else if (password === '') {
      wx.showToast({
        title: '请填写密码',
        icon: 'none',
        duration: 1500
      })
    } else {
      wx.request({
        url: 'http://119.45.143.167:5001/repairapp/v1/login',
        data: {
          "username": username,
          "password": password
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success: function (res) {
          let code = res.data.code;
          let msg = res.data.msg;
          let permission = res.data.data.permission;
          //将数据存进缓存中
          wx.setStorageSync('info', res.data);
          if (code === 2000) {
            switch (permission) {
              case '0':
                wx.switchTab({
                  url: '/pages/user_pages/main/main',
                });
                break;
              case '1':
                wx.switchTab({
                  url: '/pages/techn_pages/main/main',
                });
                break;
            }
          } else {
            wx.showToast({
              title: msg,
              icon: 'none',
              duration: 1500
            })
          }
        },
        fail: function (res) {
          console.log('fail', res.data)
        },
      })
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

  }
})