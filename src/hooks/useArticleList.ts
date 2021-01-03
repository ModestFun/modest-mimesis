import { reactive } from 'vue';
import api from '@/api/index';

async function getArticleList() {
  const result = await api.ArticleApi.getArticleList()
  return result.data
}

function fixDate(arr: any[]) {
  return arr.map((i: { date: string; }) => {
    const date = i.date.split('.')
    i.date = date[0] + "-" + date[1] + "-" + date[2] + " " + date[3] + ":" + date[4]
    return i;
  })
}

async function useArticleList() {
  return reactive(fixDate(await getArticleList()))
}

export default useArticleList