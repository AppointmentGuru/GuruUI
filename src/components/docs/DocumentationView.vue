<style scoped>
#debug-btn {
  position:fixed;
  right: 10px; top: 70px;
}
pre {
    font-family: "Courier 10 Pitch", Courier, monospace;
    font-size: 95%;
    line-height: 140%;
    white-space: pre;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
}

code {
    font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
    font-size: 95%;
    line-height: 140%;
    white-space: pre;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
    background: #faf8f0;
}

#content code {
    display: block;
    padding: 0.5em 1em;
    border: 1px solid #bebab0;
}
</style>
<template>
<div id="text-input-docs" >
  <h5 class="section-header">{{title}}</h5>
  <div>
    <strong>Example</strong>
    <div class='example'>
      <slot name='example'>No example provided</slot>
    </div>
  </div>
  <slot name='extra-notes'></slot>

  <card-table v-for="table in tables"
      :title='table.title'
      :thead='table.thead'
      :tbody='table.tbody' ></card-table>

</div>
</template>

<script>
import CardTable from './CardTable'

export default {
  components: {
    CardTable
  },
  props: {
    title: { type: String, required: true },
    tables: { type: Array, default: () => { return [] } },
    examples: { type: Array, default: () => { return [] } }
  }
}
</script>