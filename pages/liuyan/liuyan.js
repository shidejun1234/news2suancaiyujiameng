var nowTime = require('../../utils/nowTime.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        liuyan: "我想加盟，请联系我。",
        otherLiuyan: "",
        isOther: true,
        time: nowTime.formatTime(new Date())
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    formSubmit: function (e) {
        var that = this;
        if (!e.detail.value.uName.trim()) {
            wx.showModal({
                title: '提示',
                content: '姓名不能为空！',
                showCancel: false
            });
            return;
        };
        if (!e.detail.value.phone.trim()) {
            wx.showModal({
                title: '提示',
                content: '手机号码不能为空！',
                showCancel: false
            });
            return;
        };
        if (parseInt(e.detail.value.phone) != e.detail.value.phone) {
            wx.showModal({
                title: '提示',
                content: '手机号码只能是数字！',
                showCancel: false
            });
            return;
        };
        that.setData({
            otherLiuyan: e.detail.value.otherLiuyan
        });
        var liuyan = that.data.liuyan;
        if (liuyan == "") {
            liuyan = that.data.otherLiuyan;
        }
        wx.request({
            url: 'https://e.fslujiaoxiang.cn/jiameng/suancaiyu/add.php',
            method: 'POST',
            data: {
                uName: e.detail.value.uName,
                phone: e.detail.value.phone,
                liuyan: liuyan,
                time: that.data.time
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function (res) {
                wx.showModal({
                    title: '提示',
                    content: '留言成功',
                    showCancel: false
                });
            }
        })
    },

    liuyan: function (e) {
        var that = this;
        wx.showActionSheet({
            itemList: ['我想加盟，请联系我。', '加盟费多少？请联系我。', '盈利分析？请联系我。', '其他'],
            success: function (res) {
                switch (res.tapIndex) {
                    case 0:
                        that.setData({
                            liuyan: '我想加盟，请联系我。',
                            isOther: true
                        });
                        break;
                    case 1:
                        that.setData({
                            liuyan: '加盟费多少？请联系我。',
                            isOther: true
                        });
                        break;
                    case 2:
                        that.setData({
                            liuyan: '盈利分析？请联系我。',
                            isOther: true
                        });
                        break;
                    case 3:
                        that.setData({
                            liuyan: "",
                            isOther: false
                        })
                        break;
                }
            }
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