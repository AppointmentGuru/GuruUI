<style scoped>
/* .router-link-active {
  text-decoration: underline;
} */
.header-logo .router-link-active {
  text-decoration: none;
}
.label {
  text-decoration: none !important;
}
.logo-color {
  color:#ff5a32;
  font-weight:bold;
}
</style>
<template>
<div>
  <header
    v-if=' view==="desktop" '
    class="header header-brand header-waterfall affix header-orange">
      <ul class="nav nav-list pull-left visible-xx visible-xs hidden-md hidden-lg">
          <li>
              <a data-toggle="menu" href="#ui_menu">
                  <span class="icon icon-lg">menu</span>
              </a>
          </li>
      </ul>
      <!-- header-affix affix -->
      <span class="header-logo " data-offset-top="213" data-spy="affix">
        <!--
        <img src='./../../assets/img/icon.png' class='hidden-xx' /> &nbsp;
        -->
        <router-link :to="{ name: 'default' }" >
          <span class='logo-color'>App</span>ointmentGuru<span class='logo-color'>.</span>
          </router-link>
      </span>

      <!-- User nav component
      <ul class="nav nav-list pull-right">
          <li class="dropdown margin-right">
              <a class="dropdown-toggle padding-left-no padding-right-no" data-toggle="dropdown">
                  <span class="avatar icon">
                    <img :src='userAvatar' />
                  </span>
                  <span class='margin-left hidden-xx' >Hi :)</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-right">
                  <li>
                      <a
                        v-on:click='performLogout'
                        class="padding-right-lg waves-attach waves-effect" >
                        <span class="icon icon-lg margin-right">
                        exit_to_app</span>Logout</a>
                  </li>
              </ul>
          </li>
      </ul>
      -->

      <!-- headline navigation
      <ul class="nav nav-list nav-drawer-md hidden-xx hidden-xs">
          <li>
              <router-link :to="{ name: 'default' }" >
                <span class='icon'>home</span></router-link>
          </li>
      </ul>
      -->

  </header>

  <ons-toolbar v-if=' view==="mobile" '>
    <div class="left" >
      <ons-toolbar-button
        v-if='withBackButton'
        @click="back" >
        <ons-icon icon="md-arrow-left"></ons-icon>
      </ons-toolbar-button>

      <ons-toolbar-button
        v-if='withMenuButton'
        @click="showMenu" >
        <ons-icon icon="md-menu"></ons-icon>
      </ons-toolbar-button>

    </div>
    <div class="center" >{{title}}</div>
    <div class="right">
      <slot name='right'></slot>
    </div>
  </ons-toolbar>
</div>
</template>

<script>
import navigation from '../../mixins/navigation'

export default {
  mixins: [navigation],
  props: {
    view: { type: String, required: true },
    title: { type: String, default: 'AppointmentGuru' },
    withMenuButton: { type: Boolean, default: true },
    withBackButton: { type: Boolean, default: false }
  },
  methods: {
    showMenu () {
      document.getElementById('menu').open()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
