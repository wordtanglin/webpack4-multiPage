<template>
      <div>
            <div>欢迎您[<span class="visitor">{{marks}}</span>]
                  来到Typescript的世界</div>
            <button @click="changed">换人</button>
        </div>
</template>

<script lang="ts" src="./hello.ts">
</script>

<style lang="scss" scoped>
.visitor {
  margin: 1em;
  color: rgb(2, 2, 124);
  font-size: 15;
}
</style>
