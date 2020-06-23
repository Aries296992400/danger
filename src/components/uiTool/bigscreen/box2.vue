<template>
  <div class="box1">
    <div :class="backClass"></div>
    <div :class="titleClass">
      {{title}}
      <div :class="titleImgClass"></div>
    </div>
    <div :class="contentClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "box2",
  components: {},
  props: {
      title:String,
      // 是否根据容器扩充
      autoSize:Boolean,
      // title大小
      titleSize:String
  },
  mounted(){
    // 改变back的class
    if(this.autoSize)
    {
      this.backClass = 'back-all'
    }
    switch(this.titleSize)
    {
      case "1": this.titleClass = 'title';
                this.titleImgClass = 'titleImg';
                this.contentClass = 'content';
                break;
      case "2": this.titleClass = 'title2';
                this.titleImgClass = 'titleImg2';
                this.contentClass = 'content-2';
                break;
    }
  },
  data() {
    return {
      backClass:'back-contain',
      titleClass:'title',
      titleImgClass:'titleImg',
      contentClass:'content'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-2{
  width: 85%;
  height: calc(100% - 100px);
  margin: auto;
  position: relative;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content{
  width: 85%;
  height: calc(100% - 50px);
  margin: auto;
  position: relative;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.titleImg {
  width: 200px;
  height: 20px;
  position: relative;
  left: 0;
  right: 0;
  top: 0px;
  margin: auto;
  background: url("../../../assets/title.png");
  background-size: contain;
}
.title {
  position: relative;
  width: 200px;
  left: 0;
  right: 0;
  margin: auto;
  top: 15px;
  text-align: center;
  color: #8ce6e9;
}
.titleImg2 {
  width: 200px;
  height: 20px;
  position: relative;
  left: 0;
  right: 0;
  top: 0px;
  margin: auto;
  background: url("../../../assets/title.png") no-repeat;
  background-size: contain;
}
.title2 {
  position: relative;
  width: 200px;
  left: 0;
  right: 0;
  margin: auto;
  top: 15px;
  font-size: 20px;
  text-align: center;
  color: #8ce6e9;
}
.back-contain {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../../assets/box2.png") center center / 100% 100% no-repeat;
  background-size: contain;
  z-index: 999;
}
.back-all {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../../assets/box2.png") center center no-repeat;
  background-size: 100% 100%;
  z-index: 999;
}

.box1 {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
