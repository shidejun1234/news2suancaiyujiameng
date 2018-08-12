Page({
    data: {
    },
    makePhoneCall: function () {
        wx.makePhoneCall({
            phoneNumber: "18924035630",
            success: function () {
                console.log("拨打成功");
            }
        })
    }
})
