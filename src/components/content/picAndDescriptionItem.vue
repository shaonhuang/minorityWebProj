<template>
  <div id="itemContainer">
    <div id="leftContent">
      <a href="">
        <img :src="imgSrc" alt="nothing" />
      </a>
    </div>
    <div id="rightContent">
      <p id="description">
        <a href="">
          {{ description }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "descriptionItem",
  props: {
    imgSrc: {
      type: String,
      default: require("@/assets/img/Index/descriptionItemsPic/childPic.jpg"),
    },
    description: {
      type: String,
      default:
        "金算政常前率干少数实个起局红要型类第酸流连委标过高什身复个节基记作南题道容里。再最义品米连说表术号身七之以增型果系志际亲总维件三传需阶制机叫动能准确群指维调体。了处走习",
    },
    clickPath: {
      type: String,
      default: "",
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
