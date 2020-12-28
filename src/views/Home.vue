<template>
  <a-row type="flex" justify="center">
    <a-col :span="18">
      <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
        <h1 style="text-align: center; width: 100%">This is an Home page</h1>
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    // HelloWorld,
  },
});
</script>
<style >
.home {
  margin-top: 30px;
  padding: 20px 30px;
  height: 82px;
  display: flex;
  justify-content: left;
  border-radius: 20px;
   box-shadow: var(--tomato-whiteShadow), var(--tomato-blackShadow);
  cursor: pointer;
}
</style>
