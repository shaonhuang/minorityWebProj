<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    
    <keep-alive include="Index">
  <!-- 将缓存name为test-keep-alive的组件 -->
  <router-view />
</keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("@/assets/img/common/backgroundTexture.png"),
      bodyBgImage:
        "url(" + require("@/assets/img/common/backgroundTexture.png") + ")",
    };
  },
  mounted() {
    // document.body.style.backgroundSize = "100%";
    document.body.style.backgroundImage = this.bodyBgImage;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

* {
  margin: 0;
  padding: 0;
  z-index: 1;
}
</style>
