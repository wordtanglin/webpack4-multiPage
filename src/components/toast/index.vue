<style lang="scss" scoped>

  .toast {
    .toast_overlay {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
    }

    .toast-content {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      background: #FFFFFF;
      z-index: 1002;
      overflow: hidden;
      margin: 0 auto;
      bottom:260px;
     // top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);

      height:72px;
      line-height:72px;
      background:rgba(83,82,82,1);
      border-radius:4px;
      opacity:0.7;
      padding: 0 26px 0 26px;
      p{
        font-size:28px;
        white-space:nowrap;
        //width:10px;
        color:rgba(255,255,255,1);
      }

    }
  }
</style>

<template>
  <div
    v-show="show"
    class="toast">
    <div class="toast_overlay"/>
    <div class="toast-content">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {};
  },
  created() {
  },
  mounted() {

  },
  methods: {},
};
</script>
