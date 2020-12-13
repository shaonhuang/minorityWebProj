<template>
  <div class="container">
    <div>
      <NavigationBar />
      <slideShow
        :passageData="{
          title: 'childPic',
          imgBase64: 'huhiuhihiuk',
          paragraph: 'childPic一段文字3',
        }"
      />
    </div>
    <section id="firstIntro">
      <div id="firstIntroTitle">
        <h3>布依族简介</h3>
      </div>
      <div id="firstIntroContent">
        <p>
          布依族，中国西南部一个较大的少数民族，民族语言为布依语，汉藏语系壮侗语族壮傣语支，与壮语有密切的亲属关系，通用汉文。
          布依族由古代僚人演变而来，以农业为主，布依族祖先很早就开始种植水稻，享有“水稻民族”之称，有自己的语言文字，文字古布依文。
        </p>
      </div>
    </section>
    <section>
      <div>
        <descriptionItem
          v-bind:info="{
            imgSrc: 'assets/img/Index/descriptionItemsPic/childPic.jpg',
            description: '传入描述性文字',
            clickPath: 'childPic',
          }"
          :passageData="{
            title: 'childPic',
            imgBase64: 'huhiuhihiuk',
            paragraph: 'childPic一段文字1',
          }"
        ></descriptionItem>
        <descriptionItem
          v-bind:info="{
            imgSrc: 'assets/img/Index/descriptionItemsPic/wovenClothes.jpg',
            description: '传入描述性文字',
            clickPath: 'wovenClothes',
          }"
          :passageData="{
            title: 'childPic',
            imgBase64: 'huhiuhihiuk',
            paragraph: 'childPic一段文字2',
          }"
        ></descriptionItem>
        <descriptionItem
          v-bind:info="{
            imgSrc:
              'assets/img/Index/descriptionItemsPic/sittingTogetherAndSinging.jpg',
            description: '传入描述性文字',
            clickPath: 'sittingTogetherAndSinging',
          }"
          :passageData="{
            title: 'childPic',
            imgBase64: 'huhiuhihiuk',
            paragraph: 'childPic一段文字3',
          }"
        ></descriptionItem>
        <descriptionItem
          v-bind:info="{
            imgSrc: 'assets/img/Index/descriptionItemsPic/drinkWine.jpg',
            description: '传入描述性文字',
            clickPath: 'drinkWine',
          }"
          :passageData="{
            title: 'childPic',
            imgBase64: 'huhiuhihiuk',
            paragraph: 'childPic一段文字4',
          }"
        ></descriptionItem>
        <descriptionItem
          v-bind:info="{
            imgSrc: 'assets/img/Index/descriptionItemsPic/underUmbrellaPic.png',
            description: '传入描述性文字',
            clickPath: 'underUmbrellaPic',
          }"
          :passageData="{
            title: 'childPic',
            imgBase64: 'huhiuhihiuk',
            paragraph: 'childPic一段文字5',
          }"
        ></descriptionItem>
        <descriptionItem
          v-bind:info="{
            imgSrc: 'assets/img/Index/descriptionItemsPic/funeral.jpg',
            description: '传入描述性文字',
            clickPath: 'funeral',
          }"
          :passageData="{
            title: 'childPic',
            imgBase64: 'huhiuhihiuk',
            paragraph: 'childPic一段文字6',
          }"
        ></descriptionItem>
      </div>
    </section>
    <section>
      <div style="padding-top:54px">
        <bottomSlide />
      </div>
    </section>
    <section id="bottomGuideSect">
      <div id="bottomGuideContainer">
        <div id="bottomGuideLeft">
          <span><a href="">关于我们</a></span>
        </div>
        <div id="bottomGuide">
          <span><a href="">布依族文化</a></span>
          <span><a href="">网站介绍</a></span>
          <span><a href="">相关链接</a></span>
          <span><a href="">版权声明</a></span>
        </div>
      </div>
    </section>
    <section id="bottomDeclareSect">
      <div id="bottomDeclareContainer">
        <div id="bottomDeclarePurpose">
          <span>
            本站致力于挖掘、继承和弘扬布依族传统优秀文化，展示布依族整体形象和民族精神，促进布依族文化事业发展！本站宣传内容来自互联网和网友投稿，仅为宣传试听，版权归原作者所有！
          </span>
        </div>
        <div id="bottomDeclareCopyright">
          <span>
            copyright 2020 huangyukuai all right reserved
            公安备案号xxxxxxxxxxxx号
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import slideShow from "@/components/common/slideShow.vue";
import descriptionItem from "@/components/content/picAndDescriptionItem.vue";
import bottomSlide from "@/components/common/bottomSlide.vue";

export default {
  name: "Index",
  components: {
    NavigationBar,
    slideShow,
    descriptionItem,
    bottomSlide,
  },
};
</script>

<style>
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
#firstIntro {
  padding-top: 54px;
  padding-bottom: 34px;
}
#firstIntroTitle {
  padding-bottom: 24px;
}
#firstIntroTitle h3 {
  color: white;
}
#firstIntroContent {
  padding-left: 300px;
  padding-right: 300px;
}
#firstIntroContent p {
  color: white;
}

#bottomGuideSect {
  padding-top: 54px;
}
#bottomGuideContainer {
  height: 300px;
  width: 100%;
  background-color: wheat;
}

#bottomGuideLeft {
  float: left;
  /* padding-top: 56px; */
  padding-top: 112px;
  padding-left: 28%;
}
#bottomGuideLeft span a {
  color: white;
  font-size: 30px;
}
#bottomGuide {
  float: left;
  /* padding-top: 56px; */
  padding-top: 112px;
  padding-left: 48px;
}
#bottomGuide span {
  padding-left: 18px;
  padding-right: 18px;
}

#bottomGuide span a {
  color: white;
  font-size: 30px;
}

#bottomDeclareSect {
  display: block;
  height: 22px;
  width: 100%;
}
#bottomDeclareContainer {
  background-color: wheat;
}
#bottomDeclarePurpose {
  padding-bottom: 54px;
}
#bottomDeclareCopyright {
}
</style>
