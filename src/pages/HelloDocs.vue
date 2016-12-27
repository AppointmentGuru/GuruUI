<template>
  <documentation-view
    :title='title'
    :tables='tables' >
    <div slot='example'>
      <hello></hello>
    </div>
  </documentation-view>
</template>
<script>
import Hello from '../components/Hello'
import DocumentationView from './../components/docs/DocumentationView'

export default {
  components: {
    Hello,
    DocumentationView
  },
  data () {
    return {
      title: 'Hello World Example',
      tables: [
        // properties
        {
          title: 'Properties',
          thead: ['Variable', 'Default', 'Required', 'Description'],
          tbody: [
            ['<code>id</code>', 'None', 'yes', 'The ID for the modal. You will reference this with <code>data-toggle</code> on the element used to load the dialog'],
            ['<code>title</code>', '<code>null</code>', 'no', 'The header for the dialog. If you leave it out, no header will be rendered']
          ]
        },
        // events
        {
          title: 'Events',
          thead: ['Name', 'Description'],
          tbody: [
            [
              '..',
              '..'
            ]
          ]
        }
      ]

    }
  }
}
</script>
