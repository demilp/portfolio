<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="./assets/name-demian.jpg" width="156" height="30" />
        </router-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          :class="{ 'is-active': showNav }"
          @click="showNav = !showNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showNav }"
      >
        <div class="navbar-start"></div>

        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
          <router-link to="/about" class="navbar-item">
            About
          </router-link>
          <router-link to="/projects" class="navbar-item">
            Projects
          </router-link>
          <router-link to="/contact" class="navbar-item">
            Contact
          </router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showNav: false
    };
  }
};
</script>

<style type="text/css">
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
}
</style>

<style lang="sass">


$primary: #72b5db

.hero-home
  @extend .hero
  background-image: url('./assets/cloud-background.jpeg')
  background-size: cover


@import "~bulma/bulma.sass"
</style>
