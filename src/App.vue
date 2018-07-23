<template>
  <div id="app">
    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <symbol id="icon-reply" viewBox="0 0 32 32">
              <title>reply</title>
               <path d="M14 24.238v7.762l-12-12 12-12v7.932c13.961 0.327 13.362-9.493 9.808-15.932 8.772 9.482 6.909 24.674-9.808 24.238z"></path>
            </symbol>
            <symbol id="icon-swipe_left_right" viewBox="0 0 74 32">
              <title>swipe_left_right</title>
               <path d="M9.433 16.010l9.988-9.988c0.507-0.507 0.761-1.127 0.761-1.86s-0.253-1.353-0.761-1.86l-1.541-1.541c-0.507-0.507-1.127-0.76-1.859-0.76s-1.353 0.253-1.86 0.76l-13.4 13.379c-0.507 0.507-0.761 1.127-0.761 1.86s0.253 1.353 0.761 1.86l13.4 13.379c0.507 0.507 1.127 0.76 1.86 0.76s1.353-0.253 1.86-0.76l1.541-1.541c0.507-0.507 0.761-1.123 0.761-1.85s-0.253-1.349-0.761-1.87l-9.988-9.968z"></path>
               <path d="M49.386 16.002c0 6.41-5.413 11.606-12.089 11.606s-12.089-5.196-12.089-11.606c0-6.41 5.413-11.606 12.089-11.606s12.089 5.196 12.089 11.606z"></path>
               <path d="M64.553 16.010l-9.988-9.988c-0.507-0.507-0.761-1.127-0.761-1.86s0.253-1.353 0.761-1.86l1.541-1.541c0.507-0.507 1.127-0.76 1.859-0.76s1.353 0.253 1.86 0.76l13.4 13.379c0.507 0.507 0.761 1.127 0.761 1.86s-0.253 1.353-0.761 1.86l-13.4 13.379c-0.507 0.507-1.127 0.76-1.86 0.76s-1.353-0.253-1.86-0.76l-1.541-1.541c-0.507-0.507-0.761-1.123-0.761-1.85s0.253-1.349 0.761-1.87l9.988-9.968z"></path>
            </symbol>
            <filter id="dropshadow" x="0" y="0" width="100%" height="100%">
              <feColorMatrix in="SourceAlpha" type="matrix"
              values="-1 0 0 0 1, 0 -1 0 0 1, 0 0 -1 0 1, 0 0 0 1 0"
              result="matrix"/>
              <feGaussianBlur in="matrix" stdDeviation="2" result="blur"/>
              <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            </filter>
          </defs>
        </svg>

    <main>
     
      <router-view :author="$route.name"></router-view>
            
      <sidebar/>
      <sidebar-toggle/>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import SidebarToggle from "@/components/Sidebar/SidebarToggle.vue";
import TheLanguageSwitcher from "@/components/TheLanguageSwitcher";
import { mapActions } from "vuex";

const ImageListParent = [];

export default {
  name: "app",
  inherit: true,
  created() {
    // ...mapActions(['initialAlbums']);

    console.log(this);

    this.$store.dispatch("initialAlbums");
  },
  components: {
    Sidebar,
    SidebarToggle,
    TheLanguageSwitcher
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Anton|Libre+Baskerville:400,700&amp;subset=latin-ext");
:root {
}

* {
  box-sizing: border-box;
}
.jumbotron {
  margin-top:15px!important;
  background: darken($primary_color, 10%) !important;
}
body {
  background-color: $primary_color !important;
  margin: 0;
}

h1,
h2,
h3 {
  font-family: $font_family_serif;
}

.justify_flex {
  justify-items: center;
  align-items: center;
}

#app {
  font-family: $font_family_sans_serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark_color;
}

main {
  text-align: center;
}

.preloader {
  position: absolute;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  left: 0;
  top: 0;
  transition: all 100ms ease-in;
}

.loader {
  position: relative;
  width: 100%;
  height: 4px;
  background-color: $light_color;
  overflow: hidden;
  max-width: 291px;
  margin: auto;
}

.loader::before,
.loader::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 4px;
  border-radius: 4px;
  z-index: 2;
}

.loader::before {
  background: $gray;
  animation: animation_bar1 1.2s linear infinite;
}

.loader::after {
  background: $accent_color;
  animation: animation_bar1 1.2s 0.5s linear infinite;
}
.btn {
  margin-bottom: 15px;
}
@keyframes animation_bar1 {
  0% {
    width: 0;
  }
  25% {
    width: 30%;
    left: 15%;
  }
  50% {
    width: 70%;
    left: 40%;
  }
  100% {
    width: 15%;
    left: 100%;
  }
}

@keyframes animation_bar2 {
  0% {
    width: 0;
  }
  50% {
    width: 60%;
    left: 40%;
  }
  100% {
    width: 20%;
    left: 100%;
  }
}
</style>

