<template>
  <div>
    <navbar>
      <template v-slot:center> 我的档案 </template>
    </navbar>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar.vue";
export default {
  components: {
    navbar,
  },
};
</script>

<style>
</style>
