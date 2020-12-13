<template>
  <div id="searchIcon">
    <img
      src="@/assets/img/common/searchIcon.svg"
      alt="none search icon"
      @click="show2 = !show2"
    />
    <input v-show="show2" type="text" />
  </div>
</template>

<script>
export default {
  name: "searchItem",
  data: () => ({
    show2: false,
    input: "",
  }),
};
</script>

<style>
#searchIcon {
  transform: translateX(-80px);
}
#searchIcon img {
  position: absolute;
  height: 28px;
  width: 28px;
}
#searchIcon input {
  transform: translateX(34px);
  background-color: transparent;
  padding-left: 40px;
  width: 56px;
  height: 28px;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 12%;
  transition: width 0.5s;
}
</style>
