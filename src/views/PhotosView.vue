<template>
<div>
  <Photos/>
</div>
</template>

<script>
// @ is an alias to /src
import Photos from "@/components/Photos.vue";

export default {
  name: "PhotosView",
  components: {
    Photos
  }
};
</script>