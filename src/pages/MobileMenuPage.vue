<template>
<ons-page>
  <ons-toolbar class='top-toolbar' >
    <div class="left" >
    </div>
    <div class="center" ></div>
    <div class="right">
      <ons-toolbar-button @click='logout' >
        <ons-icon icon="ion-android-exit" style='color:#fff;'></ons-icon>
      </ons-toolbar-button>
    </div>
  </ons-toolbar>

  <!--<profile :user='currentUser' ></profile>-->
  <ons-list v-on:click='hideMenu'>
    <ons-list-item
      v-for='link in links'
      @click='goto(link.name)' tappable >
      {{link.name}}
    </ons-list-item>
  </ons-list>

</ons-page>
</template>

<script>
import routes from './../routes'
import navigation from '../mixins/navigation'

export default {
  routes,
  mixins: [navigation],
  props: {
    open: { type: Boolean, default: false }
  },
  components: {},
  data () {
    return {
      links: routes
    }
  },
  methods: {
    hideMenu () {
      document.getElementById('menu').close()
    },
    goto (pageName) {
      let route = { name: pageName }
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.top-toolbar {
  background-color: #33393c;
  background-position: inherit;
}
.info-col {
  height: 60px;
  line-height: 1;
  padding: 12px 0 12px 4px;
}

.info-num {
  font-size: 16px;
  font-weight: 500;
  opacity: 0.8;
}

.info-unit {
  margin-top: 6px;
  font-size: 14px;
  opacity: 0.4;
}
</style>