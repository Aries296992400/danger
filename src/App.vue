<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view v-if="show"></router-view>
    </transition>
  </div>
</template>

<script>
import _StorageTools from "./components/tool/_StorageTools";
export default {
  name: "App",
  components: {

  },
  updated() {
    this.checkIsLogin();
  },
  mounted() {
    this.checkIsLogin();
  },
  data() {
    return {
      show: true
    };
  },
  watch: {
    $route() {
      this.show = false;
      setTimeout(() => {
        this.show = true;
      }, 300);
    }
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
#app {
  width: 100%;
  height: 100%;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}
</style>
