<template>
  <div :class="'sidebar '+ $style.sidebar">
 
<div class="container d-flex h-100">
<div class="row justify-content-center align-self-center">
  <div class="col text-left small text-white-80"><TheLanguageSwitcher/> 
    <h2>{{ $t('aboute_gallery') }}</h2> 
   <br/><br/>
   <div v-html="$t('aboute_gallery_shortText')"></div>
    <ul class="list-group list-group-flush" v-html="$t('used_library')">      
    </ul>
</div>
</div>
    </div>
  </div>
</template>

<script>
import { TweenMax, Power4 } from "gsap";
import TheLanguageSwitcher from "@/components/TheLanguageSwitcher";
export default {
  name: "sidebar",

  mounted() {
    TweenMax.set(this.$el, {
      x: this.$el.offsetWidth + 100
    });
  },
    components: {
        TheLanguageSwitcher
    },
  computed: {
    open() {
      return this.$store.state.ui.sidebarOpen;
    }
  },

  watch: {
    open: function(open) {
      const dX = open ? 0 : this.$el.offsetWidth;
      TweenMax.to(this.$el, 0.6, {
        x: dX,
        ease: Power4.easeOut
      });
    }
  }
};
</script>

<style module lang="scss">
.sidebar {
  position: fixed;
  right: 0;
  top: 0;
  padding: 30px;
  height: 100vh;
  max-width: 90vw;
  background-color: darken($dark_color, 15%);
  color: darken($light_color, 15%);
  z-index: 102;
}
</style>
