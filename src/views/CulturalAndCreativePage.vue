<template>
  <div>
    <navigation-bar v-if="true"></navigation-bar>
    <section id="headTitle">
      <div><h2>文创产品</h2></div>
    </section>
    <section>
      <div
        class="infinite-list-wrapper"
        style="overflow:auto"
        id="goodsItemsContainer"
      >
        <ul
          class="list"
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled"
          id="goodsItemsContainerList"
        >
          <li v-for="i in count" :key="i" class="list-item" id="goodsItems">
            {{ i }}
          </li>
        </ul>
        <p v-if="loading" style="color:white;">加载中...</p>
        <p v-if="noMore" style="color:white;">没有更多了</p>
      </div>
    </section>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "CulturalAndCreativePage",
  components: { NavigationBar },
  data() {
    return {
      count: 10,
      loading: false,
    };
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style>
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");

#headTitle {
  padding-top: 100px;
  color: white;
}
#goodsItemsContainer {
  width: 100%;
  display: block;
}
#goodsItemsContainerList {
  padding-left: 156px;
  display: flex;
  width: 1600px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-grow: 2;
}
#goodsItems {
  /* margin-left: 200px;
  matgin-right: 200px; */
  margin-top: 100px;
  height: 580px;
  width: 580px;
  background-color: white;
  border: 5px solid black;
  list-style: none;
}
#goodsItems:nth-child(even) {
  background-color: black;
}
#goodsItems:nth-child(odd) {
}
</style>
