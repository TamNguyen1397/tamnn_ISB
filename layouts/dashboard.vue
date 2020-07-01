<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <!-- <v-app-bar :clipped-left="clipped" elevation="0" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>-->
    <app-toolbar class="app-toolbar" />
    <app-drawer class="app-drawer" />
    <v-main>
      <page-header class="page-header" />
      <div class="page-wrapper">
        <nuxt />
      </div>
    </v-main>
    <!-- <menu-thing /> -->
    <!-- <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>-->
  </v-app>
</template>

<script>
import AppToolbar from "@/components/AppToolbar";
import AppDrawer from "@/components/AppDrawer";
import PageHeader from "@/components/PageHeader";
// import MenuThing from "@/components/MenuThing";
export default {
  components: {
    AppToolbar,
    AppDrawer,
    PageHeader
    // MenuThing
  }
};
</script>
<style lang="scss">
.page-wrapper{
    min-height: calc(100vh - 64px - 50px - 81px);
    margin-bottom: 50px;
  }
</style>
