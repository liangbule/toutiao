<!-- 首页左边导航条 -->
<template>
  <div class="home-left-Navigation">
    <h2>今日头条</h2>
    <section class="nav-list">
      <section
      class="nav_item"
        :class="{nav_active:item.active}"
        v-for="item,index in listLeft"
        :key="item.id"
      >{{ item.title}}</section>
    </section>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      listLeft: [
        { id: 1, title: "推荐", active: true },
        { id: 2, title: "西瓜视频", active: false },
        { id: 3, title: "财经", active: false },
        { id: 4, title: "热点", active: false },
        { id: 5, title: "直播", active: false },
        { id: 6, title: "图片", active: false },
        { id: 7, title: "科技", active: false },
        { id: 8, title: "娱乐", active: false },
        { id: 9, title: "游戏", active: false },
        { id: 10, title: "教育", active: false },
        { id: 11, title: "懂车帝", active: false },
        { id: 12, title: "热点", active: false },
      ],
    };
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
.home-left-Navigation {
  width: 110px;
  h2 {
    display: inline-block;
    color: #ed4040;
  }
  .nav-list {
    text-align: center;
    .nav_item {
      line-height: 40px;
      margin: 5px;
      height: 40px;
      width: 110px;
      color: black;
    }
    .nav_item:hover {
      background: #ed4040;
      border-radius: 10px ;
      color: white;

    }
    .nav_active {
      background: #ed4040;
      border-radius: 10px ;
      color: white;

    }
  }
}
</style>