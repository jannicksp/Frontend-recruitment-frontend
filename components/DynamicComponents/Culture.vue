<template>
  <div class="page-culture uneven">
    <h2>{{ content.Title }}</h2>
    <p>{{ content.Content }}</p>
    <script>
  var angle = 0
  function galleryspin(sign) {
    spinner = document.querySelector('#spinner')
    if (!sign) {
      angle = angle + 45
    } else {
      angle = angle - 45
    }
    spinner.setAttribute(
      'style',
      '-webkit-transform: rotateY(' +
        angle +
        'deg); -moz-transform: rotateY(' +
        angle +
        'deg); transform: rotateY(' +
        angle +
        'deg);'
    )
  }
    </script>
    <div id="carousel" class="space">
      <figure id="spinner">
        <img src="https://www.novicell.dk/media/60101/col2.jpg" alt="Nvcl-culture-1" />
        <img src="https://www.novicell.dk/media/60097/col1.jpg" alt="Nvcl-culture-2" />
        <img src="https://www.novicell.dk/media/60100/col5.jpg" alt="Nvcl-culture-3" />
        <img src="https://www.novicell.dk/media/60099/col4.jpg" alt="Nvcl-culture-4" />
        <img src="https://www.novicell.dk/media/60101/col2.jpg" alt="Nvcl-culture-5" />
        <img src="https://www.novicell.dk/media/60097/col1.jpg" alt="Nvcl-culture-6" />
        <img src="https://www.novicell.dk/media/60100/col5.jpg" alt="Nvcl-culture-7" />
        <img src="https://www.novicell.dk/media/60099/col4.jpg" alt="Nvcl-culture-8" />
      </figure>
    </div>
    <div class="space arrows">
      <p>
        <i class="arrow left" onclick="galleryspin('-')"></i>
      </p>
      <p>
        <i class="arrow right" onclick="galleryspin('')"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
:root {
  --page-culture-bg: #232323;
}
.page-culture {
  background: var(--page-culture-bg);
}
.arrows {
  display: flex;
  justify-content: space-around;
}
div#carousel {
  perspective: 1200px;
  padding-top: 10%;
  font-size: 0;
  margin-bottom: 3rem;
  overflow: hidden;
}
figure#spinner {
  transform-style: preserve-3d;
  height: 300px;
  transform-origin: 50% 50% -500px;
  transition: 1s;
}
figure#spinner img {
  width: 40%;
  max-width: 425px;
  position: absolute;
  left: 30%;
  transform-origin: 50% 50% -500px;
  outline: 1px solid transparent;
}
figure#spinner img:nth-child(1) {
  transform: rotateY(0deg);
}
figure#spinner img:nth-child(2) {
  transform: rotateY(-45deg);
}
figure#spinner img:nth-child(3) {
  transform: rotateY(-90deg);
}
figure#spinner img:nth-child(4) {
  transform: rotateY(-135deg);
}
figure#spinner img:nth-child(5) {
  transform: rotateY(-180deg);
}
figure#spinner img:nth-child(6) {
  transform: rotateY(-225deg);
}
figure#spinner img:nth-child(7) {
  transform: rotateY(-270deg);
}
figure#spinner img:nth-child(8) {
  transform: rotateY(-315deg);
}
div#carousel ~ span {
  color: #fff;
  margin: 5%;
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  transition: 0.6s color;
  position: relative;
  margin-top: -6rem;
  border-bottom: none;
  line-height: 0;
}
div#carousel ~ span:hover {
  color: #888;
  cursor: pointer;
}

.arrow {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 15px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
@media (max-width: 800px) {
  figure#spinner img {
    width: 100%;
    left: 0%;
  }
}
</style>
