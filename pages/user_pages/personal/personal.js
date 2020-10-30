// pages/users/personal/personal.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  userListInfo:[{
    icon:"/../pages/static/img/xiugai-1.png",
    text:'修改密码',
  },{
    icon:'/pages/static/img/bs-1.png',
    text:'查看报修记录',
  }]
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
    });

   


    var that =this
//调用应用实例的方法获取全局数据

  },
 
   /**
   * 转向修改密码页面
   */
  xiugai:function(){
    wx.navigateTo({
      url: '/pages/common_pages/password/password',
    })
  },
   /**
   * 转向查看报修记录页面
   */
  chakan:function(){
    wx.navigateTo({
      url: '/pages/user_pages/baoxiujilu/baoxiujilu',
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