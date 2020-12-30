<template>
  <a-row type="flex" justify="center">
    <a-col
      :xxl="18"
      :xl="20"
      :lg="24"
      :md="24"
      style="display: flex; justify-content: space-between"
    >
      <!-- <a-col :xxl="0" :xl="0" :lg="0" :xs="3.5">
        <div class="nav-logo">
          <img class="logo" src="https://www.modestfun.com:8080/img/?name=logo" alt />
          <p>asdad</p>
        </div>
      </a-col>-->
      <a-col :xxl="3.5" :xl="3.5" :lg="3.5">
        <div class="nav-logo">
          <img class="logo" src="https://www.modestfun.com:8080/img/?name=logo" alt />
          <p>ModestFun</p>
        </div>
      </a-col>
      <a-col :xxl="16" :xl="14" :lg="14" :md="14">
        <div id="nav">
          <a-row type="flex" justify="space-around">
            <a-col :span="3" v-for="item in navList">
              <router-link :path="item.path" :name="item.article" :class="item.class" :to="item.path">{{item.title}}</router-link>
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
import { Row, Col } from "ant-design-vue";
import { defineComponent, onMounted, onUpdated } from "vue";
import useNavSelected from "../hooks/useNavSelected";
import useNavMenu from '../hooks/useNavMenu'
export default defineComponent({

  setup (props, context) {
    const navList = useNavMenu()
    useNavSelected(window.location.pathname);

    return { navList };
  },
});
</script>
<style scoped>
#nav {
  margin-top: 20px;
  padding: 15px 15px;
  height: 62px;
  border-radius: 20px;
  box-shadow: inset var(--whiteShadow), inset var(--blackShadow);
}

.navLink {
  display: block;
  padding: 6px 15px;
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
  padding: 10px 30px;
  height: 62px;
  display: flex;
  justify-content: left;
  border-radius: 20px;
  z-index: 10;
  box-shadow: var(--whiteShadow), var(--blackShadow);
  cursor: pointer;
}
.nav-logo:active {
  margin-top: 20px;
  padding: 10px 30px;
  height: 62px;
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
  padding: 10px 30px;
  height: 62px;
  display: flex;
  justify-content: left;
  border-radius: 20px;
  z-index: 10;
  box-shadow: var(--whiteShadow), var(--blackShadow);
  cursor: pointer;
}
.nav-user:active {
  margin-top: 20px;
  padding: 10px 30px;
  height: 62px;
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
  color: var(--commonColor);
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