const { createScopedThreejs } = require('threejs-miniprogram')

const {
  renderCube
} = require('../test-cases/cube')
const {
  renderCubes
} = require('../test-cases/cubes')
const {
  renderSphere
} = require('../test-cases/sphere')
const {
  renderModel
} = require('../test-cases/model')
const {
  renderDemo
} = require('../test-cases/demo')


const app = getApp()

Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
  },
  onLoad: function () {
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