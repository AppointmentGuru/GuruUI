<template>
<ons-splitter>
  <ons-splitter-side
    id="menu"
    :open="open"
    @preopen="open = true"
    @postclose="open = false"
    side="left"
    width="85%"
    collapse swipeable>
      <mobile-menu-page
        v-on:click='pageSelected'></mobile-menu-page>
  </ons-splitter-side>
  <ons-splitter-content id="content" >
    <toolbar view='mobile' ></toolbar>
    <transition
      appear
      appear-class="fade-enter"
      appear-active-class="fade-enter-active" >
      <router-view ></router-view>
    </transition>
  </ons-splitter-content>
</ons-splitter>
</template>
<script>
  import {OnsSplitterSide} from 'vue-onsenui'
  import MobileMenuPage from './../pages/MobileMenuPage'
  import Toolbar from './../components/ui/Toolbar'

  export default {
    name: 'App',
    components: {
      OnsSplitterSide,
      MobileMenuPage,
      Toolbar
    },
    data () {
      return {
        transitionName: 'slide-left',
        open: false
      }
    },
    methods: {
      pageSelected () {
        this.open = false
      }
    },
    mounted () {
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }

</script>

<style>
.avatar {
  background-color: rgba(154,154,154,.18);
  border-radius: 50%;
  color: inherit;
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 40px;
}
.avatar-inline {
    display: inline-block;
}
.person-name {
  margin-left:5px;
  line-height: 40px;
}
.logo-img {
  max-width:260px;
  margin-left:auto;
  margin-right:auto;
}
/* animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-in-enter, .slide-out-leave-active {
  opacity: 0;
  -webkit-transform: translate(0, 30px);
  transform: translate(0, 30px);
}
.slide-out-leave-active, .slide-in-enter {
  opacity: 0;
  -webkit-transform: translate(0, -30px);
  transform: translate(0, -30px);
}

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
