<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      clipped
      class="indigo lighten-1"
    >
      <v-list-item-group v-model="selectedItem" color="indigo darken-4 ">
        <v-subheader>Home</v-subheader>
        <v-list-item v-for="item in list" :key="item.index">
          <v-list-item-content @click="changeTitle(item)">
            <v-list-item-title
              class="white--text font-weight-medium"
              v-text="item.title"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app class="indigo darken-2">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        class="transparent mr-5"
        icon
        x-large
        elevation="4"
        :to="{ name: `index` }"
      >
        <img src="~/static/icon.png" width="50px" />
      </v-btn>
    </v-app-bar>
    <v-main id="content">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'MasterComp',
  data() {
    return {
      drawer: true,
      selectedItem: '',
      title: 'Rangkuman Kelas Vue Js',
    }
  },
  computed: {
    list() {
      return this.$store.state.list
    },
  },
  methods: {
    changeTitle(params) {
      this.title = params.title

      this.$router.push({
        name: 'id',
        params: { id: params.id },
      })
    },
  },
}
</script>

<style scoped>
#content {
  background: url('https://cdn.pixabay.com/photo/2016/03/26/13/09/organic-1280537_1280.jpg')
    no-repeat;
  background-size: cover;
}
</style>
