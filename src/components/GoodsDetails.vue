<template>
  <div>
    <section v-if="this.shoppingPageStep === 0">
      <div id="bottomPageGoodsDetailsContainer">
        <div id="bottomPageSlideshow">
          <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="item in 3" :key="item">
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
            <div><span>产品介绍</span></div>
          </div>
          <div id="bottomPageSecondImageAndContent">
            <div><span>产品介绍</span></div>
            <img src="" alt="nothing to show" />
          </div>
        </div>
        <div id="bottomPageOrderButtonContainer">
          <button @click="shoppingStep(1)">现在订购</button>
        </div>
      </div>
    </section>
    <section v-if="this.shoppingPageStep === 1">
      <div id="orderingPageContainer">
        <div id="orderingPageImageContainer">
          <img src="" alt="nothing to see here" />
        </div>
        <div id="orderingPageDetailsInputContainer">
          <div>
            <span>姓名</span>
            <input type="text" placeholder="这里输入您的姓名" />
          </div>
          <div>
            <span>地址</span>
            <input type="text" placeholder="这里输入您的地址" />
          </div>
          <div>
            <span>定制化</span>
            <input type="text" placeholder="这里输入您的定制化信息" />
          </div>
        </div>
        <div id="orderingPageOrderButtonContainer">
          <button @click="shoppingStep(2)">生成</button>
        </div>
      </div>
    </section>
    <section v-if="this.shoppingPageStep === 2" id="QRPageContainer">
      <div id="QRPageQRContainer">
        <span>二维码</span>
        <qrcode
          value="http://digitalcreak.tech"
          id="QRPageQRContainerQrcode"
          :options="{ width: 300 }"
        ></qrcode>
        <svg />
      </div>
    </section>
  </div>
</template>

<script>
import VueQrcode from "@chenfengyuan/vue-qrcode";

export default {
  name: "GoodsDetails",
  components: {
    qrcode: VueQrcode,
  },
  data() {
    return {
      shoppingPageStep: 0,
    };
  },
  methods: {
    shoppingStep(num) {
      this.shoppingPageStep = num;
    },
  },
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
#bottomPageFirstImageAndContent div {
  float: left;
  padding: 100px 300px;
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
#bottomPageSecondImageAndContent div {
  float: left;
  padding: 100px 300px;
  color: white;
}
#bottomPageOrderButtonContainer {
  padding-top: 100px;
  padding-bottom: 200px;
}
#bottomPageOrderButtonContainer button {
  width: 228px;
  height: 62px;
  font-size: 24px;
}

#orderingPageContainer {
  height: 100%;
  width: 100%;
}

#orderingPageImageContainer {
  float: left;
  padding: 300px 100px 100px 300px;
}
#orderingPageImageContainer img {
  background-color: white;
  height: 500px;
  width: 500px;
}
#orderingPageDetailsInputContainer {
  float: left;
  padding: 300px 100px 100px 100px;
  height: 500px;
  width: 500px;
}
#orderingPageDetailsInputContainer div span {
  font-size: 24px;
  color: white;
  padding-right: 30px;
}
#orderingPageDetailsInputContainer div {
  padding: 50px 50px;
}
#orderingPageDetailsInputContainer div input {
  height: 24px;
  font-size: 24px;
}

#orderingPageOrderButtonContainer {
  float: left;
  width: 100%;
  padding-top: 50px;
}
#orderingPageOrderButtonContainer button {
  width: 228px;
  height: 62px;
  font-size: 24px;
}
#QRPageContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 248px;
}
#QRPageQRContainer {
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 600px;
  border: 5px solid black;
  background-color: white;
}
#QRPageQRContainer span {
  font-size: 24px;
}
#QRPageQRContainerQrcode {
  margin-top: 100px;
  margin-left: 150px;
  height: 300px;
  width: 300px;
}
#QRPageQRContainer svg {
  display: fixed;
  border: 5px solid black;
}
</style>
