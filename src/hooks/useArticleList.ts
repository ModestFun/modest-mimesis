import { reactive } from 'vue';
import api from '@/api/index';

async function getArticleList() {
  const result = await api.ArticleApi.getArticleList()
  return result.data
}
async function useArticleList() {
  const result = await getArticleList()
  return reactive(result)
}

export default useArticleList