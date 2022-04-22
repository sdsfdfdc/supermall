<template>
  <div v-if="Object.keys(goods).length !== 0">
    <div id="middle">
      <div class="fontsize">{{ goods.desc }}</div>
      <span>{{ goods.oldPrice }}</span>
      <span>{{ "￥" + goods.realPrice }}</span>
      <div class="columsParent">
        <span v-for="item in goods.colums" :key="item">{{ item }}</span>
      </div>
      <div class="servicesParent">
        <div
          class="services"
          v-for="(item, index) in goods.services"
          :key="index"
        >
          <span class="img-services"><img :src="item.icon" alt="" /></span>
          <span class="name-services">
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style  scoped>
#middle {
  background-color: rgb(240, 240, 240);
}
.fontsize {
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  color: rgb(36, 36, 36);
}
.columsParent {
  display: flex;
  text-align: center;
  padding-top: 24px;
  box-shadow: 0px 5px 5px 5px #e9e9e9;
}
.columsParent span {
  flex: 1;
}
.servicesParent {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.services {
  flex: 1;
  width: 48%;
}
.img-services img {
  width: 50%;
}
</style>
