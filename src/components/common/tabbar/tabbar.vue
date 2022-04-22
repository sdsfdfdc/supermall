<template>
  <div class="tab_bar">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
.tab_bar {
  display: flex;
  position: fixed;
  z-index: 2;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  text-align: center;
  background-color: #e6e6e6;
}
</style>
