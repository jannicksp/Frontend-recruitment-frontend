<template>
  <div class="page-stack uneven">
    <h2>{{ content.Title }}</h2>
    <p>{{ content.Content }}</p>
    <section class="space">
      <img
        class="bounce-top10"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/PostCSS_Logo.svg/1200px-PostCSS_Logo.svg.png"
        alt="Postcss"
      />
      <img
        class="bounce-top15"
        src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png"
        alt="Docker"
      />
      <img
        class="bounce-top7"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1280px-Npm-logo.svg.png"
        alt="Npm"
      />
      <img
        class="bounce-top10"
        src="https://webpack.js.org/dcd5e077cf9f54ebe52d4f7ebe8c3080.png"
        alt="Webpack"
      />

      <img
        class="bounce-top15"
        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Nuxt-js.png"
        alt="Nuxt"
      />
    </section>
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
  --page-stack-bg: #232323;
}
.page-stack {
  background: var(--page-stack-bg);
}
section {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
section img {
  width: 75px;
}
</style>
