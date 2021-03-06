import { getCurrentPageUrl } from '@/libs/utils'
import { get } from 'lodash'

export default {
  onShareAppMessage({ from, target }) {
    const path = getCurrentPageUrl()
    if (from === 'button') {
      console.log(target)
    }
    return {
      title: 'rocket-uniapp',
      imageUrl: 'https://cloud.qinmudi.cn/uniapp/rocket.png',
      path
    }
  },
  onShareTimeline() {
    const query = getCurrentPageUrl()
    return {
      title: 'rocket-uniapp',
      imageUrl: 'https://cloud.qinmudi.cn/uniapp/rocket.png',
      query
    }
  },
  methods: {
    /**
         * @param {object} object   取值对象
         * @param {string} key  对象的key
         * @param {any} defaultValue    取不到值得默认返回值
         * @returns any 同参数defaultValue
         */
    g_getValueFrom(object, key, defaultValue = '') {
      const value = get(object, key, defaultValue)
      return value === null ? defaultValue : value
    },
    /**
         * @param {string} msg toast显示文案
         */
    g_showToast(msg) {
      uni.showToast({
        title: msg,
        duration: 2000,
        icon: 'none'
      })
    }
  }
}
