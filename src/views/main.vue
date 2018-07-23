<template>
<div>
  <TheLanguageSwitcher/>
   <transition :name="transitionName" mode="out-in" appear>
    <router-view class="mask" :author="$route.name.replace('/','')"> </router-view>
   </transition>
</div>
</template>

<script>
import TheLanguageSwitcher from "@/components/TheLanguageSwitcher";

const data = {
  transitionName: "reveal"
};

export default {
  name: "main",
  data,
  components: {
    TheLanguageSwitcher
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;

      console.log(to.path.split("/"))

      let cnt = document.querySelector(".mask");

      if (typeof cnt != null) {

        let a = to.path.split("/")
      
        cnt.dataset.data = a[a.length-2]+" "+a[a.length-1]

      this.transitionName = toDepth < fromDepth ? "reveal-reverse" : "reveal";
    }
  }
}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.reveal-enter-active:before,
.reveal-leave-active:before,
.reveal-enter-active,
.reveal-leave-active,
.reveal-reverse-enter-active:before,
.reveal-reverse-leave-active:before,
.reveal-reverse-enter-active,
.reveal-reverse-leave-active {
  transition: transform 0.8s cubic-bezier(0.43, 0.05, 0.9, 0.36);
}

.reveal-enter-active,
.reveal-leave-active,
.reveal-reverse-enter-active,
.reveal-reverse-leave-active {
  transition-delay: 0.5s;
}

.reveal-enter-active:before,
.reveal-enter-active,
.reveal-reverse-enter-active:before,
.reveal-reverse-enter-active {
  transition-duration: 0.5s;
}

.reveal-enter-active:before,
.reveal-leave-active:before,
.reveal-reverse-enter-active:before,
.reveal-reverse-leave-active:before,
.reveal-leave-to:before,
.reveal-reverse-leave-to:before {
  content: attr(data-data);
  pointer-events: none;
  color: $mask_text_color;
  line-height: 10;
  @media all and (min-width: $breakpoint-md) {
    line-height: 15;
  }
  @media all and (min-width: $breakpoint-md) {
    line-height: 25;
  }
  font-family: $font_family_serif;
  font-size: 3rem;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;
  background: $very_dark_color;
}

.reveal-leave-active:before {
  transform: translateX(-100%);
}

.reveal-leave-to:before,
.reveal-reverse-leave-to:before {
  transform: translateX(0%);
}

.reveal-enter-active:before {
  transform: translateX(0%);
}

.reveal-enter-to:before {
  transform: translateX(100%);
}

.reveal-reverse-enter-to:before {
  transform: translateX(-100%);
}

.reveal-reverse-active:before {
  transform: translateX(-100%);
}

.reveal-reverse-leave:before {
  transform: translateX(100%);
}
</style>
