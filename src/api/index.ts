import axios from 'axios'
import global from '../../config/config.json'

const api = {
  ArticleApi: {
    getArticleList(pageNum = 1, pageSize = 10) {
      return axios.get(`${global.dataUrl}/article/getArticleList?pageSize=${pageSize}&pageNum=${pageNum}`)
    }
  },
  timeFormat(dateTimeStamp: number) {
    const diffValue = Date.now() - dateTimeStamp
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    const month = day * 30
    var monthC = diffValue / month
    var weekC = diffValue / (7 * day)
    var dayC = diffValue / day
    var hourC = diffValue / hour
    var minC = diffValue / minute
    var secondC = diffValue / second
    var result
    if (monthC >= 1) {
      if (monthC < 12) {
        result = ~~monthC + '个月之前'
      } else {
        result = new Date(dateTimeStamp).toLocaleDateString()
      }
    } else if (weekC >= 1) {
      result = ~~weekC + '周之前'
    } else if (dayC >= 1) {
      result = ~~dayC + '天之前'
    } else if (hourC >= 1) {
      result = ~~hourC + '个小时之前'
    } else if (minC >= 1) {
      result = ~~minC + '分钟之前'
    } else if (secondC >= 1) {
      result = ~~secondC + '秒之前'
    } else result = '刚刚'
    return result
  }
}
export default api