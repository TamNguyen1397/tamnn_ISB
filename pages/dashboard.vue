<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-col cols="7">
          <camera />
        </v-col>
        <v-col cols="5">
          <v-row>
            <v-card height="200">
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
            </v-card>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-card height="200">
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
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card height="200">
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
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Camera from '@/components/Camera';
export default {
  layout: "dashboard",
  components: { Camera }
};
</script>
