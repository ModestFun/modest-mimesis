<template>
  <a-row>
    <a-col :xxl="0" :xl="0" :lg="0" :md="2" :xs="0"></a-col>
    <a-col :xxl="0" :xl="0" :lg="0" :md="4" :xs="5">
      <div class="nav-user">
        <img
          class="logo"
          src="https://www.modestfun.com:8080/getPicStoreItem?name=1588142046844"
          alt
        />
      </div>
    </a-col>
    <a-col :xxl="4" :xl="2" :lg="0" :md="2" :xs="2"></a-col>
    <a-col :xxl="3" :xl="3" :lg="4" :md="8" :xs="10">
      <div class="nav-logo">
        <div style="display:flex">
          <img class="logo" src="https://www.modestfun.com:8080/img/?name=logo" alt />
          <p>ModestFun</p>
        </div>
        <p class="logo-tips animated">
          在这个娱乐至死的年代，提醒自己只能
          <span class="log-tips-strong">“适度娱乐”</span>
        </p>
      </div>
    </a-col>
    <a-col :xxl="1" :xl="1" :lg="1" :md="0"></a-col>
    <a-col :xxl="9" :xl="13" :lg="15" :md="0" :xs="0">
      <div id="nav">
        <a-row type="flex" justify="space-around">
          <a-col :span="3" v-for="item in navList">
            <router-link
              :path="item.path"
              :name="item.article"
              :class="item.class"
              :to="item.path"
            >{{item.title}}</router-link>
          </a-col>
        </a-row>
      </div>
    </a-col>
    <a-col :xxl="1" :xl="1" :lg="1" :md="2" :xs="2"></a-col>
    <a-col :xxl="2" :xl="2" :lg="3" :md="4" :xs="5">
      <div class="nav-user">
        <img
          class="logo"
          src="https://www.modestfun.com:8080/getPicStoreItem?name=1588142046844"
          alt
        />
      </div>
    </a-col>
    <a-col :xxl="4" :xl="2" :lg="0" :md="2" :xs="0" :sm="0"></a-col>
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

.navLink:hover {
  animation-name: rubberBand;
  animation-duration: 0.5s;
}

.navLink_selected {
  color: var(--selectColor) !important;
  box-shadow: inset var(--whiteShadow), inset var(--blackShadow);
}

.navLink_selected:hover {
  animation-name: none;
}

.nav-logo {
  min-width: 200px;
  margin-top: 20px;
  padding: 10px 15px;
  height: 62px;
  display: flex;
  justify-content: space-around;
  border-radius: 20px;
  z-index: 10;
  box-shadow: var(--whiteShadow), var(--blackShadow);
  position: relative;
  cursor: pointer;
}

.nav-logo .logo-tips {
  display: none;
  position: absolute;
  min-width: 200px;
  color: var(--commonColor) !important;
  font-size: 12px;
  line-height: 20px;
  margin: 0px auto;
  margin-top: 62px;
  padding: 15px 15px;
  text-align: center;
  border-radius: 20px;
  box-shadow: inset var(--whiteShadow), inset var(--blackShadow);
  animation-name: bounceInDown;
  animation-duration: 0.5s;
  animation-delay: 0s;
}

.nav-logo .logo-tips .log-tips-strong {
  color: var(--selectColor);
}

.nav-logo:hover .logo-tips {
  display: block;
}

.nav-logo:active {
  border-radius: 20px;
  box-shadow: inset var(--whiteShadow), inset var(--blackShadow);
}
.nav-logo p {
  width: 100%;
  height: 100%;
  width: 108px;
  padding-left: 10px;
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
  /* width: 160px; */
  height: 62px;
  display: flex;
  justify-content: left;
  border-radius: 20px;
  z-index: 10;
  box-shadow: var(--whiteShadow), var(--blackShadow);
  cursor: pointer;
  position: relative;
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
.logo {
  width: 40px;
  height: 40px;
  display: block;
  background: #ecf0f3;
  border-radius: 20px;
  margin: 0px auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ff6700;
}
</style>