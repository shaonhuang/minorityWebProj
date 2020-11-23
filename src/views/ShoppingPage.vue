<template>
  <div>
    <section>
      <div><h1>产品介绍</h1></div>
    </section>
    <section>
      <div>
        <descriptionItem />
        <descriptionItem />
        <descriptionItem />
      </div>
    </section>
    <section>
      <div><span>现在订购</span></div>
    </section>
    <section>
      <div>
        <div><img src="" alt="nothing" /></div>
        <div>
          <span>名字</span>
          <input type="text" />
          <span>地址</span>
          <input type="text" />
          <span>定制化</span>
          <input type="text" />
        </div>
        <div><span>生成</span></div>
      </div>
    </section>
    <section>
      <div>
        <div><span>二维码</span></div>
        <div><img src="" alt="二维码" /></div>
        <div><span>确定</span><span>取消</span></div>
      </div>
    </section>
  </div>
</template>

<script>
import descriptionItem from "@/components/content/picAndDescriptionItem.vue";

export default {
  name: "ShoppingPage",
  components: {
    descriptionItem,
  },
};
</script>

<style></style>
