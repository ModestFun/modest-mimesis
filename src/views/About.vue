<template>
  <a-row type="flex" justify="center">
    <a-col :span="18">
      <div class="about">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
        <h1 style="text-align: center; width: 100%">This is an About page</h1>
      </div>
    </a-col>
  </a-row>
</template>
<style >
.about {
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