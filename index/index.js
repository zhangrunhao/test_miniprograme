// const { createScopedThreejs } = require('threejs-miniprogram')
// import {
//   createScopedThreejs
// } from 'threejs-miniprogram'

// const {
//   renderCube
// } = require('../test-cases/cube')
// const {
//   renderCubes
// } = require('../test-cases/cubes')
// const {
//   renderSphere
// } = require('../test-cases/sphere')
// const {
//   renderModel
// } = require('../test-cases/model')
// const {
//   renderDemo
// } = require('../test-cases/demo')


const app = getApp()

Page({
  data: {},
  onLoad: function () {
    console.log(1)
    wx.onGyroscopeChange(function (e) {
      console.log(1111)
      console.log(e)
    })
    wx.startGyroscope({
      success: function () {
        console.log(123123123123)
      },
      fail: function (e) {
        console.log(e)
      }
    })
    // wx.createSelectorQuery()
    //   .select('#webgl')
    //   .node()
    //   .exec((res) => {
    //     const canvas = res[0].node
    //     const THREE = createScopedThreejs(canvas)

    //     // renderSphere(canvas, THREE)
    //     // renderCube(canvas, THREE)
    //     // renderCubes(canvas, THREE)
    //     // renderModel(canvas, THREE)
    //     renderDemo(canvas, THREE)


    //   })
  },
})