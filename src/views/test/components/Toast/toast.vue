
<template>
  <div
    v-show="show"
    class="toast"
  >
    <div class="toast_overlay" />
    <div class="toast-content">
      <p>{{ text }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped href="./toast.scss"></style>
<script lang="ts" src="./toast.ts"></script>
