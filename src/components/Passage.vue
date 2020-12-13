<template>
  <section style="width:100%;height:1080px">
    <el-container>
      <el-header>布依族文化</el-header>
      <el-main>
        <div id="mainContainer">
          <div id="mainHeaderContainer">
            <span>{{ title.default }}</span>
          </div>
          <div id="mainContentContainer">
            <img src="" alt="nothing to show here" />
            <p>{{ paragraph.default }}</p>
          </div>
        </div>
      </el-main>
      <el-footer><button @click="backToHome()">返回</button></el-footer>
    </el-container>
  </section>
</template>

<script>
export default {
  name: "Passage",
  data() {
    return {
      title: {
        type: String,
        title: this.$route.params.title,
      },
      imgBase64: {
        type: String,
        default: this.$route.params.imgBase64,
      },
      paragraph: {
        type: String,
        default: this.$route.params.paragraph,
      },
    };
  },
  methods: {
    backToHome() {
      this.$router.push({
        name: "Index",
      });
    },
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 460px;
}
#mainContainer {
  width: 100%;
  height: 960px;
}
#mainHeaderContainer {
  line-height: 200px;
}
#mainContentContainer {
  line-height: 180px;
}
#mainContentContainer img {
  line-height: 180px;
}
#mainContentContainer p {
  line-height: 260px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
