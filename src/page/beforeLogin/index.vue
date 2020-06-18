<template>
  <div id="app">
    加载中。。。
  </div>
</template>

<script>
import _StorageTools from "../../components/tool/_StorageTools";
export default {
  name: "beforeLogin",
  components: {

  },
  data() {
    return {
      
    };
  },
  mounted(){
      this.checkIsLogin()
  },
  methods: {
    checkIsLogin() {
      var token = _StorageTools.getItem("token");
      if (!token) {
        this.$router.push("/login")
      } else {
        this.$router.push("/dashboard")
      }
    }
  }
};
</script>

<style>

</style>
