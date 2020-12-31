<template>
  <div class="section">文章</div>
</template>
<script>
import { defineComponent } from "vue";
import userArticleList from '../hooks/userArticleList'
export default defineComponent({
  setup(){
    userArticleList()
  }
})
</script>
<style >
.section {
  width: 100%;
  height: 200px;
  background-color: white;
}
</style>