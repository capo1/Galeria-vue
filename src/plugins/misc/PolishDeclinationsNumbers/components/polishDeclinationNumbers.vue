<template>
  <span>
      {{text}}{{value == 0 ? zero :
                value == 1 ? one:
                value >1 && value < 5 ? twoFour:
                value > 4 ? afterFive: null}}
  </span>

</template>

<script>

  export  default {
    name: 'polishdeclinationnumbers',
    props: ['text', 'zero', 'one', 'twoFour', 'afterFive', 'value']
  }
</script>

