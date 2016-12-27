<template>
<div class="card">
    <div class="card-main">
        <div class="card-inner margin-bottom-no">
            <p class="card-heading">{{title}}</p>
            <div class="card-table">
                <div class="table-responsive">
                    <table class="table" title="A table within a card">
                        <thead v-if="thead">
                            <tr>
                                <th v-for='item in thead' v-html="item">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for='rows in tbody'>
                                <td v-for='row in rows' v-html="row"></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    thead: {
      type: Array,
      required: false
    },
    tbody: {
      type: Array,
      default: () => { return [] }
    }
  }
}
</script>