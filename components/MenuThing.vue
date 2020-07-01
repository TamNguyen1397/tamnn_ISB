<template>
  <div class="text-center">
    <v-btn color="blue" dark @click="sheet = !sheet">Open v-model</v-btn>
    <v-bottom-sheet v-model="sheet" hide-overlay>
      <v-sheet style="position: static;" class="text-center" height="200px">
        <slider-component />
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>
<script>
import SliderComponent from "@/components/widget/HorizonList";
export default {
  components: { SliderComponent },
  data: () => ({
    sheet: false,
    tiles: [
      { img: "keep.png", title: "Keep" },
      { img: "inbox.png", title: "Inbox" },
      { img: "hangouts.png", title: "Hangouts" },
      { img: "messenger.png", title: "Messenger" },
      { img: "google.png", title: "Google+" }
    ]
  })
};
</script>
<style lang="scss">
</style>
