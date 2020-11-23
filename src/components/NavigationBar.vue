<template>
  <div id="NavigaitonBar">
    <div id="logoAndTitle">
      <a href=""
        ><span>{{ logName }}</span></a
      >
    </div>
    <div id="catalogueItem">
      <ul>
        <li>
          <a href=""
            ><span><router-link to="/">首页</router-link></span></a
          >
        </li>
        <li>
          <a href=""
            ><span><router-link to="/detail">导览</router-link></span></a
          >
        </li>
        <li>
          <a href=""><span>非遗</span></a>
        </li>
        <li>
          <a href=""><span>习俗</span></a>
        </li>
        <li>
          <a href=""><span>文艺</span></a>
        </li>
        <li>
          <a href=""><span>探索</span></a>
        </li>
        <li>
          <a href=""
            ><span>
              <router-link to="/culturalandcreative">文创</router-link></span
            ></a
          >
        </li>
        <li>
          <a href=""><span>关于</span></a>
        </li>
      </ul>
    </div>
    <div id="options">
      <searchItem />
    </div>
  </div>
</template>

<script>
import searchItem from "@/components/common/search.vue";

export default {
  name: "NavigationBar",
  components: {
    searchItem,
  },
  props: {},
  data() {
    return {
      logName: "布依族文化",
    };
  },
};
</script>

<style>
#NavigaitonBar {
  position: absolute;
  height: 56px;
  width: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.25);

  /* border: 5px solid black; */
}

#logoAndTitle {
  float: left;
  padding-left: 8%;
  padding-top: 18px;
}
#logoAndTitle a span {
  color: white;
  font-size: 18px;
}

#catalogueItem {
  float: left;
  padding-left: 24%;
  padding-top: 18px;
}
#catalogueItem ul {
  list-style: none;
  float: left;
  height: 22px;
}
#catalogueItem ul li {
  float: left;
  padding-left: 18px;
  padding-right: 18px;
}
#catalogueItem ul li a {
  color: white;
}
#catalogueItem ul li a span {
  color: white;
}

#options {
  float: left;
  padding-left: 24%;
  padding-top: 14px;
}

a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
</style>
