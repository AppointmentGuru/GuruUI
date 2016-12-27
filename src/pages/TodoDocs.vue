<template>
  <documentation-view :title='title' :tables='tables' >
    <div slot='example'>
      .. Example goes here ..
    </div>
  </documentation-view>
</template>
<script>
import DocumentationView from './../components/docs/DocumentationView'

export default {
  components: {
    DocumentationView
  },
  data () {
    return {
      title: 'Documentation coming soon',
      tables: [
        // properties
        {
          title: 'Properties',
          thead: ['Variable', 'Default', 'Required', 'Description'],
          tbody: [
            ['<code>..</code>', 'None', 'yes', '..']
          ]
        },
        // events
        {
          title: 'Events',
          thead: ['Name', 'Description'],
          tbody: [
            ['..', '..']
          ]
        }
      ]

    }
  }
}
</script>
