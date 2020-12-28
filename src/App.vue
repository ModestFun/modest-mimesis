<template>
  <div class="background-default">
    <a-row type="flex" justify="center">
      <a-col :xs="18" style="display: flex; justify-content: space-between">
        <a-col :xs="3.5">
          <div class="modest-logo">
            <img class="logo" src="https://www.modestfun.com:8080/img/?name=logo" alt />
            <p>ModestFun</p>
          </div>
        </a-col>
        <a-col :xs="13">
          <div id="nav">
            <a-row>
              <a-col :xs="6">
                <router-link to="/">Home</router-link>|
                <router-link to="/about">About</router-link>
              </a-col>
              <a-col :xs="6">
                <router-link to="/q">Blog</router-link>
              </a-col>
              <a-col :xs="6">
                <router-link to="/w">Friend</router-link>
              </a-col>
              <a-col :xs="6">
                <router-link to="/e">Game</router-link>
              </a-col>
            </a-row>
          </div>
        </a-col>
        <a-col :xs="3">
          <div class="modest-logo">
            <img
              class="logo"
              src="https://www.modestfun.com:8080/getPicStoreItem?name=1588142046844"
              alt
            />
            <p>请登录</p>
          </div>
        </a-col>
      </a-col>
    </a-row>

    <router-view />
  </div>
</template>
<script>
import { dataUrl, webStyle } from "../config/config.json";
import { defineComponent } from "vue";
import useWebThemeController from "./hooks/useWebColorController";
export default defineComponent({
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

#nav {
  margin-top: 30px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: var(--whiteShadow), var(--blackShadow);
}

.modest-logo {
  margin-top: 30px;
  padding: 20px 30px;
  height: 82px;
  display: flex;
  justify-content: left;
  border-radius: 20px;
  z-index: 10;
  box-shadow: var(--whiteShadow), var(--blackShadow);
  cursor: pointer;
}
.modest-logo:active {
  margin-top: 30px;
  padding: 20px 30px;
  height: 82px;
  display: flex;
  justify-content: left;
  border-radius: 20px;
  box-shadow: inset var(--whiteShadow), inset var(--blackShadow);
}
.modest-logo p {
  width: 100%;
  height: 100%;
  padding-left: 15px;
  line-height: 40px;
  box-sizing: border-box;
  font-weight: 800;
  letter-spacing: 1px;
  color: #ff6700;
  text-align: left;
}
.logo {
  width: 40px;
  height: 40px;
  display: block;
  background: #ecf0f3;
  border-radius: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ff6700;
}
</style>
