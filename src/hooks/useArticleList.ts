import { reactive } from 'vue';
import api from '@/api/index';

async function getArticleList() {
  const result = await api.ArticleApi.getArticleList()
  return result.data.data
}

function middleWare(data: any[]) {
  return data.map(i => {
    i.createDate = api.timeFormat(parseInt(i.createDate))
    return i
  })
}

async function useArticleList() {
  const result = await getArticleList();
  return reactive(middleWare(result.data))
}

export default useArticleList