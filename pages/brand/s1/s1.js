var WxParse = require('../../../wxParse/wxParse.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        indicatorDots: false,
        vertical: false,
        autoplay: true,
        interval: 2500,
        duration: 500,
        background: ["../../../images/bg_liuyan.jpg"]
    },

    imageLoad: function(e) {
        var width = e.detail.width;
        var height = e.detail.height;
        console.log(750 / (width / height));
        this.setData({
            hig: 750 / (width / height)
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        wx.request({
            url: 'https://e.fslujiaoxiang.cn/jiameng/suancaiyujiameng/bbb.php', //仅为示例，并非真实的接口地址
            method: 'GET',
            data: {
                id: options.id
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function(res) {
                var article = res.data;
                WxParse.wxParse('article', 'html', res.data.brandCenter, that, 5);
            }
        })
    },

    call:function(){
        wx.makePhoneCall({
            phoneNumber: '13242657732' //仅为示例，并非真实的电话号码
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})