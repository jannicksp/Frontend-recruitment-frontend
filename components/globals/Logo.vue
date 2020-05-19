<template>
  <div class="nvcl-logo">
    <a href="#header">
      <img src="~/assets/logo.png" alt="logo" />
    </a>
  </div>
</template>

<style>
.nvcl-logo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  width: 245px;
}
.nvcl-logo img {
  width: 25%;
  padding-top: 15px;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
