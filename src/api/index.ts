import axios from 'axios'
import global from '../../config/config.json'

const api = {
  ArticleApi: {
    getArticleList(pageNum = 1, pageSize = 10) {
      return axios.get(`${global.dataUrl}/article/getArticleList?pageSize=${pageSize}&pageNum=${pageNum}`)
    }
  }
}
export default api