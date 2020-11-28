// pages/techn_pages/personal/personal.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: null,
        permission: null,
        token: null,
    },
    //跳转到修改密码界面
    modifyPwd: function () {
        wx.navigateTo({
            url: '../../common_pages/modify_pwd/modify_pwd',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //加载本页面的tabBar样式
        wx.hideTabBar({
            success: function () {
                app.onTabBar('techn');
            }
        });
        //获取缓存中的数据
        let info = wx.getStorageSync("info");
        let grade = null;
        if (info.data.permission === '1') {
            grade = '技术人员'
        }
        this.setData({
            token: info.token,
            username: info.data.username,
            permission: grade
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