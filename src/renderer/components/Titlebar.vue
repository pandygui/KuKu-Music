<template>
    <div class="titlebar">
        <div class="logo">
            <img src="../assets/logo.svg" alt="">
            <span class="label">VMusic</span>
        </div>
        <div class="search">
            <input class="form-input" placeholder=" Search" type="text"></input>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.titlebar {
    z-index: 100;
    background-color: #F2F2F3;
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    user-select: none;

    .logo {
        padding-left: 10px;
        display: flex;
        align-items: baseline;
        justify-content: space-between;

        .label {
            padding-left: 8px;
            padding-right: 10px;
            font-size: 15px;
            color: #41B883;
        }

        img {
            position: relative;
            top: 10px;
            height: 35px;
        }
    }

    .search {
        margin-left: 10px;
        margin-bottom: 0px;
        width: 250px;

        .form-input {
            height: 20px;
            font-size: 13px;
            color: #5F5F5F;
            padding-left: 5px;
            border-radius: 20px;
            border: 1px solid #D2D2D2;
            outline: none;
        }
    }
}
</style>