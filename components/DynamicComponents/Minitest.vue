<template>
  <div class="page-minitest">
    <h2>{{ content.Title }}</h2>
    <p>{{ content.Content }}</p>
    <div class="iframe-wrapper">
      <iframe
        class="iframe-codepen"
        style="width: 100%;"
        scrolling="no"
        title="CSS test"
        src="https://codepen.io/jannick-storgaard-pedersen/embed/oNjQmZB?height=265&theme-id=dark&default-tab=result"
        frameborder="no"
        allowtransparency="true"
        allowfullscreen="true"
      ></iframe>
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
.page-minitest {
  background: var(--page-minitest-bg);
}
.iframe-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.iframe-codepen {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
