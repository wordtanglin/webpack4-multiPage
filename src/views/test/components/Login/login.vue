<template>
    <form class="login-form">
        <label>
            <span>用户名</span>
            <input type="text" v-model="username" />
        </label>
        <label>
            <span>密码</span>
            <input type="password" v-model="password" @keypress.enter="login" />
        </label>
        <div class="actions">
            <button type="button" @click="login">登录</button>
        </div>
    </form>
</template>

<style lang="less" src="./login.less"></style>
<script lang="ts" src="./login.ts"></script>