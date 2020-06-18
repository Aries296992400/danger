<template>
  <div class="app">
    <transition name="slide-fade">
      <Spin v-if="isSpin" :data="isSpin" @changeSpin="changeSpin" />
      <div v-else>
        
      </div>
    </transition>
  </div>
</template>

<script>
import Spin from "../../components/uiTool/spin";
export default {
  name: "dashboard",
  components: {
    Spin
  },
  props: {
    msg: String
  },
  data() {
    return {
      isSpin: true
    };
  },
  methods: {
    changeSpin() {
      this.isSpin = !this.isSpin;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app {
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
