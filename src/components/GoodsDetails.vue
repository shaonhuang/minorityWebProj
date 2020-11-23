<template>
  <div>
    <section>
      <div id="bottomPageGoodsDetailsContainer">
        <div id="bottomPageSlideshow">
          <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div id="bottomPageTitle">
          <span>产品介绍</span>
        </div>
        <div id="bottomPageImageAndContents">
          <div id="bottomPageFirstImageAndContent">
            <img src="" alt="nothing to show" />
            <span>产品介绍</span>
          </div>
          <div id="bottomPageSecondImageAndContent">
            <span>产品介绍</span>
            <img src="" alt="nothing to show" />
          </div>
        </div>
        <div><button>现在订购</button></div>
      </div>
    </section>
    <section v-if="false">
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            <span></span>
            <input type="text" />
          </div>
          <div>
            <span></span>
            <input type="text" />
          </div>
          <div>
            <span></span>
            <input type="text" />
          </div>
        </div>
        <div>
          <span>生成</span>
        </div>
      </div>
    </section>
    <section v-if="false">
      <div>
        <span>二维码</span>
        <img src="" alt="" />
        <svg />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "GoodsDetails",
};
</script>

<style>
#bottomPageGoodsDetailsContainer {
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

#bottomPageSlideshow {
  margin: 100px 100px 0px 100px;
}

#bottomPageTitle {
  color: white;
  margin: 100px 0px 100px 0px;
  font-size: 46px;
}
#bottomPageImageAndContents {
  display: flex;
  height: 1000px;
  width: 1200px;
  margin: 0 auto;
  border: 5px solid black;
  flex-direction: column;
}
#bottomPageFirstImageAndContent {
  width: 1200px;
  height: 500px;

  border: 5px solid black;
}
#bottomPageFirstImageAndContent img {
  float: left;
  height: 500px;
  width: 500px;
  background-color: white;
}
#bottomPageFirstImageAndContent span {
  float: left;
  color: white;
}
#bottomPageSecondImageAndContent {
  width: 1200px;
  height: 500px;
  border: 5px solid black;
}
#bottomPageSecondImageAndContent img {
  float: right;
  height: 500px;
  width: 500px;
  background-color: white;
}
#bottomPageSecondImageAndContent span {
  /* float: right; */
  color: white;
}
</style>
