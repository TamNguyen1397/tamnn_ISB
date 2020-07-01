<template>
  <v-card class="mx-auto">
    <v-tabs background-color="#2f3b52" color="white" right>
      <v-tab>C1</v-tab>
      <v-tab>C2</v-tab>
      <v-tab>C3</v-tab>
      <v-tab>C4</v-tab>
      <v-tab>C5</v-tab>
      <v-tab-item v-for="n in 5" :key="n">
        <v-container :style="{background: '#2f3b52'}">
          <v-img
            height="353px"
            src="https://q-cf.bstatic.com/images/hotel/max1024x768/184/184392938.jpg"
          ></v-img>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
  <!-- <v-card height="400">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Button</v-btn>
      <v-btn text>Button</v-btn>
    </v-card-actions>
  </v-card>-->
</template>
<script>
export default {
  // eslint-disable-next-line vue/no-unused-components
  data() {
    return {};
  }
};
</script>
<style lang="scss">
#camera {
  background-color: "#2f35b2";
}
</style>
