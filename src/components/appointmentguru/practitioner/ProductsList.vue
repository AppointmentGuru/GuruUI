<template>
<div>
  <ons-list v-if='view==="mobile"' v-for='service in services'>
    <ons-list-header>{{service.address.name}}</ons-list-header>
    <ons-list-item
      v-for='product in service.products'
      @click='itemSelected(product)'
      tappable>
      <label class="left">
        <ons-input name="color" type="radio" :input-id="product.id" ></ons-input>
      </label>
      <label for="radio-1" class="center">
        {{product.title}}
      </label>
    </ons-list-item>
  </ons-list>
</div>
</template>
<script type="text/javascript">
export default {
  name: 'ProductsList',
  props: {
    view: { type: String, default: 'mobile' },
    services: { type: Array, required: true }
  },
  components: {
  },
  methods: {
    itemSelected (item) {
      this.$emit('itemSelected', item)
    }
  }
}
</script>