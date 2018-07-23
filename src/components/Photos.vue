<template>
  <div class="black" >
    <div class="row absolute">
      <div class="el-1 col-md-4 col-xs-12">
        <h1>{{ this.$route.params.id }}</h1>
        <small>
           {{ $tc('photos',list.length,{ count: list.length}) }}
            <!-- <polishdeclinationnumbers :text="'zdję'" :zero="'ć'" :one="'cie'" :twoFour="'cia'" :afterFive="'ć'" :value="list.length"/>-->
                     </small>

      </div>
      <div class="el-2 col-md-7 col-10"></div>
      <div class="el-3 col-md-1 col-2">
         <router-link :to="{path:'/'+$route.params.lang+'/'}" class="close-button" />
      </div>
    </div>

    <carousel class="black" :perPage=1 :perPageCustom="[[768, 2]]" :navigationEnabled="true" :paginationEnabled="false">
      <slide v-for="(img, index) in list" :src="'https://unsplash.it/1000?image='+img.id" :key="index">
        <clazy-load :src="'https://unsplash.it/1000?image='+img.id" :key="index">

          <transition name="fadeInUp">
            <figure v-if="index<2 && img.length >1" class="delay" :data-swipe="$t('swipe_me')">
              <img :src="'https://unsplash.it/1000?image='+img.id">
            </figure>
            <figure v-else :data-swipe="$t('swipe_me')">
              <img :src="'https://unsplash.it/1000?image='+img.id">
            </figure>
          </transition>
          <transition name="fadeOutUp" slot="placeholder">
            <div class="preloader">
              <div class="loader"></div>
            </div>
          </transition>
        </clazy-load>
      </slide>
    </carousel>
    <div id="toast">
      <div id="img"><svg class="icon icon-swipe_left_right">
                                <use xlink:href="#icon-swipe_left_right"></use></svg></div>
      <div id="desc">{{ $t('swipe_text') }}</div>
    </div>
  </div>
</template>

<script>
const props = ["id"];

const data = {
  list: []
};

export default {
  props,

  data() {
    return data;
  },

  created() {
    const a = this.$store.getters.getOneAlbumByID(this.$route.params.id)[0];

    this.list = a.photos;

    let vm = this;
    document.querySelector("#app").className = "show";

    setTimeout(function() {
      var el = document.getElementById("toast");
      if (el) el.className = "show";
    }, 3000);

    setTimeout(function() {
      var el = document.getElementById("toast");
      if (el) el.className = "";
    }, 8000);
  }
};
</script>

<style lang="scss">
.VueCarousel-navigation {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  @media all and (min-width: $breakpoint-md) {
    height: 80%;
  }
}

button.VueCarousel-navigation-button {
  transform: translate(0, 0) !important;
  width: 50%;
  z-index: 10;
  height: 100%;
  top: 0 !important;
  text-indent: -9000px;
}

.VueCarousel-navigation-prev {
  left: 0;
  //  cursor: url(./../../static/img/arrow-left.svg), pointer!important;
}

.VueCarousel-navigation-next {
  right: 0;
  //   cursor: url(./../../static/img/arrow-right.svg), pointer!important;
}

.VueCarousel-navigation--disabled {
  cursor: default !important;
}

.VueCarousel {
  background: $very_dark_color;
  height: 100vh;
  & figure {
    width: 100%;
    height: 98vh;
    position: relative;
    &:after {
      @media all and (min-width: $breakpoint-md) {
        content: attr(data-swipe);
      }
      font-size: 3rem;
      line-height: 2.2em;
      position: absolute;
      border-top: 1px solid #000;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAOklEQVQoU43MSwoAMAgD0eT+h7ZYaOlHo7N+DNHL2HAGgBWcyGcKbqTghTL4oQiG6IUpOqFEC5bI4QD8PAoKd9j4XwAAAABJRU5ErkJggg==);
      bottom: 0;
      left: 0;
      font-family: $font_family_serif;
      width: 100%;
      color: #ffffff26;
      height: calc(20% - 60px);
      animation: showBar 800s 3000s linear;
      // cursor: url(../../static/img/swipe_left_right.svg),
      //  pointer!important;
    }
    & img {
      top: 0;
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      max-width: 100%;
      max-height: 100vh;
      // cursor: url(./../../static/img/swipe_left_right.svg), pointer!important;
    }
    & :before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 3;
      content: "";
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.65) 0%,
        rgba(0, 0, 0, 0) 30%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
}
</style>

<style scoped lang="scss">
.fadeInUp-enter-active {
  opacity: 0;
  animation: fadeInUp 0.3s;
}

.delay {
  animation-delay: 4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.black {
  background: $very_dark_color;
  background: linear-gradient(
    to bottom,
    #000000a6 0%,
    #000000a6 1%,
    #000 49%,
    #000000b8 50%,
    #000 99%,
    #000000a6 100%
  );
}

.absolute {
  position: absolute;
  width: 100%;
  justify-items: center;
  align-items: center;
}

.el-1 {
  left: 15px;
  padding: 25px;
  color: #fff;
  & h1 {
    font-size: 1.8em;
    font-family: $font_family_serif;
  }
}

.el-2 {
  height: 1px;
  border-bottom: 1px solid #fff;
  z-index: 10;
  margin-top: -6px;
  transform: scaleX(0);
  transform-origin: left;
  animation: grow-left cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s forwards;
  animation-delay: 1.6s;
}

/*el-3 is button close*/

.el-3 {
  z-index: 101;
}

.el-1,
.el-2,
.el-3 {
  display: inline-block;
  z-index: 10;
  text-shadow: 1px 1px 5px #020202;
}

.el-1,
.el-3 {
  opacity: 0;
  animation: fade-in-right ease 0.4s forwards;
}

.el-1 {
  animation-delay: 1.2s;
}

.el-3 {
  animation-delay: 2.1s;
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(-15px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes grow-left {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

main {
  overflow: hidden;
  margin-top: 0px;
}

.loading {
  position: relative;
  height: 100%;
}

.loader {
  height: 1px;
  background-color: #2b2b2b;
  max-width: 100%;
}

.close-button {
  height: 50px;
  width: 50px;
  z-index: 100;
  box-sizing: border-box;
  line-height: 50px;
  cursor: pointer;
  display: block;
  animation-direction: reverse;
}

.close-button:before,
.close-button:after {
  transform: rotate(-45deg);
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -5px;
  margin-left: -25px;
  display: block;
  height: 1px;
  width: 50px;
  background-color: #fff;
  transition: all 0.25s ease-out;
}

.show .close-button:after,
.show .close-button:before {
  animation: rotateClose 0.25s ease-in;
  animation-delay: 2.1s;
}

.close-button:after {
  transform: rotate(-135deg);
}

.close-button:hover:before,
.close-button:hover:after {
  transform: rotate(0deg);
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.icon-swipe_left_right {
  width: 2.3125em;
}

#toast {
  visibility: hidden;
  max-width: 80px;
  height: 50px;
  margin: auto;
  background-color: #171717;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 30px;
  font-size: 0.65em;
  overflow: hidden;
}

#toast #img {
  width: 80px;
  height: 50px;
  float: left;
  padding-top: 16px;
  padding-bottom: 16px;
  box-sizing: border-box;
  background-color: #111;
  color: #fff;
}

#toast #desc {
  color: #fff;
  padding: 16px;
  overflow: hidden;
  white-space: nowrap;
}

.loader {
  top: 50%;
  max-width: 100%;
  bottom: 0;
}

#toast.show {
  visibility: visible;
  animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s,
    fadeout 0.5s 4.5s;
}

@keyframes showBar {
  from {
    transform: translate(0, 100%);
  }
  to {
    transform: translate(0, 0);
  }
}

@keyframes rotateClose {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-135deg);
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes expand {
  from {
    min-width: 50px;
  }
  to {
    min-width: 350px;
  }
}

@keyframes stay {
  from {
    min-width: 350px;
  }
  to {
    min-width: 350px;
  }
}

@keyframes shrink {
  from {
    min-width: 350px;
  }
  to {
    min-width: 50px;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 60px;
    opacity: 0;
  }
}
</style>
