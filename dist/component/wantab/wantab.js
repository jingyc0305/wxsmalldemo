// dist/wantab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //标题列表
    tablist: {
      type: Array,
      value: []
    },
    currentTab: {
      type: Number,
      value: 0,
      observer: function (newVale, oldVal) {
        this.setData({
          currentTab: newVale
        })
      }

    },
    tabname: {
      type: String,
      value: ''
    },
    tabtype: {
      type: Number,
      value: ''
    }


  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickNavBar: function (e) {
      this.triggerEvent('changeTab', {
        currentNum: e.currentTarget.dataset.current
      })
    }
  }
})
