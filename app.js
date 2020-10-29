//app.js
App({

  // 自定义显示tabbar
  onTabBar: function (key) {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.tabBarData[key];
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].active = true; // 根据页面地址设置当前页面状态
      }
    }
    _curPage.setData({
      tabBar: tabBar
    });
  },
  tabBarData: {
    userInfo: null,
    pop: 2,
    num: 0,
    user: {
      "color": "#dbdbdb",
      "selectedColor": "#1296db",
      "backgroundColor": "white",
      "borderStyle": "white",
      "position": "bottom",
      "list": [{
          "pagePath": "/pages/user_pages/main/main",
          "text": "首页",
          "iconPath": "/pages/static/img/befmain.png",
          "selectedIconPath": "/pages/static/img/main.png",
          "clas": "tabbar-item",
          "active": true
        },
        {
          "pagePath": "/pages/user_pages/personal/personal",
          "text": "我的",
          "iconPath": "/pages/static/img/befme.png",
          "selectedIconPath": "/pages/static/img/me.png",
          "clas": "tabbar-item",
          "active": false
        }
      ]
    },
    techn: {
      "color": "#dbdbdb",
      "selectedColor": "#1296db",
      "backgroundColor": "white",
      "borderStyle": "white",
      "position": "bottom",
      "list": [{
          "pagePath": "/pages/techn_pages/main/main",
          "text": "首页",
          "iconPath": "/pages/static/img/befmain.png",
          "selectedIconPath": "/pages/static/img/main.png",
          "clas": "tabbar-item",
          "active": true
        },
        {
          "pagePath": "/pages/techn_pages/personal/personal",
          "text": "我的",
          "iconPath": "/pages/static/img/befme.png",
          "selectedIconPath": "/pages/static/img/me.png",
          "clas": "tabbar-item",
          "active": false
        }
      ]
    },
    admin: {
      "color": "#dbdbdb",
      "selectedColor": "#1296db",
      "backgroundColor": "white",
      "borderStyle": "white",
      "position": "bottom",
      "list": [{
          "pagePath": "/pages/admin_pages/main/main",
          "text": "首页",
          "iconPath": "/pages/static/img/befmain.png",
          "selectedIconPath": "/pages/static/img/main.png",
          "clas": "tabbar-item",
          "active": true
        },
        {
          "pagePath": "/pages/admin_pages/personal/personal",
          "text": "我的",
          "iconPath": "/pages/static/img/befme.png",
          "selectedIconPath": "/pages/static/img/me.png",
          "clas": "tabbar-item",
          "active": false
        }
      ]
    }
  },

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})