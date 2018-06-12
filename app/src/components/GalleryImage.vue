<template>
  <div>
    {{ id }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>

<style scoped>
nav * {
  margin: 0 33px;
}
</style>
