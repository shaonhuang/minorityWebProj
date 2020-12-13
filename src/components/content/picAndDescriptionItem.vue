<template>
  <div id="itemContainer">
    <div id="leftContent">
      <a @click="routerTo(DataPassageData)">
        <img :src="normalizedImgSrc" alt="nothing" />
      </a>
    </div>
    <div id="rightContent">
      <p id="description">
        <a @click="routerTo(DataPassageData)">
          {{ this.infoData.description }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "descriptionItem",
  props: {
    info: {
      type: Object,
      default() {
        return {
          imgSrc: {
            type: String,
            default: "assets/img/Index/descriptionItemsPic/childPic.jpg",
          },
          description: {
            type: String,
            default: "传入描述性文字",
          },
          clickPath: {
            type: String,
            default: "childPic",
          },
        };
      },
    },
    passageData: {
      title: {
        type: String,
        default: "childPic",
      },
      imgBase64: {
        type: String,
        default: "huhiuhihiuk",
      },
      paragraph: {
        type: String,
        default: "childPic一段文字",
      },
    },
  },
  data() {
    return {
      infoData: this.info,
      DataPassageData: this.passageData,
    };
  },
  computed: {
    normalizedImgSrc() {
      if (
        this.info.imgSrc != "assets/img/Index/descriptionItemsPic/childPic.jpg"
      ) {
        return require("@/" + this.info.imgSrc);
      } else {
        return require("@/assets/img/Index/descriptionItemsPic/childPic.jpg");
      }
    },
  },
  methods: {
    routerTo(passageData) {
      console.log(this.DataPassageData);
      if (passageData != null) {
        this.$router.push({
          name: "/passage/" + this.info.clickPath,
          params: {
            title: passageData.title,
            imgBase64: passageData.imgBase64,
            paragraph: passageData.paragraph,
          },
        });
      } else {
        this.$router.push({
          name: "/passage/" + "test",
          params: {
            title: "test",
            imgBase64: "test",
            paragraph: "test paragraph",
          },
        });
      }
    },
  },
};
</script>

<style>
#itemContainer {
  padding-left: 360px;
  padding-top: 40px;
  padding-right: 360px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
  /* border: 5px solid black; */
  flex-direction: row;
}
#leftContent {
  display: flex;
  height: 360px;
  width: 560px;
  /* border: 5px solid black; */
}
#leftContent a img {
  height: 100%;
  width: 124%;
  object-fit: cover;
}
#rightContent {
  display: flex;
  height: 360px;
  width: 560px;
  /* border: 5px solid black; */

  justify-content: center;
  align-content: center;
  background-color: antiquewhite;
}

#description {
  padding-top: 120px;
  width: 300px;
  height: 150px;
  overflow: hidden;
}
#description a {
  color: black;
}
</style>
