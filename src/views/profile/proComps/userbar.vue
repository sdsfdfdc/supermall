<template>
  <div class="userbar">
    <div class="top">
      <div class="left">
        <div>111</div>
      </div>
      <div class="right">
        <div>登录/注册</div>
        <div class="btn">暂无绑定手机</div>
      </div>
    </div>
    <div class="bottom">
      <div class="bleft">
        <div>{{ price.toFixed(2) }}</div>
        <p>我的余额</p>
      </div>
      <div class="bcenter">
        <div>{{ price }}</div>
        <p>我的优惠</p>
      </div>
      <div class="bright">
        <div>{{ price }}</div>
        <p>我的积分</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 0.0,
    };
  },
};
</script>

<style scoped>
.top {
  background-color: var(--color-tint);
  display: flex;
}
.left,
.right {
  padding: 10px 0px 10px 10px;
}
.right {
  color: white;
  font-size: 16px;
}
.btn {
  padding-top: 5px;
}
.bottom {
  text-align: center;
  display: flex;
  border-bottom: 20px solid #efefef;
}
.bleft,
.bright,
.bcenter {
  border-right: 2px solid #efefef;
  padding: 12px;
  flex: 1;
}
</style>
