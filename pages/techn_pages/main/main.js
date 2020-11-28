// pages/techn/techn_main.js
const app = getApp();

Page({
    /**
     * 页面的初始数据
     */
    data: {
        token: null,
        result: null,
        status: false
    },
    //预览图片
    previewImg: function (e) {
        let name = e.currentTarget.dataset.name;
        wx.previewImage({
            current: 'http://119.45.143.167:5001/repairapp/v1/get/imgs?img_name=' + name,
            urls: [
                'http://119.45.143.167:5001/repairapp/v1/get/imgs?img_name=' + name,
            ]
        })
    },
    //状态事件
    switchStatus: function (e) {
        let id = e.currentTarget.dataset.id;
        let that = this;
        if (e.detail.value) {
            wx.showModal({
                title: '提示',
                content: '确定已经修好了吗？',
                confirmColor: 'green',
                cancelColor: '#999999',
                cancelText: '还没有',
                success: function (res) {
                    //用户点击了确定
                    if (res.confirm) {
                        wx.request({
                            url: 'http://119.45.143.167:5001/repairapp/v1/handle',
                            method: 'PUT',
                            header: {
                                'content-type': 'application/x-www-form-urlencoded',
                                token: that.data.token
                            },
                            data: {
                                id: id,
                                status: '已处理'
                            },
                            success: function (res) {
                                if (res.data.code === 2000) {
                                    wx.showToast({
                                        title: '成功处理！',
                                        icon: "success",
                                        duration: 1500
                                    })
                                } else {
                                    wx.showToast({
                                        title: res.data.msg,
                                        icon: "none",
                                        duration: 1500
                                    })
                                }
                            },
                            fail: function (err) {
                                console.log(err);
                                wx.showToast({
                                    title: '请求错误！',
                                    icon: 'none',
                                    duration: 1500
                                })
                            }
                        })
                        return false;
                    } else {
                        that.setData({
                            status: false
                        })
                        return false;
                    }
                }
            })
            return false;
        } else {
            return false;
        }
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
        let that = this;
        let info = wx.getStorageSync("info");
        that.setData({
            token: info.token
        });
        //请求后端工单数据
        wx.request({
            url: 'http://119.45.143.167:5001/repairapp/v1/handle',
            method: 'GET',
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                token: that.data.token
            },
            success: function (res) {
                if (res.data.code === 2000) {
                    that.setData({
                        result: res.data.data
                    })
                } else {
                    wx.showToast({
                        title: res.data.msg,
                        icon: "none",
                        duration: 1500
                    })
                }
            },
            fail: function (err) {
                console.log(err);
                wx.showToast({
                    title: '请求数据失败',
                    icon: 'none',
                    duration: 1500
                })
            }
        });
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
        console.log('触发下拉刷新');
        //显示顶部刷新图标
        //wx.showNavigationBarLoading();
        this.onLoad();
        setTimeout(function () {
            wx.stopPullDownRefresh();
        }, 1000)
        wx.showToast({
            title: '刷新成功',
            icon: 'success',
            duration: 1500
        })

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