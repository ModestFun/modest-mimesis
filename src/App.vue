<template>
  <div class="background-default">
    <Nav></Nav>
    <router-view />
  </div>
</template>
<script>
import { dataUrl, webStyle } from "../config/config.json";
import { defineComponent } from "vue";
import useWebThemeController from "./hooks/useWebColorController";
import  Nav from "@/components/Nav";
export default defineComponent({
  components: {
    Nav,
  },
  setup() {
    useWebThemeController();
    return {
      dataUrl,
      webStyle,
    };
  },
});
</script>
<style>
.background-default {
  background: var(--background);
  position: absolute;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
