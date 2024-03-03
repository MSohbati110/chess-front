<template>
  <div>
    <h1 style="color: #333333;">Landing Page</h1>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  mounted() {
    this.$emit('update-navbar')
  }
}
</script>
