<template>
  <div id="pageDevices">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <div class="text-center">
          <v-dialog  v-model="dialog" persistent max-width="800px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  fixed right
                  small
                  fab
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
              ><span class="mdi mdi-24px mdi-plus"></span>   
              </v-btn>
            </template>
            <v-radio-group v-model="radios" :mandatory="false">
            <v-row>
              <v-card class="mx-auto" max-width="200">
                <v-radio></v-radio>
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://image.flaticon.com/icons/svg/2983/2983692.svg"
                >
                </v-img>
                <v-card-text class="text--primary">
                  <div>Discover my device</div>
                </v-card-text>
              </v-card>
              <v-card class="mx-auto" max-width="200">
                  <v-radio></v-radio>
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://image.flaticon.com/icons/svg/1233/1233301.svg"
                  >
                  </v-img>
                  <v-card-text class="text--primary">
                    <div>Enter MAC address</div>
                  </v-card-text>
                </v-card>
            </v-row>
            </v-radio-group>
            <v-card-actions>
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                CANCEL
              </v-btn>
              <v-btn
                color="primary"     
                text
                @click="add1 = true"
              >
                CONTINUE
              </v-btn>
              <v-dialog v-model="add1" persistent max-width="800">
                <v-row>
                  <v-card class="mx-auto" max-width="200">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      src="https://image.flaticon.com/icons/svg/2777/2777142.svg"
                    >
                    </v-img>
                    <v-card-text class="text--primary">
                      <div>Device Preview</div>
                    </v-card-text>
                  </v-card>
                  <v-card class="mx-auto" max-width="600">
                      <v-btn depressed>MAC Address</v-btn>
                      <v-text-field
                        outlined
                        dense
                      ></v-text-field>
                      <v-btn depressed>Device Location</v-btn>
                      <v-combobox
                        v-model="select"
                        :items="item_select"
                        label="Select"
                        multiple
                        outlined
                        dense
                        solo
                      ></v-combobox>
                      <v-btn depressed>Device Name</v-btn>
                      <v-text-field
                        outlined
                        dense
                      ></v-text-field>
                      <v-checkbox v-model="checkbox1" class="mx-2" label="Display in overview page"></v-checkbox>
                    </v-card>
                </v-row>
                <v-card-actions>
                  <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
                  >
                    CANCEL
                  </v-btn>
                  <v-btn
                    color="primary"     
                    text
                    @click="dialog = false"
                  >
                    ADD DEVICE
                  </v-btn>
                </v-card-actions>
              </v-dialog> 
            </v-card-actions>
          </v-dialog>
        </div>
        <v-col cols="12">
          <v-simple-table :style="{background: $vuetify.theme.themes.dark.background}" fixed-header height="500px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Device</th>
                  <th class="text-left">Name</th>
                  <th class="text-left">Location</th>
                  <th class="text-left">Status</th>
                  <th class="text-left">Battery</th>
                  <th class="text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>
                    <v-avatar>
                      <img
                         :src= "item.image1"
                      >
                    </v-avatar>
                  </td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.location }}</td>
                  <td>
                    <v-switch value :input-value='true'></v-switch>
                  </td>
                  <td>
                    <v-btn small fab :style="{background: $vuetify.theme.themes.dark.background}">
                    <v-icon small :color= "item.color1">{{ item.battery }}</v-icon></v-btn>
                  </td>
                  <td>{{ item.date }}</td>
                  <td>
                     <v-icon small color="white">mdi-dots-vertical</v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import axios from "axios";

export default {
  layout: "dashboard",
  data () {
    return {
      select: [],
        item_select: [
          'BedRoom',
          'Hall',
          'Kitchen',
          'Living Room',
        ],
   
      items_table: [],
      index: 0,
     
      desserts: [
        {
          name: 'Door Switch',
          image1: 'https://image.flaticon.com/icons/svg/1335/1335686.svg',
          location: "Hall",
          battery: 'mdi-24px mdi-battery',
          status: " ",
          color1: "primary",
          date: "06/02/2018"
          
        },
        {
          name: 'Motion Detector',
          location: 'Living Room',
          image1: "https://image.flaticon.com/icons/svg/1485/1485569.svg",
          status: 'true',
          battery: 'mdi-24px mdi-battery-charging',
          color1: "green",
          date: '07/02/2018'
        },
        {
          name: 'Plug',
          location: 'BedRoom',
          image1: 'https://image.flaticon.com/icons/svg/2991/2991079.svg',
          status: 'false',
          battery: 'mdi-24px mdi-battery-alert',
          color1: "orange",
          date: '07/02/2018'
        },
       {
          name: 'Smoke Detector',
          location: 'Hall',
          image1: 'https://image.flaticon.com/icons/svg/2784/2784783.svg',
          status: 'false',
          battery: 'mdi-24px mdi-battery-60',
          color1: "primary",
          date: '09/02/2018'
        },
        {
          name: 'Thermostat',
          location: 'Hall',
          status: 'true',
          image1: 'https://image.flaticon.com/icons/svg/1941/1941816.svg',
          battery: 'mdi-24px mdi-battery-charging',
          color1: "green",
          date: '08/02/2018'
        },
        {
          name: 'Camera',
          location: 'Kitchen',
          image1: 'https://image.flaticon.com/icons/svg/2933/2933760.svg',
          status: 'true',
          battery: 'mdi-24px mdi-battery-alert',
          color1: "orange",
          date: '10/02/2018'
        }
      ],
      dialog: false,
      add1: false,
      model: null,
      radios: '',
      inner: false,
      checkbox1: false,
      
    }
  },
  
  methods: {
    //call api get all record
    displayDevices: function() {
      let serverDomain = this.$store.getters.getServerDomain;
      let api = "/api/core/v1/data/all_in_bucket/devices";
      let url = serverDomain + api;
      console.log(this.$store.getters.getAuthConfig);
      let config = {
        headers: this.$store.getters.getAuthConfig
      };
      axios
        .get(url, config)
        .then(response => {
          let self = this;
          self.setData(response);
          console.log(self.dateTB)
        })
        .catch(e => {
          let self = this;
          setTimeout(function() {
            self.items = [];
          }, 1000);
        });
    },
    setData(response) {
      sessionStorage.setItem("data", JSON.stringify(response.data.data));
      let items = [];
      items = JSON.parse(sessionStorage.data);
      items.forEach((item, index) => {
        item.data_item.content = JSON.stringify(item.data_item.content);
        let self = this;
        self.dateTB = item.data_item.creatingDate;
      });
    },
  },
  
  mounted() {
    //start load page
  this.displayDevices()
  },
}

</script>
