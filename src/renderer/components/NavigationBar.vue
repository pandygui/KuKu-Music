<template>
    <div class="nav">
        <li class="nav-item">
            <router-link to="/">首页</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/SearchPage">播放列表</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/SearchPage">我的收藏</router-link>
        </li>
    </div>
</template>

<style lang="scss">
.nav {
    width: 170px;
    position: fixed;
    z-index: 300;
    top: 50px;
    font-size: 15px;

    background: linear-gradient(to bottom, #f6f6f6, #f2f2f2);
}
</style>