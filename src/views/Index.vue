<template>
  <div class="container">
    <div>
      <NavigationBar />
      <slideShow />
    </div>
    <section id="firstIntro">
      <div id="firstIntroTitle">
        <h3>标题</h3>
      </div>
      <div id="firstIntroContent">
        <p>
          织低收种于观管他会平般程族组动化解头日数严织照取省关现得家断证方战各科才精行林此后国常观团火而世圆号化派民县区方米形期变把教法以。又书住计志速将拉们律我位此青运子表动分把门入或往斗被革门京八土结眼老实精确律得影两设采表里事于求划半温为能话油节据果。基们物经低证马清时维千始教张照省更路业军难例动八样断水又家变表收思器约国需京去者动风矿主布。车照领它些规导规议素备专般局少被油农自名个五立严北书在易指西厂观意外党会维再志的于程设条识信。南受计将酸消况期非性且必都果维界较道才量也族调很得变老象来在这示方委来准严认。
        </p>
      </div>
    </section>
    <section>
      <div>
        <descriptionItem />
        <descriptionItem />
        <descriptionItem />
        <descriptionItem />
        <descriptionItem />
        <descriptionItem />
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
