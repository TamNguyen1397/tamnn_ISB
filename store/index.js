export const mutations = {
  toggleDrawer (state) {
    state.drawer = !state.drawer;
  },
  drawer (state, val) {
    state.drawer = val;
  }
};

export const state = () => ({
  drawer: true,
  serverDomain: "https://sme-dev.vdc2.com.vn",
  serverDomainNotification: "https://sme-dev.vdc2.com.vn",

  authConfig: {
    userid: "user3",
    deviceid: "iot_smart_building",
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VJRCI6ImlvdF9zbWFydF9idWlsZGluZyIsImV4cCI6MTYyNTEwMzM2MywidXNlcklEIjoidXNlcjMifQ.4T1x7uPBuXPZWJ77LClhDzqy5U4fPBepdY6pHBOMpdw"
  },
});

export const getters = {

  getServerDomain: function (state) {
    return state.serverDomain
  },
  getAuthConfig: function (state) {
    return state.authConfig
  },

}
