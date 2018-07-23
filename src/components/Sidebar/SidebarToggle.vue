<template>
  <button :class="[open ? $style.active : '', $style.button_menu]" @click="toggleSidebar">
      <svg fill="#000000" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
        <path id="path4138" d="m0 0h24v24h-24z" fill="none"/>
 <path id="path4140" d="m15 2.5c-6.9 0-12.5 5.6-12.5 12.5s5.6 12.5 12.5 12.5 12.5-5.6 12.5-12.5-5.6-12.5-12.5-12.5zm-0.004 5.3281c0.501 0 0.926 0.1758 1.277 0.5274 0.352 0.345 0.528 0.7682 0.528 1.2695 0 0.508-0.176 0.937-0.528 1.289-0.345 0.345-0.769 0.516-1.277 0.516-0.501 0-0.93-0.176-1.281-0.528-0.345-0.351-0.516-0.776-0.516-1.277 0-0.5013 0.171-0.9245 0.516-1.2695 0.351-0.3516 0.78-0.5274 1.281-0.5274zm-1.601 5.2809h3.203v9.063h-3.203v-9.063z" transform="scale(.8)"/>

      </svg>
    </button>
</template>

<script>
export default {
  name: "sidebar-toggle",
  computed: {
    open() {
      return this.$store.state.ui.sidebarOpen;
    }
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch("toggleSidebar");
    }
  }
};
</script>

<style module lang="scss">
.button_menu {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 0;
  height: 50px;
  width: 50px;
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: transparent;
  color: $light_color;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  z-index: 103;
  box-shadow: 0 0 5px $light_color;
  transition: transform 300ms ease-out, border-color 300ms ease-out;
}

.button_menu svg {
  height: 100%;
  width: 100%;
  fill: $dark_color;
  transition: fill 300ms ease-out;
}

.button_menu:focus {
  outline: none;
  border-color: $dark_color;
}

.active {
  transform: rotate(45deg);
}

.active svg {
  fill: $light_color;
}

.active:focus {
  border-color: $light_color;
}
</style>
