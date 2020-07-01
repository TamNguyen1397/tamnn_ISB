<!--eslint-disable vue/no-template-shadow-->
<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    :permanent="drawer"
    :clipped="clipped"
    floating
    fixed
    app
    :style="{background: $vuetify.theme.themes.dark.background}"
  >
    <v-toolbar
      height="60"
      :style="{background: $vuetify.theme.themes.dark.background,borderBottom: '1px solid #262729',borderRight: '1px solid #262729'}"
      @click="toggleMini = !toggleMini"
    >
      <img src="../static/v.png" height="36" alt="Vue Material Admin Template" />
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Smart Building</span>
      </v-toolbar-title>
    </v-toolbar>
    <perfect-scrollbar class=".drawer-menu--scroll">
      <v-list dense expand>
        <template v-for="(item, i) in menus">
          <!--group with subitems-->
          <v-list-group
            v-if="item.items"
            :key="item.name"
            :group="item.group"
            :prepend-icon="item.icon"
            no-action="no-action"
          >
            <v-list-item slot="activator" ripple="ripple">
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <template v-for="(subItem, i) in item.items">
              <!--sub group-->
              <v-list-group
                v-if="subItem.items"
                :key="subItem.name"
                :group="subItem.group"
                sub-group="sub-group"
              >
                <v-list-item slot="activator" ripple="ripple">
                  <v-list-item-content>
                    <v-list-item-title>{{ subItem.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  v-for="(grand, i) in subItem.children"
                  :key="i"
                  :to="grand.href? grand.href : null"
                  ripple="ripple"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ grand.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <!--child item-->
              <v-list-item
                v-else
                :key="i"
                :to="subItem.href? subItem.href : null"
                :disabled="subItem.disabled"
                :target="subItem.target"
                ripple="ripple"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    <span>{{ subItem.title }}</span>
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action v-if="subItem.action">
                  <v-icon :class="[subItem.actionClass || 'success--text']">{{ subItem.action }}</v-icon>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list-group>
          <v-subheader v-else-if="item.header" :key="i">{{ item.header }}</v-subheader>
          <v-divider v-else-if="item.divider" :key="i"></v-divider>
          <!--top-level link-->
          <v-list-item
            v-else
            :key="item.name"
            :to="item.href ? item.href : null"
            ripple="ripple"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
          >
            <v-list-item-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action v-if="item.subAction">
              <v-icon class="success--text">{{ item.subAction }}</v-icon>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script>
import menu from "@/api/menu";
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      toggleMini: false,
      menus: menu
    };
  },
  computed: {
    mini: {
      get() {
        return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
      },
      set(value) {
        this.overwriteBreakpoint = value;
      }
    },
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("drawer", val);
      }
    }
  }
};
</script>
<style lang="scss">
#appDrawer {
  overflow: hidden;
  .drawer-menu--scroll {
    height: calc(100vh - 48px);
    overflow: auto;
  }
}
.ps {
  height: 500px;
}
</style>
