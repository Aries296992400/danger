<template>
  <div class="form">
    <div class="formTitle">
      <div>数据展示仓</div>
      <div>危险源车辆运输监控管理平台</div>
    </div>
    <div class="formInput">
      <a-input style="width:260px;" placeholder="请输入用户名" size="large" v-model="user" />
      <a-input style="width:260px;" placeholder="请输入密码" size="large" type='password' v-model="pass" />
      <a-button style="width:140px;" type="primary" size="large" @click="login">登录</a-button>
    </div>
  </div>
</template>

<script>
import _StorageTools from "../../components/tool/_StorageTools";
export default {
  name: "Login",
  data() {
    return {
      user: "",
      pass: ""
    };
  },
  components: {},
  props: {
    msg: String
  },
  methods: {
    login() {
      if (this.user == "123" && this.pass == "123") {
        _StorageTools.setItem("token", "yes");
        // location.reload()
        this.$router.push("/")
        console.log("登录成功");
      } else {
        console.log("登录失败");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formTitle {
  width: 100%;
  color: white;
  text-align: center;
}
.formTitle div:nth-child(1) {
  font-size: 60px;
  line-height: 70px;
}
.formTitle div:nth-child(2) {
  font-size: 20px;
  line-height: 70px;
  margin-bottom: 10px;
}
.formInput {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.form {
  width: 700px;
  height: 300px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
}
</style>
