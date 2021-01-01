import axios from 'axios'
import global from '../../config/config.json'

const api = {
  ArticleApi: {
    getArticleList() {
      return axios.get(`${global.dataUrl}/getArticleList`)
    }
  }
}
export default api