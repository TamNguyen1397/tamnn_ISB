<template>
  <v-layout row class="align-center layout pl-10 pt-1 app--page-header">
    <div class="page-header-left">
      <h3 class="pr-2">{{ title }}</h3>
    </div>
    <v-icon>mdi-home-outline</v-icon>
    <v-breadcrumbs divider="-" :items="breadcrumbs" class="pl-1 d-inline">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :href="item.href"
        >
          {{ item.text }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <!-- <v-breadcrumbs divider="-" :items="breadcrumbs"></v-breadcrumbs> -->
    <v-spacer></v-spacer>
    <div class="page-header-right pr-6">
      <v-btn icon>
        <v-icon class="text--secondary">mdi-cog-outline</v-icon>
      </v-btn>
    </div>
  </v-layout>
</template>

<script>
import menu from "@/api/menu";
export default {
  data() {
    return {
      title: ""
    };
  },
  computed: {
    breadcrumbs() {
      const breadcrumbs = [];
      menu.forEach(item => {
        if (item.items) {
          const child = item.items.find(i => {
            return i.href === this.$route.path;
          });
          if (child) {
            breadcrumbs.push({ text: item.title });
            breadcrumbs.push({ text: child.title, disabled: true });
            this.title = child.title;
          }
        } else if (item.href === this.$route.path) {
          this.title = item.title;
          breadcrumbs.push({ text: item.title });
        }
      });
      return breadcrumbs;
    }
  }
};
</script>
<style lang="scss">

</style>
