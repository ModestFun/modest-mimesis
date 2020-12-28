<template>
  <a-row type="flex" justify="center">
    <a-col
      :xxl="18"
      :xl="20"
      :lg="24"
      :md="24"
      style="display: flex; justify-content: space-between"
    >
      <a-col :xxl="3.5" :xl="3.5" :lg="3.5">
        <div class="nav-logo">
          <img class="logo" src="https://www.modestfun.com:8080/img/?name=logo" alt />
          <p>ModestFun</p>
        </div>
      </a-col>
      <a-col :xxl="14" :xl="14" :lg="14" :md="14">
        <div id="nav">
          <a-row type="flex" justify="space-around">
            <a-col :span="3">
              <router-link class="navLink navLink_selected" to="/">文章</router-link>
            </a-col>
            <a-col :span="3">
              <router-link class="navLink" to="/q">日记</router-link>
            </a-col>
            <a-col :span="3">
              <router-link class="navLink" to="/w">归档</router-link>
            </a-col>
            <a-col :span="3">
              <router-link class="navLink" to="/e">留言</router-link>
            </a-col>
            <a-col :span="3">
              <router-link class="navLink" to="/e">友链</router-link>
            </a-col>
            <a-col :span="3">
              <router-link class="navLink" to="/e">关于</router-link>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col :xxl="3.5" :xl="3.5" :lg="3.5" :md="3.5">
        <div class="nav-user">
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
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  upSet() {
    console.log(window.screen.width);
  },
});
</script>
<style scoped>
#nav {
  margin-top: 20px;
  padding: 20px 30px;
  border-radius: 20px;
  box-shadow: var(--whiteShadow), var(--blackShadow);
}

.navLink {
  display: block;
  padding: 10px 0px;
  border-radius: 20px;
  color: var(--commonColor) !important;
  box-shadow: var(--whiteShadow), var(--blackShadow);
}

.navLink_selected {
  color: var(--selectColor) !important;
  box-shadow: inset var(--whiteShadow), inset var(--blackShadow);
}

.nav-logo {
  margin-top: 20px;
  padding: 20px 30px;
  height: 82px;
  display: flex;
  justify-content: left;
  border-radius: 20px;
  z-index: 10;
  box-shadow: var(--whiteShadow), var(--blackShadow);
  cursor: pointer;
}
.nav-logo:active {
  margin-top: 20px;
  padding: 20px 30px;
  height: 82px;
  display: flex;
  justify-content: left;
  border-radius: 20px;
  box-shadow: inset var(--whiteShadow), inset var(--blackShadow);
}
.nav-logo p {
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

.nav-user {
  margin-top: 20px;
  padding: 20px 30px;
  height: 82px;
  display: flex;
  justify-content: left;
  border-radius: 20px;
  z-index: 10;
  box-shadow: var(--whiteShadow), var(--blackShadow);
  cursor: pointer;
}
.nav-user:active {
  margin-top: 20px;
  padding: 20px 30px;
  height: 82px;
  display: flex;
  justify-content: left;
  border-radius: 20px;
  box-shadow: inset var(--whiteShadow), inset var(--blackShadow);
}
.nav-user p {
  width: 100%;
  height: 100%;
  padding-left: 15px;
  line-height: 40px;
  box-sizing: border-box;
  font-weight: 800;
  letter-spacing: 1px;
  color: var(--commonColor) ;
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