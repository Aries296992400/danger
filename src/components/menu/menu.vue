<template>
  <div class="app">
    <a-drawer
      :closable="false"
      placement="right"
      :visible="visible"
      @close="onClose"
      width="350"
      bodyStyle="background:#3c4351;height:100%;color:#ccc;padding:0;"
    >
      <div class="menuButtonTop">
        <a-icon type="home" style="margin-right:10px;" />
        <span>菜单</span>
      </div>
      
      <div class="menuButton" @click="GoToPage(`dashboard`)">
        <a-icon type="appstore" style="margin-right:25px;" />首页
      </div>
      <div class="menuButton" @click="GoToPage(`dangerMonitor`)">
        <a-icon type="exclamation-circle" style="margin-right:25px;color:red" />危险品监控
      </div>
      <div class="menuButton" @click="GoToPage(`specilDangerMonitor`)">
        <a-icon type="info-circle" style="margin-right:25px;color:red" />特殊危险品监控
      </div>
      <div class="menuButton" @click="GoToPage(`warning`)">
        <a-icon type="warning" style="margin-right:25px;" />预警列表
      </div>
      <div class="menuButton" @click="GoToPage(`alert`)">
        <a-icon type="alert" style="margin-right:25px;" />报警列表
      </div>
      <div class="menuButton" @click="GoToPage(`carMonitor`)">
        <a-icon type="car" style="margin-right:25px;" />车辆监控表
      </div>
      <div class="menuButton" @click="GoToPage(`carDetail`)">
        <a-icon type="car" style="margin-right:25px;" />车辆监控表2
      </div>
      <div class="menuButton" @click="GoToPage(`carWarning`)">
        <a-icon type="car" style="margin-right:25px;" />车辆监控表3
      </div>

      <div class="menuButton" @click="OnExit()">
        <a-icon type="export" style="margin-right:25px;" />退出登录
      </div>
    </a-drawer>

    <div class="content">
      <a-icon type="menu" class="menu" @click="onClose()" />
    </div>
  </div>
</template>

<script>
import _StorageTools from "../tool/_StorageTools";
export default {
  name: "dashboard",
  components: {},
  props: {},
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onClose() {
      this.visible = !this.visible;
    },
    OnExit() {
      _StorageTools.removeItem("token");
      this.$router.push("/");
    },
    GoToPage(url) {
      console.log(url);
      this.$router.push(`/${url}`);
    }
  }
};
</script>

<style scoped>
.menuButton {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #292929;
  font-size: 15px;
  padding-left: 20px;
  cursor: pointer;
}
.menuButtonTop {
  width: 100%;
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #292929;
  font-size: 25px;
  text-align: center;
  cursor: pointer;
}
.menuButtonTop span {
  font-size: 20px;
  line-height: 70px;
}
.menu {
  color: #8ce6e9;
  font-size: 30px;
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 999;
}
</style>
