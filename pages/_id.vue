<template>
  <DetailSummary />
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getData', this.$route.params.id)
  },
}
</script>

<style></style>
