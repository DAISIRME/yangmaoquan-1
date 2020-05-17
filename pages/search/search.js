// pages/search/search.js
var WxSearch = require('../../wxSearch/wxSearch.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    display: "none",
    Key:"",
    RearchResultList:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that, 43, ['自定义', '的热门', '搜索', '列表']);
    WxSearch.initMindKeys(['检索', '内容', '的提示']);
  },
  SearchInput:function(e)
  {
    var that=this
    that.setData({
      Key:e.detail.value
    })
  },
  wxSearchFn: function (e) {
    var that = this
    WxSearch.wxSearchAddHisKey(that);
    wx.request({
      url: 'https://tp.adplay.ink/ComparePrice.php',
      data:{
        keyword:this.data.Key
      },
      success:function(res)
      {
        console.log(res.data)
        that.setData({
          RearchResultList:res.data
        })
      },
      fail:function(res){
        console.log(res.data)
      }
    })
  },
  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);
    that.setData({
      keyword:e.detail.value
    }),
    console.log(e.detail.value)
  },
  wxSerchFocus: function (e) {
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    var that = this
    WxSearch.wxSearchKeyTap(e, that);
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  },
  click: function(option){
    wx.navigateTo({
      url: '/pages/data/data?ulr='
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
