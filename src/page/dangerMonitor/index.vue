<template>
  <div class="content">
    <Back></Back>
    <Menu />
  </div>
</template>

<script>
import Menu from "../../components/menu/menu";
import Back from "../../components/uiTool/background"

export default {
  name: "DangerMonitor",
  components: {
    Menu,
    Back
  },
  props: {},
  methods: {}
};
</script>

<style scoped>
</style>
