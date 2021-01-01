<template>
  <a-row>
    <div class="section">
      <h2>文章</h2>

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
  height: 200px;
  border-radius: 10px;
  color: var(--commonColor) !important;
  box-shadow: var(--whiteShadow), var(--blackShadow);
}
</style>