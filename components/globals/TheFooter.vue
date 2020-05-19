<template>
  <footer>
    <div class="foot-logo">
      <Logo></Logo>
    </div>
    <div class="foot-info">
      <section class="adress footer--padding">
        <a
          target="_blank"
          rel="noopener"
          href="https://www.google.com/maps/place/Novicell/@56.1093254,10.1507775,17z/data=!3m1!4b1!4m5!3m4!1s0x464c3fe0764f6b3f:0xd3ae76b52e1bf517!8m2!3d56.1093224!4d10.1529662"
        >
          <div class="img-container">
            <img src="~/assets/location.png" alt="Map-icon" />
          </div>
          <h5>Søren Nymarks Vej 6</h5>
          <h5>8270 Højbjerg</h5>
        </a>
      </section>
      <section class="mail footer--padding">
        <a href="mailto:info@novicell.dk">
          <div class="img-container">
            <img src="~/assets/interface.png" alt="Mail-icon" />
          </div>
          <h5>info@novicell.dk</h5>
        </a>
      </section>
      <section class="phone footer--padding">
        <a href="tel:86190550">
          <div class="img-container">
            <img src="~/assets/communications.png" alt="Phone-icon" />
          </div>
          <h5>+45 8619 0550</h5>
        </a>
      </section>
      <section class="some footer--padding">
        <div class="img-container">
          <a target="_blank" rel="noopener" href="https://www.facebook.com/novicelldk/">
            <img src="~/assets/fb.png" alt="fb-icon" />
          </a>
          <a target="_blank" rel="noopener" href="https://twitter.com/Novicelldk">
            <img src="~/assets/tw.png" alt="tw-icon" />
          </a>
          <a target="_blank" rel="noopener" href="https://www.instagram.com/we.are.novicell/?hl=en">
            <img src="~/assets/ig.png" alt="ig-icon" />
          </a>
          <a target="_blank" rel="noopener" href="https://linkedin.com/company/novicell/">
            <img src="~/assets/li.png" alt="li-icon" />
          </a>
        </div>
        <a target="_blank" rel="noopener" href="https://novicell.dk/">
          <h5>©2020 Novicell</h5>
        </a>
        <a target="_blank" rel="noopener" href="https://cookieinformation.com/da/">
          <h5>Cookies</h5>
        </a>
      </section>
    </div>
  </footer>
</template>

<script>
import Logo from '~/components/globals/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.foot-logo {
  display: flex;
  justify-content: center;
}
.foot-info {
  display: flex;
  justify-content: space-evenly;
}
.foot-info a {
  color: white;
  text-decoration: none;
}
.some {
  background-color: #c80046;
  border: 1px solid transparent;
  box-shadow: 0 4px 0 0 #620022;
  isolation: isolate;
}

.footer--padding {
  border: 1px solid transparent;
  padding: 20px;
}
.foot-logo {
  text-align: center;
}
.img-container {
  text-align: center;
}
h5 {
  text-align: center;
}
@media (max-width: 800px) {
  .foot-info {
    display: block;
    text-align: center;
  }
}
</style>
