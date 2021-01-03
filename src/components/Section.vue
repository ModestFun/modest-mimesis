<template>
  <a-row>
    <div class="section animated">
      <a-row>
        <a-col :xxl="18" :xl="18" :lg="18" :md="18" :xs="15">
          <marquee behavior="alternate" direction="left" class="title">
            <h2>
              <span class="type">「{{result.contentType}}」</span>
              {{result.headTitle}}
            </h2>
          </marquee>
        </a-col>
        <a-col :xxl="1" :xl="1" :lg="1" :md="1" :xs="1"></a-col>
        <a-col :xxl="5" :xl="5" :lg="5" :md="5" :xs="8">
          <p class="time">{{result.date}}</p>
        </a-col>
      </a-row>
      <a-row>
        <a-col :xxl="15" :xl="15" :lg="15" :md="15" :xs="24">
          <img
            class="headImg zoomLeft"
            :src="`https://www.modestfun.com:8080/articleImg/?name=${result.titleImg}`"
          />
        </a-col>
        <a-col :xxl="1" :xl="1" :lg="1" :md="1" :xs="0"></a-col>
        <a-col :xxl="8" :xl="8" :lg="8" :md="8" :xs="24">
          <p class="intro zoomRight">{{result.titleText}}</p>
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
  props: {
    result: Object,
  },
  setup (props) {
    return { result: props.result }
  }
})
</script>
<style >
.section {
  margin-top: 20px;
  overflow: hidden;
  width: 100%;
  padding: 14px 10px;
  border-radius: 10px;
  color: var(--commonColor) !important;
  box-shadow: var(--whiteShadow), var(--blackShadow);
  cursor: pointer;
}

.section:hover {
  animation-name: pulse;
}

.section .title {
  margin: 0px;
  height: 37px;
  line-height: 37px;
  text-align: left;
  padding: 0px 10px;
  color: var(--commonColor) !important;
  border-radius: 10px;
  box-shadow: inset var(--whiteShadow), inset var(--blackShadow);
}
.section .title .type {
  color: var(--selectColor) !important;
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
  overflow: hidden;
  font-weight: 800;
  color: var(--selectColor) !important;
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
  text-align: left;
  font-size: 16px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: inset var(--whiteShadow), inset var(--blackShadow);
}

.zoomTop {
  animation: zoomTop 1.5s both;
}

.zoomLeft {
  animation: zoomLeft 1.5s both;
}

.zoomRight {
  animation: zoomRight 1.5s both;
}

@keyframes zoomTop {
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(0%);
  }
}

@keyframes zoomLeft {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0%);
  }
}

@keyframes zoomRight {
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(0%);
  }
}
</style>