<template>
  <section class="page-header">
    <h2>{{ content.Title }}</h2>
    <p>{{ content.Content }}</p>
    <div class="device">
      <div class="device--frame">
        <iframe
          title="Novicell"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WJ4qxQPIN7g"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="nc-grid-richtexteditor space" nc-search-key="grid-rte">
      <h3 style="text-align: center;">
        <a class="btn btn--big btn--red" href="#page-jobs" title="Jobs">
          <span class="btn__jobs">See jobs</span>
        </a>
      </h3>
    </div>
  </section>
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
  --page-header-bg: #232323;
}

.device {
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
}
.device--frame {
  position: relative;
  padding-bottom: 67.5%;
  height: 0;
}
.device iframe {
  box-sizing: border-box;
  background: url(https://www.novicell.dk/dist/images/macbook-white.png) center
    center no-repeat;
  background-size: contain;
  padding: 11.9% 15.5% 14.8%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
