<template>
  <detailSummary />
</template>

<script>
import detailSummary from '~/components/DetailSummary.vue'
export default {
  components: { detailSummary },

  mounted() {
    this.$store.dispatch('getData', this.$route.params.id)
  },
}
</script>

<style></style>
