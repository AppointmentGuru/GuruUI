<template>
<nav
  class="menu menu-left nav-drawer nav-drawer-xs menu-orange" id="ui_menu">
    <div class="menu-scroll">
        <div class="menu-content">
            <!--
            <a class="menu-logo text-center" href="index.html">
              <img src='./../../assets/img/logo.png' />
            </a>
            -->
            <ul v-for="nav in navs" class="nav">
                <li>
                    <a
                      class="waves-attach waves-effect"
                      data-toggle="collapse"
                      :href="'#' + nav.id">{{nav.header}}</a>
                    <ul
                      v-bind:class="{in: nav.in}"
                      class="menu-collapse collapse" :id="nav.id">
                        <li v-for="link in nav.links">
                          <router-link :to="link.path"
                            data-toggle="menu" href="#ui_menu"
                            class="waves-attach waves-effect" >
                              {{link.name}}
                          </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import routes from './../../routes'

export default {
  routes,
  name: 'NavDrawer',
  props: {
    title: {
      type: String,
      default: 'Menu'
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    // console.log(routes)
    return {
      navs: [
        {
          id: 'components',
          header: 'Components',
          in: true,
          links: routes
        }
      ]
    }
  }
}
</script>
