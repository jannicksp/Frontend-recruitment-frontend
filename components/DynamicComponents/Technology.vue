<template>
  <div class="page-tech">
    <h2>{{ content.Title }}</h2>
    <p>{{ content.Content }}</p>
    <section class="container">
      <!-- HTML Chart -->
      <div class="chart" data-percent="25">
        <img
          class="html bounce-top15"
          src="https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png"
          alt="html"
        />
        <svg class="bounce-top15" width="200" height="200">
          <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" />
        </svg>
      </div>

      <!-- CSS Chart -->
      <div class="chart" data-percent="50">
        <img
          class="css bounce-top7"
          src="https://pngimage.net/wp-content/uploads/2018/05/css-png-4.png"
          alt="css"
        />
        <svg class="bounce-top7" width="200" height="200">
          <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" />
        </svg>
      </div>

      <!-- Javascript Chart -->
      <div class="chart" data-percent="85">
        <img
          class="javascript bounce-top15"
          src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
          alt="js"
        />
        <svg class="bounce-top15" width="200" height="200">
          <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" />
        </svg>
      </div>

      <!-- Node.js Chart -->
      <div class="chart" data-percent="75">
        <img
          class="node bounce-top10"
          src="https://assets.zabbix.com/img/brands/nodejs.svg"
          alt="node"
        />
        <svg class="bounce-top10" width="200" height="200">
          <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" />
        </svg>
      </div>
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

<style>
.page-tech {
  background: var(--page-tech-bg);
}
.container {
  padding: 50px 0;
  text-align: center;
  justify-content: space-around;
}

.chart {
  position: relative;
  display: inline-block;
  color: #999;
  font-size: 20px;
  text-align: center;
}

.chart img {
  position: absolute;
  max-width: 100px;
  max-height: 100px;
}
/* END Container styles */

/* Colors for the circles and positions for the graphics */
.html {
  top: 50px;
  left: 45px;
}

.html + svg .outer {
  stroke: #e34f26;
}

.css {
  top: 55px;
  left: 48px;
}

.css + svg .outer {
  stroke: #0d84ce;
}

.javascript {
  max-width: 90px;
  max-height: 90px;
  top: 45px;
  left: 45px;
}

.javascript + svg .outer {
  stroke: #f0e040;
}

.node {
  width: 200px;
  height: 200px;
  top: 45px;
  left: 45px;
}

.node + svg .outer {
  stroke: #83cd29;
}

.chart svg {
  top: 0;
  left: 0;
}

.outer {
  fill: transparent;
  stroke: #333;
  stroke-width: 20;
  stroke-dasharray: 534;
  transition: stroke-dashoffset 1s;
  -webkit-animation-play-state: running;
  /* firefox bug fix - won't rotate at 90deg angles */
  -moz-transform: rotate(-89deg) translateX(-190px);
}
</style>