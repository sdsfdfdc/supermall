<template>
  <div id="profile">
    <pronavbar></pronavbar>
    <userbar></userbar>
    <promessage></promessage>
    <procategory></procategory>
  </div>
</template>

<script>
import pronavbar from "./proComps/pronavbar.vue";
import userbar from "./proComps/userbar";
import promessage from "./proComps/promessage.vue";
import procategory from "./proComps/procategory.vue";
export default {
  data() {
    return {
      user: null,
    };
  },
  components: {
    pronavbar,
    userbar,
    promessage,
    procategory,
  },
};
</script>

<style>
</style>
