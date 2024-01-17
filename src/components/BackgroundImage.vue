<template>
  <div class="background-image fixed">
    <div class="bg-image-1 flex-center">J</div>
    <div class="bg-image-2 flex-center">S</div>
    <div class="bg-image-3 flex-center">O</div>
    <div class="bg-image-4 flex-center">N</div>
    <div class="bg-image-5 flex-center">B</div>
    <div class="bg-image-6 flex-center">L</div>
    <div class="bg-image-7 flex-center">O</div>
    <div class="bg-image-8 flex-center">G</div>
  </div>
</template>

<style lang="scss" scoped>
.background-image {
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-image: linear-gradient(to right, #66abec,#77b1f0, #88bdf1, #9bcaf4, #b4d5f4);
  z-index: -1;
  [class^=bg-image] {
    position: absolute;
    border-radius: 20px;
    width: 100px;
    height: 100px;
    opacity: 0.6;
    font-size: 82px;
    font-weight: 700;
  }
  .bg-image-1 {
    top: 90px;
    left: 20px;
    transform: rotate3d(1, 1, -1, 30deg);
    background-color: #4590e3;
    color: #037aff;
  }
  .bg-image-2 {
    top: 160px;
    left: 190px;
    transform: rotate3d(1, -3, -1, -50deg);
    background-color: #9931df;
    color: #5d20eb;
  }
  .bg-image-3 {
    top: 250px;
    left: 60px;
    transform: rotate3d(1, -1, -1, -60deg);
    background-color: #f0ab17;
    color: #fa7406;
  }
  .bg-image-4 {
    top: 320px;
    left: 200px;
    transform: rotate3d(-1, 1, 2, -50deg);
    background-color: #2cdf4a;
    color: #1afa06;
  }
  .bg-image-5 {
    bottom: 260px;
    right: 30px;
    transform: rotate3d(1, -3, -1, 60deg);
    background-color: #e02b62;
    color: #fc0000;
  }
  .bg-image-6 {
    bottom: 170px;
    right: 180px;
    transform: rotate3d(-3, 1, -2, -70deg);
    background-color: #dde02b;
    color: #fcc100;
  }
  .bg-image-7 {
    bottom: 100px;
    right: 80px;
    transform: rotate3d(1, -1, 1, -30deg);
    background-color: #48d1d6;
    color: #03ff81;
  }
  .bg-image-8 {
    bottom: 30px;
    right: 200px;
    transform: rotate3d(-8, -4, -2, 60deg);
    background-color: #584edd;
    color: #4c00fc;
  }
}
</style>
