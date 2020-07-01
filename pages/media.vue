<template>
  <div id="pageMedia">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-row no-gutters>
          <v-col cols="12" sm="6" md="10">
            <v-card class="pa-2">
              
              <v-tabs
                :style="{background: $vuetify.theme.themes.dark.background}"  
              >
                <v-tab left>
                  <v-icon>mdi-view-module</v-icon>
                </v-tab>
                <v-tab left>
                  <v-icon>mdi-view-list</v-icon>
                </v-tab>
                <v-tab left>
                  <v-icon>mdi-view-quilt</v-icon>
                </v-tab>
                <v-tab>
                </v-tab>
      
                <v-tab>
                </v-tab>
                <v-tab>
                </v-tab>
                <v-tab>DAY</v-tab>
                <v-tab>WEEK</v-tab>
                <v-tab>MONTH</v-tab>
                <v-tab>YEAR</v-tab>

                <v-tab-item
                  v-for="n in 3"
                  :key="n"
                >
                  <v-container fluid>
                    January
                    <v-row>
                      <v-col
                        v-for="i in 6"
                        :key="i"
                        cols="2"
                        md="3"
                      >
                        <v-img
                          :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                          :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                          aspect-ratio="16/9"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-container fluid>
                    February
                    <v-row>
                      <v-col
                        v-for="i in 6"
                        :key="i"
                        cols="2"
                        md="3"
                      >
                        <v-img
                          :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                          :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                          aspect-ratio="16/9"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-container fluid>
                    March
                    <v-row>
                      <v-col
                        v-for="i in 6"
                        :key="i"
                        cols="2"
                        md="3"
                      >
                        <v-img
                          :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                          :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                          aspect-ratio="16/9"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  layout: "dashboard",
  data () {
    return{
    tabs: null,
    }
  }
};
</script>
