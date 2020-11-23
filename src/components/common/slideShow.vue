<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <div v-if="currentPageIndex === index">
            <img :src="item.Uri" alt="nothing to be show" />
          </div>
        </li>
      </ul>
    </div>
    <!-- <div class="dots">
      <span
        v-for="(item, index) in dots"
        :key="index"
        :class="{ active: currentPageIndex === index }"
        >{{ index + 1 }}
      </span>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "slideShow",
  data() {
    return {
      items: [
        {
          Uri: require("@/assets/img/Index/slideShowPics/frontPagePic1.jpg"),
        },
        { Uri: require("@/assets/img/Index/slideShowPics/frontPagePic2.jpg") },
        { Uri: require("@/assets/img/Index/slideShowPics/frontPagePic3.jpg") },
        { Uri: require("@/assets/img/Index/slideShowPics/frontPagePic4.jpg") },
        { Uri: require("@/assets/img/Index/slideShowPics/frontPagePic5.jpg") },
      ],
      dots: [1, 2, 3, 4, 5],
      currentPageIndex: 0,
    };
  },
  props: {
    PicsNum: {
      type: Number,
      default: 4,
    },
    // 是否可以循环轮播
    loop: {
      type: Boolean,
      default: true,
    },
    // 是否可以自动轮播
    autoPlay: {
      type: Boolean,
      default: true,
    },
    // 自动轮播时间间隔
    interval: {
      type: Number,
      default: 4000,
    },
  },
  computed: {},
  methods: {
    initDots() {
      this.dots = new Array(this.children.length);
    },
    play() {
      var pageIndex = this.currentPageIndex + 1;
      this.time = setInterval(() => {
        if (this.loop && this.currentPageIndex < 4) {
          this.currentPageIndex += 1;
        } else if (this.loop && this.currentPageIndex == 4) {
          this.currentPageIndex += 1;
          this.currentPageIndex = 0;
        } else {
          console.log(this.currentPageIndex);
          this.currentPageIndex = 0;
        }
      }, this.interval);
    },
  },
  created() {
    this.play();
  },
};
</script>

<style>
.slider {
  display: block;
  height: 800px;
  width: 100%;
  /* border: 5px solid black; */
}
.slider-group ul li {
  /* transform: scale(1.05, 1.05); */
  opacity: 1;
  z-index: 0;
  transition: transform 5000ms linear 1s;
}
.slider-group ul li div img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.dots {
  position: absolute;
  /* transform: translate(900px, -90px); */
  z-index: 10;
  border: 5px solid black;
}
</style>
