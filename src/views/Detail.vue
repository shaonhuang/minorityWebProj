<template>
  <div>
    <navigation-bar v-if="true"></navigation-bar>
    <section id="intro">
      <div id="introContainer">
        <div
          id="introPic"
          :style="{ backgroundImage: PagesDetailsFirstPic }"
        ></div>
        <div id="introTitle">
          <div>⾛进布依族</div>
        </div>
        <div id="introLogo">LOGO</div>
      </div>
    </section>
    <section
      id="DetailFirstIntro"
      :style="{ backgroundImage: backgroundTextureCloth }"
    >
      <div id="DetailFirstIntroContainer">
        <div id="DetailFirstIntroTitle"><span>简介</span></div>
        <div id="DetailFirstIntroContent">
          <p>
            布依族，由古代僚⼈演变⽽来，是中国⻄南部⼀个具有悠久的历史和灿烂的⽂化的古⽼⺠族，是古代百越族群骆越的⼀⽀，地属古夜郎国。有⾃⼰的古⽂字
            （2008年被国务院发⽂公布单列为第13项⽂种，名为“布依⽂”，成为我国有⾃⼰传统⽂字的18个⺠族之⼀。）和语⾔，布依语属汉藏语系壮侗语族壮傣语⽀，与壮
            语、泰语（傣语）有密切的亲属关系，新中国成⽴后，⺠族地区开始通⽤汉⽂。
          </p>
          <p>
            春秋战国时期，骆越⼈属夜郎国的⾂⺠，据《后汉书》记载国⼟⽅位：东接交趾，⻄有滇国，北有邛都国，在今贵州⻄部、⻄北部，四川南部，⼴⻄⻄北部和云
            南东部。今顺地区，黔⻄南州，黔南州，六盘⽔市是古代“百越”⼈的聚居区之⼀。据《安顺府志》记载：“郎岱即古之郎⼭”，夜郎所由得名以此；夜⼭在普安、兴义
            府界，为⼆盘之分⼭也”。郎⼭（今⽼王⼭，在六枝特区⽑⼝乡境内）位于北盘江上游北岸。由此得到充分证实，郎岱是古夜郎的辖地。其族源根据《华阳国志•南中志》有“南中在昔盖夷越之地”的记载。“越”是“百越”⼈。古代“百越”⼈就是我国⻄南地区的布依族，⻓期以来，主要⽣活在我国⻄
            南地区南北盘江流域。布依族来源于古代百越⼈的骆越⼀⽀。布依族⾃称“濮夷”、“濮越”，与“百越”读⾳相近，古代汉族史官所说的“百越”可能就是布依族⾃称的汉
            字记⾳。《华阳国志•南中志》也明显地看出，“百越”⼈是夜郎国久居的主体⺠族。
          </p>

          <p>
            布依族⾄今仍保存古骆越⼈的许多⽣活习俗和⽂化特征。⽽今，布依族聚居区仍沿袭古骆越⼈居住的“⼲栏式”建筑，即今所称“吊脚楼”及其演变的“地楼”、“半
            边楼”等。布依族铜⿎，也是古骆越⼈的⽂化特征。布依语同骆越语相近，据南宋地理学家周去⾮《岭外代答》载：
            骆越⼈称⺟亲为“⽶囊”(Me33na：TJ2)，布依语
            称⺟亲为“乜”(Me33)；骆越⼈称岳⺟为(ti53)，布依语称为(ta:i53)。许多布依村寨或附近的⼭坡、⽥地名称，均以古骆越语的委、平、洛、坝、纳、浪、板、巧、
            岜、冗、者、央、内、打等语⾳为词头命名。
          </p>
        </div>
      </div>
    </section>
    <section id="unitOneSect">
      <div id="unitOneContainer">
        <div id="unitOneSpan"><span>第一单元</span></div>
        <div id="unitOneTitle"><span>族称由来</span></div>
        <div id="unitOneContentOne">
          <p>
            ⻓期以来，外界普遍误解布依族的族称“布依”⼆字的含义：认为布依族是因为“身穿⼟布⾐服”、“擅⻓织布”、“喜欢穿⼟布服装”，所以叫做“布依族”，望⽂⽣义
            错误理解为另⼀个语⾳相同的汉词“布⾐”，常有误写为“布⾐”的。可族名“布依”的含义并⾮如此，布依族固然是个⼗分擅⻓纺织制作精美⼟布的⺠族，
            但布依族的
            “布依”⼆字并⾮来源于此。“布依”是本⺠族语⾔⾃称“Buxqyaix”的⾳译，与汉语的“布⾐”并⽆任何关联。
          </p>
        </div>
        <div id="unitOneContentTwo">
          <!-- TODO 选项按钮 -->
          <div id="unitOneContentTwoChoice">
            <button @click="firstContent(1)">名字由来</button>
            <button @click="firstContent(2)">正式命名</button>
          </div>
          <div id="unitOneContentTwoChoiceContent">
            <p v-if="this.isShowFirstContent === 1">
              布依族是云贵⾼原东南部的的古⽼⺠族。早在⽯器时代就在这⾥劳动⽣息，是个古⽼的⺠族。布依族与古代的“僚”、“百越”、“百濮”有渊源关系。秦以前称濮
              越，两汉六朝称濮僚，唐代史称“⻄南蛮”，宋元以后汉族史籍称“蕃”、“仲家蛮”，明清⾄⺠国末年被称为“仲家”。新中国成⽴后，根据本⺠族的意愿，才改⽤本⺠族
              ⾃称“Buxqyaix（“濮越”同⾳“布依”）”的⾳译为族名。唐代汉族⽂献称“蛮”、“僚”，宋元时代称“蛮”、“番”，明清汉⼈也⼀直沿袭。从清代⾄⺠国年间，布依族⼈
              除被称为“仲家”外，还被称作“夷家”、“⽔家”、“⼟⼈”、“⼟边”等这些称谓，均为历代封建统治者以及外族强加给布依⼈的歧视辱称。
            </p>
            <p v-if="this.isShowFirstContent === 2">
              新中国成⽴后，党和政府认真贯彻执⾏党的⺠族政策，在全国范围内建⽴⺠族⾃治区、⾃治州、⾃治县、⺠族乡等⺠族⾃治地区。为统⼀本⺠族的族称，正本清
              源，恢复了布依族族称的本来⾯⽬，1951年7⽉在贵州省召开的⾸届各族各界⼈⺠代表会议上，布依族上层知识分⼦代表指出，历史上的汉族⽂献以及外族对布依⼈
              的称谓绝⼤部分都是对布依⼈的歧视与侮辱，根本就不符合布依族⼈意愿，不利于⺠族团结。提出要求⽤本⺠族的⾃称⾳译为族称的提案。1953年8⽉24⽇，省⼈⺠
              政府⺠族事务委员会在贵阳召开“贵州仲家（布依族）更正⺠族名称代表会议”。经充分商讨，⼤家⼀致认为：凡⽤本⺠族语⾔称呼⾃⼰⺠族为Buxqyaix(布依)的，均
              属于同⼀个⺠族，Buxqyaix是本⺠族固有的⺠族名称。鉴于全国通⽤的⽂字是汉⽂，Buxqyaix也需要⽤汉⽂⽤汉⽂名称，应按照⾳译法，选⽤读⾳与Buxqyaix相近的
              汉字”布依“作为族称，充分体现了”名从主⼈“的原则。1984年5⽉31⽇修订通过《中华⼈⺠共和国⺠族区域⾃治法》。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="unitTwoSect">
      <div id="unitTwoContainer">
        <div id="unitTwoSpan"><span>第二单元</span></div>
        <div id="unitTwoTitle"><span>文字文化</span></div>
        <div id="unitTwoContentOne">
          <p>
            布依族是⼀个古⽼的⺠族，有⾃⼰⺠族的语⾔和语⾔⽂化。布依语，特别是其语汇（语词及⾕语、谚语等）部分，保存了本⺠族的社会历史、思想意识和⻛俗习
            惯等⽅⾯的⽂化内涵，反映出本⺠族的传统⽂化。
            布依语属汉藏语系壮侗语族壮傣语⽀。各地布依语的词汇基本⼀致，语法相同，语⾳有细微差别。所以，布依语⽆⽅⾔差异，只有⼟语区别，各地布依族⼈都可
            以⽤本⺠族语⾔交流。
            布依语分为三个⼟语区。都匀、独⼭、荔波、平塘、罗甸、惠⽔（部分）、册亨、兴义、兴仁、安⻰、贞丰等县，属第⼀⼟语区。贵阳、⻰⾥、贵定、清镇、平
            坝、开阳、安顺、惠⽔（⼤部分）等县，属于第⼆⼟语区。镇宁、关岭、紫云、晴隆、普安、六枝、盘县、⽔城、毕节、威宁等县，属于第三⼟语区。
          </p>
        </div>
        <div id="unitTwoContentTwo">
          <!-- TODO 选项按钮 -->
          <div id="unitTwoContentTwoChoice">
            <button @click="secondContent(1)">当前文字的历史</button>
            <button @click="secondContent(2)">某些方言的起源</button>
          </div>
          <div id="unitTwoContentTwoChoiceContent">
            <p v-if="this.isShowSecondContent === 1">
              布依族⼈与兄弟⺠族交往，通常以汉语为交流⼯具。布依族在历史上有语⾔⽽⽆⽂字。其⺠间现存的宗教祭祀⽤书，⼤约始于明代，是⽤汉字作记⾳符号记录
              的。有⼀种称为“⽅块布依字”的，包括“借汉布依字”和“⾃造布依字”两⼤类，实际上仍是⽤汉字或汉字偏旁组合来记录布依语。1956年国家创制的拉丁字⺟布依⽂，
              ⽬前正在推⾏之中。但是有⼈提议，布依族和傣族、壮族同出⼀源，语⾔相通，其⽂字可以“联盟”，实⾏东、⻄两⼤⽅⾔区的联盟⽂字。
              布依语汇中，反映其农耕（主要是稻作）状况、居住条件、婚姻家庭、⻛俗习惯的词汇和谚语⾮常多。
            </p>
            <p v-if="this.isShowSecondContent === 2">
              布依语汇“朗绍”（玩⼥朋友）、“朗貌”（玩男朋友），是⻘年男⼥传统的社交活动。“⾛媒”（男⽅所托）和“坐媒”（⼥⽅所托）先代表双⽅协商，再正式提亲。
              “不落夫家”是婚后新娘回娘家居住数年的习俗。“戴假壳”（布依语⾳“⻓更考”）是已婚妇⼥⻓住夫家前的⼀种近乎仪式的活动。镇宁扁担⼭等布依族地区，男家悄悄
              准备⼀种⽵笋壳为架，⽤⼟布结扎成的簸箕形⼥帽（假壳，布依语⾳“更考”），由男家⺟亲、嫂嫂或亲戚中的两个妇⼥，另带上⼀只鸡，到“不落夫家”的新娘家附近
              隐蔽，趁新娘不注意，去把她搂住，解其发辫，强⾏戴上“假壳”。从此新娘就⻓住夫家了。如果⼀次戴不成功，可以改期再来戴。戴上了，就送鸡到新娘家，和新娘
              ⽗⺟亲会⾯，然后将新娘接⾛。这种习俗，似乎是⺟系⽒族社会婚姻的⼀种遗迹。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="unitThreeSect">
      <div id="unitThreeContainer">
        <div id="unitThreeSpan"><span>第三单元</span></div>
        <div id="unitThreeTitle"><span>居住地理</span></div>
        <div id="unitThreeContentOne">
          <p>
            布依族居住的地区，属我国南方隆起于四川盆地和广西丘陵之间的一个亚热带岩溶化高原，环境独特，自然资源丰富。布依族聚居区，苗岭山脉盘亘其中，山的主脉由西向东延伸，支脉绵亘全区，主峰云雾山在都匀、贵定之间。西北部有乌蒙山，由滇延伸至黔，海拔多在2500～2800米，其中韭菜坪达2900米，是贵州高原最高峰，也是贵州高原珠江水系和长江水系的分水岭。境内地形北高南低。贵阳、安顺、兴义、安龙、贵定、惠水一带，海拔在1000米以上，黔桂边界河谷地带，海拔降至400米左右，个别地方如黔南罗甸县摆金河与红水河汇合处的下大湾河口，海拔只有242米。地势起伏，海拔落差大。
          </p>
        </div>
        <div id="unitThreeContentTwo">
          <!-- TODO 选项按钮 -->
          <div id="unitThreeContentTwoChoice">
            <button @click="thirdContent(1)">居住地理特征</button>
            <button @click="thirdContent(2)">气候特点</button>
          </div>
          <div id="unitThreeContentTwoChoiceContent">
            <p v-if="this.isShowThirdContent === 1">
              布依族地区岩溶分布⼴泛，⾯积达80%，是世界上岩溶发育最完整、最典型的地区之⼀。岩溶地貌景观表现为⽯林、⽯丛、峰林、溶丘、洼地、漏⽃、竖井、落
              ⽔洞、盲⾕、溶盆、槽⾕、瀑布等。众多的岩溶泉流⼊地下，形成溶洞、伏流、暗河。
              布依族地区河流密布，主要有分布于南部、⻄北部的南盘江、北盘江、红⽔河，北部的三岔河、六冲河，东南部的曹渡河、都柳江等。除了这些河流，还有蜿蜒
              于群⼭峡⾕之间的众多溪流。这些都给布依族地区带来了丰富的⽔利资源。国家重点⽔利⼯程南盘江天⽣桥⽔电站、⻩泥河鲁布格⽔电站等，不仅给布依族地区⼈⺠
              提供了充⾜的照明⽤电，同时也为发展⼯农业⽣产创造了有利条件。
            </p>
            <p v-if="this.isShowThirdContent === 2">
              布依族地区属中、北亚热带湿润⽓候区，⽓候基本特点表现为：热量充⾜，⾬量充沛，⾬热同季，终年温暖湿润，“冬⽆严寒，夏⽆酷暑”；年平均温度为16℃左
              右，年降⾬量在1000～1400毫⽶之间；⽆霜期270～350天，适宜各种农作物⽣⻓。布依族⼤多居住在⼟地肥沃的河⾕、坝⼦，他们利⽤上述⽓温及⽔利条件，种植
              各种粮⻝作物：主要有⽔稻、⽟⽶、⼩⻨，其次为旱稻、⼩⽶、⾼梁、红稗、荞⻨、薯类、⾖类等。经济作物有棉花、⽊⽿、板栗等等。南、北盘江及红⽔河流域有⼤⾯积森林，江边盛产⼤楠⽵。林⽊有松、杉、⻘杠、⽩杨等等。都匀、兴义⼀带出产梦
              花树，是制造蜡纸和过滤纸的优质原料。深⼭密林中栖息着⻁、豹、熊、麝、獐⼦、⾦鸡、⽔獭等多种珍禽异兽，并出产杜仲、天麻、五倍⼦、⻩草、麝⾹等贵重药
              材。⽔产中⻥类很多，都匀、贵定、平塘、⻰⾥、花溪出产的娃娃⻥（⼤鲵）是稀有的国家保护动物。地下矿藏⼗分丰富，尤以煤矿、⾦矿、锑矿、磷矿著名，各县
              市均有丰富的煤矿储藏量，故有“⻄南煤海”之美称。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>
        <div>logo</div>
        <div>thanks to peoples</div>
      </div>
    </section>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "PagesDetails",
  components: {
    NavigationBar,
  },
  data() {
    return {
      isShowFirstContent: 1,
      isShowSecondContent: 1,
      isShowThirdContent: 1,
      backgroundTextureCloth:
        "url(" +
        require("@/assets/img/common/backgroundTextureCloth.jpg") +
        ")",
      Bausroxdoh:
        "url(" + require("@/assets/img/Index/detail/Bausroxdoh.jpg") + ")",
      PagesDetailsFirstPic:
        "url(" + require("@/assets/img/Index/detail/firstPic.jpg") + ")",
    };
  },
  methods: {
    firstContent(num) {
      if (num == 1) {
        this.isShowFirstContent = 1;
      } else {
        this.isShowFirstContent = 2;
      }
    },
    secondContent(num) {
      if (num == 1) {
        this.isShowSecondContent = 1;
      } else {
        this.isShowSecondContent = 2;
      }
    },
    thirdContent(num) {
      if (num == 1) {
        this.isShowThirdContent = 1;
      } else {
        this.isShowThirdContent = 2;
      }
    },
  },
};
</script>

<style>
#intro {
  display: block;
  width: 100%;
  height: 1000px;
  padding-bottom: 100px;
}

#introContainer {
  width: 100%;
  height: 100%;
  padding-top: 260px;
}
#introPic {
  float: left;

  color: white;
  border-radius: 30px;
  height: 400px;
  width: 480px;
}
#introTitle {
  float: left;
  border: 5px solid black;
  color: white;
  height: 600px;
  width: 960px;
}
#introTitle div {
  padding-top: 228px;
  font-size: 98px;
  border: 5px solid black;
  color: white;
}

#introLogo {
  float: left;
  height: 120px;
  width: 240px;
  padding-top: 200px;

  color: white;
}
#DetailFirstIntro {
  display: flex;
  width: 100%;
  height: 1080px;
  border-radius: 30px;
  color: white;
  justify-content: center;
}
#DetailFirstIntroContainer {
  display: inline-block;
  margin-top: 100px;
  height: 860px;
  color: white;
  width: 100%;
}
#DetailFirstIntroTitle {
  color: black;
  font-size: 56px;
}
#DetailFirstIntroContent {
  color: black;
  padding-top: 86px;
  padding-left: 360px;
  padding-right: 360px;
  font-size: 22px;
}

#DetailFirstIntroContent p:nth-child(1) {
  padding-bottom: 64px;
}
#DetailFirstIntroContent p:nth-child(2) {
  padding-bottom: 64px;
}
#unitOneSect {
  display: flex;
  width: 100%;
  height: 1080px;
  color: white;
}
#unitOneContainer {
  margin-top: 100px;
}
#unitOneSpan {
  font-size: 56px;
}
#unitOneTitle {
  font-size: 56px;
}
#unitOneContentOne {
  padding-top: 44px;
  padding-left: 360px;
  padding-right: 360px;
  font-size: 18px;
}
#unitOneContentTwo {
  padding-top: 28px;
}
#unitOneContentOne::after {
  background-color: #56668c;
  position: absolute;
  z-index: -999;
  content: "";
  width: 1580px;
  height: 500px;
  transform: translateX(-640px);
}
#unitOneContentTwoChoice {
  display: inline;
}

#unitOneContentTwoChoice button {
  width: 224px;
  height: 96px;
  font-size: 28px;
  margin-bottom: 24px;
}
#unitOneContentTwoChoice button:nth-child(1) {
  margin-right: 100px;
}
#unitOneContentTwoChoice button:nth-child(2) {
  margin-left: 100px;
}
#unitOneContentTwoChoiceContent {
  padding-top: 48px;
  padding-left: 360px;
  padding-right: 360px;
  overflow: hidden;
  font-size: 22px;
}
#unitTwoSect {
  display: flex;
  width: 100%;
  height: 1080px;
  border-radius: 30px;
  background-color: white;
}
#unitTwoContainer {
  margin-top: 100px;
}
#unitTwoSpan {
  font-size: 56px;
}
#unitTwoTitle {
  font-size: 56px;
}
#unitTwoContentOne {
  padding-top: 86px;
  padding-left: 360px;
  padding-right: 360px;
  font-size: 18px;
}
#unitTwoContentTwo {
  float: left;
  width: 100%;
}
#unitTwoContentTwoChoice {
  float: left;
  margin-top: 46px;
  width: 224px;
}
#unitTwoContentTwoChoice button {
  width: 224px;
  height: 96px;
  font-size: 28px;
  margin-left: 300px;
}
#unitTwoContentTwoChoice button:nth-child(1) {
  margin-bottom: 10px;
}
#unitTwoContentTwoChoice button:nth-child(2) {
  margin-top: 10px;
}
#unitTwoContentTwoChoiceContent {
  padding-top: 48px;
  padding-left: 360px;
  margin-right: 260px;
  padding-right: 100px;
  overflow: hidden;
  font-size: 22px;
  height: 300px;
  background-color: wheat;
}
#unitThreeSect {
  display: flex;
  width: 100%;
  height: 1080px;

  color: white;
}
#unitThreeContainer {
  margin-top: 100px;
}
#unitThreeSpan {
  font-size: 56px;
}
#unitThreeTitle {
  font-size: 56px;
}
#unitThreeContentOne {
  padding-top: 44px;
  padding-left: 360px;
  padding-right: 360px;
  font-size: 18px;
}
#unitThreeContentTwo {
  padding-top: 28px;
}
#unitThreeContentOne::after {
  background-color: #56668c;
  position: absolute;
  z-index: -999;
  content: "";
  width: 1580px;
  height: 500px;
  transform: translateX(-960px);
}
#unitThreeContentTwoChoice {
  display: inline;
}
#unitThreeContentTwoChoice button {
  width: 224px;
  height: 96px;
  font-size: 28px;
  margin-bottom: 24px;
}
#unitThreeContentTwoChoice button:nth-child(1) {
  margin-right: 100px;
}
#unitThreeContentTwoChoice button:nth-child(2) {
  margin-left: 100px;
}
#unitThreeContentTwoChoiceContent {
  padding-top: 48px;
  padding-left: 360px;
  padding-right: 360px;
  overflow: hidden;
  font-size: 22px;
}
</style>
