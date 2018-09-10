<template>
    <div class="nav">
        <li class="nav-item" :class="{'active': $router.name === 'home-page' }">
            <router-link to="/">首页</router-link>
        </li>
        <li class="nav-item" :class="{'active': $router.name === 'search-page' }">
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
    user-select: none;
}
</style>