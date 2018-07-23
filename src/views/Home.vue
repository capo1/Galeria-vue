<template>
  <div class="container">
    <div class="jumbotron">
      <h1>{{ $t('app_name') }}</h1>    
    </div>  
    <Albums/>
  </div>
</template>

<script>
// @ is an alias to /src
import Albums from "@/components/Albums.vue";

export default {
  name: "home",
  components: {
    Albums
  }
};
</script>
