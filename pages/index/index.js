//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
    // 获取视频context
    var cameraContext = wx.createCameraContext();
    var listener = cameraContext.onCameraFrame((frame) => {
      // 打印返回数据是否是一个ArrayBuffer, 并且返回每一帧的大小
      alert(frame.data instanceof ArrayBuffer, frame.width, frame.height);
    });
    listener.start();
  },
})
