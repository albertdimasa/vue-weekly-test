<template>
  <DetailSummary />
</template>

<script>
export default {
  mounted() {
    console.log(`Ini adalah `, this.$route.params.id)
    this.$store.dispatch('getData', this.$route.params.id)
  },
}
</script>

<style></style>
