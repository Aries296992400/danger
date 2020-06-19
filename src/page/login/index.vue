<template>
  <div style="width:100%;height:100%;">
    <BackVideo></BackVideo>
    <Form></Form>
  </div>
</template>

<script>
import BackVideo from "../../components/login/backVideo";
import Form from "../../components/login/form";
export default {
  name: "Login",
  components: {
    BackVideo,
    Form
  },
  props: {
   
  },
  methods:{
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
