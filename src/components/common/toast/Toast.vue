<template>
  <div id="toast" v-show="show">
    <div>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  // // props: {
  // //   message: {
  // //     type: String,
  // //     default: "",
  // //   },
  // //   show: {
  // //     type: Boolean,
  // //     default: false,
  // //   },
  // },
  data() {
    return {
      message: "",
      show: false,
    };
  },
  methods: {
    isshow(message, duration) {
      (this.message = message), (this.show = true);
      setTimeout(() => {
        this.show = false;
      }, duration);
    },
  },
};
</script>

<style>
#toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 10px;
}
</style>
