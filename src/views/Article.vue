<template>
  <div class="article">
    <a-row>
      <a-col :xxl="4" :xl="2" :lg="0" :md="2" :xs="2"></a-col>
      <a-col :xxl="11" :xl="14" :lg="16" :md="20" :xs="24">
        <div class="page">
          <div class="ad">人生不止眼前的苟且，还有远方的你看得见的、看不见的苟且</div>
          <Section></Section>
        </div>
      </a-col>
      <a-col :xxl="1" :xl="1" :lg="2" :md="1" :xs="0" :sm="0"></a-col>
      <a-col :xxl="4" :xl="5" :lg="6" :md="0" :xs="0">
        <div class="catalog">qwe</div>
      </a-col>
      <a-col :xxl="4" :xl="2" :lg="0" :md="2" :xs="0" :sm="0"></a-col>
    </a-row>
  </div>
</template>
<script>
import Section from '@/components/Section'
import { defineComponent } from 'vue'
import useArticleList from '../hooks/userArticleList'
export default defineComponent({
  components: {
    Section
  },
  setup () {
    return {

    }
  }
})
</script>
<style>
.article {
  margin-top: 20px;
  width: 100%;
  height: 100%;
}
.page {
  width: 100%;
  height: 100%;
}
.catalog {
  width: 100%;
  height: 100%;
  background-color: turquoise;
}
.ad {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  color: var(--commonColor) !important;
  box-shadow: var(--whiteShadow), var(--blackShadow);
}
</style>