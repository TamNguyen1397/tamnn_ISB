<template>
  <v-app-bar  dense id="toolbar" height="60" :clipped-left="clipped" elevation="0" fixed app :style="{background: $vuetify.theme.themes.dark.background,}">
    <v-app-bar-nav-icon @click.stop="toggleDrawer()" />
    <div id="btntoolbar">
      <v-btn slot="activator" icon text>
        <v-badge color="red" overlap>
          <span slot="badge">6</span>
          <v-icon medium>mdi-email</v-icon>
        </v-badge>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn slot="activator" v-bind="attrs" icon text v-on="on">
            <v-badge color="red" overlap>
              <span slot="badge">3</span>
              <v-icon medium>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <notification-list></notification-list>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon large v-bind="attrs" text v-on="on">
            <v-avatar size="30px">
              <img src="../static/avatar/man_2.jpg" alt="Michael Wang" />
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" @click="item.click">
            <v-list-item-action v-if="item.icon" class="mr-3">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
import NotificationList from "@/components/widget/NotificationList";

export default {
  name: "AppToolbar",
  components: {
    NotificationList
  },
  data() {
    return {
      clipped: false,
      fixed: false,
      items: [
        {
          icon: "mdi-account",
          href: "#",
          title: "Profile",
          click: e => {
            //
          }
        },
        {
          icon: "mdi-cog-outline",
          href: "#",
          title: "Settings",
          click: this.handleTest
        },
        {
          icon: "mdi-logout",
          href: "#",
          title: "Logout",
          click: this.handleLogout
        }
      ]
    };
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
    handleLogout() {
      this.$router.push("/login");
    },
    handleTest() {
      this.$router.push("/inspire");
    }
  }
};
</script>
<style lang="scss">
#toolbar{
  border-bottom: 1px solid #262729;
}
#btntoolbar {
  margin-left: auto;
}
</style>
