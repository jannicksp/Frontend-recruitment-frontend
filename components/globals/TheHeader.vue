<template>
  <header>
    <nav>
      <logo />

      <div class="toggler" @click="darkmode = !darkmode">
        <a :class="{'expand': !darkmode}" class="blender"></a>
        <span class="icon-click">O</span>
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from '~/components/globals/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      darkmode: true
    }
  }
}
</script>

<style>
.icon-click {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5px;
  color: #1d1d1d;
}
.expand {
  transform: translate(-50%, -50%) scale(300);
}

.blender {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  pointer-events: none;
  background-color: white;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  mix-blend-mode: difference;
}
.toggler {
  width: 4rem;
  height: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 2px solid white;
  border-radius: 34px;
  right: 15px;
  padding-left: 10px;
}

a.blender.expand {
  position: fixed;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
