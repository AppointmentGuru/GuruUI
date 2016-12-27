<template>
<div class="page-brand">
  <toolbar></toolbar>
  <main class="content" id='desktop' >
    <div id="app">
      <router-view default='default' ></router-view>
      <nav-drawer title='AppointmentGuru'></nav-drawer>
    </div>
  </main>
</div>
</template>

<script>
import Toolbar from './../components/ui/Toolbar'
import NavDrawer from './../components/ui/NavDrawer'

export default {
  name: 'app',
  components: { Toolbar, NavDrawer }
}
</script>

<style>
.container {
  max-width:1200px;
  margin-top:50px;
}
body{background-color: #f5f5f5;} /* reverse for dark grey (#5f5f5f) */
#desktop.content { margin-top: 60px; }
.clickable {
  cursor: pointer;
}

.padd-s { padding: 5px; }
.padd-m { padding: 10px; }
.padd-m-h { padding: 10px 0px; }
.padding-zero { padding:0px; }
.margin-zero { margin:0px; }

#desktop h5.section-header {
    font-size: 1.2rem;
    padding-bottom: 0.2rem;
    border-bottom: 3px solid black;
}
#desktop h5.section-header .fbtn{
  margin-top: 6px;
}

</style>