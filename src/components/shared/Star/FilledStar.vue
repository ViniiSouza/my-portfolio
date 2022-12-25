<template>
  <b-icon class="star-margin" icon="star-fill" :scale="starScale" />
</template>
<script>
export default {
  props: {
    starScale: {
      default: 4,
    },
  },
};
</script>
<style>
</style>