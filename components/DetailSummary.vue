<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="my-10 pb-5 light-blue darken-4">
        <v-card-title class="headline font-weight-bold text-center blue">
          {{ data.title }}
        </v-card-title>
        <v-card-text>
          <p class="font-weight-medium pt-3">Rangkuman Materi</p>
          <p class="text-justify">
            {{ data.summary }}
          </p>
          <hr />
          <p class="font-weight-medium pt-3">Step Pengerjaan</p>
          <ol>
            <li v-for="step in data.step" :key="step.id" class="text-justify">
              {{ step }}
            </li>
          </ol>
          <br />
          <v-btn color="error" :href="data.project_url"> Link Project </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'DetailData',
  computed: {
    data() {
      return this.$store.state.data
    },
  },
}
</script>

<style scoped></style>
