<template>
  <b-icon class="star-margin" icon="star" :scale="starScale" />
</template>
<script>
export default {
  props: {
    starScale: {
      default: 3,
    },
  },
};
</script>
<style>
</style>