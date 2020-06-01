const app = getApp()

Page({
  data: {
    content: [
      "你好你好我不号, 镰刀锤子你好东方红东方红红红",
      "东方阿斯顿罚款三123你好123段论法大夫埃里克森调节阀, 东方阿什克隆东方骄傲三等分角你好",
      "阿历山大减肥, 你好辣椒粉撒旦六份东方红"
    ],
    key: ["你好", "东方红"]
  },
  onLoad: function () {
    let key = this.data.key
    let finallyArray = this.data.content.map((line) => {
      return this.handleKeyLine(line, key)
    })
    this.setData({
      finallyArray,
    })
    console.log(finallyArray)
  },
  handleKeyLine(context, keyArray) {
    // init
    let array = []
    let key = keyArray[0]
    let hasKey = false
    keyArray.forEach(item => {
      if (context.indexOf(item) > -1 && !hasKey) {
        key = item
        hasKey = true
      }
    });

    // loop
    while (hasKey) {
      let index = context.indexOf(key)
      if (index !== 0) {
        array.push({
          type: "normal",
          text: context.slice(0, index)
        })
      }
      array.push({
        type: "vr",
        text: context.substr(index, key.length)
      })

      context = context.slice(index + key.length, context.length)
      hasKey = false
      keyArray.forEach(item => {
        if (context.indexOf(item) > -1 && !hasKey) {
          key = item
          hasKey = true
        }
      });
    }

    // finally
    array.push({
      type: "normal",
      text: context
    })
    return array
  }
})