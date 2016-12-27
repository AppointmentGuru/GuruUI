<template>
<div>
  <h1>Welcome to theAppointmentGuru UI component docs</h1>
  <list
    view='mobile'
    :items='items'>
  </list>
</div>
</template>
<script type="text/javascript">
import List from './../components/ui/List'
export default {
  components: {
    List
  },
  data () {
    return {
      items: ['foo', 'bar', 'baz']
    }
  }
}
</script>