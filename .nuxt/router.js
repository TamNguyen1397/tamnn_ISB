import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5a5a1278 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages_dashboard" */))
const _41d6f20a = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages_inspire" */))
const _7d671519 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _6375e014 = () => interopDefault(import('..\\pages\\media.vue' /* webpackChunkName: "pages_media" */))
const _8fe57abc = () => interopDefault(import('..\\pages\\devices\\AddDeviceDialog.vue' /* webpackChunkName: "pages_devices_AddDeviceDialog" */))
const _40f8bc8a = () => interopDefault(import('..\\pages\\devices\\AddDeviceMethod.vue' /* webpackChunkName: "pages_devices_AddDeviceMethod" */))
const _eb905dc0 = () => interopDefault(import('..\\pages\\devices\\devices.vue' /* webpackChunkName: "pages_devices_devices" */))
const _98811bfc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _5a5a1278,
    name: "dashboard"
  }, {
    path: "/inspire",
    component: _41d6f20a,
    name: "inspire"
  }, {
    path: "/login",
    component: _7d671519,
    name: "login"
  }, {
    path: "/media",
    component: _6375e014,
    name: "media"
  }, {
    path: "/devices/AddDeviceDialog",
    component: _8fe57abc,
    name: "devices-AddDeviceDialog"
  }, {
    path: "/devices/AddDeviceMethod",
    component: _40f8bc8a,
    name: "devices-AddDeviceMethod"
  }, {
    path: "/devices/devices",
    component: _eb905dc0,
    name: "devices-devices"
  }, {
    path: "/",
    component: _98811bfc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
