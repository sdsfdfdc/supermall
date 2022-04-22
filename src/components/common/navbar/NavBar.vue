<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.left,
.right {
  width: 60px;
  height: 44px;
}
.nav-bar {
  text-align: center;
  display: flex;
  color: white;
  font-weight: 700;
  font-size: 24px;
  line-height: 44px;
  height: 44px;
  background-color: var(--color-tint);
  box-shadow: 0px 0px 4px -1px black;
}
.center {
  flex: 1;
}
</style>
