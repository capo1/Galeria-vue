<template>
  <div v-bind="images">
   <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <symbol id="icon-arrow-desc" viewBox="0 0 32 32">
            <title>arrow desc</title>
            <path d="M21.714 28v3.429q0 0.25-0.161 0.411t-0.411 0.161h-4.571q-0.25 0-0.411-0.161t-0.161-0.411v-3.429q0-0.25 0.161-0.411t0.411-0.161h4.571q0.25 0 0.411 0.161t0.161 0.411zM13.143 25.714q0 0.214-0.179 0.429l-5.696 5.696q-0.179 0.161-0.411 0.161-0.214 0-0.411-0.161l-5.714-5.714q-0.268-0.286-0.125-0.625 0.143-0.357 0.536-0.357h3.429v-24.571q0-0.25 0.161-0.411t0.411-0.161h3.429q0.25 0 0.411 0.161t0.161 0.411v24.571h3.429q0.25 0 0.411 0.161t0.161 0.411zM25.143 18.857v3.429q0 0.25-0.161 0.411t-0.411 0.161h-8q-0.25 0-0.411-0.161t-0.161-0.411v-3.429q0-0.25 0.161-0.411t0.411-0.161h8q0.25 0 0.411 0.161t0.161 0.411zM28.571 9.714v3.429q0 0.25-0.161 0.411t-0.411 0.161h-11.429q-0.25 0-0.411-0.161t-0.161-0.411v-3.429q0-0.25 0.161-0.411t0.411-0.161h11.429q0.25 0 0.411 0.161t0.161 0.411zM32 0.571v3.429q0 0.25-0.161 0.411t-0.411 0.161h-14.857q-0.25 0-0.411-0.161t-0.161-0.411v-3.429q0-0.25 0.161-0.411t0.411-0.161h14.857q0.25 0 0.411 0.161t0.161 0.411z"></path>
        </symbol>
        <symbol id="icon-arrow-asc" viewBox="0 0 32 32">
            <title>Arrow asc</title>
            <path d="M13.143 25.714q0 0.214-0.179 0.429l-5.696 5.696q-0.179 0.161-0.411 0.161-0.214 0-0.411-0.161l-5.714-5.714q-0.268-0.286-0.125-0.625 0.143-0.357 0.536-0.357h3.429v-24.571q0-0.25 0.161-0.411t0.411-0.161h3.429q0.25 0 0.411 0.161t0.161 0.411v24.571h3.429q0.25 0 0.411 0.161t0.161 0.411zM32 28v3.429q0 0.25-0.161 0.411t-0.411 0.161h-14.857q-0.25 0-0.411-0.161t-0.161-0.411v-3.429q0-0.25 0.161-0.411t0.411-0.161h14.857q0.25 0 0.411 0.161t0.161 0.411zM28.571 18.857v3.429q0 0.25-0.161 0.411t-0.411 0.161h-11.429q-0.25 0-0.411-0.161t-0.161-0.411v-3.429q0-0.25 0.161-0.411t0.411-0.161h11.429q0.25 0 0.411 0.161t0.161 0.411zM25.143 9.714v3.429q0 0.25-0.161 0.411t-0.411 0.161h-8q-0.25 0-0.411-0.161t-0.161-0.411v-3.429q0-0.25 0.161-0.411t0.411-0.161h8q0.25 0 0.411 0.161t0.161 0.411zM21.714 0.571v3.429q0 0.25-0.161 0.411t-0.411 0.161h-4.571q-0.25 0-0.411-0.161t-0.161-0.411v-3.429q0-0.25 0.161-0.411t0.411-0.161h4.571q0.25 0 0.411 0.161t0.161 0.411z"></path>
        </symbol>
    </defs>
</svg>
    <div class="row">
      <div class="col-4 text-left">
        <label for="length">{{ $t('albums_legth') }}</label><br/>
        <input id="length" type="text" class="form-control col-md-4" v-model="imagesLength" @input="update" style="display:inline-block">/{{allAlbums}}
      </div>
      <div class="col-6 text-left">
  
        <p> <label>{{ $t('sorting_methods') }}: <em class="sort">{{this.sort.names}} <svg :class="'icon icon-arrow-'+this.sort.direction"><use :xlink:href="'#icon-arrow-'+this.sort.direction"></use></svg></em></label><br/>
          <button @click="sortOnClick" type="button" name="author" class="btn btn-light">{{ $t('author_text') }}</button>
          <button @click="sortOnClick" type="button" name="photos" class="btn btn-light">{{ $t('no_photos_text') }}</button>
          <button @click="sortOnClick" type="button" name="id" class="btn btn-light">{{ $t('id_album_text') }}</button>
        </p>
      </div>
  
  
    </div>
    <div class="row">
      <clazy-load class="wrapper col caption_hover" v-for="(img, index) in images" :src="'https://unsplash.it/500?image='+img.photos[0].id" :key="index">
        <transition name="fadeInUp">
          <figure>
            <router-link :to="{path:'album/' + img.author}" class="a">
              <img :src="'https://unsplash.it/500?image='+img.photos[0].id" width="300px" @mouseover="mouseOver" @mousemove="mouseOver" @mouseleave="mouseOut">
              <figcaption>
                <h3 :data-hover="'Album ' + img.id">Album {{img.id}}</h3>
                <span>{{ $t('author_text') }}: {{img.author}}</span><br/>
                <span>{{ $tc('photos',img.photos.length,{ count: img.photos.length}) }}
                  <!--<polishdeclinationnumbers :text="'zdję'" :zero="'ć'" :one="'cie'" :twoFour="'cia'" :afterFive="'ć'" :value="img.photos.length"/>
                  --></span>
  
              </figcaption>
              <div class="box__shadow "></div>
              <div class="box__deco" style="transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1;">✰</div>
            </router-link>
          </figure>
        </transition>
        <transition name="fade" slot="placeholder">
          <div class="preloader">
            <div class="loader"></div>
          </div>
        </transition>
      </clazy-load>
    </div>
  
  </div>
</template>

<script>
import { TweenMax, Power1 } from "gsap";

const getMousePos = e => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    posy =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return {
    x: posx,
    y: posy
  };
};

const setRange = obj => {
  for (let k in obj) {
    obj[k] = [-1 * obj[k], obj[k]];
  }
  return obj;
};

let t = {
  x: 3,
  y: 2,
  z: 1
};

t = setRange(t);

const props = ["id"];

const data = {
  images: [],
  imagesLength: 5,
  sort: {
    direction: "",
    names: "",
    options: {
      author: "",
      id: "",
      photos: ""
    }
  },
  currentOrder: "value",
  allAlbums: 0
};

const methods = {
  mouseOut: function(event) {
    let el = event.target.parentNode.querySelectorAll(
      "img,figcaption,div.box__shadow,h3"
    );
    let i = 0,
      le = el.length;

    for (i = 0; i < le; i++) {
      TweenMax.to(el[i], 1.5, {
        x: 0,
        y: 0,
        z: 0
      });
    }
  },
  mouseOver: function(event) {
    if (
      event.target.nodeName.toLowerCase() != "img" &&
      event.target.nodeName.toLowerCase() != "h3"
    )
      return false;

    let mousepos = getMousePos(event);

    let docScrolls = {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop
    };

    let el = event.target.parentNode.querySelectorAll(
      "img,figcaption,div.box__shadow,h3"
    );

    const t = this;
    let i = 0,
      le = el.length;

    for (i = 0; i < le; i++) {
      TweenMax.to(el[i], 1.5, t.computeTransform(el[i], mousepos, docScrolls));
    }
  },

  computeTransform: function(el, mousepos, docScrolls) {
    let bounds = el.getBoundingClientRect();

    let relmousepos = {
      x: mousepos.x - bounds.left - docScrolls.left,
      y: mousepos.y - bounds.top - docScrolls.top
    };

    return {
      x: Math.floor(Math.random() * 10) / bounds.width * relmousepos.x + 10,
      y: Math.floor(Math.random() * 20) / bounds.height * relmousepos.y + 10,
      z: Math.floor(Math.random() * 30) / bounds.height * relmousepos.y + 10
    };
  },

  update: function(event) {
    this.$store.dispatch("setAlbumLimit", event.target.value);
  },

  sortOnClick: function(event) {
    const sort = event.target.name;

    this.$store.dispatch("sortAlbums", sort);
  }
};
const computed = {
  getAlbumList() {
    this.sort.options.author = this.$i18n.messages[this.$i18n.locale].author_text;
    this.sort.options.id = this.$i18n.messages[this.$i18n.locale].id_album_text;
    this.sort.options.photos = this.$i18n.messages[this.$i18n.locale].no_photos_text;
    this.images = this.$store.getters.getAlbumList;
    this.imagesLength = this.$store.getters.getAlbumListLength;
    this.sort.direction = this.$store.getters.getSortOrder;
    this.sort.names = this.sort.options[this.$store.getters.getSortBy];
    this.allAlbums = this.$store.getters.getAllAlbumListLength;
  }
};
const watch = {
  getAlbumList(newCount, oldCount) {
    // Our fancy notification (2).
    console.log(`We have ${newCount} fruits now, yaay!`);
  },
  deep: true
};
export default {
  props,
  name: "Albums",
  data() {
    return {
      ...data,
      images: this.$store.state.albums.albumList
    };
  },
  computed,
  watch,
  created() {},
  mounted() {
    this.imagesLength = this.$store.getters.albumListLength;
  },
  updated() {},
  methods
};
</script>

<style scoped>
.fadeInUp-enter-active {
  animation: fadeInUp 0.3s;
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
</style>

<style scoped lang="scss">
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.sort {
  font-style: inherit;
  @media all and (max-width: $breakpoint-md) {
    display: block;
  }
}

.box__deco {
  font-size: 6rem;
  line-height: 1;
  font-weight: bold;
  position: absolute;
  bottom: -4rem;
  right: -4rem;
  display: none;
}

.col {
  min-height: 350px !important;
}

.jumbotron {
  background: #f3f0f0 !important;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}

.wrapper {
  position: relative;
  min-width: 350px;
  min-height: 350px;
  margin-bottom: 2em;
  & img {
    width: 100%;
    height: 100%;
    z-index: 1;
    filter: grayscale(100%);
    position: relative;
    transition: all 250ms ease-out;
  }
}

.caption_hover {
  & a {
    display: block;
    width: 100%;
    height: 100%;
  }
  & figure {
    margin: 0;
    position: relative;
    &:hover {
      & figcaption {
        & span {
          background: $accent_color;
        }
      }
      img {
        filter: grayscale(0%);
      }
      & h3 {
        background: red;
        &::before {
          height: 100%;
          width: 100%;
        }
      }
    }
    & .box__shadow {
      position: absolute;
      width: 90%;
      height: 100%;
      top: -0.5rem;
      left: -0.5rem;
      transform: translate(0, 0);
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAOklEQVQoU43MSwoAMAgD0eT+h7ZYaOlHo7N+DNHL2HAGgBWcyGcKbqTghTL4oQiG6IUpOqFEC5bI4QD8PAoKd9j4XwAAAABJRU5ErkJggg==);
    }
    & figcaption {
      position: absolute;
      top: 54%;
      left: 0;
      padding: 15px;
      z-index: 2;
      color: #fff;
      font-size: 0.75em;
      text-align: left;
      height: 100px;
      width: 100%;
      bottom: 0;
      opacity: 1;
      transform: translateY(0);
      backface-visibility: hidden;
      transition: transform 0.4s, opacity 0.1s 0.3s;
      & h3 {
        background: transparent;
        transition: background 1s;
        &:before {
          content: attr(data-hover);
          position: absolute;
          top: 0;
          left: 0;
          height: auto;
          width: 0;
          overflow: hidden;
          white-space: nowrap;
          -webkit-text-stroke: 0;
          text-stroke: 0;
          -webkit-text-fill-color: $light_color;
          text-fill-color: $light_color;
          color: $light_color;
          transition: all 1.5s;
        }
      }
      & em {
        text-shadow: 1px 1px 5px $dark_color;
        background: transparent;
        transition: background 0.2s;
      }
      a {
        text-decoration: none !important;
        position: absolute;
        text-decoration: none;
        bottom: 20px;
        right: 20px;
      }
    }
  }
  & h3 {
    -webkit-text-stroke: 1px $light_color;
    text-stroke: 1px $light_color;
    -webkit-text-fill-color: rgba($dark_color, 0.3);
    text-fill-color: rgba($dark_color, 0.3);
    position: relative;
    font-size: 3.3em;
    font-family: $font_family_serif;
  }
  & .jumbotron {
    & h1 {
      font-family: $font_family_serif;
    }
  }
}
</style>
