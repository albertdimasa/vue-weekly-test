<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mt-10 pb-5 light-blue darken-4">
        <v-card-title class="headline font-weight-bold text-center blue">
          Selamat Datang!
        </v-card-title>
        <v-card-text>
          <p class="font-weight-medium pt-3">Website apakah ini?</p>
          <p class="text-justify">
            Sebuah pusat rangkuman materi Vue Js kelas A oleh Dimas Albert
            Abraham. Apabila ada pertanyaan silahkan menghubungi contact dibawah
            ini:
          </p>
          <hr />
          <p class="font-weight-medium pt-3">Contact:</p>
          <ul>
            <li>Email : albertabraham28@gmail.com</li>
            <li>Nomor Hp : 085745974148</li>
          </ul>
          <!-- <br /> -->
          <!-- <v-btn color="error" :href="data.project_url"> Link Project </v-btn> -->
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PageIndex',
}
</script>
