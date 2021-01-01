import api from '@/api/index';

async function getArticleList() {
  return await api.ArticleApi.getArticleList()
}
function useArticleList() {
  const result = getArticleList()
  console.log(result)
}

export default useArticleList