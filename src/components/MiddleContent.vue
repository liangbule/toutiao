!<!-- 中间内容 -->
<template>
  <div class="toutiao_content">
    <div class="content_bar">
      <span>发微头条</span>
      <span>写文章</span>
      <span>题问题</span>
      <span>发视频</span>
    </div>
    <div class="constent_text">
      <textarea name id placeholder="视频标题（30 字以内）" cols="30" rows="10"></textarea>
    </div>
    <div class="content_foo">
      <span>图片</span>
      <span>表情</span>
      <button>发布</button>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "ss",
  //import引入的组件需要注入到对象中才能使用
  components: {},
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
  async mounted() {
    // this.$axios
    //     .get("http://tt.linweiqin.com/api/tt/getArticles", {
    //         params: {
    //         lastid: 0,
    //         type: "TT",
    //         page: 1,
    //         number: 20,
    //         },
    //     })
    //     .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    let res = await this.$axios.get("/getArticles", {
      params: {
        lastid: 0,
        type: "TT",
        page: 1,
        number: 20,
      },
    });
    console.log(res);
  },
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
.toutiao_content {
  width: 100%;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  .content_bar {
    width: 100%;
    height: 44px;
    span {
      line-height: 44px;
      font-size: 16px;
      margin-left: 19px;
      cursor: pointer;
    }
  }

  .constent_text {
    textarea {
      box-sizing: border-box;

      width: 100%;
      height: 100px;
      display: block;
      font-size: 14px;
      line-height: 1.4;
      padding: 13px 19px;
      border: 0;
      outline: 0;
      resize: none;
      background-color: #f4f5f6;
      transition: all 0.5s;
      animation-duration: 0.8s;
      animation-fill-mode: both;
    }
  }

  .content_foo {
    height: 44px;
    span {
      font-size: 16px;
      margin-left: 25px;
      cursor: pointer;
      line-height: 44px;
    }
    button {
      width: 100px;
      height: 100%;
      border: none;
      float: right;
      background: #ed4040;
      color: white;
      outline: none;
    }
  }
}
</style>