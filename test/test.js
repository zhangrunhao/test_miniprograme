const app = getApp()

Page({
  data: {
    content: [
      "你好你好东方红我东方红不号, 镰刀锤子你好东方红东方红红红",
      "东方红阿斯顿罚款三123你好123段论法大夫埃里克森调节阀, 东方阿什克隆东方骄傲三等分角你好",
      "阿历山东方红大减肥, 辣你椒号   你好粉撒旦六份东方红"
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
  },
  handleKeyLine(context, keyArray) {
    // init
    let array = []

    let key = ""
    let keyIndex = 0
    let hasKey = false
    keyArray.forEach(item => {
      if (context.indexOf(item) > -1) {
        let index = context.indexOf(item)
        // !hasKey: 排除第一次刚进来的情况, 索引就不是0了
        // keyIndex >= index: 排查到更加考前的地方
        if (keyIndex >= index || !hasKey) {
          keyIndex = index
          key = item
          hasKey = true
        }
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

      
      keyIndex = 0
      hasKey = false
      key = ""
      keyArray.forEach(item => {
        if (context.indexOf(item) > -1) {
          let index = context.indexOf(item)
          // !hasKey: 排除第一次刚进来的情况, 索引就不是0了
          // keyIndex >= index: 排查到更加考前的地方
          if (keyIndex >= index || !hasKey) {
            keyIndex = index
            key = item
            hasKey = true
          }
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