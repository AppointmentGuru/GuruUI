<template>
<div >
  <div v-if=' view==="desktop" '
    class="tile-wrap" >
      <slot name='item'>
      <div v-for='item in items' name='item' class="tile">
          <div class="tile-side pull-left">
            <div class="avatar avatar-sm">
              <span class="icon">alarm</span>
            </div>
          </div>
          <div class="tile-inner"> {{ item }} </div>
      </div>
      </slot>
  </div>
  <div v-if=' view==="mobile" ' >
    <ons-list>
    <ons-list-item v-for="item in items" >{{item}}</ons-list-item>
    </ons-list>
  </div>
</div>
</template>
<script>
export default {
  props: {
    view: { type: String, required: true },
    items: { type: Array, required: true }
  }
}
</script>