!<!-- 主页组件 -->
<template>
  <div class="app">
    <!-- header 开始 -->
    <div class="toutiao-header">
      <span>今日头条</span>
    </div>
    <!-- header 结束 -->
    <!-- content开始 -->
    <div class="toutiao-content">
        <div class="toutiao-left">
          <Navigation />
        </div>
        <div class="toutiao-middle">
          <MiddleContent />
        </div>
        <div class="toutiao-right">
          <RightContent />
        </div>
    </div>
  </div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//导入组件
import Navigation from "../components/Navigation";
import MiddleContent from "../components/MiddleContent";
import RightContent from "../components/RightContent";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Navigation,
    MiddleContent,
    RightContent,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.toutiao-header {
  width: 100%;
  height: 46px;
  background: rgba(0, 0, 0, 0.9);
  margin-bottom: 10px;
  span {
    margin-left: 100px;
    font-weight: 600;
    line-height: 46px;
    font-size: 18px;
    color: whitesmoke;
    letter-spacing: 5px;
  }
}
.toutiao-content {
  display: flex;
  width: 80vw;
  margin-left: 20vw;
  margin-right: 10vw;
  .toutiao-left {
    flex: 1;
  }

  .toutiao-middle {
    flex: 3;
  }

  .toutiao-right {
    flex: 2;
  }
}
</style>