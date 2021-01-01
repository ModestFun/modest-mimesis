<template>
  <a-row>
    <div class="section">
      <a-row>
        <a-col :xxl="15" :xl="10">
          <h2 class="title">标题</h2>
        </a-col>
        <a-col :xxl="4" :xl="2"></a-col>
        <a-col :xxl="15" :xl="5">
          <h2 class="author">ModestFun</h2>
        </a-col>
        <a-col :xxl="4" :xl="2"></a-col>
        <a-col :xxl="5" :xl="5">
          <p class="time">2021-1-1</p>
        </a-col>
      </a-row>
      <a-row>
        <a-col :xxl="15" :xl="15">
          <img
            class="headImg"
            src="https://www.modestfun.com:8080/articleImg/?name=12.26_%E5%AD%A6%E4%B9%A0431470"
          />
        </a-col>
        <a-col :xxl="4" :xl="1"></a-col>
        <a-col :xxl="5" :xl="8">
          <p class="intro">asdsadasdasd</p>
        </a-col>
      </a-row>
      <div class="other">
        <div>点赞数</div>
      </div>
    </div>
  </a-row>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup () {
  }
})
</script>
<style >
.section {
  margin-top: 20px;
  width: 100%;
  padding: 14px 10px;
  border-radius: 10px;
  color: var(--commonColor) !important;
  box-shadow: var(--whiteShadow), var(--blackShadow);
}

.section .title {
  margin: 0px;
  height: 37px;
  line-height: 37px;
  text-align: left;
  color: var(--commonColor) !important;
  border-radius: 10px;
  box-shadow: inset var(--whiteShadow), inset var(--blackShadow);
}

.section .author {
  margin: 0px;
  height: 37px;
  line-height: 37px;
  text-align: left;
  color: var(--commonColor) !important;
  border-radius: 10px;
  box-shadow: inset var(--whiteShadow), inset var(--blackShadow);
}

.section .time {
  height: 37px;
  line-height: 37px;
  color: var(--commonColor) !important;
  border-radius: 10px;
  box-shadow: inset var(--whiteShadow), inset var(--blackShadow);
}

.section .headImg {
  width: 100%;
  padding: 5px;
  border-radius: 15px;
  box-shadow: inset var(--whiteShadow), inset var(--blackShadow);
}

.section .intro {
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 15px;
  box-shadow: inset var(--whiteShadow), inset var(--blackShadow);
}
</style>