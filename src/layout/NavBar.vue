<template>
  <nav class="navbar flex-vertical-center">
    <router-link to="/">
      <img class="logo" src="@/assets/image/logo/logo-full.png" alt="" />
    </router-link>
    <div class="right flex-vertical-center">欢迎访问 JsonBlog</div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: var(--navbar-height);
  width: 100%;
  padding: 2px 12px;
  background-image: linear-gradient(to right, #66abec,#77b1f0, #88bdf1, #9bcaf4, #b4d5f4);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
  z-index: 1;
  .logo {
    height: 32px;
    width: auto;
    cursor: pointer;
  }
  .right {
    height: 100%;
    margin-left: auto;
    color: #fff;
    font-weight: 700;
  }
}
</style>
